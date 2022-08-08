import React from 'react';
import BackButton from '../components/BackButton';

function VeiwAllUsers() {
  return (
    <>
      <header className="ticket-header">
        <BackButton url="/admin" />
      </header>
      <h1>View all users works</h1>
    </>
  );
}

export default VeiwAllUsers;
