import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";




function App() {
  return (
    <BrowserRouter>
    <div>
     <NavBar />
     <Routes>
      <Route path={"/"} element={<ItemListContainer />} />
      <Route path={"/category/:id"} element={<ItemListContainer />} />
      <Route path={"/item/:id"} element={<ItemDetailContainer />} />
     </Routes>
     
     
    </div>
    </BrowserRouter>
  );
}

export default App;
