import React from 'react'
import Card from '../Product/Card'

function BestDeals() {
  return (
    <div className="overflow-hidden rounded-2xl bg-gray p-5">
        <div className="mb-5 items-center justify-between space-y-5 md:flex md:space-y-0">
          <h3 className="text-3xl font-medium">Productos m&aacute;s comprados</h3>
        </div>
        <div className="pb-2 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
  )
}

export default BestDeals