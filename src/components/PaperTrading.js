import React,{useState} from "react";

function PaperTrading() {
  document.body.style.backgroundColor = "#F5F5F5";
  const [paperTrades, setPaperTrades] = useState([
    {
      time: "12:44",
      stockName: "TCS",
      stockCost: "3500",
      stockYield: "289",
    },
  ]);
  const [watchList, setWatchList] = useState([
    {
      stockName: "TCS",
      stockPrice: "3400",
    },
    {
      stockName: "ADANI WILMAR",
      stockPrice: "800",
    },
  ]);

  const addStock = (event) => {
    var ds = event.target.value;
    console.log(ds);
    var trade = {
      stockName: ds.split(":")[0],
      stockCost: ds.split(":")[1],
      time: "12:00",
      stockYield: "13",
    };
    console.log(trade);
    var ls  =[]
    paperTrades.map((elem)=>{
     ls.push(elem)
    })
    ls.push(trade);
    setPaperTrades(ls);
  };
  return (
    <>
      <div className="d-flex " style={{height:'40rem'}}>
        <div
          className="p-2 flex-fill mx-3 my-4"
          style={{
            backgroundColor: "white",
            width: "35%",
            borderRadius: "30px",
            height:'100%',
            overflow:'auto'
          }}
        >
          <h3 style={{ textAlign: "center" }}>Terminal</h3>
          <hr color="black" />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">name</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {watchList.map((elem) => {
                return (
                  <tr>
                    <td> {elem.stockName} </td>
                    <td> {elem.stockPrice}</td>
                    <td>
                      <button
                        className="btn btn-success"
                        value={elem.stockName + ":" + elem.stockPrice}
                        onClick={addStock}
                      >
                        BUY
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div
          className="p-2 flex-fill container mx-3 my-4"
          style={{
            backgroundColor: "white",
            width: "65%",
            borderRadius: "30px",
            height:'100%',
            overflow:'auto'
          }}
        >
          <h3 style={{ textAlign: "center" }}>Dashboard</h3>

          <table className="table table-striped my-3">
            <thead>
              <tr>
                <th scope="col">Time</th>
                <th scope="col">Stock </th>
                <th scope="col">Buy Price</th>
                <th scope="col">Profit</th>
              </tr>
            </thead>
            <tbody>
              {paperTrades.map((elem) => {
                return (
                  <tr>
                    <th scope="row">{elem.time}</th>
                    <td>{elem.stockName}</td>
                    <td>{elem.stockCost}</td>
                    <td style={{
                         color:(elem.stockYield>0)?'green':'red'
                    }}>{elem.stockYield} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default PaperTrading;
