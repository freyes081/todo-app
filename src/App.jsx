import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import { notes } from "../data/note";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      {notes.map((noteItem) => (
        <Note
          key={noteItem.title}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
