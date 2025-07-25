import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard";
import Faturas from "../pages/Faturacao/Faturas";
import Clientes from "../pages/Faturacao/Clientes";
import Declaracoes from "../pages/Fiscal/Declaracoes";
import SAFT from "../pages/Fiscal/SAFT";
import Impostos from "../pages/Fiscal/Impostos";
import Retencoes from "../pages/Fiscal/Retencoes";
import Produtos from "../pages/Inventario/Produtos";
import Diario from "../pages/Contabilidade/Diario";
import Balancete from "../pages/Contabilidade/Balancete";
import Razao from "../pages/Contabilidade/Razao";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/faturacao/faturas" element={<Faturas />} />
      <Route path="/faturacao/clientes" element={<Clientes />} />
      <Route path="/fiscal/declaracoes" element={<Declaracoes />} />
      <Route path="/fiscal/saft" element={<SAFT />} />
      <Route path="/fiscal/impostos" element={<Impostos />} />
      <Route path="/fiscal/retencoes" element={<Retencoes />} />
      <Route path="/inventario/produtos" element={<Produtos />} />
      <Route path="/contabilidade/diario" element={<Diario />} />
      <Route path="/contabilidade/balancete" element={<Balancete />} />
      <Route path="/contabilidade/razao" element={<Razao />} />
    </Routes>
  );
};

export default AppRoutes;
