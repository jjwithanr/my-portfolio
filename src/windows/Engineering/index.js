import React from "react";
import { Tabs, Tab, TabBody } from "react95";
import { engineeringContent } from "../../content";
import "./styles.scss";

export default function Engineering() {
    const [state, setState] = React.useState({
        activeTab: 0
    });

    const handleChange = (value) => {
        setState({ activeTab: value });
    };
    
    const { activeTab } = state;

    return (
        <section className="engineeringWindow">
            <div>
                <Tabs value={activeTab} onChange={handleChange}>
                    {engineeringContent.tabs.map((tab, index) => (
                        <Tab key={index} value={index}>{tab.name}</Tab>
                    ))}
                </Tabs>
                <TabBody style={{ height: "70vh" }}>
                    {engineeringContent.tabs.map((tab, index) => (
                        activeTab === index && (
                            <div key={index} className="scrollable engineeringWindow__details">
                                {tab.content.map((item, itemIndex) => (
                                    <div key={itemIndex} className="engineeringWindow__item">
                                        {item.image && (
                                            <img
                                                src={item.image}
                                                alt={item.alt}
                                                width={item.width}
                                                style={item.style}
                                            />
                                        )}
                                        {item.text && <p>{item.text}</p>}
                                    </div>
                                ))}
                            </div>
                        )
                    ))}
                </TabBody>
            </div>
        </section>
    );
}