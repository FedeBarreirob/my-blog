'use client'
import Link from 'next/link'

const links = [
  { name: 'Inicio', href: '#' },
  { name: 'Sobre mí', href: '#about' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contacto', href: '#contact' },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <span className="font-bold text-lg">MiPortfolio</span>
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-blue-600 transition">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
