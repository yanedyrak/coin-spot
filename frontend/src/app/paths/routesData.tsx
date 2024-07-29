import { CoinPage } from "../../pages/CoinPage";
import { LoginPage } from "../../pages/LoginPage";
import { MainPage } from "../../pages/MainPage";
import { RegisterPage } from "../../pages/RegisterPage";

export const routesData = [
  {
    name: "Home",
    path: "/",
    component: <MainPage />,
  },
  {
    name: "Login",
    path: "/login",
    component: <LoginPage />,
  },
  {
    name: "Register",
    path: "/register",
    component: <RegisterPage />,
  },
  {
    name: "CoinPage",
    path: "/coin/:id",
    component: <CoinPage />,
  },
];
