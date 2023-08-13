import React from 'react'
import UserCard from '../UserCard/userCard'
import './style.css'
import User from '../../models/User'

interface Props {
  imageUrl:string
}

const UserAvater:React.FC<Props> = ({imageUrl}) => {
  return (
    <div className='profile-image-container'>
      {
        (<img className='profile-image-container__img' src={imageUrl} alt='User avater'/>)
      }
    </div>
  )
}

export default UserAvater