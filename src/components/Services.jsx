import { Services_content } from "../constants"
const Services = () => {
    return (
        <section className="max-w-7xl mx-auto border-b-2 " id="services" >
            <div className="my-20" >
                <h2 className="text-xl lg:text-3xl text-center uppercase mb-20" >Some of  Decoration Services </h2>
                {Services_content.map((service, index) => (
                    <div key={index} className="mb-12 mx-4 flex flex-col lg:flex-row" >
                        <div className={`lg:w-1/2 mb-4 lg:mb-0 ${index % 2 === 0 ? "" : "lg:order-2"
                            } `} >
                            <img src={service.image} alt={service.title} className="w-full h-auto rounded-lg object-cover " />
                        </div>
                        <div className={`lg:w-1/2 flex flex-col ${index % 2 === 0 ? "lg:pl-12" : "lg:pr-12"
                            }`} >
                            <h3 className="text-xl lg:text-2xl font-medium mb-2" >
                                {service.title}
                            </h3>
                            <p className="text-lg tracking-wide lg:leading-9 lg:text-xl mb-4" >
                                {service.subtitle}

                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Services