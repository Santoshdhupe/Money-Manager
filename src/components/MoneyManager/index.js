import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionHistoryList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  addTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      each => each.optionId === optionId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionHistoryList: [
        ...prevState.transactionHistoryList,
        newTransaction,
      ],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  deleteHistory = id => {
    const {transactionHistoryList} = this.state
    const filteredHistoryList = transactionHistoryList.filter(
      eachHistory => id !== eachHistory.id,
    )
    this.setState({transactionHistoryList: filteredHistoryList})
  }

  onchangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onchangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onchangeType = event => {
    this.setState({optionId: event.target.value})
  }

  getExpenses = () => {
    const {transactionHistoryList} = this.state
    let expenses = 0
    transactionHistoryList.forEach(eachHistory => {
      if (eachHistory.type === transactionTypeOptions[1].displayText) {
        expenses += eachHistory.amount
      }
    })
    return expenses
  }

  getIncome = () => {
    const {transactionHistoryList} = this.state
    let income = 0
    transactionHistoryList.forEach(eachHistory => {
      if (eachHistory.type === transactionTypeOptions[0].displayText) {
        income += eachHistory.amount
      }
    })
    return income
  }

  getBalance = () => {
    const {transactionHistoryList} = this.state
    let income = 0
    let expenses = 0
    let balance = 0
    transactionHistoryList.forEach(eachHistory => {
      if (eachHistory.type === transactionTypeOptions[0].displayText) {
        income += eachHistory.amount
      } else {
        expenses += eachHistory.amount
      }
    })
    balance = income - expenses
    return balance
  }

  render() {
    const {
      transactionHistoryList,
      titleInput,
      amountInput,
      optionId,
    } = this.state
    const income = this.getIncome()
    const expenses = this.getExpenses()
    const balance = this.getBalance()
    return (
      <div className="appContainer">
        <div className="nameContainer">
          <h1 className="heading">Hi, Richard</h1>
          <p className="description">
            Welcome back to your
            <span className="moneyWord"> Money Manager</span>
          </p>
        </div>
        <div className="moneyDetailsContainer">
          <MoneyDetails income={income} expenses={expenses} balance={balance} />
        </div>
        <div className="transactionAndHistoryContainer">
          <form className="transactionForm" onSubmit={this.addTransaction}>
            <h1 className="formHeading">Add Transaction</h1>
            <label className="titleInputWord" htmlFor="title">
              TITLE
            </label>
            <input
              className="input"
              type="text"
              placeholder="TITLE"
              id="title"
              onChange={this.onchangeTitleInput}
              value={titleInput}
            />
            <label className="titleInputWord" htmlFor="amount">
              AMOUNT
            </label>
            <input
              className="input"
              type="text"
              placeholder="AMOUNT"
              value={amountInput}
              id="amount"
              onChange={this.onchangeAmountInput}
            />
            <label className="titleInputWord" htmlFor="type">
              TYPE
            </label>
            <select
              className="input"
              value={optionId}
              onChange={this.onchangeType}
              id="type"
            >
              {transactionTypeOptions.map(eachOption => (
                <option value={eachOption.optionId} key={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <button className="button" type="submit">
              Add
            </button>
          </form>
          <div className="historyContainer">
            <h1 className="formHeading">History</h1>
            <ul className="listContainer">
              <li className="historyDescription">
                <p className="history">Title</p>
                <p className="history">Amount</p>
                <p className="history">Type</p>
              </li>
              {transactionHistoryList.map(each => (
                <TransactionItem
                  transactionDetails={each}
                  key={each.id}
                  deleteHistory={this.deleteHistory}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
