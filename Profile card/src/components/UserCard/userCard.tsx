import React from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import './style.css'
import User from '../../models/User'
import UserAvater from '../UserAvater/userAvater'
import BasicInfo from '../BasicInfo/basicInfo'
interface Props {
  user:User,
}

const UserCard:React.FC<Props> = ({user}) => {
  return (
    <div className="card-container">
      <div className='card-container__user-detail-card'>
          <UserAvater imageUrl={user.imageUrl}></UserAvater>
          <BasicInfo user={user}></BasicInfo>
      </div>
    </div>
  )
}

export default UserCard