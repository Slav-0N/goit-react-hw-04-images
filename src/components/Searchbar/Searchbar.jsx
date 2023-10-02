import { useState } from 'react';
import { Header } from './Searchbar.styled';

const Searchbar = ({ createSearchRequire }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    createSearchRequire(inputValue);
  };

  return (
    <Header>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="button" />

        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={inputValue}
        />
      </form>
    </Header>
  );
};

export default Searchbar;
