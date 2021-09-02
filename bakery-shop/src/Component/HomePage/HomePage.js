import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BakeryItems from './Homepage.json';
import CandyFlaour from './Candy.json';
import CakeFlaour from './Cake.json';
import BreadFlaour from './Bread.json';

// style for card
const useStyles = makeStyles(() => ({
    root: {
        padding: 20,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
//   backgroundImage: 'url("https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFrZXJ5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80")',
    },
    media: {
        height: 100,
        paddingTop: '56.25%',
        cursor: 'pointer',
        width: '100%',
    },
}));

const CardGroup = styled.div`
  width: 30%
`;

const ItemWrapper = styled.div`
    width: 100%;
    margin-top: 2rem;
    background-color: #e9dede;
`;

const CartButton = styled.div`
    font-size: 2rem;
    cursor: pointer;
    background-color: pink;
    border: 1px solid;
    width: 30%;
    margin: 0 auto;
    color: steelblue;
`;

const CardWrapper = styled.div`
   width: 1000px;
   @media only screen and (max-width: 768px) {
     width: 680px;
   }
   @media only screen and (max-width: 568px) {
    width: 100%;
   }
`;

function Homepage({ setLoginUser }) {
    const classes = useStyles();

    const bakeryItems = BakeryItems;
    const [selectedItem, setSelectedItem] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState([]);
    const [, settotalItem] = useState(0);
    const [checkoutItem, setCheckoutItem] = useState(false);
    const [orderProceed, setorderProceed] = useState(false);

    const addToCart = (el) => {
        setCart([...cart, el]);
    };

    //remove item from card
    const removeFromCart = (el) => {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
        setCart(hardCopy);
    };

    useEffect(() => {
        total();
    }, [cart]);

    useEffect(() => {
        totalItems();
    }, [cartTotal]);

    // all perticular item(cake, chocolate, bread) selected by the user 
    const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++) {
            totalVal += cart[i].price;
        }
        setCartTotal(totalVal);
    };

    // all the items selected by the user
    const totalItems = () => {
        let totalVal = 0;
        for (let i = 0; i < cartTotal.length; i++) {
            totalVal += cartTotal[i].price;
        }
        settotalItem(totalVal);
    };

    // cardmedia card content add to cart
    const cardMedia = (t) => {
        return (
            <>
                <CardMedia
                    key={t.id}
                    image={t.image}
                    title={t.title}
                    className={classes.media}
                />
                <CardContent>
                    {t.title && (
                        <div>
                            <button onClick={() => addToCart(t)}>
                                +
                            </button>
                            <button onClick={() => removeFromCart(t)}>
                                -
                            </button>
                        </div>
                    )}
                    <Typography variant="body" color="textPrimary" component="h3">
                        {t.price}
                    </Typography>
                    <Typography variant="body" color="Primary" component="h3">
                        {t.name}
                    </Typography>
                    <Typography variant="body2" color="textPrimary" component="p">
                        {t.description}
                    </Typography>
                </CardContent>
            </>
        )
    };

    const Cake = () => {
        const cake = CakeFlaour;

        return (
            <Card className={classes.root}>
                {cake.map((t) => (
                    <CardGroup>
                        {cardMedia(t)}
                    </CardGroup>
                ))}
            </Card>
        );
    };

    const Bread = () => {
        const breads = BreadFlaour;

        return (
            <Card className={classes.root}>
                {breads.map((t) => (
                    <CardGroup>
                        {cardMedia(t)}
                    </CardGroup>
                ))}
            </Card>
        );
    };


    const Chocolate = () => {
        const candies = CandyFlaour;

        return (
            <Card className={classes.root}>
                {candies.map((t) => (
                    <CardGroup>
                        {cardMedia(t)}
                    </CardGroup>
                ))}
            </Card>
        );
    };

    // list of all items
    const item = () => {
        return (
            <>
                {selectedItem.name === 'Bread' && (
                    <Bread />
                )}
                {selectedItem.name === 'Chocolate' && (
                    <Chocolate />
                )}
                {selectedItem.name === 'Cake' && (
                    <Cake />
                )}
            </>
        )
    };

    //after placed the order
    const PlacedOrder = () => {
        return (
            <div>
                <Typography variant="h3" color="initial" component="h1">
                    Order is placed
                </Typography>
                <button onClick={() => setCheckoutItem(false)}>Cancel</button>
            </div>
        )
    };

    // when order placed delete selected items
    const proccedToPay = () => {
        var arr = [cartTotal];
        var arr1 = arr;
        arr = [];
        cart.length = 0;
        setCartTotal(arr);
        setorderProceed(true);
    };

    // order procced
    const Checkout = () => {
        return (
            <div className='popup'>
                {!orderProceed ? (
                    <>
                        <button onClick={() => setCheckoutItem(false)}> Continue </button>
                        <button onClick={proccedToPay}>Procced</button>
                    </>
                ) : (
                    <PlacedOrder />
                )}
            </div>
        )
    };

    return (
        <CardWrapper>
        <Typography variant="body" color="Primary" component="h1">
                    Welcome to Bakery
                </Typography>
            <Card className={classes.root}>
                {bakeryItems.map((t) => (
                    <CardGroup>
                        <CardMedia
                            key={t.id}
                            image={t.image}
                            title={t.title}
                            className={classes.media}
                            onClick={() => setSelectedItem(t)}
                        />
                        <CardContent>
                            <Typography variant="body" color="Primary" component="h3">
                                {t.name}
                            </Typography>
                        </CardContent>
                    </CardGroup>
                ))}
            </Card>

             {/* list of item which selected by user  */}
            {selectedItem.name && (
            <ItemWrapper>
                <Typography variant="body" color="textPrimary" component="h1">
                    Recommended {selectedItem.name}
                </Typography>
                {item()}
            </ItemWrapper>
            )}
            {cartTotal > 0 && (
                <CartButton onClick={() => setCheckoutItem(true)}>Cart: {cartTotal}</CartButton>
            )}
            {checkoutItem && (
                <Checkout />
            )}
        </CardWrapper>
    );
};

export default Homepage;