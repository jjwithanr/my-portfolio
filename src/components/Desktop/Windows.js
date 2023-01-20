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
  // eslint-disable-next-line no-unused-vars

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

    const getCssName = (name) => {
        if(name in componentList) return name;
        return "repositoryDetails";
    }

    return (
    <>
        {Object.keys(currentWindows).map((name) => {
            const content = getContent(name);
            return (
                <WindowFrame
                    key={name}
                    name={name}
                    cssName={name}
                    window={currentWindows[name]}
                    onClose={handleCloseWindow}
                >
                    {content}
                </WindowFrame>
            );
        })}
    </>
    );
}