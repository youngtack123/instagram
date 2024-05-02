"use client";

import { DetailUser } from "@/model/user";
import Link from "next/link";
import { PropagateLoader } from "react-spinners";
import useSWR from "swr";
import Avartar from "./avartar";

export default function FollowingBar() {
  const { data, isLoading: loading, error } = useSWR<DetailUser>("/api/me");
  const users = data?.following;

  return (
    <section className="w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto">
      {loading ? (
        <PropagateLoader size={8} color="red" />
      ) : (
        (!users || users.length === 0) && <p>{`You don't have following`}</p>
      )}
      {users && users.length > 0 && (
        <div>
          <ul className="w-full flex gap-2">
            {users.map(({ image, username }) => (
              <li key={username}>
                <Link
                  className="flex flex-col items-center w-20"
                  href={`/user/${username}`}
                >
                  <Avartar image={image} highlight />
                  <p className="w-full text-sm text-center text-ellipsis overflow-hidden">
                    {username}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
