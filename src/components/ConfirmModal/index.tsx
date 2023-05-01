import ModalCustom from 'components/ModalCustom';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { closeConfirmModal } from 'store/slices/ConfirmModal/confirmModalSlice';

function ConfirmModal() {
    const { open, title, content, callback } = useAppSelector(state => state.confirmModal);
    const dispatch = useAppDispatch();
    console.log(open)
    const handleChangeOpenState = (isOpen: boolean) => {
        if (!isOpen) {
            dispatch(closeConfirmModal({}))
        }
    }

    return (
        <ModalCustom
            titleHeader={title}
            footer={true}
            state={open}
            setState={handleChangeOpenState}
            callback={callback}>
            {content}
        </ModalCustom>
    )
}

export default ConfirmModal