import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import '../App.css';

function EditContact() {
  const [contact, setContact] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  
  useEffect(() => {
    try {
      axios.get(`https://localhost:5001/api/Address/${params.id}`).then((response) => {
        setContact(response.data);
        setLoaded(true);
      });
    } catch (error) {
      setError(error);
    }
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name,value)
    setContact(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log()
    axios
    .put(`https://localhost:5001/api/Address/${params.id}`, {
        name: contact.name,
        email: contact.email,
        streetName: contact.streetName,
        telephone: contact.telephone,
        postalCode: contact.postalCode,
        city: contact.city
    })
    .then((response) => {
      console.log(response.data);
      navigate(`/`);
    });

  }

  console.log(contact);

  return (
    <div className="Contact-edit">
      <h1>Edit Contact</h1>
      <form onSubmit={handleSubmit}>
        {loaded ? (<><label>Name:
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
        </label></>) : <h1>loading</h1>}
        <button type="submit">Submit</button>
      </form>
    </div>
    );
  }
  
  export default EditContact;
  