import React from "react";

export default function TaskbarClock() {
    const refClock = React.useRef(undefined);
    const refTimer = React.useRef(0);

    const clock = React.useCallback(() => {
        const addZero = (t) => {
            if (t < 10) return `0${t}`;
            return t;
        };
        const date = new Date();
        let hour = date.getHours();
        const min = addZero(date.getMinutes());
        const interval = (60 - date.getSeconds()) * 1000 + 5;
        const formatHour = (h) => {
            if (h > 12) h = addZero(h - 12);
            return h;
        };

        refTimer.current = window.setTimeout(() => {
            clock();  // Recursively calls the clock function after the interval
        }, interval);

        if (hour > 12)
            refClock.current.innerHTML = `${formatHour(hour)}:${min} PM`;
        else
            refClock.current.innerHTML = `${hour === 0 ? 12 : formatHour(hour)}:${min} AM`;
    }, []);

    React.useEffect(() => {
        if (refClock && refClock.current) {
            clock();
        }
        return () => {
            window.clearTimeout(refTimer.current);  // Cleanup timer on unmount
            refClock.current = null;
        };
    }, [clock]);

    return <p ref={refClock} className="taskbarClock"></p>;
}
