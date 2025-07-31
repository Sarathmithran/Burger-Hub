import { useLocation } from "react-router-dom";

const useActivePage = () => {
  const { pathname } = useLocation();

  // valid routes
  const pages = ["/menu", "/contact", "/about", "/cart", '/profile', "/login", "/register"];

  // Return the matched path or default to "/"
  const activePage = pages.find(page => pathname.startsWith(page)) || "/";

  return activePage;
};

export default useActivePage;