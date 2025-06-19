import { Button, Dropdown, Input, MenuProps, Space } from "antd";
import { ChevronDown, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

export const HeaderApp = () => {
  const explore: MenuProps["items"] = [
    {
      label: (
        <a
          href="https://www.antgroup.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          1st menu item
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a
          href="https://www.aliyun.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          2nd menu item
        </a>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];
  const news: MenuProps["items"] = [
    {
      label: (
        <a
          href="https://www.antgroup.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          1st menu item
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a
          href="https://www.aliyun.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          2nd menu item
        </a>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];
  const multimedia: MenuProps["items"] = [
    {
      label: (
        <a
          href="https://www.antgroup.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          1st menu item
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a
          href="https://www.aliyun.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          2nd menu item
        </a>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];
  return (
    <header className="p-4 flex bg-black flex-wrap">
      <div className="inline-flex">
        <Dropdown menu={{ items: explore }} trigger={["click"]}>
          <Button
            color="default"
            className="!text-white !text-xl"
            variant="text"
          >
            <Space>
              Explore
              <ChevronDown size={16} />
            </Space>
          </Button>
        </Dropdown>
        <Input placeholder="Filled" variant="filled" />
      </div>
      <div className="grow flex justify-center">
        <Image
          className="dark:invert"
          src="/images/nasa-logo.svg"
          alt="Next.js logo"
          width={60}
          height={38}
          priority
        />
      </div>
      <div className="inline-flex flex-wrap">
        <Dropdown menu={{ items: news }} trigger={["click"]}>
          <Button
            color="default"
            className="!text-white !text-xl"
            variant="text"
          >
            <Space>
              News & Events
              <ChevronDown size={16} />
            </Space>
          </Button>
        </Dropdown>
        <Dropdown menu={{ items: multimedia }} trigger={["click"]}>
          <Button
            color="default"
            className="!text-white !text-xl"
            variant="text"
          >
            <Space>
              Multimedia
              <ChevronDown size={16} />
            </Space>
          </Button>
        </Dropdown>
        <Button color="default" className="!text-white !text-xl" variant="text">
          <Space>
            NASA
            <Plus size={16} />
          </Space>
        </Button>
      </div>
    </header>
  );
};
