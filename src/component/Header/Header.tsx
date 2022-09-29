import { MantineLogo } from "@mantine/ds";
import { ColorSchemeToggle } from "src/component/ColorSchemeToggle";

/** @package */
export const Header = () => {
  return (
    <header className="w-full">
      <div className="px-4 flex justify-between">
        <div className="flex">
          <MantineLogo type="mark" color="red" size={50} className="my-auto" />
          <h1 className="ml-4 my-auto font-medium text-2xl">
            はじめてのMantine
          </h1>
        </div>
        <ColorSchemeToggle />
      </div>
    </header>
  );
};
