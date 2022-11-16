import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Let's Find The Median Prime Number Or Numbers From 0 to <i>The Number Of Your Choice</i></h1>

      <form action="/post" method="post" className="form">
        <input placeholder="Enter your number of choice" type="number" name="num"  min="3" required />
        <button type="submit">Find Median Prime Numbers</button>
      </form>
    </div>
  );
}

export default App;
