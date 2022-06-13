import Stories from "./Components/Stories";
import Search from "./Components/Search";
import Pagination from "./Components/Pagination";
import "../src/App.css";

function App() {
  return (
    <>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
}

export default App;
