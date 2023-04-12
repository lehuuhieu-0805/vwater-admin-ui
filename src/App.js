import React from "react";
import "./App.css";
import Interceptor from "./confgurations/axios/interceptor";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import MainLayout from "./components/MainLayout/MainLayout";
import AuthProvider from "./context/AuthContext";
import Report from "./pages/Report";
import SideBar from "./shared/Sidebar/Sidebar";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Counter } from "./pages/Counter/Counter";
import Stores from "./pages/Stores/Stores";
import { VWaterPaths } from "./confgurations/paths/vwaterPath";
import StoreDetail from "./pages/Stores/StoreDetail/StoreDetail";
import { TYPE } from "./confgurations/constants";
import Warehouse from "./pages/Warehouse/Warehouse";
import WarehouseDetail from "./pages/Warehouse/WarehouseDetail/WarehouseDetail";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/Products/ProductDetail/ProductDetail";
import Drivers from "./pages/Drivers/Drivers";
import DriverDetail from "./pages/Drivers/DriverDetail/DriverDetail";
import StoreView from "./pages/Stores/StoreDetail/StoreView";
import WarehouseView from "./pages/Warehouse/WarehouseDetail/WarehouseView";
import ProductView from "./pages/Products/ProductDetail/ProductView";
import DriverView from "./pages/Drivers/DriverDetail/DriverView";
Interceptor();
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path={"/login"} element={<Login />} />
            <Route path="/" element={<MainLayout />}>
              <Route path={"/dashboard"} element={<Dashboard />} />
              <Route path={"/report"} element={<Report />} />
              {/*  */}
              <Route path={VWaterPaths.store} element={<Stores />} />
              <Route
                path={VWaterPaths.store_create}
                element={<StoreDetail type={TYPE.CREATE} />}
              />
              <Route
                path={`${VWaterPaths.store_update}/:id`}
                element={<StoreDetail type={TYPE.UPDATE} />}
              />
              <Route
                path={`${VWaterPaths.store_view}/:id`}
                element={<StoreView type={TYPE.VIEW} />}
              />
              {/* Warehouse */}
              <Route path={VWaterPaths.warehouse} element={<Warehouse />} />
              <Route
                path={VWaterPaths.warehouse_create}
                element={<WarehouseDetail type={TYPE.CREATE} />}
              />
              <Route
                path={`${VWaterPaths.warehouse_update}/:id`}
                element={<WarehouseDetail />}
                type={TYPE.UPDATE}
              />
              <Route
                path={`${VWaterPaths.warehouse_view}/:id`}
                element={<WarehouseView />}
                type={TYPE.VIEW}
              />
              {/* Products */}
              <Route path={VWaterPaths.products} element={<Products />} />
              <Route
                path={VWaterPaths.products_create}
                element={<ProductDetail type={TYPE.CREATE} />}
              />
              <Route
                path={`${VWaterPaths.products_update}/:id`}
                element={<ProductDetail />}
                type={TYPE.UPDATE}
              />
              <Route
                path={`${VWaterPaths.products_view}/:id`}
                element={<ProductView />}
                type={TYPE.VIEW}
              />
              {/* Drivers */}
              <Route path={VWaterPaths.drivers} element={<Drivers />} />
              <Route
                path={VWaterPaths.drivers_create}
                element={<DriverDetail type={TYPE.CREATE} />}
              />
              <Route
                path={`${VWaterPaths.drivers_update}/:id`}
                element={<DriverDetail />}
                type={TYPE.UPDATE}
              />
              {/* <Route
                path={`${VWaterPaths.drivers_view}/:id`}
                element={<DriverView />}
                type={TYPE.VIEW}
              /> */}
              <Route path="/demo-redux" element={<Counter />} />
            </Route>
            {/* <Route path={VWaterPaths.login} element={<Login />} />
          <Route path={VWaterPaths.register} element={<Register />} />
          <Route path="/" element={<MainLayout />}>
            {RenderRoutes()} */}
            {/* </Route> */}
          </Routes>
        </LocalizationProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
