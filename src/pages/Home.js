import React from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../App.css'
const Home = () => {

  return (
    <div>
      <div class="background-animation-home"></div> {/* animated background */}
      
      <Card>
        <CardTitle tag="h1">
          Jujutsu Kaisen
        </CardTitle>
        <img src="https://static.bandainamcoent.eu/high/jujutsu-kaisen/jujutsu-kaisen-cursed-clash/00-page-setup/JJK-header-mobile2.jpg" alt="Description" />
        <CardText>Berserk is a dark fantasy manga series written and illustrated by Kentarō Miura. The series follows the story of Guts, a mercenary warrior drawn into the world of the God Hand, powerful beings who rule the supernatural realm. The story is set in the Kingdom of Midland, a fictional country inspired by medieval Europe.</CardText>
      </Card>
      <Button className="home-page-buttons" >
          <NavLink to={'/jjk'} style={{ color: 'white' }}>Jujutsu Kaisen Character list
          </NavLink>
        </Button>

      <Card>
        <CardTitle tag="h1">
          Berserk
        </CardTitle>
        <img src="https://destroythecomics.com/wp-content/uploads/2017/06/berserk1280jpg-7586fc_1280w.jpg" alt="Description"/>
        <CardText>Berserk is a dark fantasy manga series written and illustrated by Kentarō Miura. The series follows the story of Guts, a mercenary warrior drawn into the world of the God Hand, powerful beings who rule the supernatural realm. The story is set in the Kingdom of Midland, a fictional country inspired by medieval Europe.</CardText>
      </Card>
      <Button className="home-page-buttons" >
          <NavLink to={'/berserk'} style={{ color: 'white' }}>Berserk Character list
          </NavLink>
        </Button>

      <Card>
        <CardTitle tag="h1">
          Goblin Slayer
        </CardTitle>
        <img src="https://i0.wp.com/news.qoo-app.com/en/wp-content/uploads/sites/3/2023/03/Goblin-Slayer-Another-Adventurer-Nightmare-Feast-008.jpeg?resize=900%2C506&ssl=1" alt="Description"/>
        <CardText>Berserk is a dark fantasy manga series written and illustrated by Kentarō Miura. The series follows the story of Guts, a mercenary warrior drawn into the world of the God Hand, powerful beings who rule the supernatural realm. The story is set in the Kingdom of Midland, a fictional country inspired by medieval Europe.</CardText>
      </Card>
      <Button className="home-page-buttons" >
          <NavLink to={'/goblin'} style={{ color: 'white' }}>Goblin Slayer Character list
          </NavLink>
        </Button>

    </div>
  )

}


export default Home