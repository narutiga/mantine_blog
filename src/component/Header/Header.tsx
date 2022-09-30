import { MantineLogo } from "@mantine/ds";
import Link from "next/link";
import { ColorSchemeToggle } from "src/component/ColorSchemeToggle";

/** @package */
export const Header = () => {
  return (
    <header className="w-full h-20 sticky top-0 z-50">
      <div className="px-8 flex justify-between">
        <Link href="/">
          <div className="flex">
            <MantineLogo
              type="mark"
              color="red"
              size={40}
              className="my-auto"
            />
            <h1 className="ml-2 my-auto font-semibold text-2xl">
              はじめてのMantine
            </h1>
          </div>
        </Link>
        <ColorSchemeToggle />
      </div>
    </header>
  );
};
