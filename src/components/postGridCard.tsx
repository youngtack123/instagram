import { SimplePost } from "@/model/post";
import Image from "next/image";
import { useState } from "react";
import ModalPortal from "./ui/modalPortal";
import PostModal from "./postModal";
import PostDetail from "./postDetail";

type Props = {
  post: SimplePost;
  priority: boolean;
};

export default function PostGridCard({ post, priority = false }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const { image, username } = post;

  return (
    <div>
      <Image
        src={image}
        alt={`photo by ${username}`}
        fill
        sizes="650px"
        priority={priority}
      />

      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </ModalPortal>
      )}
    </div>
  );
}
