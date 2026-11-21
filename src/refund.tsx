import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Policy } from './pages/Policy'
import { policies } from './policies'
import './styles/theme.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Policy policy={policies.refund} />
  </StrictMode>,
)
