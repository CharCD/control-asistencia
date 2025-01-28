import Dashboard from "./components/Dashboard";
import FormLogin from "./components/FormLogin";
import { useState } from "react";
function App() {

  const [user, setUser] = useState([]);
  return (
    <>
      {
        !user.length > 0
          ? <FormLogin setUser={setUser} />
          : <Dashboard user={user} setUser={setUser} />
      }
    </>
  );
}

export default App;
