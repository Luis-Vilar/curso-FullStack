import PropTypes from "prop-types";
import { calcularTotal } from "../scripts/MisFunctions.js";

function Tabela(props) {
  return (
    <div className="my-5 ">
      <table className="table table-hover table-bordered justify-content-end">
        <thead className="bg-secondary">
          <tr >
            <th className="text-center" scope="col">Data</th>
            <th className="text-center" scope="col">Quantidade</th>
            <th className="text-center" scope="col">Valor</th>
            <th className="text-center" scope="col">#</th>
          </tr>
        </thead>
        <tbody>
          {props.negociacoes.map((negociacao, index) => (
            <tr key={index}>
              <td className="text-end">{negociacao.dataNegociacao}</td>
              <td className="text-end">{negociacao.quantidadeNegociacao}</td>
              <td className="text-end">{negociacao.valorNegociacao}</td>
              <td className="text-end">
                {(
                  negociacao.valorNegociacao * negociacao.quantidadeNegociacao
                ).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot className="bg-body-secondary">
          <tr>
            <td colSpan="3" className="text-end ">Total</td>
            <td className="text-end text-danger ">{calcularTotal(props.negociacoes)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
Tabela.propTypes = {
  negociacoes: PropTypes.array.isRequired,
};
export default Tabela;
