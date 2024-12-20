import "./index.css";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 2, description: "Charger", quantity: 1, packed: false },
  { id: 2, description: "torch", quantity: 11, packed: true },
  { id: 2, description: "Snacks", quantity: 10, packed: false },

];
 function App() {
  return (
   <div className="app">
    <Header/>
    <Form/>
    <PackingList/>
    <Footer/>

   </div>
  );
}

function Header(){
  return(
    <div>
      <h1>🌴🌴Travel List🌴🌴</h1>
    </div>
  )
}
function Form(){
  let option =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
return(
  <div className="add-form">
  What  You need for your trip?
  <select>
    {/* <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4
    </option> */}
    {/* {Array.from({length:20},(_, i)=>i+1).map((num)=>(<option value={num}>{num}</option>))} */}
{
  option.map((num)=>( 
    <option value={num}>{num}</option>
  ))
}
  </select>
  <input type="text" placeholder="Item..."/>
  <button>ADD</button>
  </div>
)
}
function PackingList(){

  return(
    <div className="list">
     <ul>
      {initialItems.map((item)=>(<li>

      <span style={item.packed?{textDecoration:'line-through'}:{}}>{item.quantity}{item.description}</span>
      <button>❌</button></li>))}
     </ul>
    </div>
  )
}
function Footer(){
return(
  <div className="stats">
   You have X item in your list.
  </div>
)
}


export default App;
