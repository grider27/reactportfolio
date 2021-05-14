import React from 'react';
import './style.css';

const Footer = () => {
    return (
        <footer>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/guntaas-gary-basra-0260788/">
                <i className="fa fa-linkedin fa-2x"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/grider27">
                <i className="fa fa-github fa-2x"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="mailto:grider27@gmail.com">
                <i className="fa fa-envelope fa-2x"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="/assets/docs/SampleResume.pdf">
                <i className="fa fa-file-pdf fa-2x"></i>
            </a>
            <p><strong>Copyright &copy; Gary Basra</strong></p>
        </footer>
    )
}

export default Footer
