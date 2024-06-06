import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="header">
        <h1>header</h1>
      </div>
        <Outlet/>      
      <div className="footer">
        <h1>footer</h1>
      </div>
    </>
  );
}

export default App;