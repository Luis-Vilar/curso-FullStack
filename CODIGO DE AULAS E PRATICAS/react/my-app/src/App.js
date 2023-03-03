import logo from "./logo.svg";
import "./App.css";

function Saluda() {
  return "Hola como estas?";
}

function Boton() {
  return <button>Click , Soy tu boton</button>;
}

function AboutPage() {
  return (
    <>
      <h1>Acerca de : </h1>
      <p>
        Hola bien venido aqui?.
        <br />
        Que quieres hacer?
      </p>
    </>
  );
}
function Article(){
  return (<article>
     Reaccionar documentos APRENDER REACCIONAR INSTALACIÓN Iniciar un nuevo
        proyecto React Si está comenzando un nuevo proyecto, le recomendamos que
        utilice una cadena de herramientas o un marco. Estas herramientas
        brindan un entorno de desarrollo cómodo, pero requieren una instalación
        local de Node.js. Aprenderás En qué se diferencian las cadenas de
        herramientas de los marcos Cómo iniciar un proyecto con una cadena de
        herramientas mínima Cómo iniciar un proyecto con un marco completo Qué
        hay dentro de las cadenas de herramientas y marcos populares Elige tu
        propia aventura React es una biblioteca que te permite organizar el
        código de la interfaz de usuario dividiéndolo en partes llamadas
        componentes. React no se ocupa del enrutamiento ni de la gestión de
        datos. Esto significa que hay varias formas de iniciar un nuevo proyecto
        de React: Comience con un archivo HTML y una etiqueta de secuencia de
        comandos. Esto no requiere la configuración de Node.js, pero ofrece
        funciones limitadas. Comience con una cadena de herramientas mínima y
        agregue más funciones a su proyecto a medida que avanza. (¡Excelente
        para aprender!) Comience con un marco obstinado que tenga
        características comunes como la obtención de datos y el enrutamiento
        incorporados. Primeros pasos con una cadena de herramientas mínima Si
        está aprendiendo React, le recomendamos Create React App. Es la forma
        más popular de probar React y crear una nueva aplicación del lado del
        cliente de una sola página. Está hecho para React pero no tiene
        opiniones sobre el enrutamiento o la obtención de datos. Primero,
        instale Node.js. Luego abra su terminal y ejecute esta línea para crear
        un proyecto: Terminal Copiar npx crear-reaccionar-aplicación
        mi-aplicación Ahora puedes ejecutar tu aplicación con: Terminal Copiar
        cd mi aplicación npm inicio Para obtener más información, consulta la
        guía oficial. Create React App no ​​maneja bases de datos o lógica de
        back-end. Puedes usarlo con cualquier backend. Cuando crea un proyecto,
        obtendrá una carpeta con HTML, CSS y JS estáticos. Debido a que Create
        React App no ​​puede aprovechar el servidor, no proporciona el mejor
        rendimiento. Si está buscando tiempos de carga más rápidos y funciones
        integradas como enrutamiento y lógica del lado del servidor, le
        recomendamos que utilice un marco en su lugar.
  </article>)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Boton />
        <AboutPage />
      </header>
      <section>
        <Article/>
       
      </section>
      <footer>
        <Saluda />
      </footer>
    </div>
  );
}

export default App;
