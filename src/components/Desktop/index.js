import React from "react";
import { useRecoilState } from "recoil";
import { windowObj } from "../../store";
import { WINDOW_OBJ } from "../../constants";
import DesktopIcon from "./DesktopIcon";

import Taskbar from "../Taskbar";

import "./styles.scss";

const desktopIcons = (() => {
    const icons = Object.keys(WINDOW_OBJ);
    return icons;
})();

export default function Desktop() {
    const [currentWindows, setWindows] = useRecoilState(windowObj);
    const [active, setActive] = React.useState("");
    
    const handleDesktopClick = ({ target }) => {
        const { name } = target.dataset;
        setActive(name || "");
    };

    const handleButtonDblClick = (name) => (e) => {
        e.stopPropagation();
        const updated = {
            [name]: {
                ...currentWindows[name],
                visibility: [true, true],
            },
        };
    
        window.setTimeout(() => {
            setWindows({ ...currentWindows, ...updated });
        }, 300);
    };

    return (
        <>
            <Taskbar />
            <main>
            <section className="desktop">
                <section
                className="flex flex-column desktop__background"
                onClick={handleDesktopClick}
                >
                    {desktopIcons.map((name) => {
                        const { label, desktopIcon } = WINDOW_OBJ[name];
                        return (
                            <React.Fragment key={name}>
                            {desktopIcon.length && (
                                <DesktopIcon
                                name={name}
                                label={label}
                                icon={desktopIcon}
                                active={active}
                                onDoubleClick={handleButtonDblClick(name)}
                                />
                            )}
                            </React.Fragment>
                        );
                    })}
                </section>

            {/* <Windows /> */}
            </section>
            </main>
        </>
    );
}