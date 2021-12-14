import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@material-ui/core/Button'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Login from '@mui/icons-material/Login';
import Stack from '@mui/material/Stack'
import CardHeader from '@mui/material/CardHeader'
import Switch from '@mui/material/Switch';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import logo from '../img/cmliogo.png'
import AuthContext from './AuthContext';
import LoadingButton from '@mui/lab/LoadingButton';
import { makeStyles } from '@material-ui/core';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const useStyles = makeStyles({
    btn: {
        backgroundColor : '#112769',
       alignSelf : 'center',
      
       '&:hover' : {
           backgroundColor : '#24366c'
       },
       '&:focus ' : {
            borderColor : '#1976d2'
       },
    },
    action : {
        textAlign : 'center'
    }
    ,
    card : {
        boxShadow :' rgb(145, 158, 171,  24%) 0px 0px 2px 0px, rgb(145, 158, 171,  24%) 0px 16px 32px',
        borderWidth : '2.4px'
    }

})
export default function Authentification() {
    const [loading, setLoading] = React.useState(false);
    function handleClick() {
      setLoading(true);
    }
    const classe = useStyles()
    
  
  return (
      <Grid 
      direction="column"
      justifyContent="center"
      alignItems="center" 
      container
      style={{height : '100vh'}}
      >
          
          <Grid item>
         
              <Box>
                  <Card className={classe.card} sx={{ maxWidth: 375, padding : 1.5, display : {md : 'flex', flexDirection : 'column', alignItems : 'center'} }}>
                      <CardContent sx={{textAlign : ' center'}}>
                      
                      <Typography variant="h5" sx={{fontSize : '42px'}} component="div">
                              login
                          </Typography>
                          <Box sx={{textAlign : 'center', mt : 4, mb : 4}}>
                                 <img src={logo} height="102" alt='' />
                          </Box>
                         
                          
                            <Box>
                                <AuthContext />
                              <Stack direction="row" spacing={2} sx={{mt : 1.5}}>
                              <FormGroup>
                                  <FormControlLabel control={<Checkbox defaultChecked color='secondary'  />} label="remember me" />
                              </FormGroup>
                              <Typography component="a" sx={{textAlign : 'right'}} color = 'secondary'>forget my password</Typography>  
                              </Stack >
                              
                                
                                <Button disabled></Button>
                            </Box>
                      </CardContent>
                      <CardActions className={classe.action} >
                   
                           <LoadingButton className={classe.btn}
                              onClick={handleClick}
                              endIcon={<Login />}
                              loading={loading}
                                size='large'
                              loadingPosition="end"
                              variant="contained"
                              color ="primary"
                              fullWidth
                          >
                            sign in
                              
                          </LoadingButton>
                          
                         
                      </CardActions>
                  </Card>
                  
              </Box>
          </Grid>
      </Grid>
  );
}
