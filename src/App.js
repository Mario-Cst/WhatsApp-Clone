import "./App.css";
import Chat from "./Components/Chat/Chat";
import Sidebar from "./Components/SideBar/Sidebar";

function App() {
  return (
    <div className="App">
      <h1>WhatsApp</h1>
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
