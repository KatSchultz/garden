import { ReactNode } from "react";
import { UserProfile } from "../../models/user";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  user: UserProfile | null;
  children: ReactNode;
}
const PrivateRoute = ({ user, children }: PrivateRouteProps) => {
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
