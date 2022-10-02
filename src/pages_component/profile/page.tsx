import { NextPage } from "next";
import Link from "next/link";
import { Profile } from "src/component/Profile";

/** @package */
export const ProfilePage: NextPage = () => {
  return (
    <div>
      <Profile />
      <Link href="/">
        <a href="replace" className="block text-right mt-20">
          ブログへ戻る
        </a>
      </Link>
    </div>
  );
};
