import { useState } from "react";
import Button from "../../components/Common/Button";
import Modal from "../../components/Common/Modal";
import AddressForm from "../../components/Pages/Address/AddressForm";
import AddressTable from "../../components/Pages/Address/AddressTable";

const Address = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="h-44 w-full bg-primary flex flex-col justify-center items-center"></div>
      <div className="p-5 flex flex-col gap-5 -mt-36">
        <div className="grid grid-cols-2">
          <span className="font-bold text-xl text-white">Address</span>
          <div className="flex items-center gap-3 justify-end">
            <Button
              onClick={() => setIsModalOpen((prev) => !prev)}
              className="w-40"
            >
              Add new address
            </Button>
          </div>
        </div>
        <div className="shadow-md border rounded-md overflow-hidden">
          <AddressTable />
        </div>
      </div>
      {isModalOpen && (
        <Modal
          title={"Add new delivery address"}
          className="w-[500px]"
          onClose={setIsModalOpen}
          isOpen={isModalOpen}
        >
          <AddressForm />
        </Modal>
      )}
    </div>
  );
};

export default Address;
