import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="site-footer" role="contentinfo">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-4 mb-5">
              <h3>Social Meida</h3>
              You can actually check out our repositories for front-end and back-end. There is also a teaser videos as well as a small tutorial for this project.

              <ul className="list-unstyled footer-link d-flex footer-social">
                <li>videos
                  <a href="https://youtu.be/WJbT_EqNyoQ" className="p-2">
                    <span className="fa fa-youtube" />
                  </a>
                </li>
                <li>Front-end
                  <a href="https://github.com/Arthuro1/AWT_Project" className="p-2">
                    <span className="fa fa-github" />
                  </a>
                </li>
                <li>Back-end
                  <a href="https://github.com/Arthuro1/AWT_Project_BackEnd" className="p-2">
                    <span className="fa fa-github-alt" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-5 mb-5"></div>
            <div className="col-md-3 mb-5">
              <h3>Quick Links</h3>
              <ul className="list-unstyled footer-link">
                <li>
                  <a href={'/About_Us'}>About</a>
                </li>
                <li>
                  <a href={'/Login'}>Login</a>
                </li>
                <li>
                  <a href={'/Register'}>Registration</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row">
            <div className="col-12 text-md-center text-left">
              <p>
                Copyright &copy; {new Date().getFullYear()} All rights reserved
                | This Project was made with{' '}
                <i className="fa fa-heart" aria-hidden="true" /> within the
                scope of the lecture{' '}
                <a
                  href="https://www.uni-due.de/soco/teaching/courses/lecture-advwebtech-ss19.php"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Advanced Web Technology
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
