import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

function Admin() {
  return (
    <>
      <header className="ticket-header">
        <BackButton url="/" />
      </header>
      <h1>Admin Works</h1>
      <Link className="class-link" to="/new-event">
        Create New Class
      </Link>

      <hr />

      <Link className="class-link" to="/view-all-users">
        View All Users
      </Link>

      <hr />
    </>
  );
}

export default Admin;
