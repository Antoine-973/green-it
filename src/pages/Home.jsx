import heroImage from '/hero-background.webp';
import videos from '/home.mp4';
import '../style/home.css';


export function Home() {
        return (
            <>
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
                    <div className={"md:flex xs:block md:flex-row justify-between align-middle p-20 bg-gray-900"}>
                        <div>
                            <p className={"text-white mr-10 mb-10"}>
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