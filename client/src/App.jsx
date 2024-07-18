import Register from "./components/Register.jsx";
import Header from "./components/Header.jsx";
import LoginPage from "./LoginPage.jsx";
import Home from "./Home.jsx";
import AdminPanel from "./ad/Admin.jsx";
import { useEffect, useState } from "react";
import Customers from "./ad/Customers.jsx";
import Dashboard from "./ad/Dashboard.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [visible, setVisible] = useState(true);

  function handleVisible(value) {
    if (!value) {
      setVisible(value);
    } else {
      setVisible(value);
    }
  }

  useEffect(() => {
  }, [visible]);

  return (
    <>
      <Router>
        {visible && <Header />}
        <Routes>
          <Route path="/register" element={<Register onOpen={handleVisible}/>} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/" element={<Home onOpen={handleVisible}/>} />
          <Route path="admin" element={<AdminPanel onOpen={handleVisible} />}>
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/customers" element={<Customers />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
