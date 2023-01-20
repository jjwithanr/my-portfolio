import React from "react";
import { Button, Anchor } from "react95";


import "./styles.scss";

export default function Engineering() {

    return (
        <section className="engineeringWindow">
            <div className="flex justify-between engineeringWindow__header">
            <div className="flex flex-auto items-center">
                <Button variant="menu" size="sm">
                File
                </Button>
                <Button variant="menu" size="sm">
                Edit
                </Button>
                <Button variant="menu" size="sm">
                View
                </Button>
            </div>
            </div>
            <div className="scrollable -yOnly engineeringWindow__body">
                <div className="engineeringWindow__bodyInner">
                    <h1 className="mb2">Engineering</h1>
                </div>
            </div>
        </section>
    );
}