import ImageCircles from '@/UI/ImageCircles/ImageCircles'
import React from 'react';
import { Table } from '@radix-ui/themes';
import paws from '@/assets/manOnSuit.png'
import ItemTable from '@/UI/ItemTable/ItemTable';


type Props = {}

const ActiveListItems = (props: Props) => {
  return (
    <section className='w-full h-[100%] flex align-middle justify-center bg-gray-100 text-gray-600'>
      <div className='w-[90%] py-6 flex justify-between gap-8'>
     <div className='w-3/4'>
         {/**First div */}
         <div className='flex justify-between px-0'>
        <button className=' py-1 px-2 flex gap-1 justify-center align-middle rounded-md'>
        <span className='self-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          </span>
          <p className='text-sm font-[500] self-center'> BACK TO ACTIVE LISTS</p>
        </button>
        <span className='flex gap-2 justify-center align-middle'>
        <button className='self-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg></button>

        <button className='py-2 px-4 self-center flex align-middle justify-center gap-1 border-soid border-2 border-gray-300 rounded-md'>
          <span className='text-sm text-center self-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
          </span>

          <p className='text-sm text-center self-center font-bold'>
            Export list
          </p>
        </button>
        </span>
      </div>

      {/**Owner's identity */}
      <div className='my-8 flex justify-between'>
        <span className='text-left'>
          <p className='text-xl font-bold'> {`${"Megan's List"}`}</p>
          <p className='text-sm'> {`${6} sublists`}</p>
        </span>

        <span>
          <p className='text-xl font-bold'> {`${"$2,569"}`}</p>
          <p className='text-sm opacity-70'> TOTAL VALUE</p>
        </span>
      </div>

      {/**List */}
      <div className=''>
        <div className='flex justify-between bg-gray-none py-3 px-8'>
          <span className='text-left'>
            <p className=' text-lg'>Wedding</p>
            <p className='text-sm opacity-70'>{`143 items`}</p>
          </span>

          <span className='flex gap-1'>
            <span className='self-center'><ImageCircles /></span>
            <p className='text-sm text-gray-600 opacity-70 self-center'> + {`7`} editors</p>
            <button className='text-primary-600 flex gap-1 p-2 self-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg> <p> Edit</p>
            </button>
          </span>
        </div>

        <div className=' bg-white px-5 my-1 py-3'>
          <ItemTable paws={paws} />
        </div>
      </div>
     </div>


     {/**Aside bar */}
     <aside className='bg-pink w-1/4'>
        <div className='w-full bg-gray-600 h-[3rem] text-gray-none p-2'><p className='text-center align-middle text-sm font-bold opacity-70'> Send an update</p> </div>
      </aside>
      </div>


    </section>
  )
}

export default ActiveListItems