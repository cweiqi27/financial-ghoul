import { useTransaction } from '../api/get-transaction'

export const TransactionView = () => {
  const lol = useTransaction({ transactionId: 15 })

  return <div>{lol.data?.data}</div>
}
