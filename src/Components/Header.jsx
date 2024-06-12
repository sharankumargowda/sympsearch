import { IoNotifications } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
export default function Header() {
  return (
    <header>
       <span className="logo">SympSearch</span>
       <span >
        <span className="icons"><IoNotifications size={20}/></span>
        <span className="icons"><FaUser size={22} /></span>
       </span>
    </header>
  )
}   