import { useLocation } from 'react-router-dom';

// Define the links as a JSON object
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Terms", path: "/terms" },
  { name: "Privacy", path: "/privacy" }
];

export function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
      <nav className="mt-4 relative max-w-6xl w-full bg-white border border-gray-200 rounded-[2rem] mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto dark:bg-neutral-900 dark:border-neutral-700">
        <div className="px-4 md:px-0 flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo */}
            <a className="flex-none text-md font-semibold dark:text-white" href="/" aria-label="Visionclara">
                Visionclara
            </a>
            <div className="ms-1 sm:ms-2"></div>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="hs-collapse-toggle flex justify-center items-center size-6 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              data-hs-collapse="#hs-navbar-collapse"
              aria-controls="hs-navbar-collapse"
              aria-label="Toggle navigation"
            >
              <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" x2="21" y1="6" y2="6"/>
                <line x1="3" x2="21" y1="12" y2="12"/>
                <line x1="3" x2="21" y1="18" y2="18"/>
              </svg>
              <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div id="hs-navbar-collapse" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block">
          <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
            {navLinks.map(link => (
              <a
                key={link.name}
                className={`py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200 ${
                  location.pathname === link.path ? 'text-blue-500 dark:text-white' : ''
                }`}
                href={link.path}
                aria-current={location.pathname === link.path ? "page" : undefined}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

      </nav>
    </header>
  )
}
