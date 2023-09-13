import { SelectedPage } from "@/Shared/types";
import gallery from '@/assets/gallery.jpg';
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page:string;
    selectedPage: SelectedPage;
    setSelectedPage: (value:SelectedPage)=>void
}


const Gallery = ( Props) => {
    return(
        <section className="h-[30rem]">
            <div className=" w-full text-center text-gray-600 text-[1.5rem] tect-bold my-[4.5rem]"> 
                <h2>Organize your dream wedding, <br/> reception and <span className="text-primary-600">bachellorttees</span> from your bed</h2>
            </div>
            <div className="w-full h-[100%]">
                <img src={gallery} alt="wall gallery" className="w-[100%] h-[100%] object-contain"/>
            </div>

            <span><button className="p-4 text-center border-primary-600">Go to Planner</button></span>
        </section>
    )
}

export default Gallery;