import React from 'react'
import './topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import NotificationsNone from '@mui/icons-material/NotificationsNone';
// import SettingsIcon from '@mui/icons-material/Settings';
import Settings from '@mui/icons-material/Settings';
// import LanguageIcon from '@mui/icons-material/Language';
import Language from '@mui/icons-material/Language';


export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className='logo'>Sealjet</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNoneIcon/>
                      <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                    <Language/>
                      <span className="topIconBadge">3</span>
                    </div>
                    <div className="topbarIconContainer">  
                        <Settings/>
                    </div>
                    <img src="https://robohash.org/CMG.png?set=set1" alt="" className='topAvatar'/>
                </div>
            </div>
        </div>
    )
}
