import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Insert from './pages/insert';
import Select from './pages/select';


export default function Navigate() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path='/' element={<Insert />} />
                <Route path='/select' element={<Select />} />

            </Routes>

        </BrowserRouter>

    );

}