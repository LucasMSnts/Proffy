import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="teste de professor"/>
        <div>
          <strong>Nome do Professor</strong>
          <span>Logica</span>
        </div>
      </header>

      <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices sit amet velit sed vehicula. Nullam at massa libero. 
          <br /><br />
          Duis quis elementum elit. In ut ipsum non tortor congue scelerisque id eu tellus. Integer ornare rutrum dui, ut posuere nibh. Pellentesque fringilla efficitur metus et malesuada. Integer a ultrices arcu, non aliquet justo. 
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;