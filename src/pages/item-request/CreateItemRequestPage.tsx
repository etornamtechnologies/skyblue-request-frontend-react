import { Button, CircularProgress, Dialog, DialogContent, DialogTitle, Divider, FormControl, Grid, IconButton, InputLabel, makeStyles, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@material-ui/core';
import React, { FormEvent, Fragment, FunctionComponent, SyntheticEvent, useState } from 'react'
import BackIcon from '@material-ui/icons/ChevronLeft'
import { useHistory } from 'react-router-dom';
import * as requestService from '../../services/item-request-service'
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { CreateRequestItemPayload, MultiRequestItemPayload } from '../../types/payloads';
import { IItemRequest, ITableColumn } from '../../types/types';
import { Add, Delete, Send } from '@material-ui/icons';
import { RequestReason, RequestReasonList } from '../../types/RequestReason';
import { getUserDetailsFromStorage } from '../../services/auth-service'
import { AuthUser } from '../../types/types';
import { showErrorAlert, showSuccessAlert } from '../../utils/common-helper';

const useStyles = makeStyles(theme=> ({
  root: {

  },
  form: {
    width: '100% !important',
    backgroundColor: 'yellow'
  },
  textField: {
    width: '100%',
    marginBottom: '20px'
  },
  tableContainer: {
    maxHeight: 440,
    padding: 10
  }

}));

interface EntryState {
  name: string
  reason: string
  purpose: string
  quantity: number
}

const headerColumns: ITableColumn[] = [
  {id: 'name', label: 'Name', align: 'left'},
  {id: 'reason', label: 'Reason', align: 'left'},
  {id: 'purpose', label: 'Purpose', align: 'left'},
  {id: 'quantity', label: 'Quantity', align: 'left'}
]


const CreateItemRequestPage: FunctionComponent = ()=> {

  const [entries, setEntries] = useState<IItemRequest[]>([])
  const [entry, setEntry] = useState<EntryState>({name: '', reason: RequestReason.FreshNeed, purpose: '', quantity: 0})
  const [loading, setLoading] = useState<boolean>(false)
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const history = useHistory()
  const classes = useStyles()

  const MySwal = withReactContent(Swal)

  const handleNavigateBack = ()=> {
    history.goBack()
  }

  const handleInputChange = (event: FormEvent<EventTarget>)=> {
    const target = event.target as HTMLInputElement
    const eventName: string = target.name;
    const value: string = target.value;
    setEntry({...entry, [eventName]: value})
  }

  const handleSelectChange = (event: any) => {
    const target = event.target
    const eventName: string = target.name
    console.log('event', event.target.value)
    setEntry({...entry, [eventName]: target.value})
  }

  const handleSubmitEvent = (event: SyntheticEvent)=> {
    event.preventDefault()
    MySwal.fire({
      title: `Are you sure you send request?`,
      showDenyButton: true,
      confirmButtonText: 'Yes',
      preConfirm: ()=> {
        createItemRequest()
      }
    })
  }

  const createItemRequest = ()=> {
    let multipleEntries: CreateRequestItemPayload[] = entries.map(entry => {
      const entryPayload: CreateRequestItemPayload = {
        name: entry.name,
        reason: entry.reason,
        purpose: entry.purpose,
        quantity: entry.quantity
      }
      return entryPayload
    })
    const authUser = getUserDetailsFromStorage() as AuthUser;
    const authUserId = authUser.id as number

    const multiRequestPayload: MultiRequestItemPayload = {
      multipleRequestItem: multipleEntries,
      employee_id: authUserId
    }
    setLoading(true)
    requestService.saveItemRequest(multiRequestPayload)
      .then(response => {
        const {data, status, message} = response
        if(status === 'OK') {
          setEntries([])
          showSuccessAlert('Send Request', message ? message : 'Request Sent!')
        }
      })
      .catch(error=> {
        showErrorAlert('Failed', error)
      })
      .finally(()=> {
        setLoading(false)
      })
  }

  const handleAddEntry = ()=> {
    const myEntry: EntryState = {
      name: entry.name,
      reason: entry.reason,
      purpose: entry.purpose,
      quantity: entry.quantity
    }
    
    setEntries([...entries, myEntry])
    setEntry({name: '', reason: RequestReason.FreshNeed, purpose: '', quantity: 0})
  }

  const handleRemoveEntry = (index: number)=> {
    //set entries
    setEntries(entries.filter((entry, idx) => index != idx))
  }


  const handleCloseDialog = () => {
    setModalOpen(false)
  }

  const handleOpenDialog = () => {
    setModalOpen(true)
  }

  const requestValid = () => {
    return entries.length > 0
  }

  const entryValid = () => {
    if(!entry.name || !entry.reason || !entry.purpose || entry.quantity <= 0) {
      return false
    } else {
      return true
    }
  }

  return (
    <Fragment>
      <Paper elevation={0} style={{padding: '5px', minHeight: '50px'}}>
        <IconButton color="primary" onClick={handleNavigateBack}>
          <BackIcon />
        </IconButton>
      </Paper>
      <Paper elevation={0} style={{padding: '5px', minHeight: '300px', marginTop: '10px', display:'flex', flexDirection: 'column'}}>
        <Grid container style={{padding: 5}}>
          <Grid item md={6} lg={6} sm={6}>
            <Typography variant="h5" color="textPrimary">
              Request Form
            </Typography>
          </Grid>
          <Grid item md={6} lg={6} sm={6} style={{textAlign:'right'}}>
            <Button variant="outlined" color="primary" onClick={handleOpenDialog}>
              <Add fontSize="small" /> Add Entry
            </Button>
          </Grid>
        </Grid>
        
        <Divider />
        <div style={{width:'100%', display:'flex', justifyContent: 'center', flexDirection: 'column'}}>
          <TableContainer className={classes.tableContainer}>
            <Table stickyHeader aria-label="new request entries table">
              <TableHead>
                <TableRow>
                  {headerColumns.map(column => {
                    return (
                      <TableCell key={column.id}>
                        {column.label}
                      </TableCell>
                    )
                  })}
                  <TableCell>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {entries && entries.map((entry, index)=> {
                  return (
                    <TableRow key={index}>
                      {headerColumns.map((column) => {
                        const value: any =  entry[column.id as keyof EntryState]
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        )
                      })}
                      <TableCell>
                        <IconButton color="secondary" onClick={()=> handleRemoveEntry(index)}>
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <Grid container style={{marginTop: '10px'}}>
            <Grid item md={12} style={{textAlign: 'right'}}>
              <Button variant="contained" color="secondary" disabled={!requestValid() || loading} onClick={handleSubmitEvent}>
                {loading ?<CircularProgress size={20} /> : null}
                <Send /> <span style={{marginLeft: '5px'}}>Send Request</span>
              </Button>
            </Grid>
          </Grid>
        </div>
      </Paper>
      <Dialog onClose={handleCloseDialog} aria-labelledby="dialog-title" open={modalOpen} style={{width: '100%'}}>
        <DialogTitle>
          Request Entry
        </DialogTitle>
        <DialogContent dividers>
          <div style={{width: '400px'}}>
            <FormControl variant="outlined" className={classes.textField}>
              <InputLabel htmlFor="outlined-age-native-simple">Department</InputLabel>
              <Select
                native
                value={entry.reason}
                onChange={handleSelectChange}
                label="Reason"
                name="reason"
              >
                {RequestReasonList.map(reason => {
                  return (
                    <option key={reason.id} value={reason.id}>
                      {reason.label}
                    </option>
                  )
                })}
              </Select>
            </FormControl>
            <TextField id="item-name" label="Item Name" name="name" value={entry.name} autoComplete="off"
              variant="outlined" className={classes.textField} onChange={handleInputChange}/>
            <TextField id="purpose" label="Purpose" name="purpose" value={entry.purpose} autoComplete="off"
              variant="outlined" className={classes.textField} onChange={handleInputChange}/>
            <TextField id="quantity" label="Quantity" name="quantity" value={entry.quantity} autoComplete="off" type="number"
              variant="outlined" className={classes.textField} onChange={handleInputChange}/>
            <Grid container>
              <Grid item md={6}>
                <Button variant="contained" color="secondary" style={{float: 'left'}} onClick={handleCloseDialog}>
                  Cancel
                </Button>
              </Grid>
              <Grid item md={6}>
                <Button variant="contained" color="primary" style={{float: 'right'}} onClick={handleAddEntry} disabled={!entryValid()}>
                  Add Entry
                </Button>
              </Grid>
            </Grid>
          </div>
        </DialogContent>
      </Dialog>
    </Fragment>
    
  )
}

export default CreateItemRequestPage;