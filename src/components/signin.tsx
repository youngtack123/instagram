"use client";
import { ClientSafeProvider, signIn } from "next-auth/react";
import ColorButton from "./ui/colorButton";

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

function Signin({ providers, callbackUrl }: Props) {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <ColorButton
          key={id}
          text={`Sign In with ${name}`}
          _onClick={() => signIn(id, { callbackUrl })}
          size="big"
        />
      ))}
    </>
  );
}

export default Signin;
