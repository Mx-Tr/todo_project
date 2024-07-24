import React, { useEffect, useRef, useState } from 'react';
import MainInput from '../UI/MainInput/MainInput';
import MainButton from '../UI/MainButton/MainButton';

const ChangeCategoryNameForm = ({
                                  selectedCategory,
                                  changeCategoryName,
                                  modalVisibility,
                                }) => {

  const [tempNewCategoryName, setTempNewCategoryName] = useState('');
  const [isError, setIsError] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (modalVisibility && inputRef.current) {
      inputRef.current.focus();
    }
  }, [modalVisibility]);

  const renameCategory = (e) => {
    e.preventDefault();

    if (!tempNewCategoryName) {
      setIsError(true);
      return;
    }
    changeCategoryName(selectedCategory, tempNewCategoryName);
    setTempNewCategoryName('');
  };

  return (
    <form className={'changeCategoryNameForm'}>
      <h1
        style={{
          marginBottom: '1rem',
        }}
      >{selectedCategory} rename to:
      </h1>

      <MainInput
        style={{
          marginBottom: '1rem',
          fontSize: '22px',
          border: isError || tempNewCategoryName.length === 15 ? '1px solid red' : 'none',
        }}
        ref={inputRef}
        type={'text'}
        placeholder={'New category name'}
        maxLength={15}
        value={tempNewCategoryName}
        onChange={(e) => {
          setTempNewCategoryName(e.target.value);
          setIsError(false);
        }}
      />

      <MainButton onClick={renameCategory}>
        Approve
      </MainButton>
    </form>
  );
};

export default ChangeCategoryNameForm;