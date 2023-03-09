    #-------------------------------------------------------NOTAS------------------------------------------------#
    #-react consigue alterar solo un elemento en el virtual dom ganando performance
    en comparacion a html5 que necesariamente debe renderizar toda la pagina.
    #- no react solo sera recargada la pagina total cuando explicitamente lo deseemos,
    ( evitando el prevent-default)
    #-  react travaja con virtual dom que es una copia del DOM.
    #-  es decir, si se desea modificar un elemento en el DOM, se debe copiar el
    contenido del DOM en el virtual dom y luego modificarlo.
    #-------------------------------------------------------------------------------------------------------------#
    #------------------------------------REACT pluguins, ETC------------------------------------------------------#

    * Simple React Snippets
    * No menu Emmet: Include Languages clique em add item:
                                                            javascript      javascriptreact
                                                            HTML            vue-html
    ***************creadores de proyectos react mas utilizados***********************************
    *CRA : create-react-app
    *Vite: npm create vite@latest    ==> posibilidad de crear otros tipos de app, mejor perfomance.

    #-------------------------------------------------------------------------------------------------------------#
    #-------------------------------------------comenzando con vite-----------------------------------------------#
      npm create vite@latest
      cd vite-project
      npm install
      npm run dev
    #-------------------------------------------------------------------------------------------------------------#

    #-----------------------------------------Ejemplo de compónente react-----------------------------------------#

function Componente(){
return(

<div>

        <h1></h1>

    </div>

)

}
export default Componente;
