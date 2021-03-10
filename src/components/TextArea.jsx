import React from 'react';

const TextArea = ({ name, id, value, onChange: handleChange }) => {
  return (
    <div>
      <label htmlFor={id}>{name}</label>
      <textarea onChange={handleChange} value={value} type="text" rows="20" cols="100" id={id} name={name} />
    </div>
  );
}
 
export default TextArea;
