import { Outlet } from "react-router-dom";
import { HeaderCandidato } from "../components/HeaderCandidato";


export function DefaultCandidato() {
  return (
    <>
      <HeaderCandidato />
      <Outlet />
    </>
  )
}