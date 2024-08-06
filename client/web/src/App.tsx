import viteLogo from '/vite.svg'

import reactLogo from './assets/react.svg'

import './App.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { TransactionView } from '@/features/transactions/components/transaction-view'

const App = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <TransactionView />
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </QueryClientProvider>
  )
}

export default App
