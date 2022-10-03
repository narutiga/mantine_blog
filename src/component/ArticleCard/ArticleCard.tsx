import { FC } from "react";
import Link from "next/link";
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
import { Blog } from "src/pages_component/index";
import dayjs from "dayjs";

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
  articles: Blog[];
};

/** @package */
export const ArticleCard: FC<Props> = (props) => {
  const { classes } = useStyles();

  const cards = props.articles.map((article) => (
    <Link href={`/blog/${article.id}`} key={article.title}>
      <Card p="md" radius="md" component="a" href="#" className={classes.card}>
        <AspectRatio ratio={1920 / 1080}>
          <Image src={article.eyecatch.url} />
        </AspectRatio>
        <Group position="apart">
          <Text
            color="dimmed"
            size="sm"
            weight={700}
            mt="md"
            className="my-auto"
          >
            <time dateTime={article.publishedAt}>
              {dayjs(article.publishedAt).format("YYYY年MM月DD日")}
            </time>
          </Text>
          <Badge color="red">{article.category.name}</Badge>
        </Group>
        <Text className="mt-3 text-lg font-semibold">{article.title}</Text>
      </Card>
    </Link>
  ));

  return (
    <Container py="xl" className="w-full">
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
