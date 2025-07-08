import { memo } from "react";

type Person = {
  name: string;
};

const ExpensiveItem = memo(
  ({ index, person }: { index: number; person: Person }) => {
    console.log("render");

    return (
      <div
        className="w-[50px] h-[50px] flex justify-center items-center text-xs"
        style={{ background: index % 2 ? "#ccc" : "#eee" }}
      >
        {person.name}
      </div>
    );
  },
  (prevProp, nextProp) => {
    if (prevProp.person.name !== nextProp.person.name) return false;

    return true;
  }
);

export default ExpensiveItem;
