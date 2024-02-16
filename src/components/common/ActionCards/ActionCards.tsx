import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

const ActionCards = () => {
  return (
    <div className="w-[10%] flex gap-2">
      <CreateIcon className="cursor-pointer" style={{ color: 'red' }} />
      <DeleteIcon className="cursor-pointer" />
    </div>
  );
};

export default ActionCards
