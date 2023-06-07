import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ name, age, lastLocation, description, image, Case }) => (
  <div className="w-80 rounded-lg border-2 shadow-lg transition duration-300 hover:shadow-xl">
    <img
      className="h-52 w-full rounded-t-lg bg-slate-400"
      src={image}
      alt="User"
    />
    <div className="px-6 py-4">
      <div className="mb-2 text-2xl font-bold text-gray-800">{name}</div>
      <div className="mb-2 text-xl font-semibold text-gray-600">{age}</div>
      <p className="mb-2 text-base text-gray-700">
        <span className="font-bold">Description:</span> {description}
      </p>
      <p className="mb-2 text-base text-gray-700">
        <span className="font-bold">Case:</span> {Case}
      </p>
      <p className="text-base text-gray-700">
        <span className="font-bold">Last Location:</span> {lastLocation}
      </p>
    </div>
  </div>
);

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  Case: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  lastLocation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default UserCard;
