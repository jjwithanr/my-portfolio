import React from "react";
import { useRecoilState } from "recoil";
import { windowObj } from "../../store";
import { WINDOW_OBJ } from "../../constants";
import DesktopIcon from "./DesktopIcon";

import Taskbar from "../Taskbar";
import Windows from "./Windows";
import reducer, {
    SET_LOADING,
    SET_TASKBAR,
    SET_ICONS,
    SET_WINDOWS,
} from "./reducer";

//temp
import {
    Button,
    Window,
    WindowContent,
    WindowHeader
    } from 'react95';
import { About } from "../../windows";
import useDoubleClick from 'use-double-click';
import Draggable from "react-draggable";
// end temp

import "./styles.scss";

const desktopIcons = (() => {
    const icons = Object.keys(WINDOW_OBJ);
    return icons;
})();

export default function Desktop() {
    const [currentWindows, setWindows] = useRecoilState(windowObj);
    const [active, setActive] = React.useState("");

    const [
        { showLoader, showTaskbar, showIcons, showWindows },
        dispatch,
    ] = reducer();
    
    const handleDesktopClick = (e) => {
        const { name } = e.target.dataset;
        setActive(name || "");
    };

    let lastClickTime;
    const handleDoubleClick = (name) => (e) => {
        e.stopPropagation();
        const currentTime = new Date().getTime();
        if (lastClickTime && currentTime - lastClickTime < 250) {
            const updated = {
                [name]: {
                    ...currentWindows[name],
                    visibility: [true, true],
                },
            };
        
            window.setTimeout(() => {
                setWindows({ ...currentWindows, ...updated });
            }, 300);
        }
        lastClickTime = currentTime;
    };


    React.useEffect(() => {
        dispatch({ type: SET_LOADING });
        window.setTimeout(() => {
            dispatch({ type: SET_TASKBAR });
        }, 250);
        window.setTimeout(() => {
            dispatch({ type: SET_ICONS });
        }, 1000);
        window.setTimeout(() => {
            dispatch({ type: SET_WINDOWS });
        }, 1500);
    }, []);
    
    React.useEffect(() => {
        const toggle = showLoader ? "add" : "remove";
        document.body.classList[toggle]("isLoading");
    }, [showLoader]);

    return (
        <>
            {showTaskbar && (
            <>
                <Taskbar />
            </>
            )}
            <main>
            <section className="desktop">
                <section 
                    className="flex flex-column desktop__background"
                    onMouseDown={handleDesktopClick}
                >
                    {showIcons &&
                        desktopIcons.map((name) => {
                        const { label, desktopIcon } = WINDOW_OBJ[name];
                        return (
                            <React.Fragment key={name}>
                            {desktopIcon.length && (
                                <DesktopIcon
                                    name={name}
                                    label={label}
                                    icon={desktopIcon}
                                    active={active}
                                    onDoubleClick={handleDoubleClick(name)}
                                />
                            )}
                            </React.Fragment>
                        );
                    })}
                </section>

            {showWindows && <Windows />}
            </section>
            </main>
        </>
    );
}