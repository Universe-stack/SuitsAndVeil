import { SelectedPage } from "@/Shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page:string;
    selectedPage: SelectedPage;
    setSelectedPage: (value:SelectedPage)=>void
}


const Link = ({page,selectedPage,setSelectedPage}: Props) => {

    const lowercasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage
  return (
    <AnchorLink
        className={`${selectedPage === lowercasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300 font-[600] text-[1.125rem]`}
        href={`#${lowercasePage}`}
        onClick={()=>setSelectedPage(lowercasePage)}
    >
        {page}
    </AnchorLink> 
  )
}

export default Link;