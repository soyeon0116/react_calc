import { useState } from "react";
import "./App.css";
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from "./components/ExpenseList";

const App = () => {
  
  //[변수 이름 getter, state를 정하는 함수 setter] = useState리액트 내장(value, setValue를 리턴하고 초기 state를 정하는 Hook)
  const [expenses, setExpenses] = useState([
    { id: 1, charge:'렌트비',amount : 1600},
    { id: 2, charge:'교통비',amount : 400},
    { id: 3, charge:'식비',amount : 1200}
  ])

  const handleDelete = (id) =>{
    //const newExpenses = this.initialExpense.filter(expense => expense.id !== expense)
    const newExpenses = expenses.filter(expense => expense.id !== id)
    //setState() 원래 데이터 : 변경 된 데이터
    console.log(newExpenses)
    setExpenses(newExpenses)
  }

    return (
      <main className="main-container">
        <h1>예산 계산기</h1>
        <div style={{width:'100%', backgroundColor:'white',padding:'1rem'}}>
          <ExpenseForm/>
        </div>
        <div style={{width:'100%', backgroundColor:'white',padding:'1rem'}}>
        <ExpenseList 
          //initialExpense={this.initialExpense}
          initialExpense={expenses}
          handleDelete={handleDelete}
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

export default App