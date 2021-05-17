import { Menu } from "@headlessui/react";

const MenuItem = ({ title }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <Menu.Item>
        {({ active }) => (
          <a
            href="#"
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
          >
            {title}
          </a>
        )}
      </Menu.Item>
    </div>
  );
};

export default MenuItem;
