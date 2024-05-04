"use client"
import { useEffect, useState } from "react";

const EmotionAnalysis = ({data}) => {

    const [modelResult, setModelResult] = useState([])
    const [maxLabel, setMaxLabel] = useState("")

    useEffect(() => {

        const apiRequest = async () => {

                try {
                    data.forEach(element => {
                        fetch("https://api-inference.huggingface.co/models/finiteautomata/beto-sentiment-analysis", {
                            method: "POST",
                            headers: {
                                "Authorization": "Bearer " + "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"
                            },
                            body: JSON.stringify({
                                "text": element.text
                            }),
                        })
                        .then(resp => resp.json())
                        .then(result => {
                            console.log(result)
                            setModelResult(result)
                        })
                    });
                    // return result
                } catch (error) {
                    console.log(error)
                }
        }
        apiRequest()
    }, [data]);

    useEffect(() => {
        if(modelResult.length > 0){
            const maxObjeto = modelResult.reduce((max, item) => item.score > max.score ? item : max, modelResult[0])
            setMaxLabel(maxObjeto.label)
        }
    }, [modelResult])



    return(
        <>
            <div className="flex h-screen flex-col px-6 py-12 lg:px-8">

                <div className="flex w-full overflow-x-auto border-solid border-2 border-black">
                    <table className="table">
                        <thead>
                            <tr className="text-black text-center">
                                <th>ID</th>
                                <th>Comments</th>
                                <th>Likes</th>
                                <th>Reactions Count</th>
                                <th>Shares</th>
                                <th>Text</th>
                                <th>Model Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index} className="text-black">
                                    <th>{index}</th>
                                    <td>{item.comments}</td>
                                    <td>{item.likes}</td>
                                    <td>{item["reactions_count;;;"]}</td>
                                    <td>{item.shares}</td>
                                    <td>{item.text}</td>
                                    <td>{maxLabel}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default EmotionAnalysis;