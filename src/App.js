import { useState, useEffect } from "react";
import data from "./data";
import Articolo from "./Articolo";

//Funzione che se presente 'Theme' nel localStorage
// returna il suo valore o di default return 'light-mode'
const getFromLocalStorage = () => {
  if (localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  } else {
    return 'light-mode';
  }
};


function App() {
  const [theme, setTheme] = useState(getFromLocalStorage());

  // Mi serve per cambiare il tema  e salvare il valore nel localStorage usando il ternario 
  const changeTheme = () => {
    theme === "light-mode" ? setTheme("dark-mode") : setTheme("light-mode");
  };



  useEffect(() => {
    //Attacco classe al html tag
    document.documentElement.className = theme;

    //inserisco valore di theme nel localStorage ogni volta viene mutato il suo state
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <section className="section-center">
      <div className="container">
        <h2 className="text-danger">DARK MODE ANT</h2>

        <button className="btn" onClick={changeTheme}>
          Cambia
        </button>

        <section className="article-section">
          {data.map((el) => (
            <Articolo key={el.id} {...el} />
          ))}
        </section>

      </div>
    </section>
  );
}

export default App;
