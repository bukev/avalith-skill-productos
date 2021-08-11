const Product = (props) => {
    
    
    // Conditional styles if product is out of stock
    let classes = ''
    let titleAtt = ''

    if (props.stock) {
        classes = 'product product-hover'
    } else {
        classes = 'product out-of-stock'
        titleAtt = 'Producto fuera de stock'
    }

    return (
        <div className={classes}>
            <div className="product-banner" title={titleAtt}>
                <p className="product-title">{props.name}</p>
                <p className="price">${props.price}</p>
            </div>
            <hr />
            <p className="description">{props.description}</p>
        </div>
    ) 
}

export default Product