import { SelectedPage } from "@/Shared/types";
import gallery from '@/assets/gallery.jpg';
import manOnPink from '@/assets/manOnPink.png';
import manOnHoodie from '@/assets/manOnHoodie.png'
import manOnWhite from '@/assets/manOnWhite.png'
import womanOnPink from'@/assets/womanOnPink.png'
import womanOnBlack from '@/assets/womanOnBlack.png'
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page:string;
    selectedPage: SelectedPage;
    setSelectedPage: (value:SelectedPage)=>void
}


const Gallery = ( Props:Props) => {
    return(
        <section className="h-[30rem] bg-yellow flex flex-col">
            <div className=" w-full text-center text-gray-600 text-[1.5rem] tect-bold my-[4.5rem]"> 
                <h2>Organize your dream wedding, <br/> reception and <span className="text-primary-600">bachellorttees</span> from your bed</h2>
            </div>
            <div className="w-full h-[100%] relative">
                <img src={gallery} alt="wall gallery" className="w-[100%] h-[100%] object-contain"/>
                <div className=" w-[10%] h-[8rem] bg-primary-600 rounded-full absolute top-[0rem] left-[15rem]"> <img src={manOnPink} alt="manOnPink" className="" /></div>
                <div className=" w-[10%] h-28 rounded-tl-full rounded-tr-full bg-[#2471e4] absolute bottom-[15%] left-[4rem] border-r"> <img src={manOnWhite} alt="manOnPink" className="" /></div>
                <div className=" w-[10%] h-[8rem] bg-primary-800 rounded-full absolute top-[3rem] right-[15rem]"> <img src={womanOnBlack} alt="manOnPink" className="z-[500]" /></div>
                <div className=" w-[10%] h-28 rounded-tl-full rounded-tr-full bg-secondary-blue absolute bottom-[15%] right-[4rem] border-r"> <img src={womanOnPink} alt="manOnPink" className="" /></div>
            </div>

            <span className="my-[4rem] w-full text-center">
                <button className="py-4 px-6 rounded-md text-center  bg-gray-none border-primary-600 border-solid border">Go to Planner</button>
            </span>
        </section>
    )
}

export default Gallery;