import { useState } from 'react';

function AddressForm({ onSubmit, initialData = null }) {
  const [formData, setFormData] = useState(
    initialData || { firstName: '', lastName: '', phone: '' }
  );
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'The first name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'The last name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'The phone is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
      setFormData({ firstName: '', lastName: '', phone: '' });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white border border-black p-8 mb-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-black text-xs font-medium uppercase tracking-wider mb-2">
            First Name*
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 bg-white text-black focus:outline-none transition-colors ${
              errors.firstName 
                ? 'border-red-600' 
                : 'border-gray-300 focus:border-black'
            }`}
            placeholder="John"
          />
          {errors.firstName && (
            <p className="text-red-600 text-xs mt-2 font-medium">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label className="block text-black text-xs font-medium uppercase tracking-wider mb-2">
            Last Name*
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 bg-white text-black focus:outline-none transition-colors ${
              errors.lastName 
                ? 'border-red-600' 
                : 'border-gray-300 focus:border-black'
            }`}
            placeholder="Doe"
          />
          {errors.lastName && (
            <p className="text-red-600 text-xs mt-2 font-medium">{errors.lastName}</p>
          )}
        </div>

        <div>
          <label className="block text-black text-xs font-medium uppercase tracking-wider mb-2">
            Phone*
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 bg-white text-black focus:outline-none transition-colors ${
              errors.phone 
                ? 'border-red-600' 
                : 'border-gray-300 focus:border-black'
            }`}
            placeholder="+380 XX XXX XXXX"
          />
          {errors.phone && (
            <p className="text-red-600 text-xs mt-2 font-medium">{errors.phone}</p>
          )}
        </div>
      </div>

      <button 
        type="submit" 
        className="mt-6 w-full md:w-auto bg-black hover:bg-gray-800 text-white font-medium text-sm uppercase tracking-wider py-3 px-8 transition-colors"
      >
        Add Contact
      </button>
    </form>
  );
}

export default AddressForm;
