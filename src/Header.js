import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications';
import WorkIcon from '@material-ui/icons/Work';
import {Navbar, Nav} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/counter/userSlice';
import { auth } from './firebase';

function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const handleLogout = () =>{
        dispatch(logout())
        auth.signOut()
    }

    return (
        <div className="header">
            <Navbar collapseOnSelect expand="md" sticky="top" className="header_bar" >
        <div className="header_left">
                <img alt ="" src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"/>


                <div className="header_search">

                    <SearchIcon/>
                    <input  placeholder="Search" type="text"/>

                </div>

            </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{marginTop:'10px'}} />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto header_right" >
            

                <HeaderOption title="Home" Icon={HomeIcon}/>
                <HeaderOption title="My Network" Icon={SupervisorAccountIcon}/>
                <HeaderOption title="Jobs" Icon={WorkIcon}/>
                <HeaderOption title="Messaging" Icon={ChatIcon}/>
                <HeaderOption title="Notifications" Icon={NotificationsIcon}/>

                <HeaderOption avatar = {true} title="Me" onClick={handleLogout}/>
            
            </Nav>
            
        </Navbar.Collapse>
        
            
            
    </Navbar>
        </div>
    


        
    )
}

export default Header
