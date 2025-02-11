import React from 'react'
import Sidebar from '../../components/Sidebar'
import Nav from '../../components/Nav'
import Main from '../../components/Main'
function CashHistory() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Nav />
                <div className="p-6">
                    <Main />
                </div>
            </div>
        </div>
    )
}

export default CashHistory