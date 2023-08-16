import React from 'react'
import Contact from '../../models/contact'

import { MdDelete, MdEdit } from 'react-icons/md'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { deleteContact } from '../../service/contact'

interface Props {
  contact: Contact
}


const ContactCard: React.FC<Props> = ({ contact }) => {

  let navigate = useNavigate()

  let handleCardClick = (e: any) => {
    navigate('/contacts/' + contact.id, {
      state: {
        contact
      }
    })
  }


  let handleEdit = (e: any) => {
    e.stopPropagation()
    navigate('/edit/' + contact.id, {
      state: {
        editMode: true,
        contact
      }
    })
  }

  let handleDelete = (e: any) => {
    e.stopPropagation()
    deleteContact(contact.id)
    navigate('/')
  }

  return (
    <div onClick={handleCardClick} className="contact-card">
      <p className='contact-card__name'>{contact.name}</p>
      <div className="contact-card__action">
        <MdEdit onClick={handleEdit} className='contact-card__edit'></MdEdit>
        <MdDelete onClick={handleDelete} className='contact-card__edit'></MdDelete>
      </div>

    </div>
  )
}

export default ContactCard