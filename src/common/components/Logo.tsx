import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
        <Image src={'/logo.png'} height={1000} width={1000} alt='logo' className='w-[7rem]'/>
  )
}
