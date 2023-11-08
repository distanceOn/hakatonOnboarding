import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './app/App'
import { Providers } from './app/providers/Providers'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
)
