import NavBar from "../components/NavBar";
import Letter from "../assets/letter.png";
import "../components/HomePage.css";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="Title">
        <h1>Raas.com</h1>
      </div>
      <div className="web"> 
          <h1>Raas.com</h1> 
          </div>
          <div>
            <input/>
          </div>

      <section className="hero-section">
        <div>
          <img src={Letter} alt="Pic" className="image" />
        </div>
        <div className="hero-content">
        
        </div>
          <p>My name is Abdul-Rahman Sulaiman and I am an aspiring tech guy</p>
        
      </section>
    </>
  );
};

export default HomePage;
