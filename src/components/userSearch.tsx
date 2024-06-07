"use client";
import { useState } from "react";
import useSWR from "swr";

export default function UserSearch() {
  // /api/search/${keyword}
  // 검색하는 keyword가 있다면, /api/search/bob -> 유저네임이나, 네임
  // 검색하는 keyword가 없다면, /api/search -> 전체 유저에대한 배열

  const [keyword, setKeyword] = useState("");
  const { data, isLoading, error } = useSWR(`/api/search/${keyword}`);
  console.log(data);

  return <div>UserSearch</div>;
}
