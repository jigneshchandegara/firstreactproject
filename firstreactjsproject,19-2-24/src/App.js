import "./index.css";
import { data } from "./componet/data";
import Navbar from "./componet/Navbar";
import Banner from "./componet/Banner";
import Card from "./componet/Card";
import Services from "./componet/Services";
import Footer from "./componet/Footer";
import Clients from "./componet/Clients";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Clients/>
      <div className="d-flex flex-wrap justify-content-between">
        <Card Data={data} />
      </div>
      <Footer />
    </>
  );
}

export default App;
