import products from '../data/products.json';

export function Product() {

    const productID = window.location.pathname.split("/")[2];
    const currentProduct = products[productID - 1];

    return (
        <div className={"pt-32 w-full h-screen p-8"}>
            <div className={"flex items-center gap-3 p-5 border border-secondary"}>
                <div className="badge">{currentProduct.category}</div>
                <div className="badge">{currentProduct.brand}</div>
                <h1 className={"text-xl font-extrabold italic"}>{currentProduct.model}</h1>
            </div>
            <div className={"flex flex-col sm:flex-row items-center"}>
                <div>
                    <img className={"drop-shadow-xl"} width={800} height={450} src={'../' + currentProduct.image} alt={currentProduct.model + " image"}/>
                </div>
                <div className={"flex flex-col items-center gap-6"}>
                    <p>{currentProduct.description}</p>
                    <div className={"flex items-center gap-10"}>
                        <h1 className={"text-3xl italic font-bold"}>{currentProduct.price} €</h1>
                        <button className={"block px-4 py-2 btn-clip bg-secondary text-white text-center"}>
                            Acheter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}