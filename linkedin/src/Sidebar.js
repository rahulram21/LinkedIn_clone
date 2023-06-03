import React from 'react';
import './Sidebar.css';
import { Avatar } from '@mui/material';

function Sidebar() {
  const recentItem = (topic) =>(
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  )
  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src='https://images.unsplash.com/photo-1682686581776-b6ebee7c150e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80' alt='' />
            <Avatar className='sidebar__avatar'/>
            <h2>Rahul</h2>
            <h4>rthazhat</h4>
        </div>

        <div className='sidebar__stats'>
          <div className='sidebar__stat'>
            <p>Who viewed you</p>
            <p className='sidebar__statnum'>21</p>
          </div>
          <div className='sidebar__stat'>
            <p>Views on post</p>
            <p className='sidebar__statnum'>3000</p>
          </div>
        </div>
        <div className='sidebar__bottom'>
          <p>Recent</p>
          {recentItem('reactJs')}
          {recentItem('software')}
          {recentItem('Angular')}
          {recentItem('front end jobs')}
        </div>
    </div>
  )
}

export default Sidebar