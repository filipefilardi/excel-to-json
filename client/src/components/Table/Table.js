import React, { Component } from "react";

import "./table.css";

const result_json = [
  {
    "fetiche_pessoal": "nao mandar curriculo", 
    "hurray": "111", 
    "nome": "fil", 
    "profissao": "desempregado"
  }, 
  {
    "fetiche_pessoal": "dinheiro", 
    "hurray": "222", 
    "nome": "noba", 
    "profissao": "advogado"
  }, 
  {
    "fetiche_pessoal": "codigo", 
    "hurray": "333", 
    "nome": "kazu", 
    "profissao": "coder"
  }, 
  {
    "fetiche_pessoal": "vencer o mau", 
    "hurray": "444", 
    "profissao": "superheroi"
  }, 
  {
    "fetiche_pessoal": "jogar na rede", 
    "hurray": "555", 
    "profissao": "gamer"
  }, 
  {
    "fetiche_pessoal": "bebidas alcoolicas", 
    "hurray": "666", 
    "profissao": "mixologista",
    "saprofissao": "mixologista",
    "prddsdofissao": "mixologista"
  }
];

class Table extends Component {
	renderTable() {
		return (
			result_json.map((row, index) => (
				<div key={index}>
				{
					Object.keys(row).forEach(key => (
						console.log(key)
					))
				}
				</div>
			))
			//<div className="table-responsive">
			// <table className="table table-bordered table-hover">
			// 	<thead>
			// 		<tr>
			// 			<th scope="col">#</th>
			// 			<th scope="col">First</th>
			// 			<th scope="col">Last</th>
			// 			<th scope="col">Handle</th>
			// 			<th scope="col">TK_number</th>
			// 			<th scope="col">Profissao</th>
			// 			<th scope="col">Hurray</th>
			// 			<th scope="col">Teste</th>
			// 			<th scope="col">Modos</th>
			// 		</tr>
			// 	</thead>
			// 	<tbody>
			// 		<tr>
			// 			<th scope="row">1</th>
			// 			<td>Mark</td>
			// 			<td>Otto</td>
			// 			<td>@mdo</td>
			// 			<td>Mark</td>
			// 			<td>Otto</td>
			// 			<td>Mark</td>
			// 			<td>Otto</td>
			// 			<td>@mdo</td>
			// 		</tr>
			// 		<tr>
			// 			<th scope="row">2</th>
			// 			<td>Jacob</td>
			// 			<td>Thornton</td>
			// 			<td>@fat</td>
			// 			<td>Mark</td>
			// 			<td>Otto</td>
			// 			<td>Mark</td>
			// 			<td>Otto</td>
			// 			<td>@mdo</td>
			// 		</tr>
			// 		<tr>
			// 			<th scope="row">3</th>
			// 			<td>Larry</td>
			// 			<td>the Bird</td>
			// 			<td>@twitter</td>
			// 			<td>1</td>
			// 			<td>2</td>
			// 			<td>3</td>
			// 			<td>4</td>
			// 			<td>5</td>
			// 		</tr>
			// 	</tbody>
			// </table>
			//</div>
		);
	}

	render() {
		return <div>{this.renderTable()}</div>;
	}
}

export default Table;
