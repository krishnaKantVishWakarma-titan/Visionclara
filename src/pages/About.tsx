import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
// import { TimelineSection } from "../components/TimelineSection";

export function About() {
  return (
    <div>
      <Header />
      
      {/* About US */}
      <div className="max-w-6xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-6xl">

          {/* Content */}
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl dark:text-white">Our Vision</h2>
              <p className="text-lg text-gray-800 dark:text-neutral-200">At Visionclara, our vision is to lead the IT industry by driving innovation and transformation. We aim to integrate technology seamlessly into everyday life, enhancing productivity and enabling new possibilities. Our goal is to empower organizations to harness technology's full potential, transforming their operations and achieving success.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl dark:text-white">Our Mission</h2>
              <p className="text-lg text-gray-800 dark:text-neutral-200">Our mission is to deliver exceptional IT services and solutions that empower our clients to achieve their business goals. We are committed to understanding each client's unique needs and providing tailored solutions that drive efficiency and growth.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl dark:text-white">Our Values</h2>
              <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-neutral-200">
                <li className="ps-2">Integrity: Upholding the highest standards of honesty and ethical conduct.</li>
                <li className="ps-2">Innovation: Fostering a culture of creativity and embracing new ideas.</li>
                <li className="ps-2">Customer Satisfaction: Providing exceptional service and building lasting relationships.</li>
                <li className="ps-2">Collaboration: Working closely with clients and partners to achieve shared goals.</li>
                <li className="ps-2">Excellence: Striving for excellence in every aspect of our work.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl dark:text-white">Our History</h2>
              <p className="text-lg text-gray-800 dark:text-neutral-200">Founded in 2018, Visionclara has grown from a small startup to a renowned IT firm with a global presence. Our journey is marked by innovation, expansion, and strategic partnerships, driven by a passion for technology and a commitment to excellence.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl dark:text-white">Our Team</h2>
              <p className="text-lg text-gray-800 dark:text-neutral-200">Our team is our greatest asset, comprising experienced professionals dedicated to delivering exceptional results. We foster a collaborative and inclusive environment where everyone feels valued and empowered to contribute.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl dark:text-white">Our Services</h2>
              <p className="text-lg text-gray-800 dark:text-neutral-200">Visionclara offers a comprehensive range of IT services, including software development, cloud solutions, and IT consulting. Our services are tailored to meet the diverse needs of our clients, ensuring maximum value and impact.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl dark:text-white">Our Clients</h2>
              <p className="text-lg text-gray-800 dark:text-neutral-200">We serve a diverse range of clients across various industries, including finance, healthcare, and retail. Our clients trust us to deliver solutions that drive their success, and we are committed to exceeding their expectations.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl dark:text-white">Our Achievements</h2>
              <p className="text-lg text-gray-800 dark:text-neutral-200">Visionclara has been recognized as a top IT service provider, receiving numerous awards for our innovation, quality, and customer service. Our achievements reflect our commitment to excellence and our ability to deliver impactful results.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl dark:text-white">Our Commitment</h2>
              <p className="text-lg text-gray-800 dark:text-neutral-200">We are committed to delivering quality and innovative solutions that exceed client expectations. Our focus is on building long-lasting relationships based on trust, transparency, and mutual success, supporting our clients at every stage of their technology journey.</p>
            </div>
          </div>
          {/* End Content */}
        </div>
      </div>
      {/* End Blog Article */}
      {/* <TimelineSection /> */}

      <Footer />
    </div>
  )
}