import React from 'react';

export default React.memo(function Func({ title }) {
  console.log('Func', 'Component redered');
  return (
    <h1>Func - {title}</h1>
  );
})
