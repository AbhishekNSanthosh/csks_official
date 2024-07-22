import Link from 'next/link'
import React from 'react'

export default function Menu() {
    const menuItems = [
        {
            title:"Home",
            url:"/"
        },
        {
            title:"about",
            url:"/about"
        },
        {
            title:"office bearers",
            url:"/office-bearers"
        },
        {
            title:"gallery",
            url:"/gallery"
        },
        {
            title:"contact",
            url:"/contact"
        },
    ]
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
