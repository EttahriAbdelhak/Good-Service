import { Reviewss } from "../constants"
const Reviews = () => {
    return (
        <section className="max-w-7xl mx-auto border-b-2 " id="reviews" >
            <div className="my-20" >
                <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12" >Reviews</h2>
                <p className="max-w-2xl text-lg mb-12 text-center mx-auto" > {Reviewss.text} </p>
                <div className="flex  justify-center flex-wrap" >
                    {Reviewss.reviews.map((review, index) => (
                        <div key={index} className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-neutral-300 p-10 mx-2 max-w-xs" >
                            <p className="mb-4 max-w-72" > {review.review} </p>
                            <div className="flex items-center mt-4" >
                                <img src={review.image} alt={review.name} className="rounded-full w-12 h-12 mr-4" />
                                <div className="" >
                                    <p className="text-sm font-bold" > {review.name} </p>
                                    <p className="text-sm text-neutral-500" > {review.title} </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>)
}

export default Reviews