import { AppBar, Toolbar } from 'react95';
import "./styles.scss";
import StartMenu from '../StartMenu';
import TaskbarClock from './clock';

export default function Taskbar() {
    return (
        <AppBar className="taskbar">
        <Toolbar>
            <StartMenu />
        </Toolbar>

        <TaskbarClock />

        </AppBar>
    );
}