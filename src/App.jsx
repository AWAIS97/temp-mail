import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import { Navbar, Home, Inbox, BlogList,Blog, About, Footer } from "./components";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/inbox",
    element: <Inbox />,
  },
  {
    path: "/blog",
    element: <BlogList />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ margin: "6rem" }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/inbox" element={<Inbox />} />
          <Route exact path="/blog" element={<BlogList />} />
          <Route exact path="/blog/:id" element={<Blog />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />

      {/* <RouterProvider router={router} /> */}
    </BrowserRouter>
  );
}

export default App;
