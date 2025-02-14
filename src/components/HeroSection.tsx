interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

const GradientButton = ({ href, children }: ButtonProps) => (
  <a 
    className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:shadow-blue-700/50 py-3 px-6" 
    href={href}
  >
    {children}
  </a>
);

const ArrowIcon = () => (
  <svg 
    className="shrink-0 size-4" 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

export function HeroSection() {
    return (
        <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:w-[150%] before:h-[150%] before:-z-[1] before:transform before:-translate-x-1/2">
            {/* Hero */}
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
                {/* Announcement Banner */}
                <div className="flex justify-center">
                <a className="group inline-flex items-center bg-white/10 hover:bg-white/10 border border-white/10 p-1 ps-4 rounded-full shadow-md focus:outline-none focus:bg-white/10" href="#">
                    <p className="me-2 text-white text-sm">
                    Preline UI Figma is live.
                    </p>
                    <span className="group-hover:bg-white/10 py-1.5 px-2.5 flex justify-center items-center gap-x-2 rounded-full bg-white/10 font-semibold text-white text-sm">
                    <ArrowIcon />
                    </span>
                </a>
                </div>

                {/* Title */}
                <div className="mt-5 max-w-xl text-center mx-auto">
                    <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                        Supercharged Preline Experience
                    </h1>
                </div>

                <div className="mt-5 max-w-3xl text-center mx-auto">
                    <p className="text-lg text-gray-600 dark:text-neutral-400">
                        Preline is a large open-source project, crafted with Tailwind CSS framework by Hmlstream.
                    </p>
                </div>

                {/* Buttons */}
                <div className="text-center mt-8">
                    <GradientButton href="#">
                        Get started
                        <ArrowIcon />
                    </GradientButton>
                </div>
            </div>
        </div>
    )
}
