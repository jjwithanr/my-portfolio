import React from "react";
import { useRecoilState } from "recoil";

import WindowFrame, {
    About,
    Engineering,
    Projects,
    Resume
} from "../../windows";

import { windowObj } from "../../store";

const componentList = {
    about: About,
    engineering: Engineering,
    projects: Projects,
    resume: Resume
};

export default function Windows() {
    const [currentWindows, setWindows] = useRecoilState(windowObj);

    const handleCloseWindow = (name) => {
        const updated = {
            [name]: {
                ...currentWindows[name],
                visibility: [false, false],
            },
        };
        setWindows({
            ...currentWindows,
            ...updated,
        });
    };

    const getContent = (name) => {
        const Comp = componentList[name];
        return <Comp />;
    };

    return (
    <>
        {Object.keys(currentWindows).map((name) => {
            const content = getContent(name);
            return (
                <WindowFrame
                    key={name}
                    name={name}
                    frame={currentWindows[name]}
                    onClose={handleCloseWindow}
                >
                    {content}
                </WindowFrame>
            );
        })}
    </>
    );
}