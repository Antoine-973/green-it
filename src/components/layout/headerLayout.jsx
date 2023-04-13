import logo from "/logo.webp";
export default function () {

    return(
        <nav className={"fixed w-full m-auto top-0 left-0 z-30  "}>
            <div className={"header-container w-full flex flex-col relative z-30   "} >

                <div className={" flex absolute top-8 md:px-12 lg:container lg:px-6 z-30 "}>

                    <div className="flex items-center flex-shrink-0 text-white mr-6 gap-8">
                        <a href="/" className={"flex flex-row items-center justify-between"}>
                            <img src={logo} width={80} height={80} alt={"Logo de roue chaude"} className={"mr-5"}/>
                            <span className="font-semibold text-xl tracking-tight">Roues Chaudes</span>
                        </a>
                    </div>

                    <div className="hidden lg:block  w-full flex-grow lg:flex lg:items-center lg:w-auto text-teal-200 ">
                        <div className="text-sm lg:flex-grow">
                            <a href="/products"
                               className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
                                Voitures
                            </a>
                        </div>
                    </div>

                    <div className={"hidden lg:block "}>
                        <a href="/achat" className={"block px-4 py-2 btn-clip bg-secondary text-white text-center"} >
                            Acheter maintenant
                        </a>
                    </div>
                </div>

                <div className="absolute top-8  z-30 w-full lg:hidden">

                    <input type="checkbox" name="agree" id="agree" className={"peer"} hidden />
                    <label htmlFor="agree" className="absolute right-8 cursor-pointer flex items-end px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </label>

                    {/*Mobile menu*/}
                    <label htmlFor="agree" className={"peer-checked:backdrop-blur-[80px] peer-checked:block hidden fixed top-0 h-screen w-screen "}>
                    </label>
                    <div className="peer-checked:translate-x-0  fixed inset-0 w-[calc(45%)] translate-x-[-100%] transition duration-300 bg-black border-r shadow-xl  ">
                        <div className="flex flex-col h-full flex justify-between text-teal-200 ">
                            <label
                                htmlFor="agree"
                                className="cursor-pointer fixed top-5 left-[calc(100%-50px)]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="white"
                                    className="h-6 w-6">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </label>
                            <ul className={"px-4 py-8 space-y-8"}>
                                <li>
                                    <div className="flex items-center flex-shrink-0 text-white mr-6 gap-8">
                                        <a href="/">
                                            <label htmlFor="agree" >
                                                <span className="font-semibold text-white hover:text-gray-400 text-xl tracking-tight">Roues Chaudes</span>
                                            </label>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <a href="/products"  >
                                        <label htmlFor="agree" >
                                            <span className="font-semibold text-xl text-white hover:text-gray-400 tracking-tight">Voitures</span>
                                        </label>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/*The bottom blue border*/}
                <div className={"z-20 overflow-x-hidden"}>
                    <div className={"absolute w-full top-0 bg-primary h-16 lg:h-8 opacity-60 "}>
                        <div className={"absolute w-full top-16 lg:top-8 bg-primary opacity-60  overflow-x-hidden "}>
                            <svg   viewBox="0 0 2560 156" version="1.1" className={"max-w-full"}
                                   xmlns="http://www.w3.org/2000/svg">

                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <polygon fill="#11315A"
                                             points="0 0 2560 0 2560 99.1180705 2523.42188 98 2475.42188 146 0 146"></polygon>
                                    <path
                                        d="M0,146 L2471.27974,146 C2473.9319,146 2476.47544,144.946432 2478.35081,143.071068 L2520.49294,100.928932 C2522.36831,99.0535684 2524.91185,98 2527.56401,98 L2560,98 L2560,98"
                                        id="Path-3"
                                        stroke="#007aff"
                                        stroke-width="1.27226463"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    )
}