
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Code2 } from 'lucide-react'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkStyle = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? 'text-violet-400'
        : 'text-gray-300 hover:text-violet-400'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09090f]/90 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <NavLink to="/" className="flex items-center gap-2">
          <Code2 className="text-violet-400" size={28} />
          <span className="text-xl font-bold text-white">
            Portfolio<span className="text-violet-400">.</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={linkStyle}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="flex flex-col gap-5 border-t border-white/10 bg-[#09090f] px-6 py-6 md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={() => setMenuOpen(false)}
              className={linkStyle}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar
