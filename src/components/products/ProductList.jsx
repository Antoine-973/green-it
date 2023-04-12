import products from '../../data/products.json';

export function ProductList() {

    return (
        <>
            <div className={"grid grid-cols-1 gap-8 p-8 text-center pt-32"}>
                <h1 className={"text-xl font-extrabold italic"}>CONSTITUEZ VOTRE COLLECTION</h1>
                <p>
                    Débloquez et collectionnez plus de 60 véhicules parmi les meilleurs de l'univers de Hot WheelsTM.
                    Découvrez leurs attributs, leur personnalité, leur style de conduite et leur niveau de rareté.
                    L'éditeur de livrée vous permettra d'atteindre des vitesses folles avec style !
                </p>
                <h2 className={"text-secondary font-bold tracking-widest"}>VOITURES</h2>
                <div className={"grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
                    {products.map((product) => (
                        <div className={"p-10"}>
                            <h1 className={"font-bold text-3xl font-bold italic"}>{product.model}</h1>
                            <img
                                src={product.image}
                                alt={product.model + " image"}/>
                            <img
                                src={"public/pied.webp"}
                                alt={product.model + " image"}/>
                            <h3 className={"font-thin"}>à partir de {product.price} €</h3>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}
