import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState,useEffect } from 'react'

const Home = () => {
  var[blogs,setBlogs] = useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
      setBlogs(response.data)
    })
    .catch((err)=>console.log(err))
  })
  return (
    <div style={{paddingTop:'40px'}}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{color:'skyblue',backgroundColor:'black',fontFamily:'LucidaSans',fontSize:"30px"}}>ID</TableCell>
              <TableCell style={{color:'skyblue',backgroundColor:'black',fontFamily:'LucidaSans',fontSize:"30px"}}>TITLE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogs.map((value,index) => {
              return(
                <TableRow key={index}>
                  <TableCell>{value.id}</TableCell>
                  <TableCell>{value.title}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Home