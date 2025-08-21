import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


import RootLayout from "./rootlayout/RootLayout";
import Home from "./page/Home";

const App = () => {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route index element={<Home />}></Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;


