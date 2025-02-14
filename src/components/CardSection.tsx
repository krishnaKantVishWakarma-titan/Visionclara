export function CardSection({ services }: { services: any[] }) {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-1 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-start gap-12">
        {services.map((service, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center items-center size-12 bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-neutral-800 dark:border-neutral-700">
              <div dangerouslySetInnerHTML={{ __html: service.icon }} className="text-gray-800 dark:text-white w-6 h-6" />
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{service.title}</h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}