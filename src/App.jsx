import { useState, useEffect } from 'react'
import ContactTable from './ContactTable';
import SelectedContactView from './SelectedContactView';
import './App.css'

function App() {
const [contactList, setContactList] = useState(); 
const [selectedContact, setSelectedContact] = useState();

useEffect(() => {
  const fetchContacts = async () => {
    const API_URL = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
    const response = await fetch(API_URL);
    const parsedResponse = await response.json();
    setContactList(parsedResponse);
    };
  fetchContacts();
},[]);

  return (
    <>
      {selectedContact ? <SelectedContactView selectedContact={selectedContact} setSelectedContact={setSelectedContact}/> : 
      <ContactTable contactList={contactList} selectedContact={selectedContact} setSelectedContact={setSelectedContact}/>}
    </>
  )
}

export default App
