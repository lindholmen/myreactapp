import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      {/* This is where the Home or About page will be displayed */}
      <Outlet />
    </div>
  );
}

export default Layout;
