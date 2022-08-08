import axios from 'axios';

const API_URL = '/api/events/';

// Create new event
const createEvent = async (eventData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, eventData, config);

  return response.data;
};

// Get events
const getEvents = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Get event
const getEvent = async (eventId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + eventId, config);

  return response.data;
};

// Edit class
const updateEvent = async (eventId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + eventId, config);

  return response.data;
};

// Get close class
const closeEvent = async (eventId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    API_URL + eventId,
    { status: 'Closed' },
    config
  );

  return response.data;
};

const eventService = {
  createEvent,
  getEvents,
  getEvent,
  closeEvent,
  updateEvent,
};

export default eventService;
