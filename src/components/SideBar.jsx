const Li = ({ children }) => {
  return <li className="p-4 cursor-pointer hover:bg-gray-700">{children}</li>;
};

const SideBar = () => {
  return (
    <>
      <div className="flex">
        <div className="fixed w-64 h-screen border-r-2 border-r-slate-400 text-slate-700">
          <div className="p-4 text-lg font-semibold cursor-default">
            Sidebar
          </div>
          <ul>
            <Li children="Home" />
            <Li children="About" />
            <Li children="Services" />
            <Li children="Contact" />
          </ul>
        </div>
      </div>
    </>
  );
};
export default SideBar;
