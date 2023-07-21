import { Component } from "react";
import "./App.css";
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from "./components/ExpenseList";

class App extends Component {
  
  //react state 리액트에서 데이터가 변했을때 화면을 다시 랜더링 해주기 위해 사용하는 것
  constructor(props){
    super(props);
    this.state = {
      expenses:[
        { id: 1, charge:'렌트비',amount : 1600},
        { id: 2, charge:'교통비',amount : 400},
        { id: 3, charge:'식비',amount : 1200}
      ]
    }
  }

  // initialExpense = [
  //   { id: 1, charge:'렌트비',amount : 1600},
  //   { id: 2, charge:'교통비',amount : 400},
  //   { id: 3, charge:'식비',amount : 1200}
  // ]

  handleDelete = (id) =>{
    //const newExpenses = this.initialExpense.filter(expense => expense.id !== expense)
    const newExpenses = this.state.expenses.filter(expense => expense.id !== id)
    //setState() 원래 데이터 : 변경 된 데이터
    console.log(newExpenses)
    this.setState({expenses:newExpenses})
  }

  render() {
    return (
      <main className="main-container">
        <h1>예산 계산기</h1>
        <div style={{width:'100%', backgroundColor:'white',padding:'1rem'}}>
          <ExpenseForm/>
        </div>
        <div style={{width:'100%', backgroundColor:'white',padding:'1rem'}}>
        <ExpenseList 
          //initialExpense={this.initialExpense}
          initialExpense={this.state.expenses}
          handleDelete={this.handleDelete}
        />
        </div>

        <div style={{display: 'flex',justifyContent:'end',marginTop:'1rem'}}>
          <p style={{fontSize: '2rem'}}>
            총 지출 : 
            <span>원</span>
          </p>
        </div>
      </main>
    )
  }
}

export default App