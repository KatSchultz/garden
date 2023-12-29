import { useContext } from "react";
import { signInWithGoogle, signOut } from "../../firebaseConfig";
import AuthContext from "../../context/AuthContext";

const Login = () => {
  const { user } = useContext(AuthContext);
  const handleLogin = async () => {
    await signInWithGoogle();
  };
  const handleLogout = async () => {
    await signOut();
  };

  return (
    <div>
      {user ? (
        <button onClick={handleLogout}>Sign out</button>
      ) : (
        <button onClick={handleLogin}>Sign in with Google</button>
      )}
    </div>
  );
};
export default Login;
