import { SelectedPage } from "@/Shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page:string;
    selectedPage: SelectedPage;
}


const Link = ({page,selectedPage}: Props) => {

    const lowercasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage
  return (
    <AnchorLink
        className={`${selectedPage === lowercasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300 font-[600] text-[120%] py-[] px-[1rem]`}
        href={`#${lowercasePage}`}
    >
        {page}
    </AnchorLink> 
  )
}

export default Link;