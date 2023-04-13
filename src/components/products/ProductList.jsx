import products from '../../data/products.json';
import {Link} from "preact-router";

export function ProductList() {

    return (
        <>
            <div className={"flex flex-col items-center w-3/4"}>
                <div className="w-64 sm:w-2/3 sm:h-96 carousel sm:carousel-vertical rounded-box">
                    {products.map((product) => (
                        <div className={"carousel-item w-full sm:h-full flex flex-col sm:items-center gap-2"}>
                            <div className={"flex flex-col sm:flex-row items-center gap-4"}>
                                <h1 className={"font-bold text-3xl font-bold italic"}>{product.model}</h1>
                                <p className={"font-thin"}>à partir de {product.price} €</p>
                                <Link className={"block px-4 py-2 btn-clip bg-secondary text-white text-center"} href={"/product/" + product.id}>
                                    Acheter maintenant
                                </Link>
                            </div>
                            <img
                                className={"z-10"}
                                src={product.image}
                                alt={product.model + " image"}
                                width={500}
                                height={280}
                            />
                        </div>
                    ))}
                </div>
                <picture >
                    <source media={"(min-width: 640px)"} srcSet={"pied.webp"}  type={"image/webp"}/>
                    <img
                        className={"-mt-8 sm:-mt-20 md:-mt-28 lg:-mt-20 z-5"}
                        src={"piedistallo-2x.webp"}
                        alt={"Piedestal image"}
                        width={350}
                        height={200}/>
                </picture>


            </div>
        </>
    )
}
