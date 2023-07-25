import React from 'react';
import './ExpenseItem.css';
import {MdEdit} from 'react-icons/md';
import {MdDelete} from 'react-icons/md';

const ExpenseItem = ({expense, handleDelete}) => {

    return (
      <li className='item'>
        <div className='info'>
          <span className='expense'>{expense.charge}</span>
          <span className='amount'>{expense.amount} 원</span>
        </div>
        <div>
          <button className='edit-btn'><MdEdit/></button>
          <button className='clear-btn' 
          onClick={() => {
            console.log(expense.id)
            handleDelete(expense.id)
          }}><MdDelete/></button>
        </div>
      </li>
    )

}

export default ExpenseItem