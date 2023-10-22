import Content from './Content';
import {ThemeContext} from './ThemeContext';
import { useContext } from 'react';

function App() {

  const context = useContext(ThemeContext);

  return (
      <div className="App" style={{ padding: 50 }}>
        <button onClick={context.handleTheme}>Toggle theme</button>
        <Content/>
      </div>
  );
}

export default App;