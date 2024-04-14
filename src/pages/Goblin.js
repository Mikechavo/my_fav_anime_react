import React, { useState } from 'react';
import { Card, Button, Modal, ModalBody, ModalFooter, List, CardImg, CardTitle } from 'reactstrap';
import './Pages.css';
import './Goblin.css';

const Goblin = (args) => {
  const [modals, setModals] = useState([
    {
      isOpen: false,
      title: 'COMIN SOON',
      image: 'https://i.pinimg.com/originals/15/01/da/1501dae0620f3629be8758057b0d88d8.gif',
      abilities: [
        'Coming Soon',
        {
          gif: 'https://media.tenor.com/rvaa2vMzN1sAAAAC/goblin-slayer.gif',
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
     <div class="background-animation-goblin"></div> {/* animated background */}
      
      <h1 style={{ color: 'white' }}>Goblin Slayer Character List</h1>

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

export default Goblin