import welcome_img from "../../assets/welcome.png";
const Dashboard = () => {
  return (
    <div className="bg-white h-svh flex flex-col items-center">
      <div className="flex flex-col gap-4 justify-center items-center bg-white p-5">
        <h1 className="font-bold text-4xl uppercase">Welcome to our dashboard</h1>
        <img className="h-[530px]" src={welcome_img} alt="welcome_image" />
      </div>
    </div>
  );
};

export default Dashboard;
