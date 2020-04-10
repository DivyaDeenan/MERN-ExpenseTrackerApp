import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const {error,addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
   
    const newTransaction = {
      text,
      amount:amount == '' ? '' : +amount
    }
   
    addTransaction(newTransaction);
    e.target.parentElement.getElementsByTagName('form')[0][0].value = '';
    e.target.parentElement.getElementsByTagName('form')[0][1].value = '';
    setText('');
    setAmount('');
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div style={{ color: 'red' }}>{error}</div>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text"  onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number"  onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
