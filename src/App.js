
// Stylesheets
import './App.scss';
import 'normalize.css';
// Layout file
import Layout from './Layout/Layout';
// Global Context File
import { GlobalContextProvider } from './context/GlobalState';


function App() {
  return (
    /* GlobalContextProvider */
    <GlobalContextProvider>
      {/* Layout */}
      <Layout />
    </GlobalContextProvider>
  );
}

export default App;
