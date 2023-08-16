import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import { useLoaderData, useNavigate } from 'react-router-dom'
import Contact from '../../models/contact'
import ContactCard from '../../components/contactCard/contactCard'
import { contacts, getContacts } from '../../service/contact'

const Home: React.FC = () => {
  let navigate = useNavigate()
  let contacts: Contact[] = useLoaderData() as Contact[]
  return (
    <div className="container">
      <div className="btn_container">
        <button onClick={() => navigate('/add')} className='container__btn'>New</button>
      </div>
      <div className="container__contact-list">
        {contacts.length == 0 && <p>No contacts.</p>}
        {
          contacts.map(contact => (<ContactCard contact={contact}></ContactCard>))
        }
      </div>
    </div>
  )
}

export default Home


// loader function
export const contactsLoader = async () => {
  let fetchedContacts: Contact[] = getContacts()
  return fetchedContacts
}