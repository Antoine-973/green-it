import heroImage from '/hero-background.webp';
import videos from '/home.mp4';
import '../style/home.css';
import invader from '/invader.webp';

export function Home() {
        return (
            <>
                <div className={"w-full h-screen  bg-[url(/hero-background.webp)] bg-cover"}>
                    <div className={"flex items-center h-full"}>
                        <div className={"container mx-auto px-4"}>
                            <h1 className={"flex flex-row text-2xl"}>Roues Chaudes !</h1>
                        </div>
                    </div>
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
                        </section>
                    </div>
                    {/*section description*/}
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
                                <img src={heroImage} alt={'test'} width={'80%'} height={'80%'}/>
                            </picture>
                        </div>
                    </div>
                    {/*section description circuit*/}
                    <div className={"flex flex-col p-20 text-center justify-center align-middle items-center"}>
                        <h3 className={"text-2xl"}>
                            Nos circuits
                        </h3>
                        <img src={invader} alt={'circuit example'} width={500}/>
                    </div>
                    {/*section description interieur*/}
                    <div className={"grid grid-cols-2 p-20 text-center justify-center align-middle items-center bg-gray-900"}>
                        <div >
                            <h3 className={"text-2xl"}>
                                Un interieur de qualité
                            </h3>
                            <p>
                                L'intérieur de nos BPO est conçu pour vous offrir le plus grand confort possible.
                                Toute nos voitures sont équipées de sièges en cuir, de climatisation, de GPS et de
                                nombreuses autres options.
                            </p>
                        </div>
                        <div className={"flex justify-center align-middle items-center"}>
                            <img src={invader} alt={'circuit example'} width={500}/>
                        </div>
                    </div>
                    {/*section description texte*/}
                    <div className={"flex flex-row align-middle justify-center p-20 content_block text-center"}>
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