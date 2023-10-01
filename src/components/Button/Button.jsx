// import React, { Component } from 'react';
import { Btn } from './Button.styled';
export const Button = ({ createLoadMore }) => {
  return (
    <Btn onClick={createLoadMore} type="button">
      <span>Load more</span>
    </Btn>
  );
};

// export class Button extends Component {
//   render() {
//     return (
//       <Btn onClick={this.props.createLoadMore} type="button">
//         <span>Load more</span>
//       </Btn>
//     );
//   }
// }
