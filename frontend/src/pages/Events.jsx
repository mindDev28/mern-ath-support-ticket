import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getEvents, reset } from '../features/events/eventSlice';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import EventItem from '../components/EventItem';

function Events() {
  const { events, isLoading, isSuccess } = useSelector((state) => state.events);

  const [activeStatus, setActiveStatus] = useState('Open');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  console.log(events.filter((event) => event.status.includes('Open')));
  console.log(activeStatus);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <BackButton url="/" />
      <div className="ticket">
        <h1>Classes</h1>
        <button className="btn" onClick={() => setActiveStatus('Closed')}>
          Closed
        </button>
        <p> or </p>
        <button className="btn" onClick={() => setActiveStatus('Open')}>
          Open
        </button>
      </div>

      <div className="tickets">
        <div className="ticket-headings">
          <div>Date</div>
          <div>Name</div>
          <div>Status</div>
          <div></div>
        </div>

        <div>
          {events
            .filter((event) => event.status.includes(activeStatus))
            .sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
            .map((event) => (
              <EventItem key={event._id} event={event} />
            ))}
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Events;
