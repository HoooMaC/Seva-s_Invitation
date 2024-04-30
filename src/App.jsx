import { RouterProvider } from 'react-router-dom';
import router from './router.jsx'

import Background from './components/Background';

function App() {
  return ( 
    <>
      <Background/>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
