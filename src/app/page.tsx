import Link from "next/link"

const HomePage = () => {
  return (
    <div><h1>Welcome to my Blog</h1>
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/about/team'>Teams</Link></li>
        <li><Link href='/contact'>Contact</Link></li>
      </ul>
    </div>
  )
}

export default HomePage