import videos from '/home.mp4';
import '../style/home.css';
import interior from '/interior_car.webp';
import logo from '/logo_2.webp';
import cruises from '/cruises.webp';
import night_picture from '/hot_wheels_night.webp';
import carroussel1 from '/carroussel-1.webp';
import carroussel2 from '/carroussel-2.webp';
import carroussel3 from '/carroussel-3.webp';
import carroussel4 from '/carroussel-4.webp';
import poster from "/poster.webp";

export function Home() {
        return (
            <>
                <div className={"w-full h-screen bg-[url(/hero-background.webp)] bg-cover"}>
                    <div className={"flex items-center h-full"}>
                        <div className={"container mx-auto px-4"}>
                            <img src={logo} alt={'logo hot wheels'} width={512} height={288} className={"m-auto"}/>
                            <h1 className={"text-center m-auto text-3xl"}>Les meilleurs véhicules disponible dès maintenant !</h1>
                        </div>
                    </div>
                </div>
                <div>
                    {/*first section, video*/}
                    <h2 className={"text-2xl text-center my-10"}> Découvrez nos nouvelles Roues Chaudes !</h2>
                    <div className={"flex flex-row justify-center align-middle p-20"}>
                        <video
                            poster={poster}
                            preload={'none'}  width={1280} height={720} controls className={"rounded-md"}>
                            <source src={videos} type="video/mp4"/>
                        </video>
                    </div>
                    {/*seconde section, carousel*/}
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img width={1280} height={720} src={carroussel1} alt={"Image carrousel 1"} className="w-full"/>
                            <div
                                className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle btn-secondary text-white">❮</a>
                                <a href="#slide2" className="btn btn-circle btn-secondary text-white">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img width={1980} height={1319} src={carroussel2} alt={"Image carrousel 2"} className="w-full"/>
                            <div
                                className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle btn-secondary text-white">❮</a>
                                <a href="#slide3" className="btn btn-circle btn-secondary text-white">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img width={1152} height={648} src={carroussel3} alt={"Image carrousel 3"} className="w-full"/>
                            <div
                                className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle btn-secondary text-white">❮</a>
                                <a href="#slide4" className="btn btn-circle btn-secondary text-white">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img width={1980} height={1319} src={carroussel4} alt={"Image carrousel 4"} className="w-full"/>
                            <div
                                className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle btn-secondary text-white">❮</a>
                                <a href="#slide1" className="btn btn-circle btn-secondary text-white">❯</a>
                            </div>
                        </div>
                    </div>
                    {/*section description*/}
                    <div className={"grid grid-cols-1 md:grid-cols-2 p-20 text-center justify-center align-middle items-center"}>
                        <div>
                            <p className={"text-white md:mr-10 mb-10 text-center md:text-left"}>
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
                                {/*<source srcSet={night_picture} type="image/jpg" media={"(min-width: 1200px)"}/>*/}
                                {/*<source srcSet={night_picture} type="image/jpg" media={"(min-width: 600px)"}/>*/}
                                <img width={1119} height={630} src={night_picture} alt={'Photo de nuit voiture'} className={"w-full"}/>
                            </picture>
                        </div>
                    </div>
                    {/*section description truck*/}
                    <div className={"block md:flex md:flex-col p-20 text-center md:justify-center md:align-middle md:items-center"}>
                        <h3 className={"text-2xl mb-6"}>
                            Tester nos voitures sur nos parcours !
                        </h3>
                        <img src={cruises} width={1152} height={648} alt={'Image circuit'} className={"border border-8 transform rotate-1"}/>
                    </div>
                    {/*section description interieur*/}
                    <div className={"grid grid-cols-1 md:grid-cols-2 p-20 text-center justify-center align-middle items-center bg-gray-900"}>
                        <div className={"flex justify-center align-middle items-center"}>
                            <img src={interior} alt={'circuit example'} width={1980} height={1319}/>
                        </div>
                        <div className={"mb-5 md:mb-0"}>
                            <h3 className={"text-2xl m-4"}>
                                Un interieur de qualité
                            </h3>
                            <p>
                                L'intérieur de nos Hot Wheels est conçu pour vous offrir le plus grand confort possible.
                                Toute nos voitures sont équipées de sièges en cuir, de climatisation, de GPS et de
                                nombreuses autres options.
                            </p>
                        </div>
                    </div>
                    {/*section description texte*/}
                    <div className={"flex flex-col p-20 content_block text-left md:text-justify"}>
                        <p>
                            Chez Hot Wheels, nous sommes dévoués à fournir des voitures miniatures de qualité
                            supérieure, fabriquées avec des matériaux de haute qualité pour garantir une longue durée de
                            vie. Nos voitures miniatures sont également équipées de fonctionnalités impressionnantes
                            telles que des pneus en caoutchouc véritable, des suspensions fonctionnelles et des détails
                            de carrosserie incroyablement réalistes.
                        </p>
                    </div>
                </div>
            </>
        )
}