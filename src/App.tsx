
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppRoutes } from './routes';
import WhatsAppButton from './shared/components/WhatsAppBtn';

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes/>
      <WhatsAppButton/>
    </BrowserRouter>
  );
}


