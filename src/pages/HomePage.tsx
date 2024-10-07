import { logout, selectedUser } from "../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux/hooks";

const HomePage = () => {
  const dispatch = useAppDispatch();

  const { user, isAuthenticaded } = useAppSelector(selectedUser);

  const logoutHandler = () => {
    dispatch(logout());
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "lightgray",
    cursor: "pointer",
    border: "1px solid black",
    borderRadius: "5px",
    margin: "5px",
    padding: "5px",
    textAlign: "center",
    width: "100px",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>HomePage</h2>

      {isAuthenticaded && user ? (
        <>
          <h5 style={{ color: "gray" }}>
            you're succesfully signed in your email is:
          </h5>
          <h3 style={{ color: "red" }}>{user?.email}</h3>

          <a onClick={logoutHandler} style={buttonStyle} href="/signin">
            Logout
          </a>
        </>
      ) : (
        <>
          <h3>to signin or register</h3>
          <a onClick={logoutHandler} style={buttonStyle} href="/signin">
            sign in
          </a>
          <a onClick={logoutHandler} style={buttonStyle} href="/register">
            register
          </a>
        </>
      )}
    </div>
  );
};

export default HomePage;
