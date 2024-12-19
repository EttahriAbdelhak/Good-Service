import { RiFacebookFill, RiInstagramFill, RiLinkedinFill } from "@remixicon/react"

const Footer = () => {
    return (
        <footer className="max-w-7xl mx-auto" >
            <div className="flex flex-col md:flex-row justify-between items-center border-t-2 py-4 " >
                <div className="flex space-x-6 mb-2  " >
                    <a href="#"
                        target="_blank"
                        aria-label="Abdelhak account"
                    >
                        <RiFacebookFill />
                    </a>  <a href=""
                        target=""
                        aria-label="Abdelhak account"
                    >
                        <RiInstagramFill />
                    </a>  <a href=""
                        target=""
                        aria-label="Abdelhak account"
                    >
                        <RiLinkedinFill />
                    </a>
                </div>
<p className="text-sm" >&copy; 2024</p>
            </div>
        </footer>)
}

export default Footer