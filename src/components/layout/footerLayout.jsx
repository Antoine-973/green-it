export default function () {
    return(
        <footer className={"pb-4"}>
            <div className={"container mx-auto px-4"}>
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