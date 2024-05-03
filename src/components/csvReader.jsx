"use client"
import { useState } from 'react';
import Papa from 'papaparse';
import EmotionAnalysis from './emotionAnalysis';

const CSVReader = () => {
    const [data, setData] = useState([]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            Papa.parse(file, {
                complete: (result) => {
                console.log('Parsed Data:', result.data);
                setData(result.data);
            },
            header: true
            });
        }
    };

    return (
        <>
            <input className='text-black' type="file" accept=".csv" onChange={(event) => handleFileChange(event)} />
            {/* Renderizar los datos del CSV aquí si es necesario */}
            <EmotionAnalysis data={data}/>
        </>
    );
}

export default CSVReader;