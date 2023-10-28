import css from './TransactionsList.module.css'

const TransactionsHistory = ({ transactions }) => {
  return <table className={ css.transactionshistory }>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {transactions.map(({ id,type,amount,currency }) => 
      <tr key={id}>
        <td>{ type }</td>
        <td>{ amount }</td>
        <td>{ currency }</td>
        </tr>
    )}
  </tbody>
</table>
};


export default TransactionsHistory