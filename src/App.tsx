import Navbar from "@/Components/Navbar/Navbar";
import { useState, useEffect} from "react";
import {Link, Route, Routes} from 'react-router-dom'
import { SelectedPage } from "./Shared/types";
import Home from "@/Components/Home/Home";
import Gallery from "./Components/Gallery/Gallery";
import Dashboard from "./Components/Dashboard/Dashboard";
import Supplies from "./Components/Supplies/Supplies";
import DashboardMain from "./Components/Dashboard/DashboardMain/DashboardMain";
import ActiveList from "./Components/Dashboard/Lists/ActiveList";
import ActiveListItems from "./Components/Dashboard/Lists/ActiveListItems/ActiveListItems";



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
    <div className="app h-64 overflow-y-scroll">
      <Navbar
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Routes>
        <Route path= "/" element={<Home />} />
      <Route path={"dashboard"} element={<Dashboard />}>
        <Route index element={<DashboardMain />} />
        <Route path={`activelist`} element={<ActiveList />} />
        <Route path={`activelist/:id`} element={<ActiveListItems />} />
    </Route>
      {/* Add more dashboard-specific routes as needed */}
        <Route path="/supplies" element={<Supplies/>}/>
      </Routes>
    </div>
  )
}

export default App
