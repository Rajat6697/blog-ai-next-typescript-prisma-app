import React from 'react'
import SocialLinks from './SocialLinks'
import Subscribe from './Subscribe'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <section>
           <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
          Subscribe and Follow
        </h4>   
        <div className='my-5 my-5'>
            <SocialLinks isDark/>
        </div>
        <Subscribe/>
        <div className='bg-wh-900 my-8'>
            advert images
        </div>
        <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
          About The Blog
        </h4> 
        <div className='bg-wh-900 my-8'>
            Profile Img
        </div>  
        <h4 className=" py-3 px-5 text-wh-500  font-bold text-center">
          Bill Clinton
        </h4> 
        <p className='text-wh-500 text-center text-sm'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit facere veritatis delectus ipsam.
        </p>
    </section>
  )
}

export default Sidebar