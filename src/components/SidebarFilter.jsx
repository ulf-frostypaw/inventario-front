import React from 'react'
import Heading from './SectionHeader/Heading';
import { useState, useEffect } from 'react';

function SidebarFilter() {
  return (
    <div className="top-28 lg:sticky">
        <Heading className="mb-0">Filtrar por:</Heading>
        <div className="divide-y divide-neutral-300">
            <div className="relative flex flex-col space-y-4 pb-8">
                <h3 className="mb-2.5 text-xl font-medium">Marcas</h3>
                <div className="grid grid-cols-2 gap-4">
                <button
                        type="button"
                        /* onClick={() => setActiveBrand(item.name)} */
                        className="rounded-lg py-4 bg-primary text-white"
                    >
                        Todos
                    </button>
                    <button
                        type="button"
                        /* onClick={() => setActiveBrand(item.name)} */
                        className="rounded-lg py-4 bg-gray"
                    >
                        Daikin
                    </button>
                    <button
                        type="button"
                        /* onClick={() => setActiveBrand(item.name)} */
                        className="rounded-lg py-4 bg-gray"
                    >
                        Carrier
                    </button>
                </div>
            </div>


        </div>
    </div>
  )
}

export default SidebarFilter
