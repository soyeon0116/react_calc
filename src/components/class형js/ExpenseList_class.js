import React, { Component } from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';
import { MdDelete } from 'react-icons/md';

export class ExpenseList extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className='list'>
          {this.props.initialExpense.map(expense =>{
            return(
              <ExpenseItem 
                expense={expense} 
                key={expense.id}
                handleDelete={this.props.handleDelete}
                />
            )
          })}
        </ul>
        <button className='btn'>목록지우기<MdDelete className="btn-icon"/></button>
      </React.Fragment>
      //<React.Fragment>는 쓸데 없이 div로 감싸고 싶지 않을때 사용하는데, <></>로도 바꿀 수 있다.
    )
  }
}

export default ExpenseList