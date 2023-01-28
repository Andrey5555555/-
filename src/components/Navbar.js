import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Box,
  styled,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function Navbar() {
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            sx={{ textDecoration: 'none' }}
            component={Link}
            to="/"
          >
            JWT Auth
          </Typography>

          <Box ml="auto">
            <Button color="inherit" component={Link} to="/contacts">
              Contacts
            </Button>
            <Typography variant="body1" component="span">
              example@mail.com
            </Typography>
            <Button color="inherit">Logout</Button>
          </Box>
          <Box>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Offset />
    </Box>
  );
}
export default Navbar;
