import '@/css/App.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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
