import { useState } from 'react';
import AddressForm from './AddressForm';
import AddressTable from './AddressTable';
import SearchBar from './SearchBar';

function AddressBook() {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingId, setEditingId] = useState(null);

  const addContact = (contact) => {
    const newContact = {
      ...contact,
      id: Date.now()
    };
    setContacts([...contacts, newContact]);
  };

  const updateContact = (id, updatedContact) => {
    setContacts(contacts.map(c => c.id === id ? { ...updatedContact, id } : c));
    setEditingId(null);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.phone.includes(searchQuery)
  );

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-5xl font-light tracking-tight text-black mb-12 border-b border-black pb-4">
        Address Book | Test 1
      </h1>
      
      <AddressForm onSubmit={addContact} />
      
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <AddressTable
        contacts={filteredContacts}
        onEdit={setEditingId}
        onUpdate={updateContact}
        onDelete={deleteContact}
        editingId={editingId}
      />
    </div>
  );
}

export default AddressBook;
