import { ReactElement } from "react";

type Props<T> = {
  data: T[];
  renderItem: (item: T) => ReactElement;
};

export function List<T>({ data, renderItem }: Props<T>) {
  return (
    <ul className="flex flex-col flex-1">
      {data.map(renderItem)}
    </ul>
  );
}
