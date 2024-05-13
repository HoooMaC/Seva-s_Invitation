import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence wait>
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App;
