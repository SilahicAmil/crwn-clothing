import { Routes, Route } from "react-router-dom";

import Home from "./components/routes/home/home.component.jsx";
import Navigation from "./components/routes/navigation/navigation.components.jsx";
import Authentication from "./components/routes/authentication/authenticantion.component.jsx";

const Shop = () => {
  return <h1>This is the shop lol</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
