import React from 'react'
import './Post.css';
import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


function Post({id, name, description, message, photoUrl}) {
  return (
    <div className='post'>
        <div className='post__header'>
            <Avatar />
            <div className='post__info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className='post__body'>
            <p>{message}</p>
        </div>

        <div className='post__buttons'>
            <InputOption Icon={ThumbUpOffAltIcon} title="Like" />
            <InputOption Icon={ChatOutlinedIcon} title="Comment" />
            <InputOption Icon={ShareOutlinedIcon} title="Share" />
            <InputOption Icon={SendOutlinedIcon} title="Send" />

          </div>
    </div>
  )
}

export default Post