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
            <div className='flex justify-center mt-4 p-2'>

                <input className='text-black' type="file" accept=".csv" onChange={(event) => handleFileChange(event)} />
            </div>
            <EmotionAnalysis data={data}/>
        </>
    );
}

export default CSVReader;