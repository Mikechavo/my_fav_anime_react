import React from 'react';
import { CardGroup, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Goblin = () => {

  return (
    <>
      <NavLink to={'/'}>
        Home
      </NavLink>

      <h1>Goblin Slayer Character List</h1>
      <Card>
        <CardTitle>
          Guts
        </CardTitle>
        <img src="https://destroythecomics.com/wp-content/uploads/2017/06/berserk1280jpg-7586fc_1280w.jpg"/>
      </Card>

      <Card>
        <CardTitle>
        Griffith
        </CardTitle>
        <img src="https://upload.wikimedia.org/wikipedia/en/7/7a/GriffithBerserk.png"/>
      </Card>
    </>

  )
}

export default Goblin