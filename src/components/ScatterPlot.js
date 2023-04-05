import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Records from '../WineData.json';

const ScatterPlot = () => {
    return (
      <ResponsiveContainer width="100%" aspect={3}>
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="Color intensity" name="Color intensity" />
          <YAxis type="number" dataKey="Hue" name="Hue" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={Records} fill="#e66" />
        </ScatterChart>
      </ResponsiveContainer>
    );
  }
export default ScatterPlot;