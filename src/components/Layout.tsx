import React from "react";
import Title from "./Title";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

function Layout({ children, title }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Título de la página */}
      <Title title={title} />
      
      {/* Barra de navegación */}
      <Navbar />
      
      {/* Contenido centrado */}
      <main className="flex-1 flex items-center justify-center">
        {children}
      </main>
      
      {/* Pie de página */}
      <Footer />
    </div>
  );
}

export default Layout;
