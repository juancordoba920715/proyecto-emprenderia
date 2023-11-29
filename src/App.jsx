import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Principal from "./assets/components/Principal"
import Contratos from "./assets/components/Contratos"
import Ventas from "./assets/components/Ventas"
import Consultas from "./assets/components/Consultas"
import Inventario from "./assets/components/Inventario"
import Reportes from "./assets/components/Reportes"
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Principal />,
    },
    {
      path: "/ventas",
      element: <Ventas />,
    },
    {
      path: "/contratos",
      element: <Contratos />,
    },
    {
      path: "/consultas",
      element: <Consultas />,
    },
    {
      path: "/inventario",
      element: <Inventario />,
    },
    {
      path: "/reportes",
      element: <Reportes />,
    }
])


return (
  <>
    <RouterProvider router={routes} />
  </>
)
}

export default App
