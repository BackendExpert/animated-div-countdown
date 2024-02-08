import CountUp from "react-countup"
import IonIcon from "@reacticons/ionicons"

const countdiv = () => {
  return (
    <div className="container mx-auto px-12">
        <div className="md:grid md:grid-cols-5 md:gap-4 text-white md:px-8 md:my-8">
            <div className="bg-gray-900 rounded-xl px-8 py-4 my-8 md:my-0">
                <span className="px-[60px]"><IonIcon size="large" name="newspaper" /></span>
                <h1 className="text-2xl font-thin text-center pt-4 pb-0">Patient</h1>
                <p className="text-xl text-center pt-0 pb-2 font-semibold">100</p>
            </div>
            <div className="bg-gray-900 rounded-xl px-8 py-4 my-8 md:my-0">
                <span className="px-[60px]"><IonIcon size="large" name="telescope" /></span>
                <h1 className="text-2xl font-thin text-center pt-4 pb-0">Research</h1>
                <p className="text-xl text-center pt-0 pb-2 font-semibold">100</p>
            </div>
            <div className="bg-gray-900 rounded-xl px-8 py-4 my-8 md:my-0">
                <span className="px-[60px]"><IonIcon size="large" name="people" /></span>
                <h1 className="text-2xl font-thin text-center pt-4 pb-0">People</h1>
                <p className="text-xl text-center pt-0 pb-2 font-semibold">100</p>
            </div> 
            <div className="bg-gray-900 rounded-xl px-8 py-4 my-8 md:my-0">
                <span className="px-[60px]"><IonIcon size="large" name="newspaper" /></span>
                <h1 className="text-2xl font-thin text-center pt-4 pb-0">Faculties</h1>
                <p className="text-xl text-center pt-0 pb-2 font-semibold">100</p>
            </div>
            <div className="bg-gray-900 rounded-xl px-8 py-4 my-8 md:my-0">
                <span className="px-[60px]"><IonIcon size="large" name="newspaper" /></span>
                <h1 className="text-2xl font-thin text-center pt-4 pb-0">Views</h1>
                <p className="text-xl text-center pt-0 pb-2 font-semibold">100</p>
            </div>
        </div>
    </div>
  )
}

export default countdiv