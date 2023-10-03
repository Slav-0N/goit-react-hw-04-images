import { useEffect } from 'react';
import { Div } from './Modal.styled';

export const Modal = ({ imgAddr, onClose }) => {
  useEffect(() => {
    const handlekeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handlekeyDown);
    return () => {
      window.removeEventListener('keydown', handlekeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Div>
      <div onClick={handleBackdropClick}>
        <img src={imgAddr} alt="" target="_self" />
      </div>
    </Div>
  );
};
