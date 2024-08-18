import { SearchUser } from "@/model/user";
import Link from "next/link";
import React from "react";
import Avartar from "./Avartar";

type Props = {
  user: SearchUser;
};

export default function UserCard({
  user: { name, username, image, following, followers },
}: Props) {
  return (
    <Link
      className="flex items-center w-full rounded-sm border border-neutral-300 mb-2 p-4 bg-white hover:bg-neutral-50"
      href={`/user/${username}`}
    >
      <Avartar image={image} />
      <div className="text-neutral-500 ml-4">
        <p className="text-black font-bold leading-4">{username}</p>
        <p>{name}</p>
        <p className="text-sm leading-4">{`${followers} followers ${following} following`}</p>
      </div>
    </Link>
  );
}
