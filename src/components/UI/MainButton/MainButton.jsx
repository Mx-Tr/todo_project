import React from 'react';
import cl from './MainButton.module.css';

const MainButton = ({
                      children,
                      ...props
                    }) => {
  return (
    <button
      className={cl.btn}
      {...props}
    >
      {children}
    </button>
  );
};

export default MainButton;