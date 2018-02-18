import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Display = (props) => (
  <Card>
    <CardHeader
      // title="URL Avatar"
      // subtitle="Subtitle"
      // avatar="images/jsa-128.jpg"
    />
    <CardMedia
      overlay={<CardTitle title="History of Transactions" />}
    >
      <img src="images/nature-600-337.jpg" alt="" />
    </CardMedia>
    <CardTitle title="Transactions" />
    <CardText>
      {JSON.stringify(props.state)}
    </CardText>
    <CardActions>
      <FlatButton label="Previous" />
      <FlatButton label="Next" />
    </CardActions>
  </Card>
);

export default Display;