import "./scss/App.scss";
import Navbar from "./comps/Navbar";
import Main from "./routes/Main";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Main />
      </main>
    </>
  );
}

export default App;
