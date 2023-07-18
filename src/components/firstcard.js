import React from 'react'

import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFirestoreData } from '../store/action'

const Firstcard = () => {


  const Dispatch = useDispatch();


  const firestoreData = useSelector(
    (state) => state.firestoreData
  );



  useEffect(() => {

    Dispatch(fetchFirestoreData());

  }, [Dispatch]);

  return (
    
    
    <div className="flex flex-row gap-6 w-[50px] absolute top-32 pl-[330px] items-center">
    <div className="shadow-[0px_5px_14px_0px_rgba(0,_0,_0,_0.05)]  bg-white flex flex-row justify-between mr-px gap-32 h-32 items-center pl-6 pr-4 py-4 rounded-[20px]">
      <div className="flex flex-col gap-1 w-40 shrink-0 h-20 items-start">
        <div className="text-xs font-['adineue_PRO'] font-bold tracking-[1] text-gray-500 w-2/3">
          TODAY’S USERS
        </div>
        <div className="text-lg font-['adineue_PRO'] font-bold leading-[18px] text-gray-800  w-12">
        {firestoreData.map((data)=>{
            return(
  
            <h1>
              {data.todayusers}
            </h1>
            )
  })}
        
        </div>
        <div className="self-stretch flex flex-row ml-px gap-2 items-center">
          <div className="text-sm font-['adineue_PRO'] font-bold text-green-500 w-12 shrink-0">
            +5.20%
          </div>
          <div className="text-sm font-['adineue_PRO'] text-gray-500 w-2/3">
            Since last month
          </div>
        </div>
      </div>
      <div className="bg-[url(https://file.rendit.io/n/bD8AxbfO1AJnphnFjnWc.svg)] bg-cover bg-50%_50% bg-blend-normal self-start flex flex-col w-12 shrink-0 items-center">
        <div className="bg-[#adf22f] flex flex-col justify-center w-12 h-12 shrink-0 items-center rounded-lg">
          <img
            src="https://file.rendit.io/n/xfwZoHPjDaofrB3BKwLU.svg"
            className="min-h-0 min-w-0 w-6"
          />
        </div>
      </div>
    </div>
    <div className="shadow-[0px_5px_14px_0px_rgba(0,_0,_0,_0.05)] bg-white flex flex-row justify-between gap-32 h-32 items-center pl-6 pr-4 py-4 rounded-[20px]">
      <div className="flex flex-col gap-1 w-40 shrink-0 h-20 items-start">
        <div className="text-xs font-['adineue_PRO'] font-bold tracking-[1] text-gray-500 w-3/5">
          NEW CLIENTS
        </div>
        <div className="text-lg font-['adineue_PRO'] font-bold leading-[18px] text-gray-800  w-12">
        {firestoreData.map((data)=>{
            return(
  
            <h1>
              {data.NewClients}
            </h1>
            )
  })}
        </div>
        <div className="self-stretch flex flex-row ml-px gap-3 items-center">
          <div className="text-sm font-['adineue_PRO'] font-bold text-red-600 w-10 shrink-0">
            -2.82%
          </div>
          <div className="text-sm font-['adineue_PRO'] text-gray-500 w-2/3">
            Since last month
          </div>
        </div>
      </div>
      <div className="bg-[url(https://file.rendit.io/n/bD8AxbfO1AJnphnFjnWc.svg)] bg-cover bg-50%_50% bg-blend-normal self-start flex flex-col w-12 shrink-0 items-center">
        <div className="bg-[#adf22f] flex flex-col justify-center w-12 h-12 shrink-0 items-center rounded-lg">
          <img
            src="https://file.rendit.io/n/Pi2ut5wtmn5R2LV75qc6.svg"
            className="min-h-0 min-w-0 w-6"
          />
        </div>
      </div>
    </div>
    <div className="shadow-[0px_5px_14px_0px_rgba(0,_0,_0,_0.05)] bg-white flex flex-row justify-between gap-32 h-32 items-center pl-6 pr-4 py-4 rounded-[20px]">
      <div className="flex flex-col gap-1 w-40 shrink-0 h-20 items-start">
        <div className="text-xs font-['adineue_PRO'] font-bold tracking-[1] text-gray-500 w-1/2">
         Sale
        </div>
        <div className="text-lg font-['adineue_PRO'] font-bold leading-[18px] text-gray-800  w-1/2">
        {firestoreData.map((data)=>{
            return(
  
            <h1>
              {data.totalsales}
            </h1>
            )
  })}
        </div>
        <div className="self-stretch flex flex-row ml-px gap-3 items-center">
          <div className="text-sm font-['adineue_PRO'] font-bold text-green-500 w-10 shrink-0">
            +8.12%
          </div>
          <div className="text-sm font-['adineue_PRO'] text-gray-500 w-2/3">
            Since last month
          </div>
        </div>
      </div>
      <div className="bg-[url(https://file.rendit.io/n/bD8AxbfO1AJnphnFjnWc.svg)] bg-cover bg-50%_50% bg-blend-normal self-start flex flex-col w-12 shrink-0 items-center">
        <div className="bg-[#adf22f] flex flex-col justify-center w-12 h-12 shrink-0 items-center rounded-lg">
          <img
            src="https://file.rendit.io/n/sBHKsK5H992m80HiNh87.svg"
            className="min-h-0 min-w-0 w-6"
          />
        </div>
      </div>
    </div>


  
  </div>
  
  )
}

export default Firstcard
