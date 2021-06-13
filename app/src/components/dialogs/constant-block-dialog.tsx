import { Button, Dialog, DialogActions, DialogContent, DialogContentText, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { create, InstanceProps } from 'react-modal-promise';
import { ConstantBlockModelOptions } from '../blocks/basic/constant/constant-model';



const ConstantBlockDialog = ({ isOpen, onResolve, onReject }: InstanceProps<ConstantBlockModelOptions>) => {


  const [name, setName] = useState('');

  return (
    <Dialog open={isOpen} aria-labelledby="form-dialog-title">

      <DialogContent>
        <DialogContentText>
          Enter the constant block
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

const createConstantDialog = create(ConstantBlockDialog);

export default createConstantDialog;