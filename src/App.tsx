import "./App.css";
import { Modals } from "./components/containers/modals";
import RoutesSwitches from "./routes/Routes";

function App() {
  return (
    <div>
      {/* MODALS */}
      <Modals />
      <RoutesSwitches />
    </div>
  );
}

export default App;
