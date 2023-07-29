import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import Link from "next/link";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Processor
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Motherboard
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Ram
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Power Supply
      </Link>
    ),
  },
  {
    key: "5",
    label: (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Storage Device
      </Link>
    ),
  },
  {
    key: "6",
    label: (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Monitors
      </Link>
    ),
  },
  {
    key: "7",
    label: (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
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
