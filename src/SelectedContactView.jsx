export default function SelectedContactView({
  selectedContact,
  setSelectedContact,
}) {
  return (
    <ul key={selectedContact.id}>
      <li>{selectedContact.name}</li>
      <li>{selectedContact.email}</li>
      <li>{selectedContact.phone}</li>
      <button onClick={() => setSelectedContact(null)}>Go Back</button>
    </ul>
  );
}
