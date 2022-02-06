import React from 'react';

const Things = ({ match }) => (
  <div>
    <h3>{match.params.ftId}</h3>

  </div>
);

export default Things;