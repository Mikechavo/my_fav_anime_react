import React, { useState } from 'react';
import { Card, Button, Modal, ModalBody, ModalFooter, List, CardTitle } from 'reactstrap';
import './Pages.css';
import './Goblin.css';

const Contact = () => {
  const [modals, setModals] = useState([
    {
      isOpen: false,
      title: 'Connect with me',
      image: 'https://veteranmike.netlify.app/assets/ai_image-DtvBh-hy.jpg',
      abilities: [
        'GitHub: ',
        {
          link: 'https://github.com/Mikechavo',
          text: 'GitHub Profile',
        },
        'LinkedIn: ',
        {
          link: 'https://www.linkedin.com/in/michael-t-chavez/',
          text: 'LinkedIn Profile',
        },
        'My Portfolio: ',
        {
          link: 'https://veteranmike.netlify.app/',
          text: 'Personal Portfolio',
        },
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
     <div class=""></div> {/* animated background */}
   
      <h1 style={{ color: 'white' }}>Let's Connect!</h1>

      <div className='pages-listing '>
        {modals.map((card, index) => (
          <Card key={index} className='pages-cards'>
            <CardTitle>
              {card.title}
            </CardTitle>
            <img src={card.image} alt={card.title} />
            <Button color="danger" onClick={() => toggle(index)}>Details</Button>
            <Modal isOpen={card.isOpen} toggle={() => toggle(index)}>
              <ModalBody className="custom-modal">
                <List>
                  {card.abilities.map((ability, i) => (
                    <React.Fragment key={i}>
                      {typeof ability === 'string' ? (
                        <li>{ability}</li>
                      ) : (
                        <a href={ability.link} target="_blank" rel="noopener noreferrer">{ability.text}</a>
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

export default Contact;
