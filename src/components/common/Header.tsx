import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const pages = ['houses', 'about'];

const Header = () => {
  const navigate = useNavigate();
  return (
    <AppBar style={{ background: '#FFF' }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            style={{
              color: '#000',
              border: '1px solid',
              padding: '10px',
              borderRadius: '10px',
            }}
          >
            LOGO
          </Typography>
          {pages.map((page) => (
            <Button
              onClick={() => navigate(`/${page}`)}
              key={page}
              style={{ color: 'black', border: 'none' }}
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
