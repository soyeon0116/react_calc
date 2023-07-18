import React, { Component } from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';
import { MdDelete } from 'react-icons/md';

export class ExpenseList extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className='list'>
          <ExpenseItem/>
        </ul>
        <button className='btn'>목록지우기<MdDelete class="btn-icon"/></button>
      </React.Fragment>
    )
  }
}

export default ExpenseList