import React from 'react'
import Title from '../../../components/Title'
import Sidebar from './SideBarDashboard'

interface DashboardLayoutProps {
  title: string;
  children: React.ReactNode;
}
function DashboardLayout({ title, children }: DashboardLayoutProps) {
  return (
    <div className="bg-gray w-full h-full flex">
      <div className="w-1/10">
        <Sidebar/>
      </div>
      <Title title={title} />
      {children}
    </div>
  )
}

export default DashboardLayout