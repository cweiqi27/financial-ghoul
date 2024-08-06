import { queryOptions, useQuery } from '@tanstack/react-query'

import { api } from '@/lib/api-client'
import { QueryConfig } from '@/lib/react-query'

const getTransaction = (transactionId: string | number) =>
  api.id({ id: transactionId }).get()

export const getTransactionOptions = (transactionId: string | number) =>
  queryOptions({
    queryKey: ['transactions', transactionId],
    queryFn: () => getTransaction(transactionId),
  })

export const useTransaction = ({
  transactionId,
  queryConfig,
}: {
  transactionId: string | number
  queryConfig?: QueryConfig<typeof getTransactionOptions>
}) =>
  useQuery({
    ...getTransactionOptions(transactionId),
    ...queryConfig,
  })
