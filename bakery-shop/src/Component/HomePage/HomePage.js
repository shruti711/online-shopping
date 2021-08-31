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
// import Cake from './Cake';
// import Bread from './Bread';
// import Candy from './Candy';

const useStyles = makeStyles(() => ({
    root: {
        padding: 20,
        display: 'flex',
        flexWrap: 'wrap',
        width: 1000,
        justifyContent: 'center',
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
    background-color: #e9dede;
`;

function Homepage() {
    const classes = useStyles();

    const bakeryItems = BakeryItems;
    const [selectedItem, setSelectedItem] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [, settotalItem] = useState(0);

    const addToCart = (el) => {
        setCart([...cart, el]);
    };

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

    const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++) {
            totalVal += cart[i].price;
        }
        setCartTotal(totalVal);
    };

    const totalItems = () => {
        let totalVal = 0;
        for (let i = 0; i < cartTotal.length; i++) {
            totalVal += cartTotal[i].price;
        }
        settotalItem(totalVal);
    };

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


    const Candy = () => {
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

    const item = () => {
        return (
            <>
                {selectedItem.name === 'Cake' && (
                    <Cake />
                )}
                {selectedItem.name === 'Bread' && (
                    <Bread />
                )}
                {selectedItem.name === 'Candy' && (
                    <Candy />
                )}
            </>
        )
    };

    return (
        <>
            <Card className={classes.root}>
                {bakeryItems.map((t) => (
                    <CardGroup key={t.id}>
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
                {selectedItem.name && (
                    <ItemWrapper>
                        <Typography variant="body" color="textPrimary" component="h1">
                            Recommended {selectedItem.name}
                        </Typography>
                        {item()}
                    </ItemWrapper>
                )}
            </Card>
            <div>Total: {cartTotal}</div>
        </>
    );
};

export default Homepage;