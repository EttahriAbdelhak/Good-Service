import { Main_content } from "../constants"
const Second = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2" >
      <div className="flex flex-col items-center my-20" >
        <h1 className="text-6xl lg:text-[10rem] p-2 uppercase  text-blue-900 font-bold" >
          {Main_content.title}
        </h1>
        <p className="lg:mt-6 text-sm mb-4 font-medium tracking-tighter" >
          {Main_content.subtitle}

        </p>
        <img src={Main_content.image}
          className="w-full h-[65vh] object-cover rounded-2xl p-2" alt="main" />

      </div>
    </section>
  )
}

export default Second