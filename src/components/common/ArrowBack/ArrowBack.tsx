import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ArrowBack = () => {
  const navigate = useNavigate();

  return (
    <div className="cursor-pointer w-fit h-fit" onClick={() => navigate(-1)}>
      <ArrowBackIcon /> Back to overview
    </div>
  );
};

export default ArrowBack;
