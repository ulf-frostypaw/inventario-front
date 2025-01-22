import React from "react";
import Title from "../../../components/Title";
import Sidebar from "./SideBarDashboard";

interface DashboardLayoutProps {
  title: string;
  children: React.ReactNode;
}

function DashboardLayout({ title, children }: DashboardLayoutProps) {
  return (
    <div className="bg-gray-100 w-full h-screen flex">
      {/* Sidebar con ancho fijo */}
      <div className="w-1/10 bg-[#061c33] shadow-lg">
        <Sidebar />
      </div>

      {/* Contenido principal ocupa el resto del espacio */}
      <div className="flex-1 pl-10">
        <div className="flex-1">
          {/* Título del dashboard */}
          <Title title={title} />
        </div>

        {/* Contenido dinámico */}
        <div className="flex-1 pt-6 overflow-auto overflow-x-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
