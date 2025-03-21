import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useAppDispatch, useAppSelector } from "../../../hooks/useReduxStore";
import { closeAuthModal } from "../../../store/reducers/AuthModalReducer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AuthModalV2() {
  const appState = useAppSelector((state) => state.authModal.isOpen);
  const dispatch = useAppDispatch();
  const handleCloseModal = () => {
    dispatch(closeAuthModal());
  };

  return (
    <div>
      <Modal
        open={false}
        onClose={() => handleCloseModal()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Button
            variant="outlined"
            onClick={() => handleCloseModal()}
            sx={{ mt: 2 }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
