import React from 'react';
import manOnPink from '@/assets/manOnPink.png';
import ImageCircles from '@/UI/ImageCircles/ImageCircles';
import { Link, Outlet } from 'react-router-dom';

type Props = {}

const ActiveList = (props: Props) => {
  return (
    <div className='w-full h-[100%] flex align-middle justify-center bg-gray-100 text-gray-600'>
        <div className='w-4/5 py-6 '>
          <h2 className='text-left font-bold text-2xl'>Active lists</h2>
          <div className="my-4 flex gap-3 align-middle items-center">
            <p className="text-sm">TODAY</p>
            <p className=" flex-1 w-[80%] h-px bg-gray-300 after:content-['' ''] after:block"></p>
          </div>

          {/** Demo lists */}
          <div className='flex justify-between my-[1.9rem]'>
            <div className='flex'>
            <span className='rounded-full h-[3rem] w-[3rem] object-contain bg-red-300'><img src={manOnPink} alt='list_owner' className='w-[100%] object-contain h-[85%]'/></span>
            <div className='mx-3'><span className='flex gap-3'><p className='font-[700]'>Camila modern</p> <span>.{`${8} hours ago`}</span> 
            <span className='text-primary-600 flex gap-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg> <p> Edit</p>
 </span>
            </span>

            <div className='flex gap-2'><div className='w-[1rem] h-[1rem] border-4 border-yellow-500 rounded-full mt-1'></div>
            <p>Groom</p></div>
            </div>
            </div>
            

            <div> 
              <p className='font-bold text-2xl'>$2567</p>
              <p className='text-sm'>TOTAL VALUE</p>
            </div>
          </div>

{/**White Lists */}
          <div className='flex flex-col gap-1'>
            <Link to={`/dashboard/activelist/${1}`}>
            <div className='flex bg-gray-none justify-between p-5 rounded-md w-full'>
            <div>
              <p>Wedding</p>
              <p  className='text-sm'>{`${143}`} items</p>
            </div>

            <div className='flex gap-4 align-middle justify-center'>
              <p className='text-xl font-bold text-center self-center'>$1,340</p>
              <div>
                <ImageCircles />
              </div>

              <p className='text-sm text-center self-center'>+{`${7}`} editors</p>
            </div>
            </div>
            </Link>

            <Link to={`/dashboard/activelist/${2}`}>
            <div className='flex bg-gray-none justify-between p-5 rounded-md w-full'>
            <div>
              <p>Wedding</p>
              <p  className='text-sm'>{`${143}`} items</p>
            </div>

            <div className='flex gap-4 align-middle justify-center'>
              <p className='text-xl font-bold text-center self-center'>$1,340</p>
              <div>
                <ImageCircles />
              </div>

              <p className='text-sm text-center self-center'>+{`${7}`} editors</p>
            </div>
            </div>
            </Link>

            <Link to={`/dashboard/activelist/${3}`}>
            <div className='flex bg-gray-none justify-between p-5 rounded-md w-full'>
            <div>
              <p>Wedding</p>
              <p  className='text-sm'>{`${143}`} items</p>
            </div>

            <div className='flex gap-4 align-middle justify-center'>
              <p className='text-xl font-bold text-center self-center'>$1,340</p>
              <div>
                <ImageCircles />
              </div>

              <p className='text-sm text-center self-center'>+{`${7}`} editors</p>
            </div>
            </div>
            </Link>
          </div>

        </div>
    </div>
  )
}

export default ActiveList