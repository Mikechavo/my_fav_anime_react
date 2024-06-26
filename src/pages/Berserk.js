import React, { useState } from 'react';
import { Card, Button, Modal, ModalBody, ModalFooter, List, CardImg, CardTitle } from 'reactstrap';
import './Pages.css';
import './Berserk.css';

const Berserk = (args) => {
  const [modals, setModals] = useState([
    {
      isOpen: false,
      title: 'Guts',
      image: 'https://destroythecomics.com/wp-content/uploads/2017/06/berserk1280jpg-7586fc_1280w.jpg',
      abilities: [
        'The Black Sword\'s Man',
        {
          gif: 'https://media.tenor.com/OTTUewido_QAAAAC/guts-berserk.gif',
        },
        
        // ... other abilities
      ],
    },
    
    {
      isOpen: false,
      title: 'Griffith',
      image: 'https://upload.wikimedia.org/wikipedia/en/7/7a/GriffithBerserk.png',
      abilities: [
        'The White Hawk',
        {
          gif: 'https://66.media.tumblr.com/bee95c3c3cba57b4d3b76827c1a0ac00/tumblr_inline_oujwemnQZV1snyy13_540.gif',
        },
        
        // ... other abilities
      ],
    },

    {
      isOpen: false,
      title: 'Casca',
      image: 'https://i.redd.it/2cxlpiiy9gm61.png',
      abilities: [
        'Former unit commander of the old Band of the Hawk',
        {
          gif: 'https://media.tenor.com/vXccud1N9d4AAAAC/anime-berserk.gif',
        },
        
        // ... other abilities
      ],
    },
    
    

    {
      isOpen: false,
      title: 'Puck',
      image: 'https://i.pinimg.com/originals/20/8f/56/208f56e647896c619f36595d8715180f.jpg',
      abilities: [
        'Guts\' Party',
        {
          gif: 'https://qph.cf2.quoracdn.net/main-qimg-2e06f7a582f3732b78379d9b05bf8453',
        },
        
        // ... other abilities
      ],
    },

    {
      isOpen: false,
      title: 'Farnese de Vandimion',
      image: 'https://cdn.myanimelist.net/images/characters/6/330918.jpg',
      abilities: [
        'Guts\' Party',
        {
          gif: 'https://qph.cf2.quoracdn.net/main-qimg-2e06f7a582f3732b78379d9b05bf8453',
        },
        
        // ... other abilities
      ],
    },

    {
      isOpen: false,
      title: 'Serpico',
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a50c6b5b-d0d2-4495-ba80-a42feb9fe397/delbi0m-9ecdb706-a9c6-40ad-ab0e-5f0da9ee844a.png/v1/fill/w_911,h_877,q_70,strp/serpico_and_farnese__colored__by_nier54_delbi0m-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTkzIiwicGF0aCI6IlwvZlwvYTUwYzZiNWItZDBkMi00NDk1LWJhODAtYTQyZmViOWZlMzk3XC9kZWxiaTBtLTllY2RiNzA2LWE5YzYtNDBhZC1hYjBlLTVmMGRhOWVlODQ0YS5wbmciLCJ3aWR0aCI6Ijw9MTAzMSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.oOe6TsZJcN4Dl3K_OhmXKJ95LaIwCdIoRACu1Zv07d0',
      abilities: [
        'Guts\' Party',
        {
          gif: 'https://qph.cf2.quoracdn.net/main-qimg-2e06f7a582f3732b78379d9b05bf8453',
        },
        
        // ... other abilities
      ],
    },

    {
      isOpen: false,
      title: 'Isidro',
      image: 'https://i.pinimg.com/564x/4b/e1/bc/4be1bcfe2067b95f2b3d6923dc5907dc.jpg',
      abilities: [
        'Guts\' Party',
        {
          gif: 'https://qph.cf2.quoracdn.net/main-qimg-2e06f7a582f3732b78379d9b05bf8453',
        },
        
        // ... other abilities
      ],
    },

    {
      isOpen: false,
      title: 'Schierke',
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/15094a7d-127a-425e-8ed4-2e72813e80ec/df9c2r2-dccc99a7-dc6f-42b4-ad26-95cc3cebfb62.png/v1/fill/w_975,h_820,q_70,strp/berserk___schierke_manga_colored_by_victoors_deviantart_df9c2r2-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzU3MCIsInBhdGgiOiJcL2ZcLzE1MDk0YTdkLTEyN2EtNDI1ZS04ZWQ0LTJlNzI4MTNlODBlY1wvZGY5YzJyMi1kY2NjOTlhNy1kYzZmLTQyYjQtYWQyNi05NWNjM2NlYmZiNjIucG5nIiwid2lkdGgiOiI8PTkwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.A_ScSGohgllcayGFWIXyqA-hhw31yywaQG0hXPBCokU',
      abilities: [
        'Guts\' Party',
        {
          gif: 'https://qph.cf2.quoracdn.net/main-qimg-2e06f7a582f3732b78379d9b05bf8453',
        },
        
        // ... other abilities
      ],
    },

    {
      isOpen: false,
      title: 'Ivalera',
      image: 'https://pm1.aminoapps.com/6565/ed906a1ca07a37f9bcc435bb49f2376361452803_hq.jpg',
      abilities: [
        'Guts\' Party',
        {
          gif: 'https://qph.cf2.quoracdn.net/main-qimg-2e06f7a582f3732b78379d9b05bf8453',
        },
        
        // ... other abilities
      ],
    },

    {
      isOpen: false,
      title: 'Manifico de Vandimion',
      image: 'https://64.media.tumblr.com/9a30502c4e66089d5503474f4b111b34/tumblr_ntefhkdWNZ1tv2wrpo1_1280.jpg',
      abilities: [
        'Guts\' Party',
        {
          gif: 'https://qph.cf2.quoracdn.net/main-qimg-2e06f7a582f3732b78379d9b05bf8453',
        },
        
        // ... other abilities
      ],
    },

    {
      isOpen: false,
      title: 'Azan',
      image: 'https://s3.amazonaws.com/comicgeeks/characters/avatars/40202.jpg?t=1695703167',
      abilities: [
        'Guts\' Party',
        {
          gif: 'https://qph.cf2.quoracdn.net/main-qimg-2e06f7a582f3732b78379d9b05bf8453',
        },
        
        // ... other abilities
      ],
    },

    {
      isOpen: false,
      title: 'Roderick of Schtauffen',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauGXeTcATPDpFm05nWcAvIdALmlKTp4hdqg&usqp=CAU',
      abilities: [
        'Guts\' Party',
        {
          gif: 'https://qph.cf2.quoracdn.net/main-qimg-2e06f7a582f3732b78379d9b05bf8453',
        },
        
        // ... other abilities
      ],
    },

    {
      isOpen: false,
      title: 'Isma',
      image: 'https://i.pinimg.com/736x/1a/15/38/1a1538ba86c75e7a02500b2a6d02bd88.jpg',
      abilities: [
        'Guts\' Party',
        {
          gif: 'https://qph.cf2.quoracdn.net/main-qimg-2e06f7a582f3732b78379d9b05bf8453',
        },
        
        // ... other abilities
      ],
    },
        
  

    {
      isOpen: false,
      title: 'The God Hand',
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/28271986-b3fa-414c-b245-dcc42c43f275/de097y9-6bb8002f-47b1-406c-beae-24f7f2d2f506.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI4MjcxOTg2LWIzZmEtNDE0Yy1iMjQ1LWRjYzQyYzQzZjI3NVwvZGUwOTd5OS02YmI4MDAyZi00N2IxLTQwNmMtYmVhZS0yNGY3ZjJkMmY1MDYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MrQ9QMds5PmhKMGedTwL1BUW6-Z6CvoH8olIo8O1Dlk',
      abilities: [
        'Antagonists',
        {
          gif: 'https://pa1.aminoapps.com/6610/cf6e6a72bb68d9c4b8f42497a2c98bfdbf7d1728_hq.gif',
        },
        
        // ... other abilities
      ],
    },

    {
      isOpen: false,
      title: 'Void',
      image: 'https://i.redd.it/1vhvnyylksu81.jpg',
      abilities: [
        'Antagonists',
        {
          gif: 'https://pa1.aminoapps.com/6610/cf6e6a72bb68d9c4b8f42497a2c98bfdbf7d1728_hq.gif',
        },
        
        // ... other abilities
      ],
    },

    {
      isOpen: false,
      title: 'Slan',
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f47078ba-94a3-4afb-83c3-d0c891021dff/dams8n3-bbcba664-3116-48ee-9618-596b69372319.jpg/v1/fill/w_827,h_966,q_70,strp/slan_berserk_by_chimicalstar_dams8n3-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE5NSIsInBhdGgiOiJcL2ZcL2Y0NzA3OGJhLTk0YTMtNGFmYi04M2MzLWQwYzg5MTAyMWRmZlwvZGFtczhuMy1iYmNiYTY2NC0zMTE2LTQ4ZWUtOTYxOC01OTZiNjkzNzIzMTkuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.0bT_JfIHKcUw2lDKopCphz0AwaTTCNSfum6l8Fz1uLU',
      abilities: [
        'Antagonists',
        {
          gif: 'https://pa1.aminoapps.com/6610/cf6e6a72bb68d9c4b8f42497a2c98bfdbf7d1728_hq.gif',
        },
        
        // ... other abilities
      ],
    },

    {
      isOpen: false,
      title: 'Ubik',
      image: 'https://pm1.aminoapps.com/6599/3f74623de64b53b80725dc54d97d0961da9f49b3_00.jpg',
      abilities: [
        'Antagonists',
        {
          gif: 'https://pa1.aminoapps.com/6610/cf6e6a72bb68d9c4b8f42497a2c98bfdbf7d1728_hq.gif',
        },
        
        // ... other abilities
      ],
    },

    {
      isOpen: false,
      title: 'Conrad',
      image: 'https://vignette2.wikia.nocookie.net/berserk/images/f/f1/Conrad_Manga.jpg/revision/20130417151511',
      abilities: [
        'Antagonists',
        {
          gif: 'https://pa1.aminoapps.com/6610/cf6e6a72bb68d9c4b8f42497a2c98bfdbf7d1728_hq.gif',
        },
        
        // ... other abilities
      ],
    },

    
    {
      isOpen: false,
      title: 'Nosferatu Zodd',
      image: 'https://preview.redd.it/nosferatu-zodd-in-all-his-monstrous-glory-chapter-165-v0-4j21lpugis9b1.jpg?auto=webp&s=4f5aa770821c7a7f740f397395afdbec64884828',
      abilities: [
        'The New Band of the Hawk',
        {
          gif: 'https://64.media.tumblr.com/eae5e19f849df6217771945987251a47/tumblr_ookp85vIY21rqe0rbo2_r1_540.gif',
        },
        
        // ... other abilities
      ],
    },
    
    {
      isOpen: false,
      title: 'Grunbeld',
      image: 'https://sportshub.cbsistatic.com/i/2021/03/18/2288de18-4698-4e56-82a9-1f27f01dbc2f/berserk-grunbeld-1256327.jpg',
      abilities: [
        'The New Band of the Hawk',
        {
          gif: 'https://64.media.tumblr.com/eae5e19f849df6217771945987251a47/tumblr_ookp85vIY21rqe0rbo2_r1_540.gif',
        },
        
        // ... other abilities
      ],
    },
    
    {
      isOpen: false,
      title: 'Locus',
      image: 'https://s3.amazonaws.com/comicgeeks/characters/avatars/40028.jpg?t=1646164874',
      abilities: [
        'The New Band of the Hawk',
        {
          gif: 'https://64.media.tumblr.com/eae5e19f849df6217771945987251a47/tumblr_ookp85vIY21rqe0rbo2_r1_540.gif',
        },
        
        // ... other abilities
      ],
    },
    
    {
      isOpen: false,
      title: 'Irvine',
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ebe14a12-9cd5-42bf-8942-808b459b9221/der49o4-cee2b9f2-a614-40cb-8d94-29995c0ddbdf.jpg/v1/fill/w_1162,h_688,q_70,strp/irvine__berserk_by_pabl0san_der49o4-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzU4IiwicGF0aCI6IlwvZlwvZWJlMTRhMTItOWNkNS00MmJmLTg5NDItODA4YjQ1OWI5MjIxXC9kZXI0OW80LWNlZTJiOWYyLWE2MTQtNDBjYi04ZDk0LTI5OTk1YzBkZGJkZi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.A-9DDw_FZmfb18-rTxqB1Jirfrldvc6_po9qR7aI_hg',
      abilities: [
        'The New Band of the Hawk',
        {
          gif: 'https://64.media.tumblr.com/eae5e19f849df6217771945987251a47/tumblr_ookp85vIY21rqe0rbo2_r1_540.gif',
        },
        
        // ... other abilities
      ],
    },
    
    {
      isOpen: false,
      title: 'Rakshas',
      image: 'https://i.pinimg.com/originals/36/ff/7d/36ff7dbf0e2ffd1f708afa8e4885e8a4.jpg',
      abilities: [
        'The New Band of the Hawk',
        {
          gif: 'https://64.media.tumblr.com/eae5e19f849df6217771945987251a47/tumblr_ookp85vIY21rqe0rbo2_r1_540.gif',
        },
        
        // ... other abilities
      ],
    },
    
    {
      isOpen: false,
      title: 'Sonia',
      image: 'https://pm1.aminoapps.com/6667/66a0cb237f31531c24f9946d06945edf9577c044_hq.jpg',
      abilities: [
        'The New Band of the Hawk',
        {
          gif: 'https://64.media.tumblr.com/eae5e19f849df6217771945987251a47/tumblr_ookp85vIY21rqe0rbo2_r1_540.gif',
        },
        
        // ... other abilities
      ],
    },
    
    {
      isOpen: false,
      title: 'Mule Wolflame',
      image: 'https://cdn.anisearch.com/images/character/cover/62/62107_300.webp',
      abilities: [
        'The New Band of the Hawk',
        {
          gif: 'https://64.media.tumblr.com/eae5e19f849df6217771945987251a47/tumblr_ookp85vIY21rqe0rbo2_r1_540.gif',
        },
        
        // ... other abilities
      ],
    },
    
    
    {
      isOpen: false,
      title: 'Snake Lord',
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7a37810d-a687-4eb7-8643-a4cc2556bac5/dae55cq-ac5f5a79-b23b-4201-b6c0-cf9ce39645c5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdhMzc4MTBkLWE2ODctNGViNy04NjQzLWE0Y2MyNTU2YmFjNVwvZGFlNTVjcS1hYzVmNWE3OS1iMjNiLTQyMDEtYjZjMC1jZjljZTM5NjQ1YzUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.eXVK5SFUCIstI_rvkFqDVrFoiVQtwF6_SC5Nbg4OkJ8',
      abilities: [
        'Apostles',
        {
          gif: 'https://i.pinimg.com/originals/38/88/63/388863280f51decc23c6c88180f65fe1.gif',
        },
        
        // ... other abilities
      ],
    },
    
    {
      isOpen: false,
      title: 'The Count',
      image: 'https://s3.amazonaws.com/comicgeeks/characters/avatars/40100.jpg?t=1646097823',
      abilities: [
        'Apostles',
        {
          gif: 'https://i.pinimg.com/originals/38/88/63/388863280f51decc23c6c88180f65fe1.gif',
        },
        
        // ... other abilities
      ],
    },
    
    {
      isOpen: false,
      title: 'Wyald',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwejYuXJ4HMpOtgylhoir9LH-zhA7tck0sa6H0VbWuk1D5ib_hcnkmiK7aSf3xqRf6qDY&usqp=CAU',
      abilities: [
        'Apostles',
        {
          gif: 'https://i.pinimg.com/originals/38/88/63/388863280f51decc23c6c88180f65fe1.gif',
        },
        
        // ... other abilities
      ],
    },
    
    {
      isOpen: false,
      title: 'Rosine',
      image: 'https://pbs.twimg.com/media/FpjiUOrXwAw8Np5?format=jpg&name=large',
      abilities: [
        'Apostles',
        {
          gif: 'https://i.pinimg.com/originals/38/88/63/388863280f51decc23c6c88180f65fe1.gif',
        },
        
        // ... other abilities
      ],
    },
    
    {
      isOpen: false,
      title: 'Berserk Characters',
      image: 'https://media.tenor.com/HNXeSUhwm-wAAAAC/guts-berserk.gif',
      abilities: [
        'https://en.wikipedia.org/wiki/List_of_Berserk_characters',
        {
          gif: 'https://media.tenor.com/HNXeSUhwm-wAAAAC/guts-berserk.gif',
        },
        
        // ... other abilities
      ],
    },

    
  ]);

  const toggle = (index) => {
    const newModals = [...modals];
    newModals[index].isOpen = !newModals[index].isOpen;
    setModals(newModals);
  };

  return (
    <div className="pages-body">
      <div class="background-animation-berserk"></div> {/* animated background */}
       
      <h1 style={{ color: 'white' }}>Bereserk Character List</h1>

      <div className='pages-listing '>
        {modals.map((card, index) => (
          <Card key={index} className='pages-cards'>
            <CardTitle>
              {card.title}
            </CardTitle>
            <img src={card.image} alt={card.title} />
            <Button color="danger" onClick={() => toggle(index)}>Details</Button>
            <Modal isOpen={card.isOpen} toggle={() => toggle(index)} {...args}>
              <ModalBody className="custom-modal">
                <List>
                  {card.abilities.map((ability, i) => (
                    <React.Fragment key={i}>
                      {typeof ability === 'string' ? (
                        <li>{ability}</li>
                      ) : (
                        <CardImg top width="100%" src={ability.gif} alt={card.title} />
                      )}
                    </React.Fragment>
                  ))}
                </List>
              </ModalBody>
              <ModalFooter >
                <Button color="secondary" onClick={() => toggle(index)}>
                  Close
                </Button>
              </ModalFooter>
            </Modal>
          </Card>
        ))}
      </div>
    </div>
  );
}
//   return (
//     <>
//       <NavLink to={'/'}>
//         Home
//       </NavLink>

//       <h1>Bereserk Character List</h1>
//       <Card>
//         <CardTitle>
//           Guts
//         </CardTitle>
//         <img src="https://destroythecomics.com/wp-content/uploads/2017/06/berserk1280jpg-7586fc_1280w.jpg"/>
//       </Card>

//       <Card>
//         <CardTitle>
//         Griffith
//         </CardTitle>
//         <img src="https://upload.wikimedia.org/wikipedia/en/7/7a/GriffithBerserk.png"/>
//       </Card>
//     </>

//   )
// }

export default Berserk