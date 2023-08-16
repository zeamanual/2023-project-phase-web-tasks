import Contact from "../models/contact";

export let contacts:Contact[] =[]

export let addContact = (contact:Contact)=>{
    contacts.push(contact)
}

export let editContact = (updatedContact:Contact) =>{
    contacts= contacts.filter(contact=>contact.id!=updatedContact.id)
    contacts.push(updatedContact)
}
export let deleteContact = (id:string) =>{
    contacts= contacts.filter(contact=>contact.id!=id)
}
export let getContacts:()=>Contact[] = ()=>{
    return contacts
}
