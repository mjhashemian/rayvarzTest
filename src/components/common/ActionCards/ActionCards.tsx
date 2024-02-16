import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Modal } from 'antd';
import { deleteDoc, doc } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../../../firebase.config';

const ActionCards: React.FC<IActions> = ({ id }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const deleteUser = async (id: any) => {
    const house = doc(db, 'houses', id);
    await deleteDoc(house);
  };

  return (
    <div className="w-[10%] flex gap-2">
      <CreateIcon className="cursor-pointer" style={{ color: 'red' }} />
      <div onClick={() => setIsModalOpen(true)}>
        <DeleteIcon className="cursor-pointer" />
      </div>
      <Modal
        onOk={handleOk}
        onCancel={handleCancel}
        open={isModalOpen}
        footer={false}
      >
        <div className="flex flex-col items-center">
          <h1 className="text-[20px] font-[700]">Delete listing</h1>
          <p className="text-[14px] font-[500]">
            Are you sure you want to delete this listing <br />
            This action cannot be undone.
          </p>
          <Button
            className="w-full mt-5 bg-[#d35400] text-[#FFF] hover:!bg-[#d32e00] hover:!text-[#FFF] hover:!border-none hover:!outline-none hover:!border-[#d32e00]"
            onClick={() => {
              deleteUser(id);
              setIsModalOpen(false);
            }}
          >
            YES , DELETE
          </Button>
          <Button
            className="w-full mt-5 bg-[#262626] text-[#FFF] hover:!bg-[#343434] hover:!text-[#FFF] hover:!border-none hover:!outline-none hover:!border-[#343434]"
            onClick={() => setIsModalOpen(false)}
          >
            {' '}
            GO BACK{' '}
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ActionCards;
