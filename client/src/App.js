import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ServiceList } from "./pages/ServiceList/ServiceList";
import { ServiceDetails } from "./pages/ServiceDetails/ServiceDetails";
import { Layout } from "./pages/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ServiceList />} />
        <Route path="/:id/details" element={<ServiceDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
