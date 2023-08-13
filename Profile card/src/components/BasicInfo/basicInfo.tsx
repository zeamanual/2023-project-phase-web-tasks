import React from 'react'
import './style.css'
import User from '../../models/User'
import { BiLinkExternal } from 'react-icons/bi'

interface Props {
    user: User
}

const BasicInfo: React.FC<Props> = ({ user }) => {
    return (
        <div className='basic-info-container'>
            <p className='basic-info-container__name'>{user.name}</p>
            <p className='basic-info-container__title'>{user.title}</p>
            <p className='basic-info-container__bio'>{user.bio}</p>
            {
                user.webiste ? (
                    <a href={user.webiste} className='basic-info-container__links'>
                        <p className='basic-info-container__links__text'>Show Website</p>

                        <BiLinkExternal className='basic-info-container__links_website'></BiLinkExternal>

                    </a>
                ) : <></>
            }
        </div>
    )
}

export default BasicInfo