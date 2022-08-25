import { Route, Routes } from "react-router-dom";

import Authentication from "./components/routes/authentication/authenticantion.component.jsx";
import Checkout from "./components/routes/checkout/checkout.component.jsx";
import Home from "./components/routes/home/home.component.jsx";
import Navigation from "./components/routes/navigation/navigation.components.jsx";
import Shop from "./components/routes/shop/shop.component.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
