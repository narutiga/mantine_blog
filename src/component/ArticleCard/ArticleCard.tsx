import {
  createStyles,
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
  Group,
  Badge,
} from "@mantine/core";
import dayjs from "dayjs";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },
}));

type Props = {
  articleCards: {
    id: string;
    title: string;
    image: string;
    date: string;
    category: string;
  }[];
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
        <Group position="apart">
          <Text
            color="dimmed"
            size="sm"
            weight={700}
            mt="md"
            className="my-auto"
          >
            <time dateTime={card.date}>
              {dayjs(card.date).format("YYYY年MM月DD日")}
            </time>
          </Text>
          <Badge color="red">{card.category}</Badge>
        </Group>
        <Text className="mt-3 text-lg font-semibold">{card.title}</Text>
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
