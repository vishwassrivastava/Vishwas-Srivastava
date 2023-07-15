
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Section1 from './components/Section1/Section1';

import { MantineProvider } from '@mantine/core';

function App() {
  return (
   <MantineProvider withGlobalStyles withNormalizeCSS>
    <div className="App">
     <Navbar/>
     <Section1/>
   </div>
   </MantineProvider>
  );
}

export default App;
