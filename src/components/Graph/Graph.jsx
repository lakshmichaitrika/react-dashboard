
import { useEffect,useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "./Graph.css"

const Graph=() =>{
  let [data, setData] = useState([]);
  useEffect(() => {


    fetchData();
  }, []);
  const fetchData = () => {
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((res) => res.json())
      .then(json=>{
        console.log(json.data)
        setData(json.data)
      })
      
    
  };
  return (
    <div className='graph-container'>
      <h2 className='graph-heading'> Population Data</h2>
      <ResponsiveContainer width="100%" height={200}>
      <LineChart
        data={data}
        margin={{
          top: 15,
          right: 30,
          left: 50,
          bottom: 5,
        }}
      >

        <CartesianGrid  horizontal="true" vertical="" stroke="#243240"/>
        <XAxis dataKey="ID Year" tick={{fill:"#fff"}} interval={1}/>
        <YAxis tick={{fill:"#fff"}} domain={[300000000,"auto"]} interval={1} />
        <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false}/>
        <Line type="monotone" dataKey="Population" stroke="rgb(166, 237, 58)" strokeWidth="5" dot={{fill:"rgb(154, 226, 47)",stroke:"#8884d8",strokeWidth: 2,r:5}} activeDot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 5,r:10}} />
       
      </LineChart>
    </ResponsiveContainer>
  </div>
  );
}

export default Graph