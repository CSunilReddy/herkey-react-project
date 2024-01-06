import React from 'react'
import { Button, Card, CardBody, CardFooter, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import './cardComponent.scss'
import { connect } from 'react-redux'
import { addToCartAction,removeFromCartAction } from '../../reducers/actions'
import { useLocation } from 'react-router-dom'

const CardComponent = ({ productsList = [],  addToCartAction,removeFromCartAction}) => {
    const getPath = useLocation()
    const addProductToCart = (product) => {
        //console.log(product)
        addToCartAction(product)
    }
    const removeProductFromCart = (product) => {
        removeFromCartAction(product)
    }
    return (

        <div className='cardsWrapper' >
        {
            productsList.map((item) => (
                
                <Card key={item.id} className='cardBlock m-2'>
                    <CardImg
                        alt="Card image cap"
                        src={item.thumbnail}
                        top
                        width="100%"
                        className='cardImg' loading="lazy"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            {item.title}  
                        </CardTitle>
                        <CardSubtitle
                            className="mb-3 text-muted"
                            tag="h6"
                        >
                            {item.brand}
                        </CardSubtitle>
                        <CardText>
                            {item.description}
                        </CardText>
                        
                    </CardBody>
                    
                    <CardSubtitle
                        className="mb-2 cardPricing "
                    >
                        Price ${item.price}
                    </CardSubtitle>
                    
                    <CardFooter>
                        {getPath.pathname != '/cart' && <Button onClick={() => addProductToCart(item)}>
                            Add to Cart
                        </Button>}
                        {getPath.pathname == '/cart' && <Button onClick={() => removeProductFromCart(item)}>
                            Remove From Cart
                        </Button>}
                    </CardFooter>
                </Card>
            ))
        }
        </div>

    )
}
const mapDispatchToProps = (dispatch) => {
    return {addToCartAction: item => dispatch(addToCartAction(item)),
            removeFromCartAction: item => dispatch(removeFromCartAction(item))}
}

export default connect(null,mapDispatchToProps)(CardComponent)
