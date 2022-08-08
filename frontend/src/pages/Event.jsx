import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Modal from 'react-modal';
import { FaPlus } from 'react-icons/fa';
import BackButton from '../components/BackButton';
import { closeEvent, getEvent } from '../features/events/eventSlice';

const customStyles = {
  content: {
    width: '600px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    position: 'relative',
  },
};

Modal.setAppElement('#root');

function Event() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [noteText, setNoteText] = useState('');
  const { event, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.events
  );

  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { eventId } = useParams();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getEvent(eventId));

    // eslint-disable-next-line
  }, [isError, message, eventId]);

  // Close ticket
  const onTicketClose = () => {
    dispatch(closeEvent(eventId));
    toast.success('Ticket Closed');
    navigate('/events');
  };

  // Create note submit
  const onNoteSubmit = (e) => {
    e.preventDefault();
    //dispatch(createNote({ noteText, ticketId }));
    closeModal();
  };

  // Open/Close modal
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="ticket-page">
      <header className="ticket-header">
        <BackButton url="/events" />
        <h2>
          Ticket ID: {event._id}
          <span className={`status status-${event.status}`}>
            {event.status}
          </span>
        </h2>
        <h3>
          Date Submitted: {new Date(event.createdAt).toLocaleString('en-US')}
        </h3>

        <h3>Product: {event.title}</h3>

        <hr />
        <div className="ticket-desc">
          <h3>Description of Issue</h3>
          <p>{event.description}</p>
        </div>
        <h2>Notes</h2>
      </header>

      {event.status !== 'Closed' && (
        <button className="btn" onClick={openModal}>
          <FaPlus /> Add Note{' '}
        </button>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Note"
      >
        <h2>Add Note</h2>
        <button className="btn-close" onClick={closeModal}>
          X
        </button>

        <form onSubmit={onNoteSubmit}>
          <div className="form-group">
            <textarea
              name="noteText"
              id="noteText"
              className="form-control"
              placeholder="Note text"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </Modal>

      {/* {notes.map((note) => (
        <NoteItem key={note._id} note={note} />
      ))} */}

      {event.status !== 'Closed' && (
        <button onClick={onTicketClose} className="btn btn-block btn-danger">
          Close Ticket
        </button>
      )}
    </div>
  );
}

export default Event;
