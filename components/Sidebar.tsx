import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { HiOutlineSquares2X2 } from 'react-icons/hi2'
import { MdOutlinePersonSearch } from 'react-icons/md'

function Sidebar() {
  return (
    <div className="w-64 bg-white p-4 shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 mx-2">LEANx</h2>
      <ul>
        <li className="p-2 mb-3 hover:bg-gray-200 cursor-pointer flex items-center gap-1"> <CgProfile size={30}/>
        Profile Search</li>
        <li className="p-2 mb-3 hover:bg-blue-600 cursor-pointer font-bold flex items-center gap-1 bg-blue-500"><HiOutlineSquares2X2 size={30} />
        Case History</li>
        <li className="p-2 hover:bg-gray-200 cursor-pointer flex items-center gap-1"> <MdOutlinePersonSearch size={30} />
        Search History</li>
      </ul>
    </div>
  )
}

export default Sidebar