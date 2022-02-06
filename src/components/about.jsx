
import { useState } from "react";

const About = () => {
    const [name, setName] = useState("");
    const [visible, setVisible] = useState(false);

    const handleShowName = () => {
        setName("Brett Bryant");
        setVisible(true);
    };

    const getMyInfo = () => {
        if (visible) {
            return (
                <div>
                    <h1>Brett Bryant</h1>
                    <h6>Email: bbryant572@gmail.com</h6>
                    <ul>
                        <li>Darts</li>
                        <li>Reading</li>
                        <li>Surfing</li>
                    </ul>
                </div>
            );
        }   else return "";
    };

    return (
        <div className="about-page">
            {getMyInfo()}
            <button onClick={handleShowName}>Click to see my name</button>
        </div>
    );
};

export default About;