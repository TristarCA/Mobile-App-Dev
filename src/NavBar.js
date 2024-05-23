import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => {
    const [isClicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!isClicked)
    }
    return (
        <div class="mb-4">
            <h1 className="display-4">Assignment 1</h1>
            <Button onClick={handleClick} variant={isClicked ? 'danger' : 'primary'}>
                {isClicked ? 'Logout' : 'Login'}
            </Button>
        </div>
    )
}

export default NavBar;