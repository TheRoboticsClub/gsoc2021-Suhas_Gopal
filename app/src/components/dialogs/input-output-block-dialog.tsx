import { Button, Dialog, DialogActions, DialogContent, DialogContentText, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { create, InstanceProps } from 'react-modal-promise';
import { InputBlockModelOptions } from '../blocks/basic/input/input-model';



const IOBlockDialog = ({ isOpen, onResolve, onReject }: InstanceProps<InputBlockModelOptions>) => {


  const [name, setName] = useState('');

  return (
    <Dialog open={isOpen} aria-labelledby="form-dialog-title">

      <DialogContent>
        <DialogContentText>
          Enter the name
          </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          type="text"
          variant='outlined'
          value={name}
          onChange={(event) => setName(event.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onReject()}>
          Cancel
          </Button>
        <Button onClick={() => onResolve({ name: name })}>
          Ok
          </Button>
      </DialogActions>
    </Dialog>
  )
}

const createIODialog = create(IOBlockDialog);

export default createIODialog;