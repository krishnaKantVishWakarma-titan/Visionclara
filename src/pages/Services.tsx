import { CardSection } from "../components/CardSection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import ServiceData from "../Data/ServiceData.json";
import { useEffect } from "react";
export function Services() {
  const services = ServiceData.services;

  useEffect(() => {
    console.log(services);
  }, [services]);

  return (
    <div>
      <Header />
      {/* About US */}
      <div className="max-w-5xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-5xl">

          {/* Content */}
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3 mb-20">
              <h2 className="text-2xl font-bold md:text-3xl dark:text-white">Announcing a free plan for small teams</h2>
              <h3 className="text-2xl font-semibold dark:text-white">Bringing the culture of sharing to everyone</h3>

              <p className="text-lg text-gray-800 dark:text-neutral-200">At preline, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also helps them grow.</p>
            </div>
          </div>
          
            {services.map((service) => (
              <div key={service.heading} className="mb-14">
                <h3 className="text-2xl font-semibold dark:text-white mb-3">{service.heading}</h3>
              <p className="text-lg text-gray-800 dark:text-neutral-200 mb-10 leading-snug">{service.subheading}</p>
              <CardSection services={service.features} />
            </div>
          ))}


          {/* End Content */}
        </div>
      </div>
      {/* End Blog Article */}

      <Footer />
    </div>
  )
} 