import React from 'react';

function SuccessMessage({ show }) {
  if (!show) return null;

  return <div className="success-message">successfully added</div>;
}

export default SuccessMessage;
