export default function () {
    return(
        <footer className={"bg-gray-900 py-4 "}>
            <div className={"container mx-auto px-4"}>
                <div className={"flex flex-col lg:flex-row  md:justify-between pb-8 "}>
                    <div className={"px-4"}>
                        <ul className={"flex flex-col pb-8 lg:pb-0"}>
                            <li>
                                <p className={"text-xl py-1 px-3"}>Plan du site</p>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/products"
                                   className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3">
                                    Voitures
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={" px-4 pb-8 lg:pb-0"}>
                        <ul className={"flex flex-col "}>
                            <li>
                                <p className={"text-xl py-1 px-3"}>Nous contacter</p>
                            </li>
                            <li>
                                <a
                                    href="mailto:"
                                    className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3">
                                    Email
                                </a>
                            </li>
                            <li>
                                <a href="tel:"
                                      className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3">
                                    Téléphone
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={"lg:w-1/4 px-4 pb-8 lg:pb-0"}>
                        <p className={"text-sm py-1 px-3 text-justify"}>
                            Les roues chaudes, site de vente de voitures mignatures. Tous droits réservés.
                        </p>

                    </div>
                </div>
                <div className={"flex items-center justify-between border-t pt-4 w-full  px-4"}>
                    <div className={"text-sm flex items-center flex-row text-white font-semibold py-1 text-center md:text-left "}>
                        © {new Date().getFullYear()}{" "}
                        <p
                            className="text-white  text-sm font-semibold py-1 px-4"
                        >
                            Roues Chaudes
                        </p>
                    </div>
                    <div className={"text-sm text-white font-semibold py-1 text-center md:text-left"}>
                        <a
                            href={'mentions-legales'}
                            className="text-white hover:text-gray-400 text-sm font-semibold py-1"
                        >
                            Mentions légales
                        </a>
                    </div>
                </div>
            </div>

        </footer>
    )
}