import "./styles.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

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
};

const ModalCustom = ({ title, children, open, setOpen, handleClose }) => {
    // STATE
    // *******************************

    // ARROW FUCTION

    // *******************************

    // CONSOLE WARNING
    open || setOpen || console.warn("Missing state");
    // *******************************

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="modal-custom__wrapper" sx={style}>
                    <div className="modal-custom__header">
                        <Typography id="modal-modal-title" variant="h6" component="p">
                            {title || "Missing title"}
                        </Typography>
                        <CloseRoundedIcon onClick={handleClose} />
                    </div>
                    <div className="modal-custom__content">
                        {children || "Missing chidren"}
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default ModalCustom;
