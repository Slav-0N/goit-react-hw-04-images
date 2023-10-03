import React, { useEffect, useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { getAllPitures } from './api/api';
import { ImageGallary } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Section } from './App.styled';
import { Modal } from './Modal/Modal';
import { Spinner } from './Loader/Loader';

const App = () => {
  const [pictures, setPictures] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const [modalPicture, setModalPicture] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    if (searchText === '') {
      return;
    }
    setIsLoading(true);

    getAllPitures(searchText, page)
      .then(data => {
        if (!data.hits.length) {
          alert('no pictures');
          return;
        }

        setPictures(prevPic => [...prevPic, ...data.hits]);
        setTotalImages(data.totalHits);
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page, searchText]);

  const toggleModal = (img = null) => setModalPicture(img);

  const createSearchRequire = searchTextInput => {
    setSearchText(searchTextInput);
    setPage(1);
    setPictures([]);
    setTotalImages(0);
  };

  const createLoadMore = () => setPage(prevPage => prevPage + 1);

  return (
    <Section>
      {modalPicture && <Modal imgAddr={modalPicture} onClose={toggleModal} />}
      <Searchbar createSearchRequire={createSearchRequire} />

      {pictures.length > 0 && (
        <ImageGallary pictures={pictures} toggleModal={toggleModal} />
      )}
      {isLoading ? <Spinner /> : ''}
      {pictures.length !== totalImages && !isLoading && (
        <Button createLoadMore={createLoadMore} />
      )}
    </Section>
  );
};
export default App;
