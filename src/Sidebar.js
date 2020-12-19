import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img alt="" src="https://images.unsplash.com/photo-1541882270037-d3cf216b2ca4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
                <Avatar className="sidebar_avatar" />
                <h2 className="sidebar_name">My name</h2>
                <h4 className="sidebar_email">marta@gmail.com</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">2,666</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="sidebar_statNumber">1,235</p>
                </div>
            </div>
            
            <div className="sidebar_bottom">
                <p>Recent</p>
            </div>
        </div>
    )
}

export default Sidebar
