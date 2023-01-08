import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import ContactItem from "./ContactItem";
import '../App.css';

function ListContacts() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  useEffect(() => {
    try {
      axios.get(`https://localhost:5001/api/Address`).then((response) => {
        setData(response.data);
        setList(response.data);
        setLoaded(true);
      });
    } catch (error) {
      setError(error);
    }
  }, []);

  const deleteHandler = (id) => {
    axios
    .delete(`https://localhost:5001/api/Address/${id}`)
    .then((response) => {
      let newList = [...data];
      newList = newList.filter(item => item.id !== id);
      console.log(newList);
      setData(newList);
      setList(newList);
      console.log(response);
    });

  };

  const editHandler = (id) => {
    navigate(`adress/${id}/edit`);
  }

  const addHandler = () => {
    navigate(`adress/add`);
  }

  const searchFilterHandler = event => {
    const keyword = event.target.value.toLowerCase();
    const filtered_users = list.filter(contact => {
      const name = contact.name;
      return name.toLowerCase().indexOf(keyword) > -1;
    });
    event.target.value.length <= 0 ? setList(data) : setList(filtered_users);
  };
  
  return (
    <div className="Contact-list">
      <div className="title-container">
      <h1>Contacts</h1>
      </div>
      <div className="search-container">
        <input onChange={searchFilterHandler} placeholder="Search person" className="search"/> 
        <div style={{ margin: '8px'}}>
          <button onClick={() => addHandler()} style={{padding: '12px 16px'}}>Add Contact</button>
        </div>
      </div>
      { loaded ? ( <>
        {list.map((item) => (
        <ContactItem key={item.id} {...item} deleteHandler={deleteHandler} editHandler={editHandler} />
      ))}
      </>) : <h1>loading...</h1> 
      }
    </div>
  );
}

export default ListContacts;
