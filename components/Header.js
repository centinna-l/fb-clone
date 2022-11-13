import Image from "next/image";
import {
  FlagIcon,
  SearchIcon,
  PlayIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import {
  BellIcon,
  ChatIcon,
  ChevronDoubleDownIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";
const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-2 shadow-md">
      {/** Left*/}
      <div className="flex items-center">
        <Image
          className="ml-2"
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
        />
        <div className="flex ml-3 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6  text-gray-600" />
          <input
            className="hidden md:inline-flex items-center bg-transparent outline-none flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/** Center*/}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/** Right*/}
      <div className="flex items-center sm:spacing-x-2 justify-end">
        {/* <Image /> */}
        <p className="whitespace-nowrap font-semibold p-3">Jerry Joy</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
