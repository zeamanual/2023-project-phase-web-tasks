import React, { useState } from 'react'
import './style.css'
import BasicInfo from '../../components/BasicInfo/basicInfo'
import UserAvater from '../../components/UserAvater/userAvater'
import User from '../../models/User'
import UserCard from '../../components/UserCard/userCard'

const Home: React.FC = () => {
  let [users, setUsers] = useState<User[]>([{
    bio: "A fourth year software engineering student at AAiT, who excels at javascript and well versed with web app developement. A fourth year software engineering student at AAiT, who excels at javascript and well versed with web app developement. A fourth year software engineering student at AAiT, who excels at javascript and well versed with web app developement.",
    name: "Zemanual Feleke",
    title: 'Softwate Engineer',
    webiste: "https://www.google.com",
    imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
  }, {
    bio: "A fourth year software engineering student at AAiT, who excels at javascript and well versed with web app developement. A fourth year software engineering student at AAiT, who excels at javascript and well versed with web app developement. A fourth year software engineering student at AAiT, who excels at javascript and well versed with web app developement.",
    name: "Simon Jake",
    title: 'Softwate Engineer',
    webiste: "",
    imageUrl: 'https://accountmanagement.gettyimages.com/Account/ProfileImage/34a09eba-6db5-494e-b0c9-94779a6828a0.jpg'
  }])

  return (
    <div className='home-container'>
      <h2 className='home-container__header' >User Profile Card</h2>
      <div className='home-container__list'>
        {
          users.map((user,index) => {
            return <UserCard key={index} user={user}></UserCard>
          })
        }
      </div>
    </div>
  )
}

export default Home