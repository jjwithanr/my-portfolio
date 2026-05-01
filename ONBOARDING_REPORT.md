# Technical Onboarding Report — `my-portfolio`

I inspected the repository as-is and focused on the React frontend architecture. Below is a practical “how to get back in” guide.

---

## Project Overview

### What the app appears to do
This is a single-page React portfolio site styled as a Windows 95 desktop. Users interact with desktop icons, open draggable “windows” (About, Projects, Engineering, Resume), and use a Start menu + taskbar metaphor.

### Major folders/files and their purposes
- `src/index.js`: React mount point (`createRoot` + `<App />`).
- `src/App.js`: global theming/reset, Recoil root, global focus click handling, and top-level `<Desktop />`.
- `src/components/Desktop/`: desktop shell (icons, open-window rendering, loading sequence).
- `src/components/Taskbar/`: taskbar, per-window task buttons, live clock.
- `src/components/StartMenu/`: Start button/menu behavior and external links.
- `src/windows/`: window frame wrapper + each window’s content (`About`, `Projects`, `Engineering`, `Resume`).
- `src/content/`: content/data models used by windows (text/images/tabs/projects).
- `src/constants/index.js`: canonical window metadata (`WINDOW_OBJ`) including labels/icons/default visibility.
- `src/store/atoms.js`: Recoil atoms for window state, focused window, and taskbar buttons.

### Main entry points
1. Browser loads `src/index.js` -> `App`.
2. `App` configures theme/reset + state providers and renders `Desktop`.
3. `Desktop` renders taskbar/icons/windows according to staged boot flags and Recoil state.

### How the app is built, run, and configured
- Uses Create React App tooling (`react-scripts`).
- Scripts:
  - `npm start`
  - `npm run build`
  - `npm test`
- Dependencies include `react95`, `recoil`, `react-draggable`, `react-pdf`, `styled-components`, `sass`.

---

## Architecture Summary

### Overall frontend structure
There is **no route-based page system**; it is one desktop view with internal window state. The app simulates an OS shell:
- Desktop icons open windows.
- Windows are always mounted but display-toggled/minimized.
- Taskbar mirrors open windows and can minimize/restore.

### Component hierarchy and flow
Approximate hierarchy:
`index.js -> App -> AppWrapper -> Desktop -> (Taskbar + DesktopIcons + Windows) -> WindowFrame -> specific window content`

Key orchestration:
- `Desktop` controls showing taskbar/icons/windows via local reducer-driven boot sequence.
- `Windows` maps `windowObj` keys to components and wraps each in `WindowFrame`.

### State management approach
State is split between:
- **Global (Recoil)**:
  - `windowObj`: per-window metadata + visibility tuple.
  - `focusedElement`: active/focused window name.
  - `menubarButtons`: derived list of open windows for taskbar buttons.
- **Local component state**:
  - desktop icon “active” highlighting,
  - start menu open/closed,
  - engineering active tab,
  - window drag bounds/offset, etc.

### Data flow between components
- Static definitions in `WINDOW_OBJ` seed `windowObj` atom.
- Desktop/start menu/taskbar button interactions all mutate `windowObj.visibility`.
- Taskbar observes `windowObj` and recalculates button list (`menubarButtons`).
- `App` listens for global clicks and sets focused element via `data-name` attributes.

### Backend/API integration points
No backend/API layer is present in code inspected. Content is local JS + static assets/PDFs. External links are outbound only (LinkedIn/GitHub).

---

## React Concepts Used (in this codebase)

- **`useState`**:
  - Desktop icon active selection (`active`), Start menu open state, engineering active tab, window local draggable state.
- **`useEffect`**:
  - Global document click/touch listeners for focus management in `App`.
  - Boot sequence timers in `Desktop`.
  - Body class toggling (`isLoading`) in `Desktop`.
  - Taskbar button list derivation from window state.
  - Resize listener for taskbar labels.
  - Clock timer lifecycle.
- **`useCallback`**:
  - `App` memoizes click handler for focus logic.
  - `TaskbarClock` memoizes recursive clock function.
- **`useRef`**:
  - Start menu click-outside detection.
  - Taskbar map cache.
  - Window drag node ref and bounds calculations.
  - Clock DOM ref and timer ref.
- **`useReducer`**:
  - Only used for Desktop boot/loader visibility sequencing (local reducer, not app-wide).
- **Not used**:
  - `useContext`, `useMemo`, custom hooks, React Router.
- **Inference**: `react-redux`/`redux` are installed but not used by current code path; likely leftovers from earlier iterations.

---

## Window System / UI Structure

### How windows are implemented
- `Windows.js` loops through all windows and renders each with `WindowFrame`. Visibility is controlled inside frame style (`display: block/none`) based on `frame.visibility[1]`.
- `WindowFrame` provides:
  - React95 `Window`, `WindowHeader`, `WindowContent`
  - Draggable behavior via `react-draggable`
  - Focus-based z-index/shadow
  - Close button calling parent `onClose`

### Window state model
`visibility` is a two-boolean array:
- index `[0]`: whether window is “open” (taskbar presence)
- index `[1]`: whether currently visible (not minimized)

Seen in:
- close: `[false,false]`
- open/restore: `[true,true]`
- minimize: `[true,false]`

### Window interactions
- **Open from desktop icon**: pseudo-double-click logic in `Desktop`.
- **Open from Start menu**: resume path and desktop/mobile split.
- **Close**: frame close button.
- **Minimize/restore**: taskbar button toggles `visibility[1]`.
- **Focus**: global click listener in `App` tracks closest `[data-name]`.

---

## How to Modify an Existing Window (step-by-step)

1. **Find the content component** in `src/windows/<WindowName>/index.js`.
2. **Adjust static data** in `src/content/*` if the component maps from content objects.
3. **Check window metadata** (`label`, `header`, icon) in `src/constants/index.js` if title/icon should change.
4. **Verify window is wired** in `componentList` in `src/components/Desktop/Windows.js` and exports in `src/windows/index.js`.
5. **Adjust SCSS** in local window `styles.scss` plus shared `src/windows/styles.scss` if needed.

Common pitfalls:
- `visibility` tuple semantics are easy to break if changed inconsistently.
- Focus relies on `data-name`; missing it can break active window behavior.
- Mobile behavior is special-cased for resume in multiple places; update both if changing resume handling.

---

## How to Create a New Window (step-by-step)

1. **Create window component**: `src/windows/NewWindow/index.js` (+ `styles.scss`).
2. **Add content data** in `src/content/newWindow.js` and export in `src/content/index.js` (optional but follows pattern).
3. **Register metadata** in `src/constants/index.js` and include in `WINDOW_OBJ` (key, label, header, icon, default visibility).
4. **Export/import component** in `src/windows/index.js`.
5. **Add mapping** in `src/components/Desktop/Windows.js` `componentList`.
6. **Desktop icon behavior** will auto-include because icons derive from `Object.keys(WINDOW_OBJ)`.
7. (Optional) **Add Start menu entry** if desired in `src/components/StartMenu/index.js`.

Conventions to follow:
- window key naming is lowercase (`about`, `projects`, etc.).
- use React95 components for style consistency.
- add `data-name` when interactive focus behavior should track it.

---

## Development Notes

### Important dependencies and usage
- `react95` + `styled-components`: Win95 UI + theme/reset.
- `recoil`: global app state (windows/focus/taskbar).
- `react-draggable`: window dragging/bounds in frame.
- `react-pdf`: resume PDF preview in Resume window.

### Unusual patterns / technical debt (observed)
- Manual double-click detection uses `lastClickTime` local variable that resets every render (fragile).
- Some hooks have disabled exhaustive-deps comments; potential stale-closure behavior risk.
- `dangerouslySetInnerHTML` used for window headers though current data appears static; unnecessary unless HTML is needed.
- Installed but apparently unused Redux dependencies.

### Suggested re-familiarization steps
1. Run app and click through every icon/taskbar interaction.
2. Trace one interaction end-to-end (e.g., open Projects from icon) through:
   `Desktop` -> `windowObj` update -> `Windows` render -> `WindowFrame` display.
3. Document `visibility` state semantics in code comments to reduce confusion.
4. Consider refactoring double-click logic to `onDoubleClick` native handler.
5. Remove unused dependencies after verifying no hidden usage.
