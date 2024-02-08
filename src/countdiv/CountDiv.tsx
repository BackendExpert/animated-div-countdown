import CountUp from "react-countup"
import IonIcon from "@reacticons/ionicons"

const countdiv = () => {
  return (
    <div className="container mx-auto px-12">
        <div className="md:grid md:grid-cols-5 md:gap-4 text-white md:px-8 md:my-8">
            <div className="bg-gray-900 rounded-xl px-8 py-4 my-8 md:my-0">
                <h1 className="text-2xl font-semibold text-center">Patient</h1>
                <IonIcon className="items-center" name="newspaper" />
            </div>
            <div className="bg-gray-900 rounded-xl px-8 py-4 my-8 md:my-0">
                <h1 className="text-2xl font-semibold text-center">Research</h1>
            </div>
            <div className="bg-gray-900 rounded-xl px-8 py-4 my-8 md:my-0">
                <h1 className="text-2xl font-semibold text-center">Peoples</h1>
            </div> 
            <div className="bg-gray-900 rounded-xl px-8 py-4 my-8 md:my-0">
                <h1 className="text-2xl font-semibold text-center">Faculties</h1>
            </div>
            <div className="bg-gray-900 rounded-xl px-8 py-4 my-8 md:my-0">
                <h1 className="text-2xl font-semibold text-center">Views</h1>
            </div>
        </div>
    </div>
  )
}

export default countdiv