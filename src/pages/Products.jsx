import {ProductList} from "../components/products/ProductList.jsx";

export function Products() {

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
            </div>
            <div className={"grid grid-cols-1 justify-items-center"}>
                <ProductList />
            </div>
        </>
    )
}