import { Link } from "react-router-dom"


function Principal() {
   

    return (
        <div>
            <header className="encabezado">
                <img className="logo" src="src/img/logo.png" alt="Logo" />
                <div className="botones-sesion-usuario">
                    
                    <button>Cerrar Sesion</button>
                </div>
            </header>
            <div className="separador"></div>
            <div className="principal">
                <aside className="menu-lateral">
                <button><Link to="/consultas">Consultas</Link></button>
                    <button><Link to="/reportes">Reportes</Link></button>
                    <button><Link to="/ventas">Ventas</Link></button>
                    <button><Link to="/inventario">Inventario</Link></button>                    
                    <button><Link to="/contratos">Contratos</Link></button>

                </aside>
                <section className="menu-principal">

                </section>
            </div>
        </div>
    )
}

export default Principal
