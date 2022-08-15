import Link from 'next/dist/client/link'

export default function Footer() {
  return (
    <footer>
      <Link href='https://github.com/baranbaturr01'>
        <i title='GitHub' className='ri-github-line'></i>
      </Link>
      <Link href='https://www.linkedin.com/in/baranbatur'>
        <i title='LinkedIn' className='ri-linkedin-line'></i>
      </Link>
    </footer>
  )
}
