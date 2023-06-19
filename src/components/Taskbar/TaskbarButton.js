import React from "react";
import PropTypes from "prop-types";
import { useRecoilState, useRecoilValue } from "recoil";
import { Button, Tooltip } from "react95";

import { windowObj, focusedElement } from "../../store";
import { WINDOW_OBJ } from "../../constants";

export default function TaskbarButton({ name, label }) {
    const [currentWindows, setWindows] = useRecoilState(windowObj);
    const focused = useRecoilValue(focusedElement);
    const [showLabel, setShowLabel] = React.useState(false);

    const checkWindowSize = () => {
        setShowLabel(window.innerWidth > 859);
    };

    React.useEffect(() => {
        checkWindowSize();
        window.addEventListener('resize', checkWindowSize);
        return () => {
        window.removeEventListener('resize', checkWindowSize);
        };
    }, []);

    const { desktopIcon } = WINDOW_OBJ[name];

    const handleClick = () => {
        const isFocused = currentWindows[name].visibility[1] && focused === name;
        if (isFocused) {
        const updated = {
            [name]: {
            ...currentWindows[name],
            visibility: [true, false],
            },
        };
        setWindows({ ...currentWindows, ...updated });
        } else {
        const updated = {
            [name]: {
            ...currentWindows[name],
            visibility: [true, true],
            },
        };
        setWindows({ ...currentWindows, ...updated });
        }
    };

    return (
        <>
            {currentWindows[name].visibility[0] && (
                <Button
                    data-name={name}
                    onClick={handleClick}
                    active={focused === name}
                    className={`bold taskbarButton${focused === name ? " -focused" : ""}`}
                    style={{ marginRight: 5 }}
                >
                    <img className={`taskbarButton__icon -${name}`} src={desktopIcon} alt="" width="17" height="17" />
                    <div>
                        { showLabel && 
                        <Tooltip text={label ? label : name} className="tooltipOverlay">
                            <span className="taskbarButton__label">{label ? label : name}</span>
                        </Tooltip>
                        }
                    </div>
                </Button>
            )}
        </>
    );
}

TaskbarButton.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};