
import './App.css';

function App() {
  return (
    <div>
      <h3>
        My App Works fine just get it done with!!!!!!!
      </h3>
      <ButtonIcon/>
      <ButtonIconTwo/>
    </div>
  );
}

export default App;


function ButtonIcon(){
  return (
    <>
    <button onClick={alert("Sajeel bhai rocks!!!!!")}>
      click me bhai
    </button>
    </>
  );
}

function ButtonIconTwo(){
  return (
    <>
    <button onClick={alert("Sajeel bhai rocks!!!!!")}>
      click me bhai
    </button>
    </>
  );
}