import Button from "../../components/Common/Button";
import Input from "../../components/Common/Input";
import { inputData } from "../../data/input/inputData";
import { useForm } from "react-hook-form";

const ChangePassword = () => {
  const { handleSubmit, register } = useForm();

  const handleChangePassword = () => {};

  return (
    <div>
      <div className="h-44 w-full bg-primary flex flex-col justify-center items-center"></div>
      <div className="p-5 flex flex-col gap-5 -mt-36">
        <div>
          <span className="font-bold text-xl text-white">Change password</span>
        </div>
        <div className="shadow-md border rounded-md overflow-hidden bg-white p-5">
          <form
            onSubmit={handleSubmit(handleChangePassword)}
            className="flex flex-col gap-2"
          >
            {inputData.changePassowrdData.map(
              ({ placeholder, label, type, isRequired, registerName }) => (
                <Input
                  {...register(registerName)}
                  label={label}
                  placeholder={placeholder}
                  type={type}
                  required={isRequired}
                  key={registerName}
                  className="bg-transparent border"
                />
              )
            )}
            <div className="flex flex-col items-end justify-end">
              <Button className={"mt-3 w-32"}>Change</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
