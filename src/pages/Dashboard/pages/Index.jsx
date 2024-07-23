import React from 'react'
import DashboardLayout from '../components/DashboardLayout'

function Index() {
    // aqui vienen los datos estadisticos del panel de administracion
  return (
    <DashboardLayout title="Inicio">
        <h1>Dashboard</h1>
        <p>Bienvenido al panel de administración</p>
    </DashboardLayout>
  )
}

export default Index