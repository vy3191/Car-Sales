import React from 'react';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  const set = [...new Set(props.car.features)]
  return (
    <div className="content">
      <h6>Added features:</h6>
      
      {props.car.features.length ? (
        <ol type="1">
          {set.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
