import React from 'react'
import Title from '../../../components/Title'

function DashboardLayout({ title, children }) {
  return (
    <div>
      <Title title={title} />
      {children}
    </div>
  )
}

export default DashboardLayout