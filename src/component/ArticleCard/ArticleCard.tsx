import {
  createStyles,
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
} from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

type Props = {
  articleCards: { id: string; title: string; image: string; date: string }[];
};

/** @package */
export const ArticleCard = (props: Props) => {
  const { classes } = useStyles();

  const cards = props.articleCards.map((card: any) => (
    <Link href={`/blog/${card.id}`} key={card.title}>
      <Card p="md" radius="md" component="a" href="#" className={classes.card}>
        <AspectRatio ratio={1920 / 1080}>
          <Image src={card.image} />
        </AspectRatio>
        <Text className={classes.title} mt={5}>
          {card.title}
        </Text>
        <Text
          color="dimmed"
          size="xs"
          transform="uppercase"
          weight={700}
          mt="md"
        >
          {card.date}
        </Text>
      </Card>
    </Link>
  ));

  return (
    <Container py="xl">
      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: "sm", cols: 1 },
          { maxWidth: "lg", cols: 2 },
        ]}
      >
        {cards}
      </SimpleGrid>
    </Container>
  );
};
