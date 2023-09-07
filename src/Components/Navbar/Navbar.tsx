import {useState, useEffect} from "react";
import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid";

type Props = {}

const Navbar = (props: Props) => {
    
  const flexBetween = "flex items-center justify-between";

  return (
    <nav className="">
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    <img alt="logo" src={''}></img>

                    {/*RIGHT SIDE*/}
                    <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar