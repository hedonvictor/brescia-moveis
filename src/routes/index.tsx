import {
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";


export const AppRoutes = () => {


    return(
        <Routes>
            <Route path='/inicio' element={<p>Pagina inicial</p>}/>

            <Route path='*' element={<Navigate to='/inicio'/>}/>
        </Routes>
    );
}

