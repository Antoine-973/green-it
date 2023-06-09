import videos from '/home.mp4';
import '../style/home.css';

import interior from '/interior_car.webp';
import interior_small from '/interior_car-small.webp';
import logo from '/logo_2.webp';

import cruises from '/cruises.webp';
import cruises_small from '/cruises-small.webp';

import night_picture from '/hot_wheels_night.webp';
import night_picture_small from '/hot_wheels_night-small.webp';

import carroussel1 from '/carroussel-1.webp';
import car1small from '/carroussel-1-small.webp';

import carroussel2 from '/carroussel-2.webp';
import car2small from '/carroussel-2-small.webp';

import carroussel3 from '/carroussel-3.webp';
import car3small from '/carroussel-3-small.webp';

import carroussel4 from '/carroussel-4.webp';
import car4small from '/carroussel-4-small.webp';

import poster from "/poster.webp";

export function Home() {
        return (
            <>
                <div className={"w-full h-screen bg-[url(/hero-background.webp)] bg-cover"}>
                    <div className={"flex items-center h-full"}>
                        <div className={"container flex flex-col items-center  mx-auto px-4"}>
                            <img src={logo} alt={'logo hot wheels'} width={512} height={288} className={"m-auto hover:w-1/2 animation duration-300"}/>
                            <h1 className={"text-center m-auto text-3xl"}>Les meilleurs véhicules disponible dès maintenant !</h1>
                            <div className={"animate-bounce mt-20 "}>
                                <a href="#decouverte" >
                                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none"
                                          viewBox="0 0 24 24" stroke-width="1.5"
                                          stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"/>
                                    </svg>
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
                <div>
                    {/*seconde section, carousel*/}
                    <h2 id={"decouverte"} className={"text-2xl text-center my-10"}> Découvrez nos nouvelles Roues Chaudes !</h2>
                    <div className="carousel w-full md:w-3/4 mx-auto">
                        <div id="slide1" className="carousel-item relative w-full  ">
                            <picture>
                                <source media={"(min-width: 640px)"} srcSet={carroussel1}  type={"image/webp"}/>
                                <img width={1280} height={720} src={car1small} alt={"Image  carrousel 1 "} className={"border border-8 "}/>
                            </picture>

                            <div
                                className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle btn-secondary text-white">❮</a>
                                <a href="#slide2" className="btn btn-circle btn-secondary text-white">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <picture>
                                <source media={"(min-width: 640px)"} srcSet={carroussel2}  type={"image/webp"}/>
                                <img width={1280} height={720} src={car2small} alt={"Image carrousel 2"} className={"border border-8 "}/>
                            </picture>
                            <div
                                className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle btn-secondary text-white">❮</a>
                                <a href="#slide3" className="btn btn-circle btn-secondary text-white">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <picture>
                                <source media={"(min-width: 640px)"} srcSet={carroussel3}  type={"image/webp"}/>
                                <img width={1280} height={720} src={car3small} alt={"Image carrousel 3"} className={"border border-8 "}/>
                            </picture>
                            <div
                                className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle btn-secondary text-white">❮</a>
                                <a href="#slide4" className="btn btn-circle btn-secondary text-white">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <picture>
                                <source media={"(min-width: 640px)"} srcSet={carroussel4}  type={"image/webp"}/>
                                <img width={1280} height={720} src={car4small} alt={"Image carrousel 4"} className={"border border-8 "}/>
                            </picture>

                            <div
                                className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle btn-secondary text-white">❮</a>
                                <a href="#slide1" className="btn btn-circle btn-secondary text-white">❯</a>
                            </div>
                        </div>
                    </div>
                    {/*section description*/}
                    <div className={"grid grid-cols-1 md:grid-cols-2 p-4 md:p-20 justify-center align-middle items-center"}>
                        <div>
                            <h3 className={"text-2xl my-6"}>Pour mieux nous connaître</h3>
                            <p className={"text-white md:mr-10 mb-10 text-left"}>
                                Bienvenue chez Hot Wheels, le concessionnaire automobile le plus excitant de la ville !<br/> Chez
                                Hot Wheels, nous sommes fiers de vous offrir une expérience de conduite inoubliable avec
                                notre gamme de voitures de haute qualité.

                                Notre sélection de voitures miniatures Hot Wheels est conçue pour plaire à tous les amateurs
                                de voitures, qu'ils soient jeunes ou vieux. Nous avons une grande variété de modèles de
                                voitures, y compris des voitures de sport, des voitures de course, des voitures
                                tout-terrain, des camions et bien plus encore.
                            </p>
                        </div>
                        <div className={"text-center w-full"}>
                            <picture>
                                <source media={"(min-width: 640px)"} srcSet={night_picture}  type={"image/webp"}/>
                                <img width={1280} height={720} src={night_picture_small} alt={'Photo de nuit voiture'} className={"w-full"}/>
                            </picture>
                        </div>
                    </div>
                    {/*first section, video*/}
                    <h2 className={"text-2xl text-center my-10"}>Une démonstration de nos modèles</h2>
                    <div className={"flex flex-row justify-center align-middle "}>
                        <video
                            poster={poster}
                            preload={'none'}  controls className={"rounded-md w-full md:w-3/4"}>
                            <source src={videos} type="video/mp4"/>
                        </video>
                    </div>
                    {/*section description texte*/}
                    <div className={"flex flex-col p-4 md:p-20 content_block text-left md:text-justify bg-gray-900 my-6"}>
                        <h3 className={"text-2xl mb-6"}>
                            Nos valeurs !
                        </h3>
                        <p>
                            Chez Hot Wheels, nous sommes dévoués à fournir des voitures de qualité
                            supérieure, fabriquées avec des matériaux de haute qualité pour garantir une longue durée de
                            vie. Nos voitures sont également équipées de fonctionnalités impressionnantes
                            telles que des pneus en caoutchouc véritable, des suspensions fonctionnelles et des détails
                            de carrosserie incroyablement réalistes.
                        </p>
                    </div>
                    {/*section description*/}
                    <div className={"block md:flex md:flex-col md:p-20 text-center md:justify-center md:align-middle md:items-center"}>
                        <h3 className={"text-2xl mb-6"}>
                            Tester nos voitures sur nos parcours !
                        </h3>
                        <picture>
                            <source media={"(min-width: 640px)"} srcSet={cruises}  type={"image/webp"}/>
                            <img src={cruises_small} width={1280} height={720} alt={'Image circuit'} className={"border border-8 transform duration-300 rotate-1 hover:rotate-2"}/>

                        </picture>
                    </div>
                    {/*section description interieur*/}
                    <div className={"grid grid-cols-1 md:grid-cols-2 p-10 md:p-20 text-center justify-center align-middle items-center bg-gray-900"}>
                        <div className={"flex justify-center align-middle items-center"}>
                            <picture>
                                <source media={"(min-width: 640px)"} srcSet={interior}  type={"image/webp"}/>
                                <img src={interior_small} alt={'circuit example'} width={1280} height={720}/>
                            </picture>
                        </div>
                        <div className={"mb-5 md:mb-0"}>
                            <h3 className={"text-2xl m-4 md:ml-8 text-left flex"}>
                                Un interieur de qualité
                                <span className="relative flex h-3 w-3">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                                </span>
                            </h3>
                            <p className={"md:ml-8 text-left"}>
                                L'intérieur de nos Hot Wheels est conçu pour vous offrir le plus grand confort possible.
                                Toute nos voitures sont équipées de sièges en cuir, de climatisation, de GPS et de
                                nombreuses autres options.
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
}