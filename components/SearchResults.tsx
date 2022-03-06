import { useMemo } from 'react'
import { ProductItem } from "./ProductItem"

interface SearchResultsProps {
    results: Array<{
        id: number
        price: number
        title: string
    }>
    onAddToWishList: (id: number) => void
}

export function SearchResults({ results, onAddToWishList }: SearchResultsProps) {
    const totalPrice = useMemo(() => {
        results.reduce((total, product) => {
            return total + product.price
        }, 0)
    }, [results])

    return (
        <div>
            <h2>{totalPrice}</h2>

            {results.map(product => {
                return (
                    <ProductItem
                        key={product.id}
                        product={product}
                        onAddToWishList={onAddToWishList}
                    />
                )
            })}
        </div>
    )
}

/* Atualização
* 1. Criar uma nova versão do componente
* 2. Comparar com a versão anterior
* 3. Se houverem alterações, vai atualizar o que alterou
*/

/* Quando usar o memo?
* 1. Pure Functional Components
* 2. Renders too often
* 3. Re-renders with same props
* 4. Medium to big size
*/

/**
 * Quando usar useMemo ?
 * 1. Cálculos Pesados
 * 2. Igualdade Referencial (quando a gente repassa aquela informação a um componente filho)
 */