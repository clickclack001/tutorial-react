import React from 'react';
import {Nav} from "react-bootstrap";

const Header = () => {
    return (
        <header>
            <h2>
                <a href="/">React Blog</a>
            </h2>
            <Nav variant="pills" defaultActiveKey="/">
                <Nav.Item>
                    <Nav.Link eventKey="/home" to="/">
                        Главная
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/about" to="/about">
                        Обо мне
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/profile" to="/profile">
                        Профиль
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </header>
    );
};

export default Header;