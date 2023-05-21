import "./styles.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState } from "react";
import { useEffect } from "react";
import ButtonCustom from "../ButtonCustom";
import ModalActionCustom from "components/ModalActionCustom";

export type Props = {
    titleHeader?: any;
    titleBtnCancel?: string;
    titleBtnAccept?: string;
    footer?: boolean;
    btnJustifyContent?: any;
    children?: any;
    callback: any;
    idTarget?: string;
    divider?: boolean;
    state: boolean;
    setState: any;
    width?: number;
    height?: number;
}

const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    bgcolor: "background.paper",
    outline: "none",
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
    marginTop: "100px"
};

const ModalCustom: React.FC<Props> = ({
    titleHeader,
    titleBtnCancel,
    titleBtnAccept,
    footer = true,
    btnJustifyContent,
    children,
    callback,
    idTarget,
    divider = false,
    state,
    setState,
    width,
    height
}) => {
    // STATE
    const [open, setOpen] = useState(false);
    // *******************************

    // ARROW FUCTION
    const handleClose = () => {
        setState ? setState(false) : setOpen(false);
    };
    const handleOpen = () => {
        setState ? setState(true) : setOpen(true);
    };
    const handleOnClick = () => {
        handleClose();
        callback();
    };
    // *******************************

    // HOOK EFFECT
    useEffect(() => {
        // ADD EVENT
        document.getElementById(idTarget) &&
            document.getElementById(idTarget).addEventListener("click", handleOpen);

        // CLEAN FUNCTION
        return () => { };
    }, []);
    // ******************************

    // CONSOLE WARNING
    // *******************************

    return (
        <div>
            <Modal
                sx={{ overflow: "auto" }}
                open={state || open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="modal-custom__wrapper" sx={{ ...style, height, width }}>
                    <div className="modal-custom__header">
                        <Typography id="modal-modal-title" variant="h6" component="p">
                            {titleHeader || "Missing title"}
                        </Typography>
                        <CloseRoundedIcon onClick={handleClose} />
                    </div>
                    <div className="modal-custom__content">
                        {children || "Missing chidren"}
                    </div>
                    {footer && (
                        <ModalActionCustom
                            divider={divider}
                            btnJustifyContent={btnJustifyContent}
                            handleClose={handleClose}
                            handleOnClick={handleOnClick}
                            titleBtnCancel={titleBtnCancel}
                            titleBtnAccept={titleBtnAccept}
                        />
                    )}
                </Box>
            </Modal>
        </div>
    );
};

export default ModalCustom;
