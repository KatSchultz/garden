import { signInWithGoogle, signOut } from "./firebaseConfig";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const loginAndRedirect = async () => {
    await signInWithGoogle();
  };

  return (
    <div>
      <h3>Login</h3>
      <button onClick={loginAndRedirect}>Sign in with Google</button>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
};
export default Login;
