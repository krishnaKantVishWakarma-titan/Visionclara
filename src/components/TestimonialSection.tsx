import { testimonials } from '../Data/ServiceData.json';

export function TestimonialSection() {
  return (
    <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h2 className="text-2xl font-bold text-center mb-10 md:text-3xl dark:text-white">Testimonials</h2>
      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col bg-white border border-gray-200 text-center rounded-xl p-4 md:p-8 dark:bg-neutral-800 dark:border-neutral-700">
            <div className="mt-3 sm:mt-6 text-center">
              <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white">
                <em>"{testimonial.text}"</em>
              </p>
            </div>
            
            <div className="p-4 rounded-b-xl md:px-6">
              <h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-neutral-200">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-neutral-500">
                {testimonial.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}