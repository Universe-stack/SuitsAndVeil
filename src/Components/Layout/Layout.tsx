//import React from 'react'
import Navbar from '@/Components/Navbar/Navbar'
import { SelectedPage } from '@/Shared/types';



type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  children: React.ReactNode;
}

const Layout = (props:Props) => {

  return (
    <div className='Layout'>
      <Navbar isTopOfPage={false}
        selectedPage={SelectedPage.Home}/>
      <div>
        <main>
            {props.children}
        </main>
      </div>
    </div>
  )
}

export default Layout;
