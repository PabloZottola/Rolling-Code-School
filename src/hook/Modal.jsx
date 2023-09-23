import { useState } from "react";

function useModal() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prevmodalOpen) => !prevmodalOpen);
    console.log(modalOpen);
  };

  return {
    modalOpen,
    toggleModal,
  };
}

export default useModal;
