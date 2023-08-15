import React from 'react'
import SocialLinks from './SocialLinks'

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
    </section>
  )
}

export default Sidebar