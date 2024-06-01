import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { AnimatePresence } from "framer-motion";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
