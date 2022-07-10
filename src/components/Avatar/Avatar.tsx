import React from "react";
import { Session } from "next-auth";
import Image from "next/image";

type AvatarProps = {
  session: Session | null;
};

const Avatar: React.FC<AvatarProps> = ({ session }) => {
  return (
    <Image
      src={session?.user?.image || "/svg/default_profile_dark.svg"}
      alt="user profile"
      width="32"
      height="32"
    />
  );
};

export default Avatar;
