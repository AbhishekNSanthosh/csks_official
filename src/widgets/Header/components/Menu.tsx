import { menuItems } from '@utils/constants'
import Link from 'next/link'
import React from 'react'

export default function Menu() {
  return (
    <div className='w-full flex flex-row gap-[4vw]'>
        {menuItems?.map((item,index)=>(
            <div className="flex capitalize font-medium text-gray-700" key={`${item?.title}_${index}`}>
                <Link href={item?.url} className="">{item?.title}</Link>
            </div>
        ))}
    </div>
  )
}
