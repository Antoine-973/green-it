import products from '../data/products.json';

export function Product() {

    const productID = window.location.pathname.split("/")[2];
    const currentProduct = products[productID]

    return (
        <>
            <div className={"grid grid-cols-1 gap-8 p-8 text-center pt-32"}>
                <h1 className={"text-xl font-extrabold italic"}>{currentProduct.model}</h1>
                <p>
                    {currentProduct.description}
                </p>
                <h2 className={"text-secondary font-bold tracking-widest"}>VOITURES</h2>
            </div>
            <div className={"grid grid-cols-1 justify-items-center"}>
                <img
                    className={"w-3/4"}
                    src={currentProduct.image}
                    alt={currentProduct.model + " image"}
                />
            </div>
        </>
    )
}