import Navbar from "@/Components/Navbar/Navbar";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'; // Import useLocation
import { Route, Routes } from 'react-router-dom';
import { SelectedPage } from "./Shared/types";
import Home from "@/Components/Home/Home";
import Signup from "@/Components/Signup/Signup";
//import Gallery from "./Components/Gallery/Gallery";
import Dashboard from "./Components/Dashboard/Dashboard";
import Supplies from "./Components/Supplies/Supplies";
import DashboardMain from "./Components/Dashboard/DashboardMain/DashboardMain";
import ActiveList from "./Components/Dashboard/Lists/ActiveList";
import ActiveListItems from "./Components/Dashboard/Lists/ActiveListItems/ActiveListItems";
import { AuthProvider } from "./StateContext/AuthProvider";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const location = useLocation(); // Get the current route location

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
        console.log("Top of page!", isTopOfPage);
        alert('There');
      } else {
        setIsTopOfPage(false); // Set isTopOfPage to false when not at the top
        console.log(isTopOfPage);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTopOfPage]);
  

  return (
    <AuthProvider>
          <div className="app h-64 overflow-y-scroll">
      {location.pathname !== '/signup' && (
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
        />
      )}
      <Routes>
        <Route path="/" element={<Home query="" onSearch={()=>null} setSelectedPage={()=>null}/>} />

        <Route path={"dashboard"} element={<Dashboard />}>
          <Route index element={<DashboardMain />} />
          <Route path={`activelist`} element={<ActiveList />} />
          <Route path={`activelist/:id`} element={<ActiveListItems />} />
        </Route>

        {/* Add more dashboard-specific routes as needed */}
        <Route path="/supplies" element={<Supplies />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </div>
    </AuthProvider>
  );
}

export default App;
