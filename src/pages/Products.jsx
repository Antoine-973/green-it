import {ProductList} from "../components/products/ProductList.jsx";

export function Products() {

    return (
        <>
            <div className={"grid grid-cols-1 p-8 gap-8 text-center pt-32 w-full h-full"}>
                <h1 className={"text-xl font-extrabold italic"}>CONSTITUEZ VOTRE COLLECTION</h1>
                <p>
                    Acheter et collectionnez plus de 60 véhicules parmi les plus rapides et les plus puissants de l'industrie.
                    Découvrez leurs attributs, leur personnalité, leur style de conduite.
                </p>
                <h2 className={"text-secondary font-bold tracking-widest"}>VOITURES</h2>
            </div>
            <div className={"grid grid-cols-1 justify-items-center"}>
                <ProductList />
            </div>
        </>
    )
}