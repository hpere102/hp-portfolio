import React from 'react';

function Modal({ onClose, currentPhoto}) {
    const {name, category, description, index, language} = currentPhoto;

    return (
        <div className="modalBackdrop">
        <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img src={require(`../../assets/small/${category}/${index}.png`)} alt="current category" />
        <p>{description}</p>
        <p>{language}</p>
        <div class="modal-buttons">
          <button onClick={onClose} type="button">Close this modal</button>
          <button onClick={onClose} type="button">See project details on GitHub</button>
        </div>
        </div>
      </div>
    );
  }
  
  export default Modal;