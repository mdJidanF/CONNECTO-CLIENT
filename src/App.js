import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/router';

function App() {
  return (
    <div className="bg-[#121d39] min-h-screen">
     <RouterProvider router={router}>

     </RouterProvider>
    </div>
  );
}

export default App;
