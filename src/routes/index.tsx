import {
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import { HomePage } from "../pages";


export const AppRoutes = () => {


    return(
        <Routes>
            <Route path='/inicio' element={<HomePage/>}/>

            <Route path='*' element={<Navigate to='/inicio'/>}/>
        </Routes>
    );
}

