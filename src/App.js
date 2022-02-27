import "./App.css";
import data from "./data";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const cards = data.map(item => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div className="App">
      <Header />
      <section>{cards}</section>
    </div>
  );
}

export default App;
