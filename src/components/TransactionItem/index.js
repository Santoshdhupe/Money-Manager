// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteHistory} = props
  const {title, amount, type, id} = transactionDetails
  const onclickDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="transactionList">
      <p className="historyDetails">{title}</p>
      <p className="historyDetails">{amount}</p>
      <p className="historyDetails">{type}</p>
      <button
        className="deleteButton"
        type="button"
        data-testid="delete"
        onClick={onclickDelete}
      >
        <img
          className="deleteImage"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        />
      </button>
    </li>
  )
}

export default TransactionItem
