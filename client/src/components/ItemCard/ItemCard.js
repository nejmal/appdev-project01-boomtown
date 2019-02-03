import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import Gravatar from 'react-gravatar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { Link, withRouter } from 'react-router-dom';

// const daysCreated = ({ item }) => {
//   const dateNow = Date.now();
//   const minutes = 1000 * 60;
//   const hours = minutes * 60;
//   const days = hours * 24;
//   const years = days * 365;
//   const daysCounted = Math.round((dateNow - item.created) / days);

//   return daysCounted;
// };

const ItemCard = ({ classes, item }) => {
  const dateNow = Date.now();
  const minutes = 1000 * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const daysCounted = Math.round((dateNow - item.created) / days);

  return (
    <Card className={classes.card}>
      <Fragment>
        <CardMedia
          className={classes.media}
          image={item.imageurl}
          title={item.title}
          component={Link}
          to={`/profile/${item.itemowner.id}`}
        />
        <CardContent>
          <Grid container className={classes.owner} alignItems="center">
            <Avatar className={classes.avatar}>
              <Gravatar
                email={item.itemowner.email}
                default="retro"
                className={classes.gravatar}
              />
            </Avatar>
            <Grid item>
              <Typography
                variant="body1"
                gutterBottom
                // className={classes.ownerInfo}
              >
                {item.itemowner.fullname}
              </Typography>
              <Typography
                variant="caption"
                gutterBottom
                // className={classes.ownerInfo}
              >
                {daysCounted > 1
                  ? daysCounted + ' days ago'
                  : daysCounted + ' day ago'}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            component="h2"
            variant="headline"
            gutterBottom
            className={classes.title}
          >
            {item.title}
          </Typography>
          <Typography
            variant="caption"
            gutterBottom
            // key={tag.id}
            className={classes.capitalize}
          >
            {item.tags.map(tag => tag.title).join(', ')}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {/* <Typography variant="headline" gutterBottom> */}
            {item.description}
          </Typography>
        </CardContent>
      </Fragment>
      <CardActions>
        <Button variant="outlined" className={classes.button}>
          Borrow
        </Button>
      </CardActions>
    </Card>
  );
};

ItemCard.propTypes = {
  classes: PropTypes.object.isRequired
};

ItemCard.defaultProps = {
  item: {
    borrower: 'null',
    description: 'With tangerine trees and marmalade skies',
    id: 'X',
    imageurl:
      'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-sgt-pepper-3-75354b0a-c2dd-4c8c-a5a1-3e01f7316e63.jpg',
    itemowner: {
      bio: 'In the sky with diamonds.',
      email: 'lucy@beatles.com',
      fullname: 'Lucy',
      id: 'X'
    },
    tags: [
      {
        id: 'X',
        title: 'Yourself in a boat on a river'
      }
    ],
    title: 'Picture'
  }
};

export default withRouter(withStyles(styles)(ItemCard));

// put the mapping over here and grab the itemcard from components
// itemcard is a component since it is useable
