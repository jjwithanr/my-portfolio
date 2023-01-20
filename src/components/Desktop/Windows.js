import React from "react";
import { useRecoilState } from "recoil";

import WindowFrame, {
    About,
} from "../../windows";

import { windowObj } from "../../store";

const componentList = {
    about: About,
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
            console.log("I'M HERE. Name=" + name);
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