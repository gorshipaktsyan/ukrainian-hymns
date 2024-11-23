import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';

import { setIsConfirmOpen } from '../../../redux/slice/historySlice';

export default function ConfirmModal({ handleClearHistory, dispatch, isConfirmOpen, language }) {
  return (
    <Dialog open={isConfirmOpen} onClose={() => dispatch(setIsConfirmOpen(false))}>
      <DialogContent>
        <DialogContentText sx={{ color: 'black' }}>{language.history.dialog}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => dispatch(setIsConfirmOpen(false))}>
          {language.history.no}
        </Button>
        <Button onClick={handleClearHistory} autoFocus>
          {language.history.yes}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
