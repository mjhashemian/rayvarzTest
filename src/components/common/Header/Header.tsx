import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../../public/icons/logo.svg';
const pages = ['houses', 'about'];

const Header = () => {
  const navigate = useNavigate();
  return (
    <AppBar style={{ background: '#FFF', height: '68px' }}>
      <Container maxWidth="xl">
        <Toolbar>
          <img src={Logo} className="w-16" alt="" />

          {pages.map((page) => (
            <Button
              onClick={() => navigate(`/${page}`)}
              key={page}
              style={{ color: 'black', outline: ' none ' }}
            >
              {page}
            </Button>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
