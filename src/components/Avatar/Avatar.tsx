import React, { useState } from "react";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

type AvatarProps = {
  session: Session | null;
};

const Avatar: React.FC<AvatarProps> = ({ session }) => {
  return (
    <Menu>
      <Menu.Button
        type="button"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        className="cursor-pointer"
      >
        <Image
          className="rounded-full"
          src={session?.user?.image || "/svg/default_profile_dark.svg"}
          alt="user profile"
          width="32"
          height="32"
        />
      </Menu.Button>
      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute z-20 right-0 mt-2 items-center text-center w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          {session?.user?.name && (
            <Menu.Item>
              <p
                className={`group flex flex-col w-full items-center text-center transition delay-75 px-2 py-2 text-sm`}
              >
                {session?.user?.name}
                <span className="text-xs text-slate-300">
                  {session?.user?.email}
                </span>
              </p>
            </Menu.Item>
          )}

          {session ? (
            <Menu.Item>
              {({ active }: { active: boolean }) => (
                <button
                  className={`${
                    active && "bg-blue-500 text-white"
                  } group w-full items-center text-center transition delay-75 px-2 py-2 text-sm`}
                  type="button"
                  onClick={() => signOut()}
                >
                  SignOut
                </button>
              )}
            </Menu.Item>
          ) : (
            <Menu.Item>
              {({ active }: { active: boolean }) => (
                <button
                  className={`${
                    active && "bg-blue-500 text-white"
                  } group w-full items-center text-center transition delay-75 rounded-md px-2 py-2 text-sm`}
                  type="button"
                  onClick={() => signIn()}
                >
                  SignIn
                </button>
              )}
            </Menu.Item>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Avatar;
