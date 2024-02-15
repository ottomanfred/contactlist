export default function Contacts({ contactList, setSelectedContact }) {
  return contactList?.map((contact) => (
    <tr key={contact.id} onClick={() => setSelectedContact(contact)}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  ));
}
