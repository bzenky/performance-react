import { useMemo } from 'react'
import { List, ListRowRenderer } from 'react-virtualized'
import { ProductItem } from "./ProductItem"

interface SearchResultsProps {
    totalPrice: number
    results: Array<{
        id: number
        price: number
        priceFormatted: string
        title: string
    }>
    onAddToWishList: (id: number) => void
}

export function SearchResults({ totalPrice, results, onAddToWishList }: SearchResultsProps) {
    const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
        return (
            <div key={key} style={style}>
                <ProductItem
                    product={results[index]}
                    onAddToWishList={onAddToWishList}
                />
            </div>
        )
    }

    // const totalPrice = useMemo(() => {
    //     results.reduce((total, product) => {
    //         return total + product.price
    //     }, 0)
    // }, [results])

    return (
        <div>
            <h2>{totalPrice}</h2>

            <List
                height={300}
                rowHeight={30}
                width={900}
                overscanRowCount={5}
                rowCount={results.length}
                rowRenderer={rowRenderer}
            />

            {/* {results.map(product => {
                return (
                    <ProductItem
                        key={product.id}
                        product={product}
                        onAddToWishList={onAddToWishList}
                    />
                )
            })} */}
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

/**
 * Quando usar useCallback ?
 * 1. Igual useMemo, só que para funções
 */