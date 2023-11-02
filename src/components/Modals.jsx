import React from 'react'
import Modal from './Modal';
import { useModal } from '../hooks/useModal';
import ContactForm from './ContactForm';

const Modals = () => {

  // Una invocacion por cada modal.
  const [isOpen1, openModal1, closeModal1] = useModal(false); 
  const [isOpen2, openModal2, closeModal2] = useModal(false); 
  const [isOpenContact, openContact, closeContact] = useModal(false); 

  return (
    <div>
      <h2>Modales</h2>

      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpen1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hi, since modal 1</p>
        <img src="https://placekitten.com/360/360" alt="animal" />
      </Modal>

      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpen2} closeModal={closeModal2}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore error architecto commodi quidem dolore neque vitae sequi ex officia suscipit!</p>
        <img src="https://placekitten.com/360/360" alt="animal" />
      </Modal>

      <button onClick={openContact}>Form Modal</button>
      <Modal isOpen={isOpenContact} closeModal={closeContact}>
        <ContactForm />
      </Modal>


    </div>
  )
}

export default Modals;