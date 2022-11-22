import { UserOutlined } from '@ant-design/icons';
import { Avatar } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <div className="home-logo">

                    <div className="marque">
                        <Logo />
                        <p>alloMovie</p>
                    </div>
                    <div className="links">
                        <div className="link">
                            <Link to="/">
                                <p>home</p>
                            </Link>
                        </div>
                        <div className="link">
                            <Link to="/fav">
                                <p>favoris</p>
                            </Link>
                        </div>
                        <div className="link">
                            <Avatar shape="square" size="large" icon={<UserOutlined/>} />
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Navbar