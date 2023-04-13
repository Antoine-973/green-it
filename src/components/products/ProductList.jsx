import products from '../../data/products.json';
import {Link} from "preact-router";

export function ProductList() {

    return (
        <>
            <div className={"flex flex-col items-center w-3/4"}>
                <div className="h-96 carousel carousel-vertical rounded-box">

                    {products.map((product) => (
                        <div className={"carousel-item h-full flex relative"}>
                            <div className={"absolute top-0 flex items-center gap-16"}>
                                <h1 className={"font-bold text-3xl font-bold italic"}>{product.model}</h1>
                                <p className={"font-thin"}>à partir de {product.price} €</p>
                                <Link className={"block px-4 py-2 btn-clip bg-secondary text-white text-center"} href={"/product/" + product.id}>
                                    Acheter maintenant
                                </Link>
                            </div>
                            <img
                                className={"w-full"}
                                src={product.image}
                                alt={product.model + " image"}
                            />
                        </div>
                    ))}
                </div>
                <img
                    width={500}
                    height={240}
                    className={"-mt-20"}
                    src={"pied.webp"}
                    alt={"Piedestal image"}/>
            </div>
        </>
    )
}
