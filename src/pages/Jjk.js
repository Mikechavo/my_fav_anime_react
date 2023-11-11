import React, { useState } from 'react';
import { Card, Button, Modal, ModalBody, ModalFooter, List, CardImg, CardTitle } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Pages.css';

const Jjk = (args) => {
  const [modals, setModals] = useState([
    {
      isOpen: false,
      title: 'Yuji Itadori',
      image: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/11/E273E9C0-66E2-48F9-AEA1-E30872DA8FDF.jpeg',
      abilities: [
        'Immense Strength, Speed, Reflexes, Durability, Stamina, Speed, Reflexes, Durability',
        'Cursed Energy Manipulation',
        'Divergent Fist: A punching-based technique utilizing cursed energy manipulation',
        {
          gif: 'https://64.media.tumblr.com/a9db85aaf7eb1d663f596110bb580561/89b06cabccf57100-ca/s1280x1920/7f75328cc3670ad8200a6c93aa68542ea22626ed.gifv',
        },
        'Black Flash: Amplifies the user\'s physical strike when cursed energy is applied to it within one-millionth of a second.',
        {
          gif: 'https://i.pinimg.com/originals/73/4a/eb/734aebc14d9a69fc0c4582ec82375506.gif',
        },
        // ... other abilities
      ],
    },

    {
      isOpen: false,
      title: 'Sukuna',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbmR6R47-Vrm68AD2czD-a3pZETseS8twiGQ&usqp=CAU',
      abilities: [
        'Cursed Energy Manipulation',
        'Immeasurable Cursed Energy: Sukuna possesses vast levels of cursed energy due to his innate power, cementing his title as the King of Curses.', 'Dismantle:  Default slashing attack that is normally used for inanimate objects, however it can also be used against cursed spirits and sorcerers to great effectiveness.',
        {
          gif: 'https://i.pinimg.com/originals/5f/65/af/5f65af379d98902fe53122f45808ca47.gif',
        },
        'Cleave:  A slashing attack that adjusts itself depending on the target\'s toughness and cursed energy level to cut them down in one fell swoop.',
        {
          gif: 'https://media.tenor.com/ZsMcTjQwjycAAAAC/sukuna-finger-bearer.gif',
        },
        'Spiderweb: Sukuna can utilize the Cleave technique in a shape of spider\'s web. As a variation of Cleave, Spiderweb adjusts itself on the surroundings toughness on objects and people around it leading it to be utterly destroyed in one fell swoop.',
        {
          gif: 'https://64.media.tumblr.com/01f1584c2b81b0aa3692a5b743293ffe/714aa0d4713c851f-56/s400x600/0790d81baa214b48f77ea8730accc5d968b5be5f.gif'
        },
        'Fire Arrow: Sukuna can create and manipulate flames for long-range attacks by forming an arrow.',
        {
          gif: 'https://media.tenor.com/caKnOhKxPE4AAAAC/sukuna-flame-arrow.gif'
        },
        'Reverse Cursed Technique: A special type of cursed technique that takes cursed energy and reverses it into positive energy. It is a very complex technique and is mainly used to heal human bodies.',
        {
          gif: 'https://media.tenor.com/RSvGlSh3u7EAAAAC/jujutsu-kaisen-sukuna.gif'
        },
        'Barrier Technique: Domain Amplification, amplifies Sukuna\'s cursed energy into an aura containing his own Domain. Sukuna uses this technique to neutralize Gojo\'s Limitless Technique and thus is capable of physical contact with him.', 'Domain Expansion: Malevolent Shrine, Sukuna\'s Domain Expansion creates a Buddhist shrine decorated with skulls. Malevolent Shrine has a unique trait; it doesn\'t create a separate space using a barrier. A binding vow is formed by allowing an escape route, which vastly increases the guaranteed hit\'s effective area with a maximum radius of nearly 200 meters.',
        {
          gif: 'https://media.tenor.com/IshTvIE9w0UAAAAd/sukuna-domain-expansion.gif'
        }

      ],
    },

    {
      isOpen: false,
      title: 'Satoru Gojo',
      image: 'https://www.looper.com/img/gallery/satoru-gojos-powers-from-jujutsu-kaisen-explained/l-intro-1634607238.jpg',
      abilities: [
        // Sukuna's abilities
      ],
      gifs: [
        'https://example.com/sukuna1.gif',
        'https://example.com/sukuna2.gif',
        // ... other gifs
      ],
    },
    // ... add more objects for additional cards

    {
      isOpen: false,
      title: 'Megumi Fushiguro',
      image: 'https://staticg.sportskeeda.com/editor/2023/02/7d17a-16754537065524.png?w=840',
      abilities: [
        // Sukuna's abilities
      ],
      gifs: [
        'https://example.com/sukuna1.gif',
        'https://example.com/sukuna2.gif',
        // ... other gifs
      ],
    },
    // ... add more objects for additional cards

    {
      isOpen: false,
      title: 'Nobara Kugisaki',
      image: 'https://staticg.sportskeeda.com/editor/2022/10/53080-16654550806994-1920.jpg',
      abilities: [
        // Sukuna's abilities
      ],
      gifs: [
        'https://example.com/sukuna1.gif',
        'https://example.com/sukuna2.gif',
        // ... other gifs
      ],
    },
    // ... add more objects for additional cards

    {
      isOpen: false,
      title: 'Kenjaku',
      image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/playing-with-the-death-jujutsu-kaisen.jpg',
      abilities: [
        // Sukuna's abilities
      ],
      gifs: [
        'https://example.com/sukuna1.gif',
        'https://example.com/sukuna2.gif',
        // ... other gifs
      ],
    },
    // ... add more objects for additional cards

    {
      isOpen: false,
      title: 'Yuta Okkotsu',
      image: 'https://sportshub.cbsistatic.com/i/2022/03/19/bda23fc4-a6f9-4f80-b346-cff38ab38a89/yuta-okkotsu-jujutsu-kaisen-0.jpg',
      abilities: [
        // Sukuna's abilities
      ],
      gifs: [
        'https://example.com/sukuna1.gif',
        'https://example.com/sukuna2.gif',
        // ... other gifs
      ],
    },
    // ... add more objects for additional cards

    {
      isOpen: false,
      title: 'Suguru Geto',
      image: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/02/jujutsu-kaisen-suguru-geto.jpg',
      abilities: [
        // Sukuna's abilities
      ],
      gifs: [
        'https://example.com/sukuna1.gif',
        'https://example.com/sukuna2.gif',
        // ... other gifs
      ],
    },
    // ... add more objects for additional cards

    {
      isOpen: false,
      title: 'Hana Kurusu',
      image: 'https://cdn.epicstream.com/images/ncavvykf/epicstream/245bb8c3836425dd4fdc78a67eaddb384464d1f1-1280x720.jpg?rect=0,24,1280,672&w=1600&h=840',
      abilities: [
        // Sukuna's abilities
      ],
      gifs: [
        'https://example.com/sukuna1.gif',
        'https://example.com/sukuna2.gif',
        // ... other gifs
      ],
    },
    // ... add more objects for additional cards

    {
      isOpen: false,
      title: 'Choso',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzx0vbqIktDpph6cD0Hfa_kINHTdux7pjhIA&usqp=CAU',
      abilities: [
        // Sukuna's abilities
      ],
      gifs: [
        'https://example.com/sukuna1.gif',
        'https://example.com/sukuna2.gif',
        // ... other gifs
      ],
    },
    // ... add more objects for additional cards
  ]);

  const toggle = (index) => {
    const newModals = [...modals];
    newModals[index].isOpen = !newModals[index].isOpen;
    setModals(newModals);
  };

  return (
    <div className="pages-body">
      <NavLink to={'/'}>
        Home
      </NavLink>

      <h1>Jujutsu Kaisen Character List</h1>

      <div className='pages-listing '>
        {modals.map((card, index) => (
          <Card key={index} className='pages-cards'>
            <CardTitle>
              {card.title}
            </CardTitle>
            <img src={card.image} />
            <Button color="danger" onClick={() => toggle(index)}>Abilities and Powers</Button>
            <Modal isOpen={card.isOpen} toggle={() => toggle(index)} {...args}>
              <ModalBody>
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
              <ModalFooter>
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

export default Jjk;