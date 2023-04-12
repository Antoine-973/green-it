import logo from "/logo.webp";
export default function () {

    return(
        <nav className={"flex items-center justify-between bg-black bg-opacity-20 flex-wrap bg-white p-6 fixed top-0 left-0 w-full z-10"}>
           <div className={" flex px-6 md:px-12 lg:container lg:px-6 "}>

               <div className="flex items-center flex-shrink-0 text-white mr-6 gap-8">
                   <a href="/" className={"flex flex-row items-center justify-between"}>
                       <img src={logo} width={80} height={80} alt={"Logo de roue chaude"} className={"mx-5"}/>
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

           <div className="block lg:hidden">
               <input type="checkbox" name="agree" id="agree" className={"peer"} hidden />
               <label htmlFor="agree" className="cursor-pointer flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                   <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                       <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                   </svg>
               </label>
               <div className="peer-checked:translate-x-0  fixed inset-0 w-[calc(100%-5rem)] translate-x-[-100%] transition duration-300 bg-black border-r shadow-xl  ">
                    <div className="flex flex-col h-full flex justify-between text-teal-200 ">
                        <ul className={"px-4 py-8 space-y-8"}>
                            <li>
                                <div className="flex items-center flex-shrink-0 text-white mr-6 gap-8">
                                    <a href="/" className={"flex flex-row items-center justify-between"}>
                                        <img src={logo} width={80} height={80} alt={"Logo de roue chaude"} className={"mx-5"}/>
                                        <span className="font-semibold text-xl tracking-tight">Roues Chaudes</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <a href="/products"  >
                                    <span className="block px-4 py-2 text-sm hover:text-white">Voitures</span>
                                </a>
                            </li>
                        </ul>
                        <div className={"border-t py-8 px-6"}>
                            <a href="/achat" className={"block px-4 py-2 btn-clip bg-secondary text-white text-center"}>
                                Acheter maintenant
                            </a>
                        </div>
                    </div>
               </div>
           </div>

        </nav>
    )
}