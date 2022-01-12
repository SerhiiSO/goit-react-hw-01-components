import PropTypes from "prop-types";
import {
  TransactionTable,
  Transactionhead,
  TransactionRow,
  TransactionData,
} from "../styles/traisactions/Transactions.styled";

export default function Transaction({ items }) {
  return (
    <TransactionTable>
      <Transactionhead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Transactionhead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionRow key={id}>
            <TransactionData>{type}</TransactionData>
            <td>{amount}</td>
            <td>{currency}</td>
          </TransactionRow>
        ))}
      </tbody>
    </TransactionTable>
  );
}

Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
