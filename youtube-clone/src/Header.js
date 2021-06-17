import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar'

function Header() {
    return (
        <div className="header">
            {/* left component */}
            <div className="header__left">
                <MenuIcon />
                <img className="header__logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
                alt="Youtube logo" 
                />
            </div>
            
            {/* middle component */}
            <div className="header__input">
                <input type="text" placeholder="Search" />
                <SearchIcon className="header__inputButton" />
            </div>
            
            {/* Right Component */}
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar 
                    alt="Rahul Sharma"
                    src="https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg"
                />
            </div>
        </div>
    )
}

export default Header
