// import React from 'react'
// // import { ReactComponent as Mama } from '../assets/images/logo.svg';

// const Halaman = () => {
//     return (
//         <>
//             {/* <div className='w-screen h-screen flex flex-row'>
//                 <div className='w-2/3 bg-backgroundColor'></div>

//                 <div className='w-1/3 bg-primary'></div>

//             </div> */}

//         </>
//     )
// }

// export default Halaman


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BarangList() {
    const [barangList, setBarangList] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const headers = { Authorization: `Bearer ${token}` };
        axios.get(`http://localhost:4000/recipes?perPage=${6}&page=${1}`, { headers })
            .then(response => setBarangList(response.data.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Daftar Barang:</h1>
            <ul>
                {barangList.map(barang => (
                    <li key={barang.id}>
                        <h2>{barang.title}</h2>
                        <p>Harga: {barang.harga}</p>
                        <p>Stok: {barang.stok}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BarangList;
