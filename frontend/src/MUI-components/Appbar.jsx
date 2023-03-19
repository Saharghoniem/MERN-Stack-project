 

 import {  NavLink } from "react-router-dom";
 import "../Signin.css"

import {
  Toolbar,
  AppBar,
  Link,
  Typography,
  IconButton,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';




const Appbar = ({ drawerWidth, showDrawer }) => {

  return (
    <AppBar
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { xs: 0, sm: `${drawerWidth}px` },
      }}
      position="static"
    >
      <Toolbar>
        <IconButton
          onClick={() => {
            showDrawer();
          }}
          sx={{ mr: "9px", display: { sm: "none" } }}
        >
          <Menu />
        </IconButton>
        <Link
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            "&:hover": { fontSize: "16.5px" },
          }}
          color="inherit"
          href="/"
        >
        Cosmetic <LocalFloristIcon color="error"/> Store
        </Link>

        {/* ==================================================================
                          sign in & sign out
        ================================================================== */}
            
                <div className="main">
            <NavLink className="main-link" to="/signin" >
              Sign-in
            </NavLink>

          {/* <li className="main-list"> */}
            <NavLink className="main-link" to="/signup">
              Sign-up
            </NavLink>

         </div>          
          {/* ===================================================================
          =================================================================== */}


        <Typography mr={2} variant="body1" color="inherit">
        <EmojiNatureIcon color="error"/>Sahar Ghoniem
        </Typography>

        {/* <Avatar alt="Remy Sharp" src="./me.png" /> */}
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
