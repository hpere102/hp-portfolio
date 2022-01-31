import React, { useState } from 'react';
import Modal from '../Modal';


const Projects = ({ category }) => {

  const [photos] = useState([
    {
      name: 'Budget Tracker',
      category: 'projects',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      language: 'Javascript',
      github: 'https://github.com/hpere102/budget-tracker'
    },
    {
      name: 'Social Network API',
      category: 'projects',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      language: 'Javascript',
      github: 'https://github.com/hpere102/social-network-api'
    },
    {
      name: 'Employee Database',
      category: 'projects',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      language: 'Javascript',
      github: 'https://github.com/hpere102/employee-tracker'
    },
    {
      name: 'Weather Dashbaord',
      category: 'projects',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      language: 'Javascript',
      github: 'https://github.com/hpere102/weather-dashboard'
    },
    {
      name: 'Scheduler',
      category: 'projects',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      language: 'Javascript',
      github: 'https://github.com/hpere102/work-day-scheduler'
    },
    {
      name: 'Tech Blog',
      category: 'projects',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      language: 'Javascript',
      github: 'https://github.com/hpere102/tech-blog'
    },
    {
      name: 'E-commerce API',
      category: 'projects',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      language: 'Javascript',
      github: 'https://github.com/hpere102/e-commerce'
    },
    {
      name: 'Password Generator',
      category: 'projects',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      language: 'Javascript',
      github: 'https://github.com/hpere102/password-generator'
    },
    {
      name: 'CLI Team Generator',
      category: 'projects',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      language: 'Javascript',
      github: 'https://github.com/hpere102/team-profile-generator'
    },
    {
      name: 'Coding Quiz',
      category: 'projects',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      language: 'Javascript',
      github: 'https://github.com/hpere102/code-quiz'
    },
    {
      name: 'README Generator',
      category: 'projects',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      language: 'Javascript',
      github: 'https://github.com/hpere102/README-generator'
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