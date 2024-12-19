import { useState } from "react"
import { RiCloseLine, RiMenu3Line } from '@remixicon/react'
import { LINKS } from "../constants"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (

        <nav className="border-b-2" >
            <div className="max-w-7xl mx-auto flex justify-between items-center py-8" >
                <div className="pl-2 text-blue-900 font-bold " >
                    <a href="#">Good Service</a>
                </div>
                <div className="md:hidden" >
                    <button onClick={toggleMenu} className="text-2xl pr-2  focus:outline-none  " aria-label={isOpen ? "Close Menu" : "Open Menu"}  >
                        {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
                    </button>
                </div>
                <div className="hidden md:flex md:space-x-4 pr-2" >
                    {LINKS.map((link, index) => (
                        <a key={index} href={link.link} className="uppercase text-sm font-medium " >

                            {link.name}
                        </a>
                    ))}
                </div>
              
            </div>
            <div className={`${isOpen ? "block" : "hidden"} py-5 border-b-4 absolute mt-2  bg-slate-50 px-4 md:hidden w-full`} >
                    {LINKS.map((link, index) => (
                        <a key={index} href={link.link} className="block  uppercase font-medium py-2 tracking-wide " >
                            {link.name}
                        </a>
                    ))}
                </div>
        </nav >

    )
}

export default Navbar