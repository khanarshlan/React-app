import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

//this fuction render first
function App() {
  const [data, setData] = useState([])
  const [brand, setName] = useState('')
  const [type, setType] = useState('')
  const [totalOrders, setTotalOrders] = useState('')
  const [totalOrderValue, setTotalOrderValue] = useState('')
  const [grossMarginPercentage, setGrossMarginPercentage] = useState('')


  //get api
  // useEffect(() => {
    const handleGetAll = async () => {
      const response = await axios.get(`http://localhost:3000/api/v1/brand_sales_daily`

      );
      setData(response.data);
    };
  //   getData();

  // }, []);
  const handleSubmit = () => {

    const json = JSON.stringify({

      date: new Date(),
      brand: brand,
      transactionType: type,
      totalOrders: totalOrders,
      totalOrderValue: totalOrderValue,
      grossMarginPercentage: grossMarginPercentage,

    });
    console.log(json);
    saveData(json)
  }

  //post api
  const saveData = async (json) => {
    const response = await axios.post(`http://localhost:3000/api/v1/brand_sales_daily`, json,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }

    );
    if (response) {
      alert('Data Submit Successfully')
      setName('')
      setType('')
      setTotalOrders('')
      setTotalOrderValue('')
      setGrossMarginPercentage('')
    }

  };
  // console.log(data);
  let s = 1;
  return (

    <div className="App">
      <div className='contanier'>
        <div className='row'>
          <div className='col-12'>

            {/* <form> */}
            <h1> Add brand

            </h1>
            <div className="row">
              <div className="col">
                <label>Brand name</label>
                <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" value={brand} placeholder="Enter brand" name="email" />

              </div>
              <div className="col">
                <label> Transaction Type</label>
                <input type="text" onChange={(e) => setType(e.target.value)} className="form-control" value={type} placeholder="Enter transactionType" name="pswd" />
              </div>
              <div className="col">
                <label>Total Orders</label>
                <input type="number" onChange={(e) => setTotalOrders(e.target.value)} className="form-control" value={totalOrders} placeholder="Enter total orders" name="totalOrders" />
              </div>
              <div className="col">
                <label>Total Order Value</label>
                <input type="number" onChange={(e) => setTotalOrderValue(e.target.value)} className="form-control" value={totalOrderValue} placeholder="Enter total order value" name="totalOrderValue" />
              </div>

              <div className="col">
                <label>Gross Margin Percentage</label>
                <input type="number" value={grossMarginPercentage} onChange={(e) => setGrossMarginPercentage(e.target.value)} className="form-control" placeholder="Enter gross margin percentage" name="grossMarginPercentage" />
              </div>



            </div>
            <div className='row text-end mt-4'>
              <div>
                <button className='btn btn-success' onClick={() => handleSubmit()}>Submit</button>
              </div>
              <div className='mt-4'>
                <button className='btn btn-success' onClick={() => handleGetAll()}>GetAll</button>
              </div>
            </div>
            {/* </form> */}

          </div>
          <div className='col-12'>
            {data.length !==0 &&(

            <table class="table" style={{background:"#ccc"}}>
              <thead style={{background:"#fff"}}>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">brand</th>
                  <th scope="col">date</th>
                  <th scope="col">transactionType</th>
                  <th scope="col">totalOrders</th>
                  <th scope="col">totalOrderValue</th>
                  <th scope="col">grossMarginPercentage</th>
                  <th scope="col">createdAt</th>
                  <th scope="col">updatedAt</th>
                  <th scope="col">__v</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr>
                    <th scope="row">{s++}</th>
                    <td scope="col">{row.brand}</td>
                    <td scope="col">{row.date}</td>
                    <td scope="col">{row.transactionType}</td>
                    <td scope="col">{row.totalOrders}</td>
                    <td scope="col">{row.totalOrderValue}</td>
                    <td scope="col">{row.grossMarginPercentage}</td>
                    <td scope="col">{row.createdAt}</td>
                    <td scope="col">{row.updatedAt}</td>
                    <td scope="col">{row.__v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
