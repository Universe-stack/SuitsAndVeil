import {useState, useEffect} from "react";
import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid";
import  Link  from "../Navbar/Link";
import {SelectedPage} from "@/Shared/types";
import useMediaQuery from "@/hooks/useMediaQueries";
import ActionButton from "@/Shared/ActionButton";
import Logo from '@/assets/Logo.png'
import {useLocation} from 'react-router-dom';



type Props = {
    isTopOfPage: boolean
    selectedPage: SelectedPage;
    setSelectedPage: (value:SelectedPage)=>void;
}

const Navbar = ({isTopOfPage, selectedPage,setSelectedPage}: Props) => {
    
    const location = useLocation();
    const [isDashboardRoute, setIsDashboardRoute] =useState(false);

     // Check if the current route is '/dashboard'
  useEffect(() => {
    location.pathname === '/'?setIsDashboardRoute(true):setIsDashboardRoute(false)
  }, [location.pathname]);

  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const navbarBackground = isTopOfPage ? "bg-gray-none" : "bg-primary-100 drop-shadow";
  const navbarStyle = isDashboardRoute ? 'fixed' : 'static';

  return (
    <nav>
        <div className={` ${navbarBackground} ${flexBetween}top-0 z-40 w-full py-6 ${navbarStyle}`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    <img alt="logo" src={Logo}></img>

                    {/*RIGHT SIDE*/}
                {isAboveMediumScreens?(
                    <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Dashboard" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Suppliers" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        </div>

                        <div className={`${flexBetween} gap-6 text-[1.125rem]`}>
                            <p className="text-[1.125rem] font-600 ml-1 cursor-pointer">Sign In</p>
                            <ActionButton setSelectedPage={setSelectedPage}>Sign up</ActionButton>
                        </div>
                    </div>):(
                        <div>
                             <button
                                className="rounded-full bg-primary-600 p-2"
                                onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                                    <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                        </div> 
                    )}
                </div>
            </div>
        </div>

        {/*Mobile Menu modal*/}
        {!isAboveMediumScreens && isMenuToggled &&(
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-yellow-300">
                {/*CLOSE ICON*/}
                <div className="flex-justify-end p-12">
                    <button onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6 text-gray-500" />
                    </button>
                </div>

                 {/* MENU ITEMS*/}
                        <div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
                            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Dashboard" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Suppliers" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        </div>
            </div>
        )}
    </nav>
  )
}

export default Navbar