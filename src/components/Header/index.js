import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);
    const location = useLocation();

    const trackScreenWidth = () => {
        const width = window.innerWidth;
        setScreenWidth(width);
        if (width > 600) {
            setOpen(true);
        }
    };

    const handleClose = () => {
        if (screenWidth < 600) {
            setOpen(false);
        }
    };

    useEffect(() => {
        trackScreenWidth();
        window.addEventListener("resize", trackScreenWidth);
        return () => window.removeEventListener("resize", trackScreenWidth);
    }, []);

    return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <div className="logo">
                </div>
                <div className="list-wrapper">
                    <i
                        className="fas fa-bars"
                        style={{ opacity: !open ? 1 : 0 }}
                        onClick={() => { setOpen(open); }}
                    >
                    </i>
                    <i
                        className="fas fa-times"
                        style={{ opacity: open ? 1 : 0 }}
                        onClick={() => { setOpen(!open); }}
                    >
                    </i>

                    <ul style={{ left: open ? "0" : "-100vw" }}>
                        <li>
                            <Link
                                to="/"
                                onClick={handleClose}
                                style={{ color: location.pathname === "/" && "#fff" }}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/projects"
                                onClick={handleClose}
                                style={{ color: location.pathname === "/projects" && "#fff" }}
                            >
                                Projects
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;