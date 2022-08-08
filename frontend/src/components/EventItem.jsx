import { Link } from 'react-router-dom';
import DateFormatter from './DateFormatter';

function EventItem({ event }) {
  return (
    <div className="ticket">
      <div> {<DateFormatter date={event?.createdAt} />}</div>
      <div>{event.title}</div>
      <div className={`status status-${event.status}`}>{event.status}</div>
      <Link to={`/events/${event._id}`} className="btn btn-reverse btn-sm">
        View
      </Link>
    </div>
  );
}

export default EventItem;
