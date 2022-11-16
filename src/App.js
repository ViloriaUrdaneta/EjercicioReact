import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact_list';
import Ejemplo1 from './hooks/ejemplo1';
import Ejemplo2 from './hooks/ejemplo2';
import MiComponenteConContexto from './hooks/ejemplo3';
import Greetingstyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';


function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />*/}
        {/*Componente propio Greeting.jsx*/}
        {/*<Greeting name="Miguel"></Greeting>*/}
        {/*Componente de ejemplo funcional*/}
        {/*<GreetingF name="Miguel"></GreetingF>*/}
        {/*Componente de listado de tareas*/}
        {/*<ContactListComponent></ContactListComponent>*/}
        {/**Ejemplo de uso de hooks */}
        {/*<Ejemplo1></Ejemplo1>*/}
        {/*<Ejemplo2></Ejemplo2>*/}
        {/*<MiComponenteConContexto></MiComponenteConContexto>*/}
        {/*<Greetingstyled name="Miguel"></Greetingstyled>*/}
      {/*</header>*/}
        {/*<Father></Father>*/}
        
        {/**Ejemplo de renderizado condicional */}
        {/*<OptionalRender></OptionalRender>*/}

        {/**Ejemplo de uso de Formik y yup */}
        {/*<LoginFormik></LoginFormik>*/}

        <RegisterFormik></RegisterFormik>
        

        {/*Componente de listado de tareas - PROYECTO FINAL*/}
        {/*<TaskListComponent></TaskListComponent>*/}
    </div>
  );
}

export default App;
