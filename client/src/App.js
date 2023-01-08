import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListContacts from './components/ListContacts';
import EditContact from './components/EditContact';
import AddContact from './components/AddContact';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ListContacts />} />
      <Route path="adress/:id/edit" element={<EditContact />} />
      <Route path="adress/add" element={<AddContact />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
