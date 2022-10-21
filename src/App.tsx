import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Colors from './Components/Colors';

function App() {
  return (
    <div className="App">
      <Colors />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
