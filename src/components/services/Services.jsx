import React, { useState } from 'react';
import './services.css';

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i class="uil uil-server-connection services__icon"></i>
                        <h3 className="services__title">
                            Data <br /> Scientist
                        </h3>
                    </div>

                    <span className="services__button" onClick={() =>
                        toggleTab(1)}>
                        View More
                        <i className="uil uil-arrow-right 
                        services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil 
                            uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Data Scientist</h3>
                            <p className="services__modal-description">
                                With more than 3 years of experience, most tasks I've done are:
                            </p>

                            <ul className="srvices__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Acquiring data, processing and cleaning the data.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Integrating and storing data.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Initial data investigation and exploratory data analysis.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Choosing one or more potential models and algorithms.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Applying techniques of machine learning, statistical modeling, and artificial intelligence.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Presenting final results and making adjustments based on feedback
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">
                            Full stack <br /> Developer
                        </h3>
                    </div>

                    <span className="services__button" onClick={() =>
                        toggleTab(2)}>
                        View More
                        <i className="uil uil-arrow-right 
                        services__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)}
                                className="uil uil-times
                            services__modal-close"></i>

                            <h3 className="services__modal-title">Full stack Developer</h3>
                            <p className="services__modal-description">
                                With more than 7 years of experience, most tasks I've done are:
                            </p>

                            <ul className="srvices__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Designing client-side and server-side architecture.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Building visual appealing design of applications' UIs.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Developing and managing well-functioning databases and applications.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Writing effective APIs.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Testing software to ensure responsiveness and efficiency.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Troubleshooting, debuging and upgrading software.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Creatinig security and data protection settings.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i class="uil uil-constructor services__icon"></i>
                        <h3 className="services__title">
                            E & T<br />Engineer
                        </h3>
                    </div>

                    <span className="services__button" onClick={() =>
                        toggleTab(3)}>
                        View More
                        <i className="uil uil-arrow-right 
                        services__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times
                            services__modal-close"></i>

                            <h3 className="services__modal-title">
                                Electronics & Telecommunications Engineer
                            </h3>
                            <p className="services__modal-description">
                                With more than 6 years of experience, most tasks I've done are:
                            </p>

                            <ul className="srvices__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Preventive maintenance.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Alarm monitoring and handling.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Network administration.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Communication system installations.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Designing, developing, and testing of equipment used in electronic systems.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;