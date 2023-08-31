import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
        <Link href='/'>Home</Link>
        <Link href='/code/repos'>Code</Link>
        </div>
  )
}

export default Header