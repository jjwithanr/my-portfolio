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
                        />
                        <p>
                        The goal of this project was to develop an affordable, practical fitness tracker. We followed an iterative engineering design process of planning, prototyping, testing and refinement. Software like TinkerCAD, SolidWorks and MIT App Inventor were essential tools for our product development. Collaboration between members was critical, with each member contributing their unique skills and perspectives throughout the process.
                        </p>
                    </div>
                    <div className="engineeringWindow__item">
                        <img 
                            src={require("../../assets/media/circuit-boards.png")} 
                            alt="" 
                        />
                        <p>
                        To reduce thickness, we adopted a modular design instead of an all-in-one approach. In Solidworks, we designed custom modules to house different electrical components. 3D printing provided the precision needed to match our module designs. Through multiple iterations, we identified opportunities to further minimize dimensions while still fitting components. Shortening module lengths and widths resulted in a more compact design while maintaining functionality.
                        </p>
                    </div>
                    <div className="engineeringWindow__item">
                        <img src={require("../../assets/media/app-fitness-watch.png")} alt="" width="400" style={{ marginRight: "20px" }} />
                        <p>
                        Our prototype met or exceeded expectations in several areas. It was lighter weight and more comfortable than expected thanks to an adjustable band, lightweight materials and distributed weight. However, its width caused issues for slimmer wrists. Future iterations could reduce module spacing to address this. In summary, the project provided invaluable experience developing an engineering solution through team-based planning, prototyping and testing. The iterative process helped refine our design to meet critical size, weight and functionality targets while identifying areas for future improvement.
                        </p>
                    </div>
                    <div className="engineeringWindow__item">
                        <img 
                            src={require("../../assets/media/model-fitness-watch.jpg")} 
                            alt="" 
                            style={{ width: "75%", marginLeft: "auto", marginRight: "auto", marginTop: "2rem"}} 
                        />
                    </div>
                    </div>
                )}
                </TabBody>
            </div>
            </section>
    );
}