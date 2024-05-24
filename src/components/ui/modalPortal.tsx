import reactDOM from "react-dom";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ModalPortal({ children }: Props) {
  // ssr일때는 처리 안해줄 것. 브라우저 환경일때만 처리해주게끔.
  if (typeof window === "undefined") return null;

  const node = document.getElementById("portal") as Element;
  return reactDOM.createPortal(children, node);
}
