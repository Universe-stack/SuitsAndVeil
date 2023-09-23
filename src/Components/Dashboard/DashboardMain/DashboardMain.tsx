import React, {useState} from 'react'
import Chart from '../chart/Chart';
import {BudgetData} from '@/Data';
import Product from '@/UI/Product/Product';

type Props = {
  chartData:any
}

const DashboardMain = (props: Props) => {

  const [budgetData, setBudgetData] = useState({
    labels: BudgetData.map(data=>data.month),
datasets: [
{
label: 'Inflow',
fill: false,
lineTension: 0.5,
backgroundColor: 'rgba(75,192,192,1)',
borderColor: 'rgba(0,0,0,1)',
borderWidth: 2,
data: BudgetData.map(data=>data.inflow)
},

{
  label: 'Outflow',
  fill: false,
  lineTension: 0.5,
  backgroundColor: 'pink',
  borderColor: 'rgba(0,0,0,1)',
  borderWidth: 2,
  data: BudgetData.map(data=>data.Outflow)
  }
]
  })

  return (
    <section className=' w-full px-[2.25rem] py-[2.19rem] text-gray-600'>
        <div className='flex gap-[1.8rem]'>
          <div className='w-[25%] bg-gray-none px-[1.5rem] py-[1rem] flex flex-col justify-start'>
            <div>
            <h2 className='font-bold text-[1.6rem] mx-[1.5rem] text-left'>Lists</h2>
            <p className='text-left mx-[1.5rem] mt-[0.44rem] opacity-[0.6] text-sm'>RECENTLY OPENED</p>

            <div>
              <ul>
                <li className='h-[1.25rem] text-center flex justify-left mx-[1.5rem] align-middle gap-4 my-5'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
</svg>
</span><span>Guest List</span></li>
                <li className='h-[1.25rem] text-center flex justify-left mx-[1.5rem] align-middle gap-4 my-5'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
</svg>
</span><span>Beers List</span></li>
                <li className='h-[1.25rem] text-center flex justify-left mx-[1.5rem] align-middle gap-4 my-5' ><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
</svg></span><span>Maids List</span></li>
              </ul>
            </div>

{/**Tasks */}
            <div className='mt-[3rem]'>
            <h2 className='font-bold text-[1.6rem] mx-[1.5rem] text-left'>Tasks</h2>
            <p className='text-left mx-[1.5rem] mt-[0.44rem] opacity-[0.6] text-sm'>RECENTLY OPENED</p>

            <div>
              <ul>
                <li className='h-[1.25rem] text-center flex justify-left mx-[1.5rem] align-middle gap-4 my-5'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
</svg>
</span><span className='text-sm'>Buy food for mama</span></li>
                <li className='h-[1.25rem] text-center flex justify-left mx-[1.5rem] align-middle gap-4 my-5'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
</svg>
</span><span className='text-sm'>Buy beers for Men</span></li>
                <li className='h-[1.25rem] text-center flex justify-left mx-[1.5rem] align-middle gap-4 my-5' ><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
</svg></span><span className='text-sm'>Browse Maids List</span></li>
              </ul>
            </div>
            </div>
            </div>
          </div>

          <div className='w-[75%] bg-gray-none px-[1.5rem] py-[1rem]'>
            <div className='flex border border-x-0 border-t-0 border-b-gray-100'>
               <div className='w-[50%] p-1.5 border border-y-0 border-l-0 border-l-gray-100'>
                <p className='text-lg font-bold text-left ml-3 mb-1.5'> Weather</p>

                  <div>
                    <p className='text-sm'>Temperature</p>
                    <span className='flex justify-center align-middle pb-1'><h3 className='font-bold text-[3.5rem] m-0 self-center ml-6'>23</h3> <p className='text-sm self-end'>F</p></span>
                  </div>
                </div>
                <div className='w-[50%] p-1 border border-y-0 border-r-0 border-r-gray-100'>
                <p className='text-lg font-bold text-left ml-3 mb-1.5'> Timer</p>

                  <div>
                    <p className='text-sm'>Time due in</p>
                    <span className='flex justify-center align-middle pb-1'><h3 className='font-bold text-[3.5rem] m-0 self-center ml-6'>35</h3> <p className='text-sm self-end'>days</p></span>
                  </div>
                </div>
            </div>

            <div className='p-2'>
              <p className='text-left text-lg ml-3 font-bold p-1'>Budget</p>
              <Chart chartData={budgetData}/>
            </div>
          </div>
        </div>

        <div className='bg-gray-100 mt-[2rem]'>
          <h2 className='text-left ml-2 text-lg font-bold'>New Arrivals</h2>

          <div className="grid grid-cols-4 gap-4 py-6">
            <Product />
            <Product />
          </div>
        </div>
    </section>
  )
}

export default DashboardMain