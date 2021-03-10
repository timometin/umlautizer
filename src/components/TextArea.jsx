import React from 'react';

const TextArea = ({ name, id, value, onChange: handleChange, className }) => {
  return (
    <div className={className}>
      <label htmlFor={id}>{name}</label>
      <textarea onChange={handleChange} value={value} type="text" id={id} name={name} />
    </div>
  );
}
 
export default TextArea;
