import { useState } from "react";
import "./App.css";
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from "./components/ExpenseList";
import { Alert } from "./components/Alert";

const App = () => {
  
  const [charge,setCharge] = useState('');

  const [amount, setamount] = useState(0);

  const [alert, setAlert] = useState({show:false})

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
      handleAlert({type:'success',text:'아이템이 생성되었습니다.'})
    }
    else
    {
      alert('error')
      handleAlert({type:'danger',text:'charge는 빈 값일 수 없으며 amount는 0보다 커야 합니다.'})
    }
  }

  const handleDelete = (id) =>{
    //const newExpenses = this.initialExpense.filter(expense => expense.id !== expense)
    const newExpenses = expenses.filter(expense => expense.id !== id)
    //setState() 원래 데이터 : 변경 된 데이터
    console.log(newExpenses)
    setExpenses(newExpenses)
    handleAlert({type:'danger',text:'아이템이 삭제되었습니다.'})
  }

  const handleAlert = ({type,text}) =>{
    setAlert({show:true,type,text});
    setTimeout(()=>{
      setAlert({show:false})
    },7000)
  }

    return (
      <main className="main-container">
        {alert.show ? <Alert type={alert.type} text={alert.text}/> : null}
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