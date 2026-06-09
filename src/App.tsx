import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './app/AppLayout'
import { AuthPage } from './pages/auth/AuthPage'
import { HomePage } from './pages/home/HomePage'
import { InquiriesPage } from './pages/inquiries/InquiriesPage'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="inquiries" element={<InquiriesPage />} />
      </Route>
      <Route path="auth" element={<AuthPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export default App
