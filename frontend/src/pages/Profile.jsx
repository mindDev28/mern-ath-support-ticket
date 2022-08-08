import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, reset } from '../features/auth/authSlice';

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };
  return (
    <>
      <section className="heading">
        <h1>{user.name}'s Profile</h1>
        <hr />
        <img
          className="profile-img"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt=""
        />
      </section>

      <button className="btn btn-block" onClick={onLogout}>
        <FaSignOutAlt /> Logout
      </button>
    </>
  );
}

export default Profile;
