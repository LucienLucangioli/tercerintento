import './App.css';
import Login from './components/login';
import Navbar from './components/Navbar/navbar';
function App() {
    const navbar_items = ['Nosotres', 'Ayuda trámites', 'Leyes a mano']
    const dropdown_items = ['Cupo Trans', 'Contratatrans', 'Emprendimientos']
    return ( 
    <div className = "App" >
            <Navbar 
            navbar_items= {navbar_items} 
            nombre_logo= {"TransData"}
            search_bar= {true}
            dropdown= {true}
            dropdown_name = {'Trabajo'}
            dropdown_items = {dropdown_items}
            /> 
            <Login/>
    </div>
    );
}

export default App;