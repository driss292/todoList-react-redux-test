import "./App.css";
import Input from "./components/Input";
import { Provider } from "react-redux";
import todoSlice from "./features/todoSlice";

function App() {
  return (
    <Provider todoSlice={todoSlice}>
      <div className="App">
        <Input />
      </div>
    </Provider>
  );
}

export default App;
