import React, { useContext } from "react";
import { Context } from "../context/auth";
import { HomeRoute } from "./home.routes";
import { SignInRoute } from "./signIn.routes";

export function Routes() {
  const { signed } = useContext(Context);

  return signed ? <HomeRoute /> : <SignInRoute />;
}