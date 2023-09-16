import React from 'react'
import Navbar from '@/Components/Navbar/Navbar'

type Props= {}

const Layout = (props:Props) => {
  return (
    <div className='Layout'>
      <Navbar />
      <div>
        <main>
            {props.children}
        </main>
      </div>
    </div>
  )
}

export default Layout;
