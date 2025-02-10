import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between mx-4 bg-gray-800 text-gray-200 p-2'>
        <div>logo</div>
        <ul className='flex gap-6'>
            <Link href='/'>Home</Link>
            <Link href='/login'>Login</Link>
            <Link href='/register'>Register</Link>
        </ul>
    </div>
  )
}

export default Navbar