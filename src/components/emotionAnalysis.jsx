"use client"
import { useEffect } from "react";

const EmotionAnalysis = ({data}) => {
    return(
        data.map((item, index) => (
            <div key={index}>
                <h1> Hola mundo: {item.text}</h1>
            </div>

        ))
    )
}

export default EmotionAnalysis;