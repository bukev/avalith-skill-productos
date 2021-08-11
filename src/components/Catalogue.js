import { useState, useEffect } from 'react'
import Toggle from './Toggle.js'
import Product from './Product.js'

const data = [
    {
        name: 'Pepsi', price: 200, description: 'Pepsi, también conocida como Pepsi-Cola, es una gaseosa de cola', stock: true
    },
    {
        name: 'Café', price: 500, description: 'Café torrado molido X 500gr', stock: false
    },
    {
        name: 'Coca', price: 250, description: 'Coca, también conocida como Coca-Cola, es una gaseosa de cola', stock: true
    },
    {
        name: 'Galletitas', price: 120, description: 'Galletitas surtidas', stock: false
    },
]

const Catalogue = () => {

    // Stock state
    const [showAll, setShowAll] = useState(false)
    const [productList, setProductList] = useState()

    // Toggles whether all products are displayed or not. If showAll is false, only the components on stock are displayed. Called on the Toggle component.
    const toggleState = (state) => {
        setShowAll(!state)
        console.log(state)
    }

    // everytime the showAll state changes, the product list is set based on its value 
    useEffect(() => {
        if (!showAll) {
            setProductList(
                data.map(p =>{
                    if (p.stock) {
                        return <Product
                        name={p.name}
                        price={p.price}
                        description={p.description}
                        stock={p.stock}
                        />
                    }
                })
            )
        } else {
            setProductList(
                // first the array of products is sorted, so the products on stock display on top
                data.sort((a,b) => { return a.stock === b.stock ? 0 : a.stock ? -1 : 1 }) 
                    .map(p =>
                        <Product
                            name={p.name}
                            price={p.price}
                            description={p.description}
                            stock={p.stock}
                        />
                    )
            )
        }
    }, [showAll])


    return (
        <div>
            <h1>Catálogo de productos</h1>
            <hr />

            <div className="toggle-container">

                <p className="toggle-text">
                    Mostrar productos fuera de stock
                </p>
                <Toggle state={showAll} toggleState={toggleState} />
                
            </div>
            
            {productList}
        </div>
    )
}

export default Catalogue