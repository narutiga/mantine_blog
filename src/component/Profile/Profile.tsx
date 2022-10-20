import {
  createStyles,
  Title,
  SimpleGrid,
  Text,
  ThemeIcon,
  Grid,
  Col,
} from "@mantine/core";
import {
  IconZodiacGemini,
  IconSeeding,
  IconDeviceGamepad,
  IconFlame,
} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
    fontFamily: "monospace",
  },

  title: {
    fontFamily: "monospace",
    fontSize: 36,
    fontWeight: 800,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === "dark" ? "#DEE2E6" : "#343A40",
  },

  text: {
    color: theme.colorScheme === "dark" ? "#DEE2E6" : "#343A40",
  },
}));

const features = [
  {
    icon: IconZodiacGemini,
    title: "Basic Infomation",
    description:
      "1983年生まれ。石川県出身、石川県在住です。仕事でエクセル関数や条件付き書式を使って業務効率化に取り組んだことがきっかけで、プログラミングに興味を持ちました。",
  },
  {
    icon: IconSeeding,
    title: "Programming",
    description:
      "2022年1月にPCを買って、独学でプログラミングを学び始めました。6月からは、IT_KINGDUMでReact、TypeScriptを中心にフロントエンドについて学習しています。",
  },
  {
    icon: IconDeviceGamepad,
    title: "Hobby",
    description:
      "基本的にゲームやアニメや漫画が好きで、モンハンやポケモンGoをよくしていました。あとは、将棋も少し指せます。しかしながら、最近ではもっぱらプログラミング学習が趣味となっています。",
  },
  {
    icon: IconFlame,
    title: "Goal",
    description:
      "フロントエンドエンジニアになることが目標です。正直、この年になってから夢がみつかるなんて思ってもいませんでしたが、せっかくなので全力でエンジニア転職を目指します。",
  },
];

/** @package */
export const Profile = () => {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: "#FA5252", to: "#F783AC" }}
      >
        <feature.icon size={26} stroke={1.5} />
      </ThemeIcon>
      <Text size="lg" mt="sm" weight={600}>
        {feature.title}
      </Text>
      <Text size="sm">{feature.description}</Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Col span={12} md={5}>
          <Title className={classes.title} order={2}>
            はじめまして、kinoです
          </Title>
          <Text className={classes.text}>
            ご訪問いただきありがとうございます。簡単ですが、自己紹介をさせていただきます。
          </Text>
        </Col>
        <Col span={12} md={7}>
          <SimpleGrid
            className={classes.text}
            cols={2}
            spacing={30}
            breakpoints={[{ maxWidth: "md", cols: 1 }]}
          >
            {items}
          </SimpleGrid>
        </Col>
      </Grid>
    </div>
  );
};
