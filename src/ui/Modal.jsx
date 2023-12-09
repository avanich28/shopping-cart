import { cloneElement, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiOutlineXMark } from 'react-icons/hi2';
import Button from './Button';

const ModalContext = createContext();

function Modal({ children }) {
  const [modalName, setModalName] = useState('');
  const open = setModalName;
  const close = () => setModalName('');

  return (
    <ModalContext.Provider value={{ modalName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

// children = button
function Open({ children, openWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(openWindowName) });
}

function Window({ children, name }) {
  const { close, modalName } = useContext(ModalContext);

  if (name !== modalName) return null;

  return createPortal(
    <div className="fixed left-0 top-0 z-50 h-screen w-screen bg-stone-200/30 p-3 backdrop-blur-[2px]">
      <div className="fixed bg-stone-50">
        <Button onClick={close}>
          <HiOutlineXMark />
        </Button>
        {/* FIXME */}
        {/* <div>{cloneElement(children, { onCloseModal: close })}</div> */}
        <div>{children}</div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
