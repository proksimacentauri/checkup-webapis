import { useState} from "react";
import axios from "axios";
import { useNavigate, useParams  } from 'react-router-dom';
import '../App.css';

function AddContact() {
  const [contact, setContact] = useState({
    name: '', 
    email: '', 
    streetName: '', 
    city: '', 
    postalCode: '', 
    telephone: '', 
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log()
    axios
    .post(`https://localhost:5001/api/Address/`, {
        name: contact.name,
        email: contact.email,
        streetName: contact.streetName,
        telephone: contact.telephone,
        postalCode: contact.postalCode,
        city: contact.city
    })
    .then((response) => {
      navigate(`/`);
    });

  }

  return (
    <div className="Contact-edit">
      <h1>Add Contact</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:
          <input type="text" name="name" onChange={handleChange} value={contact.name} />
        </label>
        <label>Email:
          <input type="text" name="email" onChange={handleChange} value={contact.email} />
        </label>
        <label>Street:
          <input type="text" name="streetName" onChange={handleChange}  value={contact.streetName} />
        </label>
        <label>City:
          <input type="text" name="city" onChange={handleChange} value={contact.city} />
        </label>
        <label>Postalcode:
          <input type="text" name="postalCode" onChange={handleChange} value={contact.postalCode} />
        </label>
        <label>Telephone:
          <input type="text" name="telephone" onChange={handleChange} value={contact.telephone}/>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
    );
  }
  
  export default AddContact;
  