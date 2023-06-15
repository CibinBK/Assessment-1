import { Button } from '@mui/base'
import { TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div style={{paddingTop:'30px'}}>
        <h1>New Blog Form</h1>
        <TextField variant='standard' label="Blog Name"></TextField>
        <br></br>
        <TextField variant='standard' label="Description"></TextField>
        <br></br>
        <TextField variant='standard' label="Author Name"></TextField>
        <br></br>
        <br></br>
        <Button variant='text'>SUBMIT</Button>
    </div>
  )
}

export default Add