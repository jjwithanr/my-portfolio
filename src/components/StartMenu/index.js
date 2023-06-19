import React from "react";
import { useRecoilState } from "recoil";
import { Button, MenuList, MenuListItem, Separator } from 'react95';
import "./styles.scss";

import { windowObj } from "../../store/atoms";

export default function StartMenu() {
    const [isOpen, setOpen] = React.useState(false);
    const [currentWindows, setWindows] = useRecoilState(windowObj);
    const refMenu = React.useRef(undefined);

    const toggleMenu = (toggle) => {
        setOpen(toggle);
        if (toggle) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    };
    
    const handleButtonClick = () => {
        toggleMenu(!isOpen);
    };
    
    const handleListClick = (name) => () => {
        if (window.innerWidth < 859) {
            if (name == "resume") {
                window.open("./Chang_Jeremy_Resume.pdf");
            }
        }
        else {
            const updated = {
                [name]: {
                ...currentWindows[name],
                visibility: [true, true],
                },
            };
            window.setTimeout(() => {
                setWindows({ ...currentWindows, ...updated });
            }, 300);
            toggleMenu(false);
        }
    };

    const handleClickOutside = ({ target }) => {
        if (refMenu.current.contains(target)) return;
        toggleMenu(false);
    };

    return (
        <div className="startMenu" ref={refMenu}>
            <div className={`startMenu__slide${isOpen ? " -isOpen" : ""}`}>
                <MenuList
                    horizontalAlign="left"
                    verticalAlign="top"
                    className="startMenu__menu"
                >
                    
                    <a href="http://www.linkedin.com/in/jeremy-r-chang" target="_blank" rel="noreferrer">
                        <MenuListItem data-name="linkedin">
                            <p className="startMenu__menuItem">
                                <img
                                    src={`${require("../../assets/linkedin-logo.png")}`}
                                    alt=""
                                    width="30"
                                    className="pixelated"
                                />
                                LinkedIn
                            </p>
                        </MenuListItem>
                    </a>
                    <a href="https://github.com/jjwithanr" target="_blank" rel="noreferrer">
                        <MenuListItem data-name="github">
                            <p className="startMenu__menuItem">
                                <img
                                src={`${require("../../assets/github-logo.png")}`}
                                alt=""
                                width="30"
                                className="pixelated"
                                />
                                GitHub
                            </p>
                        </MenuListItem>
                    </a>
                    <Separator />
                    <MenuListItem onClick={handleListClick("resume")} data-name="resume">
                        <p className="startMenu__menuItem">
                            <img
                            src={`${require("../../assets/resume.png")}`}
                            alt=""
                            width="30"
                            className="pixelated"
                            />
                            Resume
                        </p>
                    </MenuListItem>
                </MenuList>
            </div>
        <Button
            data-name="start-menu"
            onClick={handleButtonClick}
            active={isOpen}
            className="mr1 startMenu__triggerButton"
            size="sm"
        >
        <img
            src={require("../../assets/win-logo.png")}
            alt=""
            className="pixelated startMenu__logo"
        />
        Start
        </Button>
    </div>
    );
}