import '@/css/App.css';

import { RouterProvider } from 'react-router-dom';
import Recoil from 'recoil';

import router from '@/pages/router';

function App() {
  return (
    <Recoil.RecoilRoot>
      <RouterProvider router={router} />
    </Recoil.RecoilRoot>
  );
}

export default App;
