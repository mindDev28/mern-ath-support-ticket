import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Admin from './pages/Admin';
import Event from './pages/Event';

import Events from './pages/Events';
import Home from './pages/Home';
import Login from './pages/Login';
import NewEvent from './pages/NewEvent';
import Profile from './pages/Profile';
import Register from './pages/Register';
import SingleClass from './pages/SingleClass';
import VeiwAllUsers from './pages/VeiwAllUsers';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/events" element={<Events />} />
            <Route path="/events/:eventId" element={<Event />} />

            <Route path="/admin" element={<Admin />} />
            <Route path="/view-all-users" element={<VeiwAllUsers />} />
            <Route path="/new-event" element={<NewEvent />} />
          </Routes>
          <footer>footer</footer>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
