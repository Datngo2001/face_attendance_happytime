import { FormAction } from "forms/formAction";
import { useState } from "react";

export type ModalState = {
  open: boolean;
  action: FormAction;
};

function useCRUDModal({ defaultOpen = false }) {
  const [modalState, setModalState] = useState<ModalState>({
    open: defaultOpen,
    action: FormAction.CREATE,
  });

  const openCreateModal = () => {
    setModalState((val) => ({
      ...val,
      open: true,
      action: FormAction.CREATE,
    }));
  };

  const openUpdateModal = () => {
    setModalState((val) => ({
      ...val,
      open: true,
      action: FormAction.UPDATE,
    }));
  };

  const closeModal = () => {
    setModalState((val) => ({
      ...val,
      open: false,
    }));
  };

  const setOpenState = (isOpen: boolean) => {
    setModalState((val) => ({ ...val, open: isOpen }));
  };

  return {
    modalState,
    openCreateModal,
    openUpdateModal,
    closeModal,
    setOpenState,
  };
}

export default useCRUDModal;
