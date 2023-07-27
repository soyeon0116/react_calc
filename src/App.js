import { useState } from "react";
import "./App.css";
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from "./components/ExpenseList";

const App = () => {
  
  const [charge,setCharge] = useState('');

  const [amount, setamount] = useState(0)

  //[변수 이름 getter, state를 정하는 함수 setter] = useState리액트 내장(value, setValue를 리턴하고 초기 state를 정하는 Hook)
  const [expenses, setExpenses] = useState([
    { id: 1, charge:'렌트비',amount : 1600},
    { id: 2, charge:'교통비',amount : 400},
    { id: 3, charge:'식비',amount : 1200}
  ])

  const handleCharge = (e) => {
    setCharge(e.target.value)
  }

  const handleAmount = (e) =>{
    setamount(e.target.valueAsNumber)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(charge !=="" && amount !== "")
    {
      const newExpense = { id: crypto.randomUUID(),charge,amount};
      //불변성 지켜주기 위해서 새로운 expenses 생성
      const newExpenses = [...expenses,newExpense];
      setExpenses(newExpenses);
      setCharge('');
      setamount(0);
    }
    else
    {
      alert('error')
    }
  }

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
          <ExpenseForm
            handleCharge = {handleCharge}
            charge={charge}
            handleAmount = {handleAmount}
            amount = {amount}
            handleSubmit ={handleSubmit}
          />
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