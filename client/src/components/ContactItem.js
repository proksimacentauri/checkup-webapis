import '../App.css';

function ContactItem({id, name, email, streetName, city, postalCode, telephone, deleteHandler, editHandler}) {
    return (
      <div className="Contact-item">
        <div>
        <div className="name">{name}</div>
        <div className="email">Email: {email}</div>
        <div className="address">
        <div>Street: {streetName}</div>
        <div>&nbsp;City: {city}</div>
        <div>&nbsp;Postalcode: {postalCode} </div>
        </div>
        <div className="telephone"> Telephone: {telephone} </div>
        </div>
        <div className='button-container'>
        <button onClick={() => editHandler(id)}>edit</button>
        <button onClick={() => deleteHandler(id)}>delete</button>
        </div>
      </div>
    );
  }
  
  export default ContactItem;
  