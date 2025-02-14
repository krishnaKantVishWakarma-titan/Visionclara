export function Footer() {
  return (
    <footer className="w-full max-w-6xl py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
        <div className="col-span-full lg:col-span-1">
          <a className="flex-none text-xl font-semibold dark:text-white" href="/" aria-label="Brand">VisionClara</a>
        </div>

        <div className="col-span-1">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100">Main Links</h4>

          <div className="mt-3 grid space-y-3">
            <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="/about">About</a></p>
            <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="/services">Services</a></p>
            <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="/contact">Contacts</a></p>
          </div>
        </div>

        <div className="col-span-1">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100">Quick Links</h4>

          <div className="mt-3 grid space-y-3">
            <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="/terms">Terms and Conditions</a></p>
            <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="/privacy">Privacy Policy</a></p>
          </div>
        </div>

        <div className="col-span-2">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100">Office Address</h4>

          <p className="mt-3 text-sm text-gray-500">
            Piplani Road, Bhopal, MP, India
          </p>
        </div>
      </div>
      {/* End Grid */}

      <div className="pt-5 mt-5 border-t border-gray-200 dark:border-gray-700">
        <div className="sm:flex sm:justify-between sm:items-center">
          <div className="flex items-center gap-x-3">
            <div className="space-x-4 text-sm ms-4">
              <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="/sitemap.xml" target="_blank" rel="noopener noreferrer">Site Map</a>
            </div>
          </div>

          <div className="mt-3 sm:mt-0">
            <p className="text-sm text-gray-500">© 2024 All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
