import React from 'react';
import './style.css';

const Projects = () => {
    return (
        <div className="container" id="portfolio">
            <div className="row justify-description-center">
                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/ultimatesportstracker.png`} className="card-img-top border-bottom"
                                alt="ultimatesportstracker" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Ultimate Sports Tracker</h3>
                            <h6 className="card-text">
                                An app serves the user by organizing and
                                displaying sports statistics and team news.
                            </h6>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://grider27.github.io/ultimatesportstracker/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/grider27/ultimatesportstracker" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/weather.png`} className="card-img-top border-bottom"
                                alt="weather-dashboard" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Weather Dashboard</h3>
                            <h6 className="card-text">
                                A weather dashboard that runs and features dynamically updated HTML and
                            CSS.</h6>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://grider27.github.io/penn-lps-bcs/homework/homework6-WeatherDashboard/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/grider27/penn-lps-bcs/tree/main/homework/homework6-WeatherDashboard" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div >

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100 pb-5">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/lofc.png`} className="card-img-top border-bottom"
                            alt="libraryofcongress" />
                        <div className="card-body mb-5 pl-0">
                            <h3>Library Of Congress</h3>
                            <h6 className="card-text">
                                Mini project to build an application that searches and displays results
                                from the Library of Congress API.
                            </h6>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://grider27.github.io/libraryofcongress/index.html" className="btn mr-2" target="_blank" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/grider27/libraryofcongress" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/passwordgenerator.png`} className="card-img-top border-bottom"
                                alt="Password Generator" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Password Generator</h3>
                            <h6 className="card-text">
                                A password generator that is intuitive enough for users to use to randomly
                                generate passwords
                            </h6>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://grider27.github.io/penn-lps-bcs/homework/homework3-PasswordGenerator/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/grider27/penn-lps-bcs/tree/main/homework/homework3-PasswordGenerator" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/wikipour.png`} className="card-img-top border-bottom"
                                alt="WikiPour" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Wiki Pour</h3>
                            <h6 className="card-text">
                                As an avid connoisseur of drinks, I want to be able to use a website to find great drink recipes and contribute to the ones I have created for others to share so we can all take advantage of crowd sourced insights.
                            </h6>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://wiki-pour.herokuapp.com/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/nidaqg/wiki-pour" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/notetaker.png`} className="card-img-top border-bottom"
                                alt="Note Taker" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Note taker</h3>
                            <h6 className="card-text">
                            Application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.
                            </h6>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://note-taker-utility.herokuapp.com/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/grider27/NoteTaker" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/employeetracker.png`} className="card-img-top border-bottom"
                                alt="employeetracker" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Employee Tracker</h3>
                            <h6 className="card-text">
                            Architect and build a solution for managing a company's employees using node, inquirer, and MySQL.
                        </h6>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://github.com/grider27/EmployeeTracker" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/grider27/EmployeeTracker" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/ecomm.png`} className="card-img-top border-bottom"
                                alt="Ecommerce" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>E-commerce Backend</h3>
                            <h6 className="card-text">
                            Architect and build the back end for an e-commerce site by modifying starter code. With a configured working Express.js API to use Sequelize to interact with a MySQL database.
                        </h6>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://github.com/grider27/E-commerceBackEnd" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/grider27/E-commerceBackEnd" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/budget.png`} className="card-img-top border-bottom"
                                alt="budgettracker" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Budget Tracker</h3>
                            <h6 className="card-text">
                            Add functionality to our existing Budget Tracker application to allow for offline access and functionality.
                        </h6>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://gb-budget-tracker.herokuapp.com/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/grider27/BudgetTracker" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects;
