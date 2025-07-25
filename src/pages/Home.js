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
          <img src="https://static.bandainamcoent.eu/high/jujutsu-kaisen/jujutsu-kaisen-cursed-clash/00-page-setup/JJK-header-mobile2.jpg" alt="" />
          <CardText>Jujutsu Kaisen follows the story of Yuji Itadori, an ordinary boy who crosses paths with Megumi Fushiguro, a Jujutsu Sorcerer searching for a powerful Cursed Object known as Ryomen Sukuna's finger. Unintentionally, Yuji's friends unseal the Cursed Object, attracting dangerous Curses to their location.</CardText>
          <Button className="home-page-buttons">
            <NavLink to={'/jjk'} style={{ color: 'white' }} ><h2>Jujutsu Kaisen Character list </h2></NavLink>
          </Button>
        </Card>

        <Card className="custom-card">
          <CardTitle tag="h1">Berserk</CardTitle>
          <img src="https://destroythecomics.com/wp-content/uploads/2017/06/berserk1280jpg-7586fc_1280w.jpg" alt="" />
          <CardText>Berserk is a dark fantasy manga series written and illustrated by Kentarō Miura. The series follows the story of Guts, a mercenary warrior drawn into the world of the God Hand, powerful beings who rule the supernatural realm. The story is set in the Kingdom of Midland, a fictional country inspired by medieval Europe.</CardText>
          <Button className="home-page-buttons">
            <NavLink to={'/berserk'} style={{ color: 'white' }}><h2>Berserk Character list</h2></NavLink>
          </Button>
        </Card>


        <Card className="custom-card">
          <CardTitle tag="h1">Goblin Slayer</CardTitle>
          <img src="https://i0.wp.com/news.qoo-app.com/en/wp-content/uploads/sites/3/2023/03/Goblin-Slayer-Another-Adventurer-Nightmare-Feast-008.jpeg?resize=900%2C506&ssl=1" alt="" />
          <CardText>In a fantasy world, a lone hero makes his living by exterminating all goblins he encounters. But one day he meets a friend, and his life begins to become more intense. A young priestess has formed her first adventuring party, but almost immediately they find themselves in distress.</CardText>
          <Button className="home-page-buttons">
            <NavLink to={'/goblin'} style={{ color: 'white' }}><h2>Goblin Slayer Character list</h2></NavLink>
          </Button>
        </Card>


        <Card className="custom-card">
          <CardTitle tag="h1">Demon Slayer</CardTitle>
          <img src="https://a.storyblok.com/f/178900/1920x1023/2435d44804/demon-slayer_-kimetsu-no-yaiba-to-the-hashira-training.png/m/1200x0/filters:quality(95)format(webp)" alt="" />
          <CardText>Demon Slayer: Kimetsu no Yaiba is a Japanese anime series that began airing in 2019 and is based on the manga series of the same name by Koyoharu Gotouge. The story is set in Taishō-era Japan in the early 20th century, where demons roam the land at night and eat humans. The series follows Tanjiro Kamado, a 13-year-old boy who sets out to become a Demon Slayer after his family is murdered and his sister Nezuko is turned into a demon. Tanjiro joins the Demon Slayer Corps, a secret organization of skilled fighters who protect humans from demons.</CardText>
          <Button className="home-page-buttons">

          </Button>
        </Card>


        <Card className="custom-card">
          <CardTitle tag="h1">Mushoku Tensei Jobless Reincarnation</CardTitle>
          <img src="https://staticg.sportskeeda.com/editor/2023/04/8bbbb-16810299698419-1920.jpg" alt="" />
          <CardText>The series follows a jobless and hopeless man who dies after having a sad and reclusive life and reincarnates in a fantasy world while keeping his memories, determined to enjoy his second chance at life without regrets as Rudeus Greyrat.</CardText>
          <Button className="home-page-buttons">

          </Button>
        </Card>


        <Card className="custom-card">
          <CardTitle tag="h1">Solo Leveling</CardTitle>
          <img src="https://certifiednoonas.com/wp-content/uploads/2021/07/solo-toon.jpg" alt="" />
          <CardText>Solo Leveling is a South Korean web novel by Chugong and Gee So-Lyung about a world where human warriors with supernatural abilities, called hunters, fight monsters to protect humanity. The story follows Sung Jinwoo, a weak hunter who survives a dungeon that almost destroys his party and is chosen as the sole player of a mysterious program called the System. The System gives Jinwoo the ability to level up his strength, which no other hunter can do.</CardText>
          <Button className="home-page-buttons">

          </Button>
        </Card>


        <Card className="custom-card">
          <CardTitle tag="h1">My Hero Academia</CardTitle>
          <img src="https://qph.cf2.quoracdn.net/main-qimg-a3ca5a6f155766b1cf62e4bf3cb74958-lq" alt="" />
          <CardText>My Hero Academia is a superhero anime series that takes place in a near-future world where most people have superpowers called "quirks". The series follows Izuku Midoriya, a middle school student who was born without a quirk and is bullied for his dreams of becoming a superhero. Izuku's life changes when he meets All Might, the world's greatest hero, who gives Izuku his quirk, "One For All", and enrolls him in a prestigious high school for superheroes in training. "One For All" allows Izuku to stockpile his raw power and pass it on to others.</CardText>
          <Button className="home-page-buttons">

          </Button>
        </Card>


        <Card className="custom-card">
          <CardTitle tag="h1">Heavenly Delusion</CardTitle>
          <img src="https://inasianspaces.files.wordpress.com/2023/04/heavenly-delusion-ep-1-lawless-generation-kiruko-and-maru.png?w=1200" alt="" />
          <CardText>Heavenly Delusion is a 2023 Japanese TV anime series about a boy who grows up in a post-apocalyptic Japan full of monsters, 15 years after a disaster destroyed modern civilization. The series is based on a manga series by Masakazu Ishiguro and is available on Hulu in the US and Disney+ abroad.</CardText>
          <Button className="home-page-buttons">

          </Button>
        </Card>


        <Card className="custom-card">
          <CardTitle tag="h1">Kaiju No. 8</CardTitle>
          <img src="https://sm.ign.com/t/ign_pk/review/k/kaiju-no-8/kaiju-no-8-premiere-review_n2qu.1280.jpg" alt="" />
          <CardText>Kaiju No. 8 is a Japanese manga series written by Naoya Matsumoto and released in 2020. It follows Kafka Hibino, a young man who gains the ability to turn into a kaiju after a small monster flies into his mouth. The Defense Force dubs the monster "Kaiju No. 8" and Kafka becomes the first monster to escape from them. Kafka retains his consciousness while in kaiju form, but gains superhuman strength. He joins the Defense Force to fight alongside his childhood friend Mina Ashiro, a star kaiju fighter, while keeping his new abilities a secret.</CardText>
          <Button className="home-page-buttons">

          </Button>
        </Card>


        <Card className="custom-card">
          <CardTitle tag="h1">Hell's Paradise</CardTitle>
          <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/05/hells-paradise-main-cast-gabimaru-sagiri-1.jpg" alt="" />
          <CardText>In the Edo period of Japan, a select group of convicts awaiting execution are offered the chance to be pardoned and freed the Shogunate of Japan if they go to investigate an island recently discovered southwest of the Ryukyu Kingdom. the convicts are accompanied by elite guards to ensure they won't escape.</CardText>
          <Button className="home-page-buttons">

          </Button>
        </Card>


        <Card className="custom-card">
          <CardTitle tag="h1">Ninja Kamui</CardTitle>
          <img src="https://cdn.oneesports.gg/cdn-data/2024/01/Anime_NinjaKamui.jpg" alt="" />
          <CardText>Ninja Kamui is an action-packed anime series that follows a former ninja named Joe Higan who seeks revenge against his former clan after they attack and murder his family. The series is set in rural America and combines ninja mythology with technology and a capitalistic society.</CardText>
          <Button className="home-page-buttons">

          </Button>
        </Card>


        <Card className="custom-card">
          <CardTitle tag="h1">Undead Unluck</CardTitle>
          <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/10/undead-unluck.jpg" alt="" />
          <CardText>Undead Unluck is a 2023 TV series about a young woman named Fuuko Izumo who has the ability to cause bad luck, or "unluck", to anyone who touches her. Fuuko has been living in seclusion for ten years after an incident that killed her parents and over 200 other people when she was eight. When Fuuko considers suicide, she meets Andy, an undead man who can regenerate from any wound and wants to die a good death. The two team up with others who have special abilities to find Andy's "greatest death" and avoid being hunted by a mysterious organization.</CardText>
          <Button className="home-page-buttons">

          </Button>
        </Card>

        <Card className="custom-card">
          <CardTitle tag="h1">Tower of God</CardTitle>
          <img src="https://assets.hardwarezone.com/img/2024/08/TowerofGodS2E7-1.jpg" alt="" />
          <CardText>Tower of God centers around a boy named Twenty-Fifth Bam. It is notable that in Korea 'Bam' can mean 'Night' or 'Chestnut'. He has spent most of his life trapped beneath a vast and mysterious Tower, with only his close friend, Rachel, to keep him company. When Rachel enters the Tower, Bam is devastated.</CardText>
          <Button className="home-page-buttons">

          </Button>
        </Card>

        <Card className="custom-card">
          <CardTitle tag="h1">Dandadan</CardTitle>
          <img src="https://anime-dandadan.com/_assets/images/top/fv/webp/fv_003_pc.webp?202406" alt="" />
          <CardText>Based on Yukinobu Tatsu's popular manga that debuted in 2021 on Shonen Jump+, Dandadan blends action, comedy, romance, and supernatural thrills to create a unique and satisfying adventure. Momo Ayase and Ken Takakura believe in the extraordinary, although the former believes in ghosts and the latter believes in aliens..</CardText>
          <Button className="home-page-buttons">

          </Button>
        </Card>

        <Card className="custom-card">
          <CardTitle tag="h1">Chainsaw Man</CardTitle>
          <img src="https://a.storyblok.com/f/178900/849x1200/a315230dc9/chainsaw-man-the-movie-reze-arc-csm-visual.jpg/m/filters:quality(95)format(webp)" />
        </Card>

        <Card className="custom-card">
          <CardTitle tag="h1">Black Clover</CardTitle>
          <img src="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQfCfRyt1W81hMe9GtFiK8SVoQNc85ni2nhUcUw9Jx6IZaxjzTr7Nw7WTfgqrVFW0rLqHhAzGGvawRo1fkmrRctXcCriTrzHsm859pqOL5IJzBe4d_4hPAi1kA2bskYqCqt7fuidL7VAyjTZBPThgSPnnsSs.jpg?r=194" />
        </Card>

        <Card className="custom-card">
          <CardTitle tag="h1">Dorohedoro</CardTitle>
          <img src="https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXy27SOJ7bh3yO_zA1t9flg-s8m_0J4F2oL4GqdnfdnNLOu0PwaDHZKXXe9euvWl7nAut9Rt67WWc01EOiCCpFusYoDTyL2kd60S.jpg?r=1ba" />
        </Card>

        <Card className="custom-card">
          <CardTitle tag="h1">Blue Exorcist</CardTitle>
          <img src="https://images.saymedia-content.com/.image/t_share/MTc2MjcyNjkyNDMxOTU1MTM0/facts-about-ao-no-exorcist-blue-exorcist.jpg" />
        </Card>

         <Card className="custom-card">
          <CardTitle tag="h1">Castlevania</CardTitle>
          <img src="https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTW_8gkvtUG3UCt-FXmohQtjr1ntUeZmgZhQ4JHd4TVPyFeLVKMd1Ev0z0fwm_CBCTXJWPGc__rd-H3fVt3fgeqoBe3fD-u7EmcDe7lsxZSX6fR2dKQlllK1RA.jpg?r=ac3" />
        </Card>

        <Card className="custom-card">
          <CardTitle tag="h1">The Witch and The Beast</CardTitle>
          <img src="https://a.storyblok.com/f/178900/750x1050/fcfd77496e/the-witch-and-the-beast-key-visual.jpg/m/filters:quality(95)format(webp)" />
        </Card>

          <Card className="custom-card">
          <CardTitle tag="h1">The Devouring Whale</CardTitle>
          <img src="https://m.media-amazon.com/images/M/MV5BOGRlZTVlNzUtODRhZi00ZmM2LTlhOGEtMTYyNGY5ZjI0NDcxXkEyXkFqcGc@._V1_.jpg" />
        </Card>

        <Card className="custom-card">
          <CardTitle tag="h1">To Be Hero X</CardTitle>
          <img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GQWH0M1J3-backdrop_wide" />
        </Card>

        <Card className="custom-card">
          <CardTitle tag="h1">Made in Abyss</CardTitle>
          <img src="https://www.metacritic.com/a/img/catalog/provider/6/12/6-1-797693-52.jpg" />
        </Card>

        <Card className="custom-card">
          <CardTitle tag="h1">Mecha-Ude</CardTitle>
          <img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/59bd4cfbbfa78680b9cf8dab4fbe51d0.jpg" />
        </Card>


      </div>
    </div>
  );
}

export default Home;
