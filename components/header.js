import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className='logo'>
        <Link href='/'>SG</Link>
      </div>
      <nav>
        <Link href='/code'>Kod</Link>
      </nav>
    </header>
  )
}
