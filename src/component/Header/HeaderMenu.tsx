import { FC } from "react";
import Link from "next/link";
import { createStyles, Header, Container } from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import { ColorSchemeToggle } from "src/component/ColorSchemeToggle";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },
}));

/** @package */
export const HeaderMenu: FC = () => {
  const { classes } = useStyles();
  return (
    <Header height={80} className=" px-0 w-full sticky top-0 z-50">
      <Container size={3000} px={20} className={classes.header}>
        <Link href="/">
          <div className="flex hover:cursor-pointer">
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
      </Container>
    </Header>
  );
};
