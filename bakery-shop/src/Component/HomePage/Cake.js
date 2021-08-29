import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Cakaflavour from './Cake.json';

const useStyles = makeStyles(() => ({
    root: {
        padding: 20,
        display: 'flex',
        flexWrap: 'wrap',
        columnGap: 16,
    },
    media: {
        height: 100,
        paddingTop: '56.25%',
        cursor: 'pointer',
    },
}));

const CardGroup = styled.div`
  width: 30%
`;

export default function Cake(selected) {
    const classes = useStyles();
    const [count, setCount] = useState(0);

    const flavour = Cakaflavour;
    // const selectedTemplate = flavour.find((t) => (t.title === selected));

    return (
        <Card className={classes.root}>
            {flavour.map((t) => (
                <CardGroup>
                    <CardMedia
                        key={t.title}
                        selected={t.title === selected}
                        image={t.image}
                        title={t.title}
                        className={classes.media}
                        onClick={() => console.log(t.title)}
                    />
                    <CardContent>
                        {t.title && (
                            <button onClick={() => setCount(count + 1)}>
                                Add to Card {count}
                            </button>
                        )}
                        <Typography variant="body2" color="textPrimary" component="p">
                            {t.description}
                        </Typography>
                    </CardContent>
                </CardGroup>
            ))}
        </Card>
    );
};