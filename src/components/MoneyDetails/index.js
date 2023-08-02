// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {income, expenses, balance} = props
  return (
    <>
      <div className="balanceContainer">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="nameAndMoneyContainer">
          <p className="moneyDetailsWord">Your Balance</p>
          <p className="money" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="incomeContainer">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="nameAndMoneyContainer">
          <p className="moneyDetailsWord">Your Income</p>
          <p className="money" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="expensesContainer">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="nameAndMoneyContainer">
          <p className="moneyDetailsWord">Your Expenses</p>
          <p className="money" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </>
  )
}
export default MoneyDetails
