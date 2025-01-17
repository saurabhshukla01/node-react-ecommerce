import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<h2>Product Listing Component</h2>} />
        <Route path="/add" element={<h2>Add Product Component</h2>} />
        <Route path="/update" element={<h2>Update Product Component</h2>} />
        <Route path="/logout" element={<h2>Logout Component</h2>} />
        <Route path="/profile" element={<h2>Profile Component</h2>} />
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
