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
      <div className="max-w-6xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-6xl">

          {/* Content */}
          <div className="space-y-1 md:space-y-1">
            <div className="space-y-6 mb-10">
              <h2 className="text-2xl font-bold md:text-3xl dark:text-white">Empowering Businesses with Cutting-Edge IT Solutions</h2>
              <h3 className="text-2xl font-light mt-10 dark:text-white">From custom software development to cloud transformation, we provide innovative, scalable, and secure IT services to help your business thrive in the digital era.</h3>
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