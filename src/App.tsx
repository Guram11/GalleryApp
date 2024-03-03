import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./router";

function App() {
  return <RouterProvider router={createBrowserRouter(routes)}></RouterProvider>;
}

export default App;
