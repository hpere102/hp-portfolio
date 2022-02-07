import React from 'react';

function Modal({ onClose, currentPhoto}) {
    const {name, category, description, index, language, github} = currentPhoto;

    
    
    return (
        <div className="modalBackdrop">
        <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img src={require(`../../assets/small/${category}/${index}.png`)} alt="current category" />
        <p>{description}</p>
        <p>{language}</p>
        <div class="modal-buttons">
          <button onClick={onClose} type="button">Close</button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
               window.open(
                github,
                '_blank' 
              );
               }}
                > View on GitHub</button>
        </div>
        </div>
      </div>
    );
  }
  
  export default Modal;