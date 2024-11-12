import './index.scss';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { conversao } from '../../utils/conversion.js';

export default function Insert() {

  const [valor, setValor] = useState('');
  const [origem, setOrigem] = useState('');

  const navigate = useNavigate();

  async function saveValue(){

    const financas = {

      "valor": conversao(valor),
      "origem": origem

    }

    const url = 'http://localhost:5555/financa';
    let resp = await axios.post(url, financas);

    alert('Valor guardado!');

  }

  function goToSelect(){

    navigate('/select');

  }
  
  return (

    <div className='page-insert'>

      <h1>Cadastro de Finanças</h1>

      <section className='form'>

        <div>

          <label htmlFor="valor">Valor</label>
          <input type="decimal" placeholder='220,00' value={valor} onChange={e => setValor(e.target.value)}/>

        </div>

        <div>

          <label htmlFor="origem">Origem</label>
          <input type="text" placeholder='Dólar U$$' value={origem} onChange={e => setOrigem(e.target.value)}/>

        </div>

      </section>

      <button onClick={saveValue}>Guardar Valor</button>

      <p onClick={goToSelect}>consultar valores...</p>

    </div>

  );

}

