import React, { Component } from 'react';
import './ExpenseList.css';

export class ExpenseList extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className='list'>

        </ul>
        <button className='btn'>목록지우기</button>
      </React.Fragment>
    )
  }
}

export default ExpenseList