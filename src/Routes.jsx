import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Transactions from "./pages/transactions";
import All from "./pages/market";
import Favorites from "./pages/market/favorites";
import Profile from "./pages/profile";
import Config from "./pages/config";
import AllCoins from "./pages/market/all";
import FavoritesCoins from "./pages/market/favorites";
import Market from "./pages/market";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/market" element={<All />}>
        <Route index element={<Market />} />
        <Route path="/market/all-coins" element={<AllCoins />} />
        <Route path="/market/favorites-coins" element={<FavoritesCoins />} />
      </Route>
      <Route path="/transacoes" element={<Transactions />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/config" element={<Config />} />
    </Routes>
  );
};
export default AppRoutes;
