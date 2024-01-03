import { useContext } from "react";
import { signInWithGoogle, signOut } from "../../firebaseConfig";
import AuthContext from "../../context/AuthContext";
import { addUser } from "../../services/user";
import { User } from "../../models/user";

const Login = () => {
  const { user } = useContext(AuthContext);
  const handleLogin = async () => {
    await signInWithGoogle().then((data: Partial<User>) => {
      addUser({
        ...data,
        email: data.email || "",
        displayName: data.displayName || "",
        photoURL: data.photoURL || "",
        profileDescription: data.profileDescription || "",
        uid: data.uid || "",
        profilePhotoUrl: data.profilePhotoUrl || "",
        location: "",
      });
    });
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
