
import landingImage from '../assets/pic1.jpg'

function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-emerald-600">
        Aid is on the way
        </h1>
        <span className="text-xl">Access food, water, and essential supplies with just a few taps.</span>

      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} className="w-full max-h-[500px] object-cover rounded-xl" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
          When disaster strikes, hope must move faster.<br />
            Our platform bridges survivors with immediate aid.<br />
            Relief. Support. Rebuilding — together.
          </span>
        </div>
      </div>
    </div>
  )
}

export default HomePage