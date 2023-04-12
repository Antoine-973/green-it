import heroImage from '../../public/hero-background.webp';
import logo from '../../public/logo.webp';
import videos from '../../public/home.mp4';
import '../style/home.css';

export function Home() {
        return (
            <>
                <nav
                    className="flex items-center justify-between bg-black bg-opacity-20 flex-wrap bg-gray-900 p-6 fixed top-0 left-0 w-full z-10">
                    <div className="flex items-center flex-shrink-0 text-white mr-6 gap-8">
                        <img src={logo} width={80} height={80} alt={"Logo de roue chaude"}/>
                        <span className="font-semibold text-xl tracking-tight">Roues Chaudes</span>
                    </div>
                    <div className="block lg:hidden">
                        <button
                            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <div className="text-sm lg:flex-grow">
                            <a href="#responsive-header"
                               className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Home
                            </a>
                        </div>
                    </div>
                </nav>
                <div className={"w-full h-screen"}>
                    <img src={heroImage} alt={'car on top'} className={"w-full h-full object-cover"}/>
                </div>
                <div className={"container"}>
                    {/*first section, video*/}
                    <h2 className={"text-2xl text-center my-10"}> Discover our new BPO's</h2>
                    <div className={"flex flex-row justify-center align-middle p-20"}>
                        <video controls width={720} height={480}>
                            <source src={videos} type="video/mp4"/>
                        </video>
                    </div>
                    {/*seconde section, carousel*/}
                    <div className={"container_carousel"}>
                        <section className="carousel" aria-label="Gallery">
                            <p>This carousel is created with HTML and CSS only.</p>
                            <ol className="carousel__viewport">
                                <li id="carousel__slide1"
                                    tabIndex="0"
                                    className="carousel__slide">
                                    <div className="carousel__snapper">
                                        <a href="#carousel__slide4"
                                           className="carousel__prev">Go to last slide</a>
                                        <a href="#carousel__slide2"
                                           className="carousel__next">Go to next slide</a>
                                    </div>
                                </li>
                                <li id="carousel__slide2"
                                    tabIndex="0"
                                    className="carousel__slide">
                                    <div className="carousel__snapper"></div>
                                    <a href="#carousel__slide1"
                                       className="carousel__prev">Go to previous slide</a>
                                    <a href="#carousel__slide3"
                                       className="carousel__next">Go to next slide</a>
                                </li>
                                <li id="carousel__slide3"
                                    tabIndex="0"
                                    className="carousel__slide">
                                    <div className="carousel__snapper"></div>
                                    <a href="#carousel__slide2"
                                       className="carousel__prev">Go to previous slide</a>
                                    <a href="#carousel__slide4"
                                       className="carousel__next">Go to next slide</a>
                                </li>
                                <li id="carousel__slide4"
                                    tabIndex="0"
                                    className="carousel__slide">
                                    <div className="carousel__snapper"></div>
                                    <a href="#carousel__slide3"
                                       className="carousel__prev">Go to previous slide</a>
                                    <a href="#carousel__slide1"
                                       className="carousel__next">Go to first slide</a>
                                </li>
                            </ol>
                            <aside className="carousel__navigation">
                                <ol className="carousel__navigation-list">
                                    <li className="carousel__navigation-item">
                                        <a href="#carousel__slide1"
                                           className="carousel__navigation-button">Go to slide 1</a>
                                    </li>
                                    <li className="carousel__navigation-item">
                                        <a href="#carousel__slide2"
                                           className="carousel__navigation-button">Go to slide 2</a>
                                    </li>
                                    <li className="carousel__navigation-item">
                                        <a href="#carousel__slide3"
                                           className="carousel__navigation-button">Go to slide 3</a>
                                    </li>
                                    <li className="carousel__navigation-item">
                                        <a href="#carousel__slide4"
                                           className="carousel__navigation-button">Go to slide 4</a>
                                    </li>
                                </ol>
                            </aside>
                        </section>
                    </div>
                    {/*first section, video*/}
                    <div className={"flex flex-row justify-between align-middle p-20 bg-gray-900"}>
                        <div>
                            <p className={"text-white mr-10"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque magni vitae voluptatum!
                                Ab assumenda debitis deleniti earum et in magni minus neque quibusdam, quidem, recusandae
                                repudiandae sequi tenetur totam, vel!
                            </p>
                        </div>
                        <div>
                            <picture>
                                <source srcSet={heroImage} type="image/jpg" media={"(min-width: 1200px)"}/>
                                <source srcSet={heroImage} type="image/jpg" media={"(min-width: 600px)"}/>
                                <img src={heroImage} alt={'test'} className={""} style={{width: '80%'}}/>
                            </picture>
                        </div>
                    </div>
                    <div className={"flex flex-row align-middle justify-center p-20"}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque magni vitae voluptatum!
                            Ab assumenda debitis deleniti earum et in magni minus neque quibusdam, quidem, recusandae
                            repudiandae sequi tenetur totam, vel!
                        </p>
                    </div>
                </div>
            </>
        )
}