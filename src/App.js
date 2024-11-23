import './style/global.css';
import AppRouter from './routes/AppRouter';

//Uso del useContext , para manejar el estado global de los componentes 
import { ViewsProvider } from './context/ViewsContext'; 

function App() {
  return (
    <>
      <ViewsProvider>
        <AppRouter />
      </ViewsProvider>
    </>
  );
}

export default App;
