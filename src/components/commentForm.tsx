import SmileIcon from "./ui/icons/SmileIcon";

export default function CommentForm() {
  return (
    <form className="flex items-center px-3 border-t border-neutral-300">
      <SmileIcon />
      <input
        className="w-full ml-2 border-none outline-none p-3"
        type="text"
        placeholder="Add a comment..."
      />
      <button className="font-bold text-sky-500 ml-2">Post</button>
    </form>
  );
}
