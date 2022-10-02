import { FC } from "react";
import Link from "next/link";
import { createStyles, Container, Group, ActionIcon } from "@mantine/core";
import { IconBrandTwitter, IconBrandGithub } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    width: "100%",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },

  a: {
    color: theme.colorScheme === "dark" ? "#DEE2E6" : "#343A40",
  },
}));

/** @package */
export const Footer: FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Link href="/profile">
          <a href="replace" className={classes.a}>
            Profile
          </a>
        </Link>
        <p>&copy;2022 kino's blog</p>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon
            size="xl"
            component="a"
            href="https://github.com/narutiga"
          >
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="xl"
            component="a"
            href="https://twitter.com/@kin0kin0kino"
          >
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
};
