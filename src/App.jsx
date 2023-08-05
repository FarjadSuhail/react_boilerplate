import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AllApps from "./pages/AllApps";
import Analytics from "./pages/Analytics";
import Authentication from "./pages/Authentication";
import Build from "./pages/Build";
import Settings from "./pages/Settings";
import Stroage from "./pages/Stroage";
import Login from "./pages/auth/Login";
import Header from "./layouts/header/Header";
import { useSelector } from "react-redux";

const App = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  console.log(isAuthenticated);

  return (
    <>
    <Header />
    {!isAuthenticated && <div className="App">
      <Login />
      </div>}    
    {isAuthenticated && <RootLayout>
      <Routes>
        <Route path="/" element={<AllApps />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/stroage" element={<Stroage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/build/:bID" element={<Build />} />
        <Route path="/analytics/:aID" element={<Analytics />} />
      </Routes>
    </RootLayout>}

    </>
  );
};

export default App;
