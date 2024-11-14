import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/react18",
    element: <div>Hello world I'm in React 18 app</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
