"use client"
import React, { useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

function Main() {
    const [priority, setPriority] = useState(["High", "Low", "Medium"])
    const [currPriority, setCurrPriority] = useState("")
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const tabledata = [
        {
            name: 'Naveen K',
            mobileNumber: 73645726572,
            createdOn: new Date().toISOString(),
            action: 'View Report',
            priority: 'High'
        },
        {
            name: 'Naveen K',
            mobileNumber: 73645726572,
            createdOn: new Date().toISOString(),
            action: 'View Report',
            priority: 'Low'

        }, {
            name: 'Naveen K',
            mobileNumber: 73645726572,
            createdOn: new Date().toISOString(),
            action: 'View Report',
            priority: 'Medium'

        }
    ]
    return (
        <main className='relative bg-white rounded border-2 border-blue-400 h-[calc(100vh-13vh)]'>
            <div className="flex justify-between items-center p-4 bg-white shadow-md">
                <h1 className="text-xl ">SO:112/Money Laundering/November</h1>
                <div className="flex gap-4 items-center relative">
                    <input type="text" placeholder="Type Mobile/PAN" className="border p-2 rounded placeholder: w-[400px] px-10" />
                    <IoSearchSharp className='absolute left-3 ' />

                    <button className="bg-blue-500 text-white px-4 py-2 rounded">New Search +</button>
                </div>
            </div>
            <div className="">
                <table className="w-full border-collapse ">
                    <thead>
                        <tr className="bg-gray-200 ">
                            <th className="p-4 text-left">Profile Name</th>
                            <th className="p-2 text-left">Mobile Number/PAN</th>
                            <th className="p-2 text-left">Created On</th>
                            <th className="p-2 text-left">Priority</th>
                            <th className="p-2 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tabledata.map((item, index) => (
                            <tr key={index} className="border-b ">
                                <td className="p-2">{item.name}</td>
                                <td className="p-2">{item.mobileNumber}</td>
                                <td className="p-2">{item.createdOn}</td>
                                <td className="p-2">
                                    <select name="priority" onSelect={() => console.log('hello')} id="" className={item.priority == 'High' ? 'bg-red-200 p-2  rounded-full border border-red-500' : item.priority == 'Medium' ? 'bg-yellow-200 p-2 rounded-full border border-yellow-500' : 'bg-green-200 p-2 rounded-full border border-green-500'}>
                                        <option value={item.priority}>{item.priority}</option>
                                        {priority.map((p, i) => (
                                            item.priority != p && <option key={i} value={p} >{p}</option>
                                        ))}
                                    </select>
                                </td>
                                <td className="p-2 underline cursor-pointer">View Report</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='absolute bottom-0 w-full flex'>
                <div className=''>
                    Showing 10 of 112
                </div>
                <div className='mx-auto space-x-2 flex items-center'>
                    <button><RiArrowLeftSLine />
                    </button>
                    {
                        numbers.slice(0, 2).map((num) => (
                            <button>{num}</button>
                        ))
                    }
                    <span>...</span>
                    {
                        numbers.slice(8).map((num) => (
                            <button>{num}</button>
                        ))
                    }
                    <button><RiArrowRightSLine />
                    </button>


                </div>
            </div>
        </main>
    )
}

export default Main