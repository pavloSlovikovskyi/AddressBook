import { useState } from 'react';

function AddressTable({ contacts, onEdit, onUpdate, onDelete, editingId }) {
  const [editData, setEditData] = useState({});

  const handleEdit = (contact) => {
    onEdit(contact.id);
    setEditData(contact);
  };

  const handleSave = (id) => {
    if (editData.firstName.trim() && editData.lastName.trim() && editData.phone.trim()) {
      onUpdate(id, editData);
      setEditData({});
    }
  };

  const handleCancel = () => {
    onEdit(null);
    setEditData({});
  };

  const handleChange = (field, value) => {
    setEditData(prev => ({ ...prev, [field]: value }));
  };

  if (contacts.length === 0) {
    return (
      <div className="border-2 border-black p-16 text-center">
        <p className="text-black text-sm uppercase tracking-wider font-light">No data to display</p>
      </div>
    );
  }

  return (
    <div className="border-2 border-black overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b-2 border-black bg-black text-white">
              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider">
                First Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider">
                Last Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {contacts.map((contact, index) => (
              <tr 
                key={contact.id} 
                className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-mono">
                  {contact.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                  {editingId === contact.id ? (
                    <input
                      type="text"
                      value={editData.firstName}
                      onChange={(e) => handleChange('firstName', e.target.value)}
                      className="w-full px-2 py-1 border-2 border-black bg-white focus:outline-none"
                    />
                  ) : (
                    contact.firstName
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                  {editingId === contact.id ? (
                    <input
                      type="text"
                      value={editData.lastName}
                      onChange={(e) => handleChange('lastName', e.target.value)}
                      className="w-full px-2 py-1 border-2 border-black bg-white focus:outline-none"
                    />
                  ) : (
                    contact.lastName
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-mono">
                  {editingId === contact.id ? (
                    <input
                      type="text"
                      value={editData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="w-full px-2 py-1 border-2 border-black bg-white focus:outline-none"
                    />
                  ) : (
                    contact.phone
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {editingId === contact.id ? (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleSave(contact.id)}
                        className="bg-black hover:bg-gray-800 text-white px-4 py-1 text-xs uppercase tracking-wider transition-colors"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="bg-white hover:bg-gray-100 text-black border-2 border-black px-4 py-1 text-xs uppercase tracking-wider transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(contact)}
                        className="bg-white hover:bg-gray-100 text-black border-2 border-black px-4 py-1 text-xs uppercase tracking-wider transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onDelete(contact.id)}
                        className="bg-black hover:bg-gray-800 text-white px-4 py-1 text-xs uppercase tracking-wider transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddressTable;
