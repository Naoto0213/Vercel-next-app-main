import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import MenuItem from "../../atoms/MenuItem/Item";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Drapdown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="mt-4 py-2 px-3 bg-green-500 hover:bg-green-600 focus:ring-green-500  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
              追加
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="relative mt-2 w-40 rounded-md shadow-lg bg-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                {/* コンポーネント化 */}
                <MenuItem title="Watch Movie" />
                <MenuItem title="Wont Movie" />
                <MenuItem title="Favorite Movie" />
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default Drapdown;
