import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ERROR_ROUTE, HOME_ROUTE } from "./constants/routes";
import { BlogPostProvider } from "./context/BlogPostContext";
import { Error, Home, PageNotFound } from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path={HOME_ROUTE}
            element={
              <BlogPostProvider>
                <Home />
              </BlogPostProvider>
            }
          />
          <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<Error />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
