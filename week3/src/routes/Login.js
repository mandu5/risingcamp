import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isLoggedInAtom } from "../atoms";
import { authService, firebaseInstance } from "../myBase";

const Main = styled.div`
  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.5);
    #google {
      font-size: 20px;
      font-weight: 100;
      background-color: #ea4335;
      color: #333;
      padding: 5px 10px;
      border: none;
      border-radius: 10px;
      &:hover {
        background: rgb(242, 130, 130);
        color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 5px rgb(242, 130, 130), 0 0 15px rgb(242, 130, 130),
          0 0 20px rgb(242, 130, 130), 0 0 50px rgb(242, 130, 130);
        cursor: pointer;
      }
    }
  }
  .title {
    color: #8785ef;
  }
`;

function Login() {
  const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    }
    await authService.signInWithPopup(provider);
    setIsLoggedIn(true);
  };
  return (
    <>
      <Main>
        <div className="login-box">
          <h2 className="title">Login</h2>
          <button id="google" onClick={onSocialClick} name="google">
            Continue with Google
          </button>
        </div>
      </Main>
    </>
  );
}

export default Login;
