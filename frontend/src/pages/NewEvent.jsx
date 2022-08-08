import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createEvent, reset } from '../features/events/eventSlice';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';

function NewEvent() {
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.events
  );

  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Open');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // Redirect when logged in
    if (isSuccess) {
      dispatch(reset());
      navigate('/events');
    }

    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    dispatch(createEvent({ date, title, description, status }));
  };

  return (
    <div>
      <>
        <BackButton url="/" />
        <section className="heading">
          <h1>Create New Class</h1>
          <p>Please fill out the form below</p>
        </section>

        <section className="form">
          <div className="form-group">
            <label htmlFor="name">Customer Name</label>
            <input type="text" className="form-control" value={name} disabled />
          </div>

          <div className="form-group">
            <label htmlFor="email">Customer Email</label>
            <input
              type="text"
              className="form-control"
              value={email}
              disabled
            />
          </div>

          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="date">Class Date</label>
              <input
                type="date"
                name="date"
                id="date"
                className="form-control"
                placeholder="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="time">Class Time</label>
              <input
                type="time"
                name="time"
                id="time"
                className="form-control"
                placeholder="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="title">Class Name</label>
              <input
                type="text "
                name="title"
                id="title"
                className="form-control"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="description">Class Description</label>
              <input
                type="text "
                name="description"
                id="description"
                className="form-control"
                placeholder="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="status">Class Status</label>
              <input
                type="text "
                name="status"
                id="status"
                className="form-control"
                placeholder="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              ></input>
            </div>

            <div className="form-group">
              <button className="btn btn-block">Submit</button>
            </div>
          </form>
        </section>
      </>
    </div>
  );
}

export default NewEvent;
