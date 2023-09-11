import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './types';

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value:SelectedPage)=> void
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
      className='rounded-md bg-secondary-blue px-10 py-2 hover:bg-primary-800 hover:text-white'
      onClick={()=> setSelectedPage(SelectedPage.About)}
      href={`#${SelectedPage.About}`}
    >
      {children}
    </AnchorLink>
  )
} 

export default ActionButton