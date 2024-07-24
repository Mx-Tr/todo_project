import React, { forwardRef } from 'react';
import cl from './MainInput.module.css';

const MainInput = forwardRef((props, ref) => {
  return (
    <input
      className={cl.mainInput}
      ref={ref}
      {...props}
    />
  );
});

export default MainInput;