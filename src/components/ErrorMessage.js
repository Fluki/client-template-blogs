import '../style/components/ErrorMessage.css';
import React from 'react';

const ErrorMessage = (props) => {
  return (
    <div className={'errorMessage'}>
      <p>{props.message}</p>
    </div>
  );
};

export default ErrorMessage;
