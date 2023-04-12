import logo from "/logo.webp";

export function Navbar(){
    return (
        <nav
            className="flex items-center justify-between bg-black bg-opacity-20 flex-wrap bg-white p-6 fixed top-0 left-0 w-full z-10">
            <div className="flex items-center flex-shrink-0 text-white mr-6 gap-8">
                <a href="/" className={"flex flex-row items-center justify-between"}>
                    <img src={logo} width={80} height={80} alt={"Logo de roue chaude"} className={"mx-5"}/>
                    <span className="font-semibold text-xl tracking-tight">Roues Chaudes</span>
                </a>
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <div className="hidden lg:block  w-full flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <a href="/products"
                       className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        products
                    </a>
                </div>
            </div>
        </nav>
    )
}