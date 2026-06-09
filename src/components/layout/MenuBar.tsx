import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import treeUrl from '../../assets/tree.png'
import './MenuBar.css'

type MenuItem = {
  to: string
  label: string
}

const menuItems: MenuItem[] = [
  { to: '/', label: '홈' },
  { to: '/inquiries', label: '문의 글' },
]

const chevronPath = 'm6 9 6 6 6-6'

function MenuChevron() {
  return (
    <svg className="menu-link-chevron" viewBox="0 0 24 24" aria-hidden="true">
      <path d={chevronPath} />
    </svg>
  )
}

function getMenuLinkClassName(isActive: boolean) {
  return isActive ? 'menu-link menu-link-active' : 'menu-link'
}

function getCurrentMenuItem(pathname: string) {
  return (
    menuItems.find((item) => item.to !== '/' && pathname.startsWith(item.to)) ??
    menuItems[0]
  )
}

export function MenuBar() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const currentMenuItem = getCurrentMenuItem(location.pathname)

  return (
    <header className="menu-bar">
      <div className="menu-bar-inner">
        <NavLink className="menu-brand" to="/" aria-label="홈으로 이동">
          <img className="menu-brand-tree" src={treeUrl} alt="" />
        </NavLink>

        <nav className="menu-nav" aria-label="주요 메뉴">
          {menuItems.map((item) => (
            <NavLink
              className={({ isActive }) => getMenuLinkClassName(isActive)}
              key={item.to}
              to={item.to}
            >
              <span className="menu-link-text">
                <strong>{item.label}</strong>
              </span>
              <MenuChevron />
            </NavLink>
          ))}
        </nav>

        <div className="menu-mobile">
          <button
            className="menu-mobile-trigger"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu-list"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <span>{currentMenuItem.label}</span>
            <MenuChevron />
          </button>

          {isMenuOpen ? (
            <nav
              className="menu-mobile-list"
              id="mobile-menu-list"
              aria-label="모바일 주요 메뉴"
            >
              {menuItems
                .filter((item) => item.to !== currentMenuItem.to)
                .map((item) => (
                  <NavLink
                    className="menu-mobile-option"
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  )
}
