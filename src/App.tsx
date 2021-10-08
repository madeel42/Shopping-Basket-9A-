import './App.css';
import { Main } from './Component/Main/Main'
import { Provider } from 'react-redux'
import { store } from './Store/store'
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <Provider store={store}>
      <div>
        <Main />
        <ToastContainer />
      </div>
    </Provider>
  );
}

export default App;
