import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  round: boolean;
};

export function Button({ round, children }: Props) {
  const cx = [
    round ? "w-10 h-10 rounded-full flex items-center justify-center pl-0.5" : "px-4 py-2 rounded-sm",
  ].join(" ");

  return (
    <button type="submit" className={`bg-lime-700 text-white ${cx}`}>
      {children}
    </button>
  );
}
