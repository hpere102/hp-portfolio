import React, { useState } from 'react';
import Modal from '../Modal';


const Projects = ({ category }) => {

  const [photos] = useState([
    {
      name: 'Budget Tracker',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      language: 'Javascript'
    },
    {
      name: 'Social Network API',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      language: 'Javascript'
    },
    {
      name: 'Employee Database',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      language: 'Javascript'
    },
    {
      name: 'Weather Dashbaord',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      language: 'Javascript'
    },
    {
      name: 'Scheduler',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      language: 'Javascript'
    }
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const toggleModal = (image, i) => {
    setCurrentPhoto({...image, index: i})
    setIsModalOpen(!isModalOpen);
  }
  

  return (
    <div>
      {isModalOpen && (
        <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
      )}
      <div className="image-cont">
        {currentPhotos.map((image, i) => (
        <div>
          <img
            src={require(`../../assets/small/${category}/${i}.png`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
          <p className="image-text">{image.name} <br></br> {image.language} </p>
       </div>
        ))}
        
      </div>
    </div>
  );
};

export default Projects;