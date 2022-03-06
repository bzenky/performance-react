import { ProductItem } from "./ProductItem"

interface SearchResultsProps {
    results: Array<{
        id: number
        price: number
        title: string
    }>
}


export function SearchResults({ results }: SearchResultsProps) {
    return (
        <div>
            {results.map(product => {
                return (
                    <ProductItem product={product} />
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