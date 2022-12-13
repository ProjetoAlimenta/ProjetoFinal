 import React from 'react';
 import { AppBar, Toolbar, Typography } from '@material-ui/core';
 import { Box } from '@mui/material';
 import { Link } from 'react-router-dom';
 import { useNavigate } from 'react-router-dom'
 import './Navbar.css'
 import { useSelector } from 'react-redux';
 import { TokenState } from '../../../store/tokens/tokensReducer';
 import { useDispatch } from "react-redux";
 import { addToken } from '../../../store/tokens/actions';
 import { toast } from 'react-toastify';
 import HomeIcon from '@mui/icons-material/Home';
 function Navbar() {
     const token = useSelector<TokenState, TokenState["tokens"]>(
         (state) => state.tokens
     );
     let navigate = useNavigate();
     const dispatch = useDispatch();
    
     function goLogout() {
         dispatch(addToken(''));
         toast.info('Usuário deslogado', {
             position: "top-right",
             autoClose: 2000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: false,
             draggable: false,
             theme: "colored",
             progress: undefined,
         });
         navigate('/login')
     }

     var navbarComponent;

     if (token != "") {
         navbarComponent = <AppBar position="static">
             <Toolbar variant="dense" className="Toolbar">
                 <Link to="/home" className="text-decorator-none">
                     <Box className='cursor' >
                                 <HomeIcon sx={{ fontSize: 40 }}/>
                     </Box>
                 </Link>

                 <Box display="flex" justifyContent="start">
                     <Link to="/posts" className="text-decorator-none">
                         <Box mx={1} className='cursor'>
                             <Typography variant="h6" color="inherit">
                                 Postagens
                             </Typography>
                         </Box>
                     </Link>
                     <Link to="/temas" className="text-decorator-none">
                         <Box mx={1} className='cursor'>
                             <Typography variant="h6" color="inherit">
                                 Temas
                             </Typography>
                         </Box>
                     </Link>
                     <Link to="/formularioTema" className="text-decorator-none">
                         <Box mx={1} className='cursor'>
                             <Typography variant="h6" color="inherit">
                                 Cadastrar Tema
                             </Typography>
                         </Box>
                     </Link>

                     <Box mx={1} className='cursor' onClick={goLogout}>
                         <Typography variant="h6" color="inherit">
                             Sair
                         </Typography>
                     </Box>
                 </Box>

             </Toolbar>
         </AppBar>
     }
     return (
         <>
             {navbarComponent}
         </>
     )
 }

 export default Navbar;

