import Navbar from "@/Components/Navbar/Navbar";
import { useState, useEffect} from "react";
import { SelectedPage } from "./Shared/types";
import Home from "@/Components/Home/Home";
import Gallery from "./Components/Gallery/Gallery";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(()=>{
    const handleScroll =()=>{
      if(window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home)
      }
    }
    if(window.screenY !== 0) setIsTopOfPage(false);

    window.addEventListener("scroll", handleScroll)
    return ()=> window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="app">
      <Navbar
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home />
      <Gallery />
    </div>
  )
}

export default App
