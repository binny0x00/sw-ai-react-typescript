import { Outlet } from 'react-router-dom'
import { MenuBar } from '../components/layout/MenuBar'
import './AppLayout.css'

export function AppLayout() {
  return (
    <div className="app-layout">
      <MenuBar />
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  )
}
