import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("MeuTokenModule", (m) => {
  const fornecimentoInicial = m.getParameter("fornecimentoInicial", 1_000_000n);
  const UAT = m.contract("UAT", [fornecimentoInicial]);
  return { UAT };
});
