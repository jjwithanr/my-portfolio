import React from "react";
import PropTypes from "prop-types";

export default function DesktopIcon({
    name,
    label,
    icon,
    active,
    onDoubleClick,
}) {
    return (
        <div key={name} className="desktopIcon">
            <button
                data-name={name}
                className={`desktopIcon__button${name === active ? " -focused" : ""}`}
                onClick={onDoubleClick}
            >
            <img
                src={icon}
                className={`desktopIcon__image${name === active ? " -focused" : ""}`}
                alt="icon"
                width="50"
            />
            <p className={`desktopIcon__name${name === active ? " -focused" : ""}`}>{label}</p>
            </button>
        </div>
    );
}

DesktopIcon.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    active: PropTypes.string.isRequired,
    onDoubleClick: PropTypes.func.isRequired,
};