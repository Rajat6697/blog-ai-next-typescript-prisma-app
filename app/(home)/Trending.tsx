import Link from 'next/link'
import React from 'react'



type Props = {}

const Trending = (props: Props) => {
  return (
    <section className='pt-3 pb-10'>
    <div className='flex items-center gap-3'>
    <div className='bg-wh-900 text-wh-10 py-2 px-8 text-sm font-bold'>
        TRENDING
    </div>
    <p className='text-sm'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, molestias sit.
    </p>
    </div>     

    <div className='sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px]'>
        <TrendingCard className='col-span-2 row-span-2 bg-wh-500'/>
        <TrendingCard className='col-span-2 row-span-1 bg-wh-500'/>
        <TrendingCard className='col-span-1 row-span-1 bg-wh-500'/>
        <TrendingCard className='col-span-1 row-span-1 bg-wh-500'/>
    </div> 
    </section>
  )
}

export default Trending