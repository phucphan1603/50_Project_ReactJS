import { Menu } from "./router/MainMenu";
import { Root } from "./router/root";

function App() {
  return (
    <div className="layout">
      <Menu />
      <main>
        <Root />
      </main>
    </div>
  );
}

export default App;
