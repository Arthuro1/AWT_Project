import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="site-footer" role="contentinfo">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-4 mb-5">
                            <h3>Social Meida</h3>

                            <ul className="list-unstyled footer-link d-flex footer-social">
                                <li><a href="https://twitter.com/" className="p-2"><span className="fa fa-twitter"/></a></li>
                                <li><a href="https://www.facebook.com" className="p-2"><span className="fa fa-facebook"/></a>
                                </li>
                                <li><a href="https://www.linkedin.com" className="p-2"><span className="fa fa-linkedin"/></a>
                                </li>
                                <li><a href="https://www.instagram.com/" className="p-2"><span className="fa fa-instagram"/></a>
                                </li>
                            </ul>

                        </div>
                        <div className="col-md-5 mb-5">

                        </div>
                        <div className="col-md-3 mb-5">
                            <h3>Quick Links</h3>
                            <ul className="list-unstyled footer-link">
                                <li><a href={'/About_Us'}>About</a></li>
                                <li><a href={'/Login'}>Login</a></li>
                                <li><a href={'/Register'}>Registration</a></li>

                            </ul>
                        </div>
                        <div className="col-md-3">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-md-center text-left">
                            <p>Copyright &copy; {new Date().getFullYear()} All rights reserved | This Project was made with { " "}
                                <i className="fa fa-heart" aria-hidden="true"/> within the scope of the lecture <a
                                    href="https://www.uni-due.de/soco/teaching/courses/lecture-advwebtech-ss19.php" rel="noopener noreferrer" target="_blank">Advanced Web Technology</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
