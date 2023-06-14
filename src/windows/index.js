import React from "react";
import PropTypes from "prop-types";
import { Window, WindowContent, WindowHeader, Button } from "react95";
import Draggable from "react-draggable";
import { useRecoilValue } from "recoil";

import About from "./About";
import Engineering from "./Engineering";
import Projects from "./Projects";
import Resume from "./Resume";

import { focusedElement } from "../store";
import propTypeChildren from "../utilities/propTypeChildren";
import { WINDOW_OBJ } from "../constants";

import "./styles.scss";

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function WindowFrame({ name, frame, onClose, children }) {
    const focused = useRecoilValue(focusedElement);
    const refCloseBtn = React.useRef(undefined);
    const [pos, setPos] = React.useState([]);

    const { desktopIcon } = WINDOW_OBJ[name];

    const windowContainerRef = React.useRef(null);

    const [widgetState, setWidgetState] = React.useState({
        visible: false,
        disabled: true,
        bounds: { left: 0, top: 0, bottom: 0, right: 0 },
    });
    const onStart = (event, uiData) => {
        const { clientWidth, clientHeight } = window?.document?.documentElement;
        const targetRect = windowContainerRef.current.getBoundingClientRect();
        const taskbarBuffer = 45;

        if (targetRect) {
            setWidgetState((prevState) => ({
                ...prevState,
                bounds: {
                    left: -targetRect?.left + uiData?.x,
                    right: clientWidth - (targetRect?.right - uiData?.x),
                    top: -targetRect?.top + uiData?.y,
                    bottom: clientHeight - taskbarBuffer - (targetRect?.bottom - uiData?.y),
                },
        }));
        }
    };

    const handleClose = () => {
        onClose(name);
    };

    React.useEffect(() => {
        setPos([randomInt(-40, 40), randomInt(10, 30)]);
    }, [name]);

    return (
        <Draggable
            positionOffset={{
                x: `calc(-50% + ${pos[0]}px)`,
                y: `calc(-50% - ${pos[1]}px)`,
            }}
            handle=".handle"
            nodeRef={windowContainerRef}
            onStart={(event, uiData) => onStart(event, uiData)}
            bounds={widgetState.bounds}
        >
            <div
                ref={windowContainerRef}
                data-name={name}
                style={{
                    display: frame.visibility[1] ? "block" : "none",
                    zIndex: focused === name ? 2 : 1,
                }}
                className={`windowFrame -${name}`}
            >
                <Window shadow={focused === name}>
                    <WindowHeader
                    className={`handle windowHeader${
                        focused === name ? "" : " -inactive"
                    }`}
                    >
                        <div>
                            <img className="icon" src={desktopIcon} alt="" width="20" height="20" />
                            <span
                            dangerouslySetInnerHTML={{
                                __html: frame.header,
                            }}
                            className="flex items-center windowHeader__title"
                            ></span>
                        </div>

                        <span ref={refCloseBtn}>
                            <Button
                            style={{ marginRight: -1, marginTop: 6 }}
                            size={"sm"}
                            square
                            onClick={handleClose}
                            onTouchEnd={handleClose}
                            >
                                <span className="close" />
                            </Button>
                        </span>
                    </WindowHeader>
                    <WindowContent className={`content -${name}`}>
                        {children}
                    </WindowContent>
                </Window>
            </div>
        </Draggable>
    );
}

const shapeWindow = {
    label: PropTypes.string,
    header: PropTypes.string,
    desktopIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    visibility: PropTypes.arrayOf(PropTypes.bool),
};

WindowFrame.propTypes = {
    name: PropTypes.string.isRequired,
    frame: PropTypes.shape(shapeWindow).isRequired,
    onClose: PropTypes.func.isRequired,
    children: propTypeChildren,
};

export { About, Engineering, Projects, Resume};