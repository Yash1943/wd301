import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const authenticated = localStorage.getItem("authenticated");
  const location = useLocation();
  if (authenticated === "true") {
    if (location.pathname === "/notfound") {
      return children;
    }
    return <>{children}</>;
  } else {
    return <Navigate to="/signin" />;
  }
}
