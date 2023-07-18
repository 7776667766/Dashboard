import React from 'react'
import DashBoard from '../Route/DashBoard'
import Billing from '../Route/Billing'
import { Link } from 'react-router-dom'
import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFirestoreData } from '../store/action'

const SideBar = () => {
  const dispatch = useDispatch();
  const firestoreData = useSelector(
    (state) => state.firestoreData
  );
  console.log(firestoreData)

  useEffect(() => {
    dispatch(fetchFirestoreData());

  }, [dispatch]);
  return (
<div className="shadow-[0px_5px_14px_0px_rgba(0,_0,_0,_0.05)] flex flex-col w-[300px]">

  <div className="shadow-[0px_5px_14px_0px_rgba(0,_0,_0,_0.05)] bg-white flex flex-col h-[900px] shrink-0 pt-8 pb-10 px-4 rounded-[20px]">
 
   
   
   
    <div className="self-start flex flex-row gap-3 w-1/2 items-center mb-6 ml-3">
      <img
        src="https://file.rendit.io/n/i3CDQ20libUTchM3BN7D.svg"
        className="min-h-0 min-w-0 w-px shrink-0"
      />
      <img
        src="https://file.rendit.io/n/y5jotTBOfhc4STjtBgOj.svg"
        className="min-h-0 min-w-0"
      />
    </div>

    <img
      src="https://file.rendit.io/n/MjUYQCqSUDyyk8nbr9eX.svg"
      className="min-h-0 min-w-0 self-center mb-5"
    />

    <div className="shadow-[0px_5px_14px_0px_rgba(0,_0,_0,_0.05)] bg-white flex flex-row gap-3 h-12 shrink-0 items-center  mx-2 px-4 rounded-lg">
      <div className="bg-[#adf22f] flex flex-col w-8 shrink-0 h-8 items-center py-2 rounded-lg">
        <img
          src="https://file.rendit.io/n/0aKhwrrpl8Uzird0WyF1.svg"
          className="min-h-0 min-w-0 w-4"
        />
      
      </div>
      < Link to="/dashboard" className="z-10 text-xs font-['adineue_PRO'] font-bold leading-[18px] text-gray-800 w-16 shrink-0 h-[33.33%]">
        Dashboard
      </Link>
      
    
     
    </div>
    <div className="shadow-[0px_5px_14px_0px_rgba(0,_0,_0,_0.05)] bg-white flex flex-row gap-3 h-12 shrink-0 items-center  mx-2 px-4 rounded-lg">
      <div className="bg-[#adf22f] flex flex-col w-8 shrink-0 h-8 items-center py-2 rounded-lg">
      <img
  src="https://file.rendit.io/n/gxacyRnuVJFMixdvOJof.svg"
  className="min-w-0 w-4"
/>

      </div>
      <Link to="/billing" className="z-10 text-xs font-['adineue_PRO'] font-bold leading-[18px] text-gray-500 w-full">
  Billing
</Link>
      
    
     
    </div>



    

     <div className="shadow-[0px_5px_14px_0px_rgba(0,_0,_0,_0.05)] bg-white flex flex-row gap-3 h-12 shrink-0 items-center mx-2 px-4 rounded-lg">
      <div className="bg-[#adf22f] z-10 flex flex-col w-8 shrink-0 h-8 items-center py-2 rounded-lg">
        <img
          src="https://file.rendit.io/n/0aKhwrrpl8Uzird0WyF1.svg"
          className="min-h-0 min-w-0 w-4"
        />
      
      </div>
      < Link to="/signup" className="z-10 text-xs font-['adineue_PRO'] font-bold leading-[18px] text-gray-800 w-16 shrink-0 h-[33.33%]">
        signup
      </Link>
      
      
     
    </div>
    <div className="shadow-[0px_5px_14px_0px_rgba(0,_0,_0,_0.05)] bg-white flex flex-row gap-3 h-12 shrink-0 items-center mx-2 px-4 rounded-lg">
      <div className="bg-[#adf22f] z-10 flex flex-col w-8 shrink-0 h-8 items-center py-2 rounded-lg">
        <img
          src="https://file.rendit.io/n/0aKhwrrpl8Uzird0WyF1.svg"
          className="min-h-0 min-w-0 w-4"
        />
      
      </div>
      < Link to="/signup" className="z-10 text-xs font-['adineue_PRO'] font-bold leading-[18px] text-gray-800 w-16 shrink-0 h-[33.33%]">
        signout
      </Link>
      
      
     
    </div>

    <div className="shadow-[0px_5px_14px_0px_rgba(0,_0,_0,_0.05)] bg-white flex flex-row gap-3 h-64 shrink-0 items-center mx-2 px-4 rounded-lg">
      
      
      
      
     
    </div>
   
   





    <div className="relative flex flex-col pb-1 items-center mx-4">
      <div className="w-20 h-[12.23%] text-sm font-['adineue_PRO'] font-bold leading-[19.6px] text-gray-800 absolute top-[140px] left-16">
        Need help?
      </div>
      <img
        src="https://file.rendit.io/n/T2bwYjZ3iKHZq50KVz6w.svg"
        className="min-h-0 min-w-0"
      />
    </div>
    <div className="text-xs font-['adineue_PRO'] leading-[18px] text-gray-600 self-center mb-5 w-1/2 h-[2.18%]">
      Please check our docs
    </div>
    <button className="bg-[#adf22f] flex flex-col gap-1 h-8 shrink-0 items-center mb-5 mx-6 pt-2 pb-1 rounded-lg">
      <div className="text-center text-xs font-['adineue_PRO'] font-bold leading-[10px] text-white w-1/2 h-[76.9%]">
        DOCUMENTATION
      </div>
      <div className="bg-[#c4c4c4] w-0 h-0 shrink-0" />
    </button>
    <button className="bg-gray-800 flex flex-col justify-center gap-2 h-8 shrink-0 items-center mx-6 rounded-lg">
      <div className="text-center whitespace-nowrap text-xs font-['adineue_PRO'] font-bold leading-[10px] text-white w-2/5">
        UPGRADE TO PRO
      </div>
      <div className="bg-[#c4c4c4] w-0 h-0 shrink-0" />
    </button>
  </div>









</div>

  

  
  
  )
}

export default SideBar

