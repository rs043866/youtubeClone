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
            <MenuIcon />
            <img className="header__logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
            alt="Youtube logo" 
            />

            {/* middle component */}
            <input type="text" />
            <SearchIcon />
            
            {/* Right Component */}
            <VideoCallIcon />
            <AppsIcon />
            <NotificationsIcon />
            <Avatar 
                alt="Rahul Sharma"
                src="https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg"
            />
        </div>
    )
}

export default Header
