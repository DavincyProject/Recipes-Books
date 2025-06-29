import { BrowserRouter, Routes, Route } from "react-router";
import HomePages from "./Pages/HomePages";
import Layout from "./Layout/Layout";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <HomePages />
                </Layout>
              }
            />
          </Routes>

          {/* <Route element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route> */}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
