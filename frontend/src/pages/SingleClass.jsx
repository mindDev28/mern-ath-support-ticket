import React from 'react';
import BackButton from '../components/BackButton';

function SingleClass() {
  return (
    <>
      <header className="ticket-header">
        <BackButton url="/classes" />
      </header>
      <h1>Single Class works</h1>
    </>
  );
}

export default SingleClass;
