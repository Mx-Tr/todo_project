import React, { useState } from 'react';
import MainInput from '../UI/MainInput/MainInput';
import MainButton from '../UI/MainButton/MainButton';

const CategoriesForm = ({
                          categories,
                          createCategory,
                        }) => {

  const [tempCategory, setTempCategory] = useState('');
  const [isError, setIsError] = useState(false);

  const checkAvailability = (category) => {
    return category === tempCategory;
  };

  const addCategory = (e) => {
    e.preventDefault();

    if (!tempCategory || categories.find(checkAvailability)) {
      setIsError(true);
      return;
    }
    createCategory(tempCategory);
    setTempCategory('');
  };

  return (
    <form className={'categories__form'}>
      <MainInput
        style={{
          padding: '2px',
          fontSize: '22px',
          border: isError || tempCategory.length === 15 ? '1px solid red' : 'none',
        }}
        type={'text'}
        placeholder="New category"
        maxLength={15}
        value={tempCategory}
        onChange={(e) => {
          setTempCategory(e.target.value);
          setIsError(false);
        }}

      />

      <MainButton
        style={{ fontSize: '12px' }}
        onClick={addCategory}
      >
        Add
      </MainButton>
    </form>
  );
};

export default CategoriesForm;