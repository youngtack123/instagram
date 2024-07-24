import UserPosts from "@/components/userPosts";
import UserProfile from "@/components/userProfile";
import { getUserForProfile } from "@/service/user";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    username: string;
  };
};

export default async function UserPage({ params: { username } }: Props) {
  const user = await getUserForProfile(username);

  if (!user) {
    notFound();
  }
  return (
    <>
      <UserProfile user={user} />
      <UserPosts user={user} />
    </>
  );
}
