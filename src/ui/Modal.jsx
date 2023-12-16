import { cloneElement, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiOutlineXMark } from 'react-icons/hi2';
import Button from './Button';
import { useOutsideClick } from '../hooks/useOutsideClick';

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
  const { open } = useModal();

  return cloneElement(children, { onClick: () => open(openWindowName) });
}

function Window({ children, name }) {
  const { close, modalName } = useModal();
  const { ref } = useOutsideClick(close, true);

  if (name !== modalName) return null;

  return createPortal(
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-stone-400/30 backdrop-blur-[2px]">
      <div
        ref={ref}
        className="fixed flex flex-col rounded-3xl bg-stone-50 p-6"
      >
        <Button
          onClick={close}
          className="mb-3 self-end text-lg hover:text-amber-300"
        >
          <HiOutlineXMark />
        </Button>
        {/* FIXME */}
        {/* <div>{cloneElement(children, { onCloseModal: close })}</div> */}
        {children}
      </div>
    </div>,
    document.body,
  );
}

function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined)
    throw new Error('ModalContext is used outside ModalProvider.');
  return context;
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
