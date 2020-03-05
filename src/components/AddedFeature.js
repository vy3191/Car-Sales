import React from 'react';

const AddedFeature = props => {
  console.log(props.id)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.remove(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
