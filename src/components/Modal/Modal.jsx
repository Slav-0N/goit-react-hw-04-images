import { useEffect } from 'react';
import { Div } from './Modal.styled';

export const Modal = ({ imgAddr, onClose }) => {
  const handlekeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    console.log('listener did mount');
    window.addEventListener('keydown', handlekeyDown);
    return () => {
      console.log('unmounted');
      window.removeEventListener('keydown', handlekeyDown);
    };
  }, []);

  // useEffect(() => {
  //   window.addEventListener('keydown', handlekeyDown);
  // }, [handlekeyDown]);

  // useEffect(() => {
  //   return window.removeEventListener('keydown', handlekeyDown);
  // });

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

// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handlekeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handlekeyDown);
//   }

//   handlekeyDown = event => {
//     if (event.code === 'Escape') {
//       this.props.onClose();
//     }
//   };
//   handleBackdropClick = e => {
//     if (e.target === e.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return (
//       <Div>
//         <div onClick={this.handleBackdropClick}>
//           <img src={this.props.imgAddr} alt="" target="_self" />
//         </div>
//       </Div>
//     );
//   }
// }
