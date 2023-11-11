import React from 'react';
import { CardGroup, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Jjk = () => {

  return (
    <>
      <NavLink to={'/'}>
        Home
      </NavLink>

      <h1>Jujutsu Kaisen Character List</h1>
      <Card style={{
        width: '18rem'
      }}>
        <CardTitle>
          Yuji Itadori
        </CardTitle>
        <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/11/E273E9C0-66E2-48F9-AEA1-E30872DA8FDF.jpeg" />
      </Card>

      <Card style={{
        width: '18rem'
      }}>
        <CardTitle>
          Sukuna
        </CardTitle>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbmR6R47-Vrm68AD2czD-a3pZETseS8twiGQ&usqp=CAU" />
      </Card>
      <Card style={{
        width: '18rem'
      }}>

        <CardTitle>
          Satoru Gojo
        </CardTitle>
        <img src="https://www.looper.com/img/gallery/satoru-gojos-powers-from-jujutsu-kaisen-explained/l-intro-1634607238.jpg" />
      </Card>

      <Card style={{
        width: '18rem'
      }}>
        <CardTitle>
        Megumi Fushiguro
        </CardTitle>
        <img src="https://staticg.sportskeeda.com/editor/2023/02/7d17a-16754537065524.png?w=840" />
      </Card>
    </>

  )
}

export default Jjk