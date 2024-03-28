import { User } from "@/model/user";
import React from "react";
import Avartar from "./avartar";

type Props = {
  user: User;
};

export default function SideBar({ user: { name, username, image } }: Props) {
  return (
    <>
      <div>
        {image && <Avartar image={image} />}
        <p>{username}</p>
        <p>{name}</p>
      </div>
      <p>
        About • Help • Press • API • Jobs • Privacy • Terms • Location •
        Language
      </p>
      <p>@Copyright INSTANTGRAM from METAL</p>
    </>
  );
}
