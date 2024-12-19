import { Portfolio_content } from "../constants"

const Portfolio = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 " id="portfolio" >
      <div className="mb-20" >
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mt-20 mb-12" >portfolio</h2>
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3" >
          {Portfolio_content.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-3xl mx-4" >
              <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100" >
                <h3 className=" mb-2 text-xl font-medium " > {project.title} </h3>
                <p className="mb-12 p-4" > {project.subtitle} </p>
              </div>
            </div>
          ))}
        </div>
      </div>    </section>)
}

export default Portfolio