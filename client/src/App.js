import { SnackbarProvider } from "notistack";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import Songs from "./pages/Songs";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <SnackbarProvider
      dense={true}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/songs" element={<Songs />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Router>
        </Provider>
      </ThemeProvider>
    </SnackbarProvider>
  );
}

export default App;
