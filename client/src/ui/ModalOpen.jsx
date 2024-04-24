import MenuModal from '../features/menu/MenuModal';
import Modal from './Modal';

function ModalOpen({ pizza, children }) {
  return (
    <>
      <Modal.Open openWindowName={pizza.name}>{children}</Modal.Open>
      <Modal.Window name={pizza.name}>
        <MenuModal pizza={pizza} />
      </Modal.Window>
    </>
  );
}

export default ModalOpen;
