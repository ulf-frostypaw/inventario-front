import React from "react";
import { createContext, useState } from "react";

const Auth = createContext();

function AuthProvider({ children }) {
  return (
    <>
      <Auth.Provider value={''}>{children}</Auth.Provider>
    </>
  );
}

export default AuthProvider;
