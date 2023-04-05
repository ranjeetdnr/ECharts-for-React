import React, { PureComponent, useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Records from '../WineData.json';
const BarGraph = () => {
    const [data, setData] = useState([])
    const avgData = () => { const finalData = [];
         for (let i = 1; i <= 3; i++) {
             const filteredRecords = Records.filter((item) => item.Alcohol === i); 
             const sum = filteredRecords.reduce((pre, cur) => pre + cur.MalicAcid, 0); 
             const avg = sum / filteredRecords.length; finalData.push({ Alcohol: i, avg }); 
            } 
            return finalData; 
        };
        
    useEffect(()=>{
       const data1 =  avgData()
       setData(data1)
    },[])
    return (
        <ResponsiveContainer width="100%" aspect={3}>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis  dataKey="Alcohol"/>
                <YAxis dataKey="avg" />
                <Tooltip />
                <Legend />
                <Bar dataKey="avg" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default BarGraph;
