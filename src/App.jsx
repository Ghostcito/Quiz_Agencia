import "./App.css";
import Header from "./components/Header";
import Exam from "./components/Exam";

function App() {
  return (
    <>
      <Header />
      <main class="max-w-4xl mx-auto px-4 py-8">
        <Exam />
      </main>
    </>
  );
}

export default App;
