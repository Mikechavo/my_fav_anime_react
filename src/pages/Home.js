import React from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    <div className="container">
      <div className="background-animation-home"></div> {/* animated background */}

      <div className="card-container">
        <Card className="custom-card">
          <CardTitle tag="h1">Jujutsu Kaisen</CardTitle>
          <img src="https://static.bandainamcoent.eu/high/jujutsu-kaisen/jujutsu-kaisen-cursed-clash/00-page-setup/JJK-header-mobile2.jpg" alt="Description" />
          <CardText>Jujutsu Kaisen follows the story of Yuji Itadori, an ordinary boy who crosses paths with Megumi Fushiguro, a Jujutsu Sorcerer searching for a powerful Cursed Object known as Ryomen Sukuna's finger. Unintentionally, Yuji's friends unseal the Cursed Object, attracting dangerous Curses to their location.</CardText>
          <Button className="home-page-buttons">
            <NavLink to={'/jjk'} style={{ color: 'white' }} ><h2>Jujutsu Kaisen Character list </h2></NavLink>
          </Button>
        </Card>

        <Card className="custom-card">
          <CardTitle tag="h1">Berserk</CardTitle>
          <img src="https://destroythecomics.com/wp-content/uploads/2017/06/berserk1280jpg-7586fc_1280w.jpg" alt="Description" />
          <CardText>Berserk is a dark fantasy manga series written and illustrated by Kentarō Miura. The series follows the story of Guts, a mercenary warrior drawn into the world of the God Hand, powerful beings who rule the supernatural realm. The story is set in the Kingdom of Midland, a fictional country inspired by medieval Europe.</CardText>
          <Button className="home-page-buttons">
            <NavLink to={'/berserk'} style={{ color: 'white' }}><h2>Berserk Character list</h2></NavLink>
          </Button>
        </Card>

       
        <Card className="custom-card">
          <CardTitle tag="h1">Goblin Slayer</CardTitle>
          <img src="https://i0.wp.com/news.qoo-app.com/en/wp-content/uploads/sites/3/2023/03/Goblin-Slayer-Another-Adventurer-Nightmare-Feast-008.jpeg?resize=900%2C506&ssl=1" alt="Description" />
          <CardText>In a fantasy world, a lone hero makes his living by exterminating all goblins he encounters. But one day he meets a friend, and his life begins to become more intense. A young priestess has formed her first adventuring party, but almost immediately they find themselves in distress.</CardText>
          <Button className="home-page-buttons">
            <NavLink to={'/goblin'} style={{ color: 'white' }}><h2>Goblin Slayer Character list</h2></NavLink>
          </Button>
        </Card>


        <Card className="custom-card">
          <CardTitle tag="h1">Demon Slayer</CardTitle>
          <img src="https://a.storyblok.com/f/178900/1920x1023/2435d44804/demon-slayer_-kimetsu-no-yaiba-to-the-hashira-training.png/m/1200x0/filters:quality(95)format(webp)" />
          <CardText>Demon Slayer: Kimetsu no Yaiba is a Japanese anime series that began airing in 2019 and is based on the manga series of the same name by Koyoharu Gotouge. The story is set in Taishō-era Japan in the early 20th century, where demons roam the land at night and eat humans. The series follows Tanjiro Kamado, a 13-year-old boy who sets out to become a Demon Slayer after his family is murdered and his sister Nezuko is turned into a demon. Tanjiro joins the Demon Slayer Corps, a secret organization of skilled fighters who protect humans from demons.</CardText>
          <Button className="home-page-buttons">
            {/* <NavLink to={'/goblin'} style={{ color: 'white' }}><h2>Goblin Slayer Character list</h2></NavLink> */}
          </Button>
        </Card>


        <Card className="custom-card">
          <CardTitle tag="h1">Mushoku Tensei Jobless Reincarnation</CardTitle>
          <img src="https://staticg.sportskeeda.com/editor/2023/04/8bbbb-16810299698419-1920.jpg" />
          <CardText>The series follows a jobless and hopeless man who dies after having a sad and reclusive life and reincarnates in a fantasy world while keeping his memories, determined to enjoy his second chance at life without regrets as Rudeus Greyrat.</CardText>
          <Button className="home-page-buttons">
            {/* <NavLink to={'/goblin'} style={{ color: 'white' }}><h2>Goblin Slayer Character list</h2></NavLink> */}
          </Button>
        </Card>


        <Card className="custom-card">
          <CardTitle tag="h1">Solo Leveling</CardTitle>
          <img src="https://certifiednoonas.com/wp-content/uploads/2021/07/solo-toon.jpg" />
          <CardText>Solo Leveling is a South Korean web novel by Chugong and Gee So-Lyung about a world where human warriors with supernatural abilities, called hunters, fight monsters to protect humanity. The story follows Sung Jinwoo, a weak hunter who survives a dungeon that almost destroys his party and is chosen as the sole player of a mysterious program called the System. The System gives Jinwoo the ability to level up his strength, which no other hunter can do.</CardText>
          <Button className="home-page-buttons">
            {/* <NavLink to={'/goblin'} style={{ color: 'white' }}><h2>Goblin Slayer Character list</h2></NavLink> */}
          </Button>
        </Card>


        <Card className="custom-card">
          <CardTitle tag="h1">My Hero Academia</CardTitle>
          <img src="https://qph.cf2.quoracdn.net/main-qimg-a3ca5a6f155766b1cf62e4bf3cb74958-lq" />
          <CardText>My Hero Academia is a superhero anime series that takes place in a near-future world where most people have superpowers called "quirks". The series follows Izuku Midoriya, a middle school student who was born without a quirk and is bullied for his dreams of becoming a superhero. Izuku's life changes when he meets All Might, the world's greatest hero, who gives Izuku his quirk, "One For All", and enrolls him in a prestigious high school for superheroes in training. "One For All" allows Izuku to stockpile his raw power and pass it on to others.</CardText>
          <Button className="home-page-buttons">
            {/* <NavLink to={'/goblin'} style={{ color: 'white' }}><h2>Goblin Slayer Character list</h2></NavLink> */}
          </Button>
        </Card>


        <Card className="custom-card">
          <CardTitle tag="h1">Heavenly Delusion</CardTitle>
          <img src="https://inasianspaces.files.wordpress.com/2023/04/heavenly-delusion-ep-1-lawless-generation-kiruko-and-maru.png?w=1200" />
          <CardText>Heavenly Delusion is a 2023 Japanese TV anime series about a boy who grows up in a post-apocalyptic Japan full of monsters, 15 years after a disaster destroyed modern civilization. The series is based on a manga series by Masakazu Ishiguro and is available on Hulu in the US and Disney+ abroad.</CardText>
          <Button className="home-page-buttons">
            {/* <NavLink to={'/goblin'} style={{ color: 'white' }}><h2>Goblin Slayer Character list</h2></NavLink> */}
          </Button>
        </Card>


        <Card className="custom-card">
          <CardTitle tag="h1">Kaiju No. 8</CardTitle>
          <img src="https://sm.ign.com/t/ign_pk/review/k/kaiju-no-8/kaiju-no-8-premiere-review_n2qu.1280.jpg" />
          <CardText>Kaiju No. 8 is a Japanese manga series written by Naoya Matsumoto and released in 2020. It follows Kafka Hibino, a young man who gains the ability to turn into a kaiju after a small monster flies into his mouth. The Defense Force dubs the monster "Kaiju No. 8" and Kafka becomes the first monster to escape from them. Kafka retains his consciousness while in kaiju form, but gains superhuman strength. He joins the Defense Force to fight alongside his childhood friend Mina Ashiro, a star kaiju fighter, while keeping his new abilities a secret.</CardText>
          <Button className="home-page-buttons">
            {/* <NavLink to={'/goblin'} style={{ color: 'white' }}><h2>Goblin Slayer Character list</h2></NavLink> */}
          </Button>
        </Card>


        <Card className="custom-card">
          <CardTitle tag="h1">Hell's Paradise</CardTitle>
          <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/05/hells-paradise-main-cast-gabimaru-sagiri-1.jpg" />
          <CardText>In the Edo period of Japan, a select group of convicts awaiting execution are offered the chance to be pardoned and freed the Shogunate of Japan if they go to investigate an island recently discovered southwest of the Ryukyu Kingdom. the convicts are accompanied by elite guards to ensure they won't escape.</CardText>
          <Button className="home-page-buttons">
            {/* <NavLink to={'/goblin'} style={{ color: 'white' }}><h2>Goblin Slayer Character list</h2></NavLink> */}
          </Button>
        </Card>


        <Card className="custom-card">
          <CardTitle tag="h1">Ninja Kamui</CardTitle>
          <img src="https://cdn.oneesports.gg/cdn-data/2024/01/Anime_NinjaKamui.jpg" />
          <CardText>Ninja Kamui is an action-packed anime series that follows a former ninja named Joe Higan who seeks revenge against his former clan after they attack and murder his family. The series is set in rural America and combines ninja mythology with technology and a capitalistic society.</CardText>
          <Button className="home-page-buttons">
            {/* <NavLink to={'/goblin'} style={{ color: 'white' }}><h2>Goblin Slayer Character list</h2></NavLink> */}
          </Button>
        </Card>


      </div>
    </div>
  );
}

export default Home;
