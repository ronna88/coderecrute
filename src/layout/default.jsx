import { Outlet } from "react-router-dom";
import { Header } from "../components/Administrador/Header";


export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}