import React from 'react'
import './style.css'
import { addContact, editContact, getContacts } from '../../service/contact'
import { useActionData, useLocation, useNavigate } from 'react-router-dom'
import Contact from '../../models/contact'

const ContactForm: React.FC = () => {

  let location = useLocation()
  let editMode: boolean = location.state?.editMode || false
  let existingContact:Contact | null = location.state?.contact
  let naviagate = useNavigate()

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()


    let formData = new FormData(event.currentTarget);
    const contact: Contact = {
      id: existingContact?.id ||  Date.now().toString(),
      name: formData.get("name") as string,
      phoneNumber: formData.get("phoneNumber") as string,
      address: formData.get("address") as string,
    };
    if (editMode) {
      editContact(contact);
    } else {
      addContact(contact);
    }
    naviagate('/')
  }

  return (
    <form className='form' onSubmit={handleFormSubmit}>
      <input defaultValue={existingContact?.name} required name='name' className='form__field' placeholder='Full Name' />
      <input required defaultValue={existingContact?.phoneNumber} name='phoneNumber' className='form__field' placeholder='Phonenumber' />
      <input required defaultValue={existingContact?.address} name='address' className='form__field' placeholder='Address' />
      <div className="form__actions">
        <button name='intent' value={editMode ? 'edit' : 'add'} className='form__form__actions__btn' type='submit'>{editMode ? 'Update' : 'Add'}</button>
        <button onClick={()=>naviagate('/')} type='button' className='form__form__actions__btn form__form__actions__btn--cancel'>Cancel</button>
      </div>
    </form>
  )
}

export default ContactForm