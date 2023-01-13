import React from "react";
import './skills.css';
import Datascience from "./Datascience";
import Fullstack from "./Fullstack";
import EandT from "./EandT";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>


            <div className="skills__container container grid">
                <Datascience />
                <Fullstack />
                <EandT />
            </div>
        </section>
    );
};

export default Skills;