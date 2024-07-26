import React from 'react'
import Title from '../../../components/Title'
import Sidebar from './SideBarDashboard'

function DashboardLayout({ title, children }) {
  return (
    <div className="bg-slate-700 w-full h-full flex">
      <div className="w-1/10">
        <Sidebar/>
      </div>
      <Title title={title} />
      {children}
    </div>
  )
}

export default DashboardLayout