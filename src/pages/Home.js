import React from 'react';
import { CardGroup, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Home = () => {

  return (
    <div>
      <Card>
        <CardTitle tag="h1">
          Berserk
        </CardTitle>
        <CardText>Berserk is a dark fantasy manga series written and illustrated by Kentarō Miura. The series follows the story of Guts, a mercenary warrior drawn into the world of the God Hand, powerful beings who rule the supernatural realm. The story is set in the Kingdom of Midland, a fictional country inspired by medieval Europe.</CardText>
      </Card>
      <Button className="berserkButton" >
        <NavLink to={'/berserk'}>Berserk Character list
        </NavLink>
      </Button>
    </div>
  )

}


export default Home