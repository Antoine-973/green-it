import heroImage from '/hero-background.webp';
import videos from '/home.mp4';
import '../style/home.css';
import invader from '/invader.webp';
import interior from '/interior_car.webp';
import logo from '/logo.svg';
import cruises from '/cruises.webp';

export function Home() {
        return (
            <>
                <div className={"w-full h-screen  bg-[url(/hero-background.webp)] bg-cover"}>
                    <div className={"flex items-center h-full"}>
                        <div className={"container mx-auto px-4"}>
                            <img src={logo} alt={'logo hot wheels'} width={300} className={"m-auto"}/>
                            <h1 className={"text-center m-auto text-3xl"}>Les meilleurs véhicules disponible dès maintenant !</h1>
                        </div>
                    </div>
                </div>
                <div className={"container"}>
                    {/*first section, video*/}
                    <h2 className={"text-2xl text-center my-10"}> Découvrez nos nouvelles Roues Chaudes !</h2>
                    <div className={"flex flex-row justify-center align-middle p-20"}>
                        <video controls className={"xs:w-screen ws:mx-10"}>
                            <source src={videos} type="video/mp4"/>
                        </video>
                    </div>
                    {/*seconde section, carousel*/}
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={heroImage} className="w-full"/>
                            <div
                                className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={heroImage} className="w-full"/>
                            <div
                                className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={heroImage} className="w-full"/>
                            <div
                                className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src={heroImage} className="w-full"/>
                            <div
                                className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    {/*section description*/}
                    <div className={"md:flex xs:block md:flex-row justify-between align-middle p-20 bg-gray-900"}>
                        <div>
                            <p className={"text-white mr-10 mb-10"}>
                                Bienvenue chez Hot Wheels, le concessionnaire automobile le plus excitant de la ville !<br/> Chez
                                Hot Wheels, nous sommes fiers de vous offrir une expérience de conduite inoubliable avec
                                notre gamme de voitures de haute qualité.

                                Notre sélection de voitures miniatures Hot Wheels est conçue pour plaire à tous les amateurs
                                de voitures, qu'ils soient jeunes ou vieux. Nous avons une grande variété de modèles de
                                voitures, y compris des voitures de sport, des voitures de course, des voitures
                                tout-terrain, des camions et bien plus encore.
                            </p>
                        </div>
                        <div>
                            <picture>
                                <source srcSet={heroImage} type="image/jpg" media={"(min-width: 1200px)"}/>
                                <source srcSet={heroImage} type="image/jpg" media={"(min-width: 600px)"}/>
                                <img src={heroImage} alt={'test'} width={'80%'} height={'80%'}/>
                            </picture>
                        </div>
                    </div>
                    {/*section description truck*/}
                    <div className={"flex flex-col p-20 text-center justify-center align-middle items-center"}>
                        <h3 className={"text-2xl mb-6"}>
                            Tester nos voitures sur nos parcours !
                        </h3>
                        <img src={cruises} width={800} alt={'circuit example'} className={"border border-20"}/>
                    </div>
                    {/*section description interieur*/}
                    <div
                        className={"grid grid-cols-2 p-20 text-center justify-center align-middle items-center bg-gray-900"}>
                        <div>
                            <h3 className={"text-2xl"}>
                                Un interieur de qualité
                            </h3>
                            <p>
                                L'intérieur de nos Hot Wheels est conçu pour vous offrir le plus grand confort possible.
                                Toute nos voitures sont équipées de sièges en cuir, de climatisation, de GPS et de
                                nombreuses autres options.
                            </p>
                        </div>
                        <div className={"flex justify-center align-middle items-center"}>
                            <img src={interior} alt={'circuit example'} width={500}/>
                        </div>
                    </div>
                    {/*section description texte*/}
                    <div className={"flex flex-col p-20 content_block text-center"}>
                        <p>
                            Chez Hot Wheels, nous sommes dévoués à fournir des voitures miniatures de qualité
                            supérieure, fabriquées avec des matériaux de haute qualité pour garantir une longue durée de
                            vie. Nos voitures miniatures sont également équipées de fonctionnalités impressionnantes
                            telles que des pneus en caoutchouc véritable,<br/> des suspensions fonctionnelles et des détails
                            de carrosserie incroyablement réalistes.
                        </p>
                        <br/>
                        <p>
                            Si vous cherchez une voiture miniature pour votre collection ou simplement pour vous amuser,
                            ne cherchez pas plus loin que Hot Wheels. Nous sommes là pour vous aider à trouver la
                            voiture miniature parfaite qui correspond à vos goûts et à votre budget. Alors venez nous
                            rendre visite chez Hot Wheels et laissez-nous vous aider à vivre l'excitation de la conduite
                            dans un petit format !
                        </p>
                    </div>
                </div>
            </>
        )
}