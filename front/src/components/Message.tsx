export function Message({ text, isMine }) {
  const cx = [
    isMine ? "self-end" : "self-start",
    isMine ? "bg-green-200" : "bg-blue-200",
  ].join(" ");

  return <li className={`px-8 py-4 mx-8 my-4 text-gray-900 rounded-lg ${cx}`}>{text}</li>;
}
