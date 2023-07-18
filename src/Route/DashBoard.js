import React from 'react'

const DashBoard = () => {
  return (
   <div className="shadow-[0px_5px_14px_0px_rgba(0,_0,_0,_0.05)] bg-white flex flex-row gap-3 w-full h-12 items-center px-4 rounded-lg">
  <div className="bg-[#adf22f] flex flex-col w-8 shrink-0 h-8 items-center py-2 rounded-lg">
    <img
      src="https://file.rendit.io/n/XGv2eB9xaHYZZ8LcpPst.svg"
      className="min-h-0 min-w-0 w-4"
    />
  </div>
  <div className="text-xs font-['adineue_PRO'] font-bold leading-[18px] text-gray-800 w-16 shrink-0 h-[33.33%]">
    Dashboard
  </div>
</div>

  )
}

export default DashBoard
