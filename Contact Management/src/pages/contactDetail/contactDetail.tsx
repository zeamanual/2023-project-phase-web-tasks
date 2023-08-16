import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './style.css'
import Contact from '../../models/contact'

const ContactDetail:React.FC = () => {
  let location = useLocation()
  let navigate = useNavigate()
  let contact:Contact = location.state.contact

    return (
      <div className='detail' >
        <p className='detail__field' >{contact.name}</p>
        <p  className='detail__field'  >{contact.phoneNumber}</p>
        <p className='detail__field'  >{contact.address}</p>
        <div className="detail__actions">
          <button onClick={()=>navigate('/')} className='detail__actions__btn' >Back</button>
        </div>
      </div>
    )
  
}

export default ContactDetail