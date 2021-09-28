import React from 'react'

export function RefreshSection() {


    return (
        <div className="flex flex-row justify-between mt-20 mr-3 mb-10">
            <button className="border-4 border-black w-24 ml-3 shadow-button">
                Refresh
            </button>
            <input className="border-2 border-black rounded-3xl w-52 text-center" placeholder="fulltext search by name" />
        </div>
    )
}