import { useAppDispatch } from "./useAppDispatch";
import {
  closeConfirmModal as closeConfirmModalAction,
  openConfirmModal as openConfirmModalAction,
} from "store/slices/ConfirmModal/confirmModalSlice";

function useConfirmMoldal() {
  const dispatch = useAppDispatch();

  const openConfirmModal = (title: string, content: string, callback: any) => {
    dispatch(openConfirmModalAction({ title, content, callback }));
  };

  const closeConfirmModal = () => {
    dispatch(closeConfirmModalAction({}));
  };

  return { openConfirmModal, closeConfirmModal };
}

export default useConfirmMoldal;
