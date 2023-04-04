import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Records from '../WineData.json';
const BarGraph = () => {
    return (
        <ResponsiveContainer width="100%" aspect={3}>
            <BarChart
                width={500}
                height={300}
                data={Records}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis  dataKey="Alcohol"/>
                <YAxis dataKey="Malic Acid" />
                <Tooltip />
                <Legend />
                <Bar dataKey="Malic Acid" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default BarGraph;
