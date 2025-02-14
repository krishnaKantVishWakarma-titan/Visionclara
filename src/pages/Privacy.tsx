import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function Privacy() {
  return (
    <div>
      <Header />
      
      {/* About US */}
      <div className="max-w-5xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-5xl">

          {/* Content */}
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl dark:text-white">Announcing a free plan for small teams</h2>
              <h3 className="text-2xl font-semibold dark:text-white">Bringing the culture of sharing to everyone</h3>

              <p className="text-lg text-gray-800 dark:text-neutral-200">At preline, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also helps them grow.</p>
            </div>

            <p className="text-lg text-gray-800 dark:text-neutral-200">That's why we are excited to share that we now have a <a className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500" href="#">free version of Preline</a>, which will allow individual designers, startups and other small teams a chance to create a culture of openness early on.</p>
          </div>
          {/* End Content */}
        </div>
      </div>

      <Footer />
    </div>
  )
}