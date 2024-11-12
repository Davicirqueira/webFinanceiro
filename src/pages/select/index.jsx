import './index.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Select() {

  const [listFinanca, setListFinanca] = useState([]);
  const navigate = useNavigate();

  function backToInsert() {

    navigate('/');

  }

  async function selectFin() {

    const url = 'http://localhost:5555/financa';
    let resp = await axios.get(url);

    setListFinanca(resp.data);

  }


  return (

    <div className='page-select'>

      <h1>Consulte suas Finanças</h1>

      <button onClick={selectFin}>Mostrar Valores</button>

      {listFinanca.map(fin =>

        <div className='card-select'>

          <div>

            <label htmlFor="">Valor:</label>
            <p>{fin.valor}</p>

          </div>

          <div>

            <label htmlFor="">Origem:</label>
            <p>{fin.origem}</p>

          </div>

        </div>

      )}

      <p onClick={backToInsert}>voltar ao cadastro de valores...</p>

    </div>

  );

}

