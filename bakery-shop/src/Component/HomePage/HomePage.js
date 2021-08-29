import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Cake from './Cake';
import Bread from './Bread';
import Candy from './Candy';

const useStyles = makeStyles(() => ({
    root: {
        width: 300,
    },
    media: {
        height: 100,
        paddingTop: '56.25%',
        cursor: 'pointer',
    },
}));

const CardGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  background-color: #171a29;
  padding: 2rem;
`;

export default function SimpleCard() {
    const classes = useStyles();
    return (
        <Router>
            <CardGroup>
                <Card className={classes.root}>
                    Cake
                    <Link to="/cake">
                        <CardMedia
                            className={classes.media}
                            image='images/Chocolate.jpg'
                            title="Cake"
                        />
                    </Link>
                </Card>
                <Card className={classes.root}>
                    Bread
                    <Link to="/bread">
                    <CardMedia
                        className={classes.media}
                        image='images/Bread.jpg'
                        title="Bread"
                    />
                    </Link>
                </Card>
                <Card className={classes.root}>
                    Candy
                    <Link to="/candy">
                    <CardMedia
                        className={classes.media}
                        image='images/candy.jpg'
                        title="Candy"
                    />
                    </Link>
                </Card>
            </CardGroup>
            <div>Short Crust: Cakes & More</div>
            <Switch>
                <Route path="/cake">
                        <Cake />
                </Route>
                <Route path="/bread">
                        <Bread />
                </Route>
                <Route path="/candy">
                        <Candy />
                </Route>
            </Switch>
        </Router>
    );
};