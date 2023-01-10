import { AppBar, Toolbar } from 'react95';
import "./styles.scss";
import StartMenu from '../StartMenu';

export default function Taskbar() {
    return (
        <AppBar className="taskbar">
        <Toolbar style={{ justifyContent: 'space-between' }}>
            <StartMenu />
        </Toolbar>
        </AppBar>
    );
}