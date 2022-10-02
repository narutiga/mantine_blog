import { CustomNextPage } from "next";
import { ProfilePage } from "src/pages_component/profile";
import { SimpleLayout } from "src/pages_layout/SimpleLayout";

const profilePage: CustomNextPage = (props) => {
  return <ProfilePage {...props} />;
};

profilePage.getLayout = SimpleLayout;

export default profilePage;
