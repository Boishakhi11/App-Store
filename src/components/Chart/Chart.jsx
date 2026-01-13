import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const Chart = ({ratings}) => {
   //if (!Array.isArray(ratings)) return null;
   const data = [...ratings].reverse();
    return (
           <div style={{ width: "100%", height: "320px", minHeight: "320px" }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                    data={data}
                    layout="vertical"
                    margin={{ top: 30, right: 10, left: 10, bottom: 10 }}
                    >
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={80} />
                    <Tooltip />
                    <Bar dataKey="count" fill="#ff8811" barSize={30} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
    );
};

export default Chart;

 