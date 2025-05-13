import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-4">
      <div className="flex flex-col items-center">
        <div className="rounded-full overflow-hidden">
          <Image
            src="/logo.png"
            alt="Anand Computers Logo"
            width={80}
            height={80}
            priority
          />
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl md:text-2xl font-bold text-white">ANAND COMPUTERS</h1>
        <p className="text-xs md:text-sm text-gray-200 tracking-widest">MPONLINE & COMPUTER SERVICES</p>
      </div>
    </Link>
  )
}

export default Logo 