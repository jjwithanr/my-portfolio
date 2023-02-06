import React from "react";
import { Tabs, Tab, TabBody } from "react95";
import "./styles.scss";

export default function Engineering() {

    const pageNumbers7a = [...Array(20).keys()];
    pageNumbers7a.shift();

    const pageNumbers7b = [...Array(24).keys()];
    pageNumbers7b.shift();

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
                <Tab value={0}>Quadcopter</Tab>
                <Tab value={1}>Fitness Watch</Tab>
            </Tabs>
            <TabBody style={{ height: 370 }}>
                {activeTab === 0 && (
                    <div className="scrollable engineeringWindow__details">
                        <img 
                            src={require("../../assets/media/virtual-quadcopter.png")}
                            alt=""
                            width="300"
                        />
                        <p>
                            The quadcopter project is designed to introduce us to fundamental engineering design processes 
                            (Brainstorm, Design, Fabrication, Testing) through hands-on application, development, and manufacturing of 
                            a functioning quadcopter. The project focuses on building teamwork, problem-solving skills, and project 
                            management skills. In addition to establishing these skills throughout the quarter, our team’s objective 
                            was to build and design a quadcopter from scratch that meets the criteria presented to us by our instructors.
                        </p>
                        <br/>
                        <img 
                            src={require("../../assets/media/irl-quadcopter.JPG")}
                            alt=""
                            width="300"
                        />
                        <p>
                            Our team decided to design our quadcopter such that its chassis will be constructed using three layers of 
                            rectangular-cut plastic chloroplast material. We chose to use plastic chloroplast for the main chassis because 
                            we believed that it provided a very structurally sound chassis while at the same time being very lightweight. We 
                            designed our angled arms to give enough space between the motors for the implementation of our eight inch propellers. 
                            These arms are to be made from Italian Poplar wood to have  a balance between high manufacturability and light weight. 
                            We will house the arms of the quadcopter between the first and second layer of the quadcopter, and the space between 
                            the second and third layer of the quadcopter will house the battery. 
                        </p>
                        <img 
                            style={{width:"100%"}}
                            src={require("../../assets/media/exploded-view.jpg")}
                            alt=""
                        />
                        <img
                            style={{width:"100%"}}
                            src={require("../../assets/media/model-view.jpg")}
                            alt=""
                            width="600"
                        />

                    </div>
                )}

                {activeTab === 1 && (
                    <div className="scrollable engineeringWindow__details">
                        <img 
                            src={require("../../assets/media/irl-fitness-watch.jpg")}
                            alt=""
                            width="200"
                        />
                        <p>
                            The objective of the project is to create an affordable and practical fitness tracker. To do so, we followed 
                            a specific process of planning, designing, coding, and fabricating. Programs such as TinkerCAD, SolidWorks, 
                            MIT App Inventor were necessary for the creation of the device. Each member of the group was required to 
                            collaborate and participate in the engineering process of the project.
                        </p>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <img
                            src={require("../../assets/media/circuit-boards.png")}
                            alt=""
                            width="200"
                        />
                        <p>
                        From the beginning, we aimed to reduce the thickness of our fitness watch as much as possible. We decided on a 
                        modular design as a solution to avoiding a chunky all-in-one design. In Solidworks, we created modules with 
                        different specifications to contain different components of the fitness watch. As a team, we agreed that 3D 
                        printing these parts was the most effective method in ensuring our fitness watch matched our Solidworks design 
                        measurements. After printing several iterations, we saw an opportunity to minimize even more thickness and space 
                        in our fitness watch. We shortened the lengths and widths of one of our modules to be just big enough to hold the 
                        electrical components leaving no excess space. The final print and assembly came out beautifully with the teamwork 
                        of our amazing diverse team. 
                        </p>
                        <br/>
                        <br/>
                        <br/>
                        <img
                            src={require("../../assets/media/app-fitness-watch.png")}
                            alt=""
                            width="200"
                        />
                        <p>
                            In most areas our prototype performed up to or exceeded our predictions. In terms of weight and comfort our prototype 
                            performed better than predicted. Our design came out to be quite light, only slightly heavier than a standard fitness 
                            band. Our prototype was also comfortable on the wrist due to its adjustable nylon band, lightweight components, and 
                            distributed weight. However, due to its width across the band, it did not sit very securely on slim wrists. Perhaps 
                            if we reduced the space between modules a bit more we could have accounted for this issue. Aesthetically, due to our 
                            polycarbonate lids, clean prints and clean soldering, our model was pleasing to the eye, exceeding our expectations in 
                            that regard. In terms of durability of the device itself we did not run into any issues. Our supports from the 3D print 
                            were solid and secure and were strong enough to withstand wear and tear from standard daily functions.
                        </p>
                        
                        <img 
                            style={{width:"100%"}}
                            src={require("../../assets/media/model-fitness-watch.jpg")}
                            alt=""
                        />
                    </div>
                )}
            </TabBody>
            </div>
        </section>
    );
}