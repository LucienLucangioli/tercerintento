import './App.css';
import Login from './components/login';
import Navbar from './components/navbar';
function App() {
    const navbar_items = ['Nosotres', 'Ayuda trámites', 'Leyes a mano']
    return ( 
        <>
    <div className = "App" >
            <Navbar 
            navbar_items= {navbar_items} 
            nombre_logo= {"TransData"}
            search_bar= {true}
            /> 
            <Login/>
    </div>
    </>
    );
}

export default App;