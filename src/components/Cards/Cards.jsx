import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from 'recharts';
import "./Cards.css"

const Cards = () => {
  const [cryptoData, setCryptoData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,ripple&vs_currencies=usd,gbp,eur'
        );
        const data = await response.json();
        console.log(data)
       
        setCryptoData(data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderDonutChart = (currency) => {
    let data1=cryptoData[currency]
    let dataList=["usd","gbp","eur"]
    const data2 = dataList.map((crypto) =>{
    return({
      name:crypto,
       value:data1[crypto],
    })
  })
    
  
    return (

      <div key={currency} className='card-container' >
       <h3>{currency.toUpperCase()}</h3>
       <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data2}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              
            >
              {data2.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={[ '#00C49F', '#FFBB28', '#FF8042'][index % 4]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false}/>
          </PieChart>
        </ResponsiveContainer>
      
     </div>
    );
  };

  return (
    <div className='cards'>
      {loading?<h1>loading...</h1>: ['bitcoin', 'ethereum', 'litecoin','ripple'].map((currency) => renderDonutChart(currency))}
    
     </div>
  );
};

export default Cards;
