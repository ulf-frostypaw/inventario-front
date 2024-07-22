const Dashboard = () => {
  return (
    <>
      <div className="fixed h-screen w-[16%] bg-black p-4">
        <div className="bg-slate-800 flex m-auto rounded-lg top-0 my-[2%] h-[100%] w-[90%] ">
          <div className="bg-slate-800 h-100% p-4 rounded-md text-white justify-center">
            <p className="text-lg flex justify-center">Dashboard</p>
            <div className="flex justify-center">
              <ul>
                <li>
                  <a href="#">Clientes</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
