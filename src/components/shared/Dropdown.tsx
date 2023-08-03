import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import Link from "next/link";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link rel="noopener noreferrer" href="/category/processor">
        Processor
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link rel="noopener noreferrer" href="/category/motherboard">
        Motherboard
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link rel="noopener noreferrer" href="/category/ram">
        Ram
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link rel="noopener noreferrer" href="/category/power supply">
        Power Supply
      </Link>
    ),
  },
  {
    key: "5",
    label: (
      <Link rel="noopener noreferrer" href="/category/storage device">
        Storage Device
      </Link>
    ),
  },
  {
    key: "6",
    label: (
      <Link rel="noopener noreferrer" href="/category/monitor">
        Monitors
      </Link>
    ),
  },
  {
    key: "7",
    label: (
      <Link rel="noopener noreferrer" href="/category/others">
        Others
      </Link>
    ),
  },
];

const CategoryDropdown: React.FC = () => (
  <Dropdown menu={{ items }}>
    <Link href="#" onClick={(e) => e.preventDefault()}>
      <Space>
        Categories
        <DownOutlined />
      </Space>
    </Link>
  </Dropdown>
);

export default CategoryDropdown;
