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
                <TabBody style={{ height: "70vh" }}>
                {activeTab === 0 && (
                    <div className="scrollable engineeringWindow__details">
                    <div className="engineeringWindow__item">
                        <img
                        src={require("../../assets/media/virtual-quadcopter.png")}
                        alt=""
                        width="400"
                        style={{ marginRight: "20px" }}
                        />
                        <p>
                        The quadcopter engineering project provided valuable hands-on experience applying fundamental design processes from concept creation to prototype testing and refinement. I gained skills in teamwork, problem-solving, and project management that will translate well to an engineering role.
                        Our objective was to design and build a functioning quadcopter from scratch meeting our instructors' performance criteria. I contributed to a durable, lightweight chassis design using three layers of rectangular plastic chloroplast sheets for structural integrity while remaining lightweight. The angled poplar wood arms were carefully dimensioned to provide sufficient propeller clearance while balancing manufacturability and low weight. A battery compartment between the second and third chassis layers housed the lithium polymer battery.
                        </p>
                    </div>
                    <div className="engineeringWindow__item">
                        <img
                        src={require("../../assets/media/irl-quadcopter.JPG")}
                        alt=""
                        width="400"
                        style={{ marginRight: "20px" }}
                        />
                        <p>
                        Working through each stage of the project helped me strengthen valuable technical and soft skills through practical application. I learned to break down complex design challenges, collaborate well in an interdisciplinary team, and organize tasks to deliver results on time and on budget. The hands-on experience building the quadcopter increased my confidence in my ability to tackle ambitious engineering projects, solve problems creatively, and produce high-quality work that meets key requirements.   
                        </p>
                    </div>
                    <div className="engineeringWindow__item">
                        <img src={require("../../assets/media/exploded-view.jpg")} alt="" style={{ width: "75%", marginLeft: "auto", marginRight: "auto", marginTop: "2rem" }} />
                    </div>
                    <div className="engineeringWindow__item">
                        <img src={require("../../assets/media/model-view.jpg")} alt="" style={{ width: "75%", marginLeft: "auto", marginRight: "auto", marginTop: "rem" }} />
                    </div>
                    </div>
                )}

                {activeTab === 1 && (
                    <div className="scrollable engineeringWindow__details">
                    <div className="engineeringWindow__item">
                        <img
                        src={require("../../assets/media/irl-fitness-watch.jpg")}
                        alt=""
                        width="400"
                        style={{ marginRight: "20px" }}
                        />
                        <p>
                        The objective of the project is to create an affordable and practical fitness tracker. To do so, we followed
                        a specific process of planning, designing, coding, and fabricating. Programs such as TinkerCAD, SolidWorks,
                        MIT App Inventor were necessary for the creation of the device. Each member of the group was required to
                        collaborate and participate in the engineering process of the project.
                        </p>
                    </div>
                    <div className="engineeringWindow__item">
                        <img src={require("../../assets/media/circuit-boards.png")} alt="" width="400" style={{ marginRight: "20px" }} />
                        <p>
                        From the beginning, we aimed to reduce the thickness of our fitness watch as much as possible. We decided on
                        a modular design as a solution to avoiding a chunky all-in-one design. In Solidworks, we created modules with
                        different specifications to contain different components of the fitness watch. As a team, we agreed that 3D
                        printing these parts was the most effective method in ensuring our fitness watch matched our Solidworks design
                        measurements. After printing several iterations, we saw an opportunity to minimize even more thickness and
                        space in our fitness watch. We shortened the lengths and widths of one of our modulesto be just big enough to hold the electrical components leaving no excess space. The final print and assembly came out beautifully with the teamwork of our amazing diverse team.
                        </p>
                    </div>
                    <div className="engineeringWindow__item">
                        <img src={require("../../assets/media/app-fitness-watch.png")} alt="" width="400" style={{ marginRight: "20px" }} />
                        <p>
                        In most areas our prototype performed up to or exceeded our predictions. In terms of weight and comfort our prototype performed better than predicted. Our design came out to be quite light, only slightly heavier than a standard fitness band. Our prototype was also comfortable on the wrist due to its adjustable nylon band, lightweight components, and distributed weight. However, due to its width across the band, it did not sit very securely on slim wrists. Perhaps if we reduced the space between modules a bit more we could have accounted for this issue. Aesthetically, due to our polycarbonate lids, clean prints and clean soldering, our model was pleasing to the eye, exceeding our expectations in that regard. In terms of durability of the device itself we did not run into any issues. Our supports from the 3D print were solid and secure and were strong enough to withstand wear and tear from standard daily functions.
                        </p>
                    </div>
                    <div className="engineeringWindow__item">
                        <img src={require("../../assets/media/model-fitness-watch.jpg")} alt="" style={{ width: "75%", marginLeft: "auto", marginRight: "auto", marginTop: "2rem"}} />
                    </div>
                    </div>
                )}
                </TabBody>
            </div>
            </section>
    );
}