import Navbar from "@/Components/Navbar/Navbar";
import { useState} from "react";
import { SelectedPage } from "./Shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
 
  return (
    <div className="app">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
