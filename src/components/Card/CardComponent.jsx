import React from 'react'
import { Button, Card, CardBody, CardFooter, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import './cardComponent.scss'
const CardComponent = ({ productsList = [] }) => {

    const addProductToCart = (productID) => {
        console.log(productID)
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
                        <Button onClick={() => addProductToCart(item.id)}>
                            Add to Cart
                        </Button>
                    </CardFooter>
                </Card>
            ))
        }
        </div>

    )
}

export default CardComponent
