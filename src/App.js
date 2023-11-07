import Navbar from "./components/navbar/Navbar";
import './App.css'
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";


function App() {

  const handleSearch = (searchTerm)=>{
    console.log(searchTerm)
  }

  return (<>
  <Navbar onSearch={handleSearch}/>
  <Header/>
  <Footer/>
  </>
    
  );
}

export default App;
