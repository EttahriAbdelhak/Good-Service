import { RiMailLine, RiMapPinLine, RiPhoneLine } from "@remixicon/react"
import { Contact_info } from "../constants"


const Contact = () => {
    return (
        <section className="max-w-7xl mx-auto " id="contact" >
            <div className="my-20" >
                <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12" >Contact</h2>
                <p className="text-center max-w-2xl text-lg mb-12 mx-auto" > {Contact_info.text} </p>
                <div className="flex flex-col lg:flex-row justify-around mx-4" >
                    <div className="flex mb-8 lg:mb-0" >
                        <RiPhoneLine className="text-3xl mr-4" />
                        <div  >
                            <p className="text-lg font-semibold" > {Contact_info.phone.label} </p>

                            <p text-neutral-600 > {Contact_info.phone.value} </p>                 </div>
                    </div>   <div className="flex mb-8 lg:mb-0" >
                        <RiMailLine className="text-3xl mr-4" />
                        <div  >
                            <p className="text-lg font-semibold" > {Contact_info.email.label} </p>
                            <p className="text-neutral-600" > {Contact_info.email.value} </p>                 

                        </div>
                    </div>   <div className="flex mb-8 lg:mb-0" >
                        <RiMapPinLine className="text-3xl mr-4" />
                        <div  >
                            <p className="text-lg font-semibold" > {Contact_info.adress.label} </p>
                            <p className="text-neutral-600" > {Contact_info.adress.value} </p>                 

                        </div>
                    </div>
                </div>
            </div>
        </section>)
}

export default Contact