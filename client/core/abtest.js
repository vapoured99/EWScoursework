

import Button from "@material-ui/core/Button"
import React, {component} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import BackupTwoToneIcon from '@material-ui/icons/BackupTwoTone'
import SendIcon from '@material-ui/icons/Send'
import { render } from "react-dom";
import { create } from "./api-submit"



const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.primary
  },



  credit: {
    padding: 10,
    textAlign: 'centre',
    backgroundColor: '#ededed',
    border: '1px solid #d0d0d0',
    '& a':{
    color: '#3f4771'
    } 
  },


  btn1: {
         
      height: 40,
      width: 150,
      borderRadius: 25,
      opacity: 1,
      marginLeft: 20,
            
           
 },


  btn2: {
      height:30,
      width:120

},

  btn3: {
     height:50,
     width:120,
     color:'#d32f2f',
     borderWidth: 2,
     borderColor: '#d32f2f'
},

  btn4: {
     height: 45,
     width:140,
},

}))




export default function Home(){
  const classes = useStyles()

  

  const submit = () => {
    const submit = {      
       submit:true,
    }
    create(submit).then((data) => {
      if (data.error) {
       console.log(data.error)
      } else {
      console.log(data)
      }
    })
   
 }

        return (
        <Card className={classes.card}>
          <Typography variant="h6" className={classes.title}>
            Hello and welcome to my A/B Testing website. On this page you will need to make a decisive decsion based on what appeals to you more,
            what intrigues you and what your gut is telling you to pick. You only have 1 pick.
          </Typography>


          


          <Button
            className={classes.btn1}
            color="primary"
            variant="contained"
            onClick={submit} 
          >
            SUBMIT
          </Button>

        

          &nbsp;
          &nbsp;

          <Button 
            className={classes.btn2}
            startIcon={<BackupTwoToneIcon />}
            variant="contained"
            onClick={submit2}
            
          >
            SUBMIT
          </Button>
          &nbsp;
          &nbsp;         
          

          <Button 
            className={classes.btn3}
            color="inherit"
            variant="outlined"
            onClick={submit}
          >
            SUBMIT
          </Button>

          &nbsp;
          &nbsp;

          <Button 
            className={classes.btn4}
            variant="contained"
            color="secondary"
            endIcon={<SendIcon>Send</SendIcon>}
            onClick={submit}
          >
              Send
          </Button>

          <br />
          <br />
          
          <CardContent>
            <Typography variant="body1" component="p">
              The purpose of this experiment is to decide which type of button appeals the most and is more likely to get clicked. 
              The research from this would be applied to such things like Loan forms and Submitting purchases. The idea behind that is to
              gather data to increase submission rates to overall improve a businesses rate of orders/purchases for example.
            </Typography>
          </CardContent>
        </Card>
    )
}






