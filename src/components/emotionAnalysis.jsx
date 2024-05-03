"use client"
import { useEffect } from "react";

const EmotionAnalysis = ({data}) => {
    return(
        <>
            <div className="flex h-screen flex-col justify-center items-center px-6 py-12 lg:px-8">

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