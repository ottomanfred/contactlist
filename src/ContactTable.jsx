import Contacts from "./Contacts"

export default function ContactTable({contactList, selectedContact, setSelectedContact}) {

return (
    <table>
        <thead>
          <tr>
            <th colSpan={3}>Contact List</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
          <Contacts contactList={contactList} selectedContact={selectedContact} setSelectedContact={setSelectedContact}/>
        </tbody>
      </table>
)
}