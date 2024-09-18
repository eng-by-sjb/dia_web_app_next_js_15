import { nanoid } from "nanoid";

export const navItems = [
  {
    id: nanoid(),
    title: "Overview",
    href: "/dashboard/overview",
    iconName: "overview",
  },
  {
    id: nanoid(),
    title: "Brands",
    href: "/dashboard/brands",
    iconName: "brands",
  },
  {
    id: nanoid(),
    title: "Calendar",
    href: "/dashboard/calendar",
    iconName: "calendar",
  },
  {
    id: nanoid(),
    title: "Talent",
    href: "/dashboard/talent",
    iconName: "talent",
  },
  {
    id: nanoid(),
    title: "Drafts",
    href: "/dashboard/drafts",
    iconName: "drafts",
  },
  {
    id: nanoid(),
    title: "Messages",
    href: "/dashboard/messages",
    iconName: "messages",
  },
];
export const footerItems = [
  {
    id: nanoid(),
    title: "Profile",
    href: "/dashboard/profile",
    iconName: "profile",
  },
  {
    id: nanoid(),
    title: "Settings",
    href: "/dashboard/settings",
    iconName: "settings",
  },
  {
    id: nanoid(),
    title: "logout",
    href: "/dashboard/logout",
    iconName: "logout",
  },
];

export const campaignTableTitles = [
  { id: nanoid(), title: "Name" },
  { id: nanoid(), title: "Industry" },
  { id: nanoid(), title: "Number of Campaigns" },
  { id: nanoid(), title: "Total Amount Spent" },
];

export const brandsData = [
  {
    id: nanoid(),
    brandName: "Apple Inc.",
    industry: "Technology",
    numberOfCampaigns: 5,
    totalAmountSpent: 15000.75,
  },
  {
    id: nanoid(),
    brandName: "Google LLC",
    industry: "Technology",
    numberOfCampaigns: null,
    totalAmountSpent: 25000.5,
  },
  {
    id: nanoid(),
    brandName: "Microsoft Corporation",
    industry: "Technology",
    numberOfCampaigns: 3,
    totalAmountSpent: 504300.0,
  },
  {
    id: nanoid(),
    brandName: "Amazon.com, Inc.",
    industry: "E-commerce",
    numberOfCampaigns: null,
    totalAmountSpent: null,
  },
  {
    id: nanoid(),
    brandName: "Facebook, Inc.",
    industry: "Social Media",
    numberOfCampaigns: 12,
    totalAmountSpent: 30000.0,
  },
  {
    id: nanoid(),
    brandName: "Tesla, Inc.",
    industry: "Automotive",
    numberOfCampaigns: 6,
    totalAmountSpent: 8000.99,
  },
  {
    id: nanoid(),
    brandName: "Netflix, Inc.",
    industry: "Entertainment",
    numberOfCampaigns: 4,
    totalAmountSpent: null,
  },
  {
    id: nanoid(),
    brandName: "Coca-Cola Company",
    industry: "Beverages",
    numberOfCampaigns: 9,
    totalAmountSpent: 22000.1,
  },
  // {
  //   id: nanoid(),
  //   brandName: "Nike, Inc.",
  //   industry: "Apparel",
  //   numberOfCampaigns: 11,
  //   totalAmountSpent: 18000.75,
  // },
  // {
  //   id: nanoid(),
  //   brandName: "Samsung Electronics",
  //   industry: "Technology",
  //   numberOfCampaigns: 7,
  //   totalAmountSpent: 9000.0,
  // },
  // {
  //   id: nanoid(),
  //   brandName: "IBM Corporation",
  //   industry: "Technology",
  //   numberOfCampaigns: 2,
  //   totalAmountSpent: 3500.25,
  // },
  // {
  //   id: nanoid(),
  //   brandName: "Intel Corporation",
  //   industry: "Technology",
  //   numberOfCampaigns: 1,
  //   totalAmountSpent: 6000.8,
  // },
];

export const xCampaignTableData = {
  names: [
    "John Doe",
    "Jane Smith",
    "Alice Johnson",
    "Bob Brown",
    "Charlie Davis",
    "Eve Adams",
    "Frank White",
    "Grace Lee",
    "Hannah Scott",
    "Ian Turner",
    "Jack Wilson",
    "Kathy Green",
  ],
  industries: [
    "Apple Inc.",
    "Google LLC",
    "Microsoft Corporation",
    "Amazon.com, Inc.",
    "Facebook, Inc.",
    "Tesla, Inc.",
    "Netflix, Inc.",
    "Coca-Cola Company",
    "Nike, Inc.",
    "Samsung Electronics",
    "IBM Corporation",
    "Intel Corporation",
  ],
  numberOfCampaigns: [5, 10, 3, 8, 12, 6, 4, 9, 11, 7, 2, 1],
  totalAmountSpent: [
    15000.75, 25000.5, 5000.0, 12000.25, 30000.0, 8000.99, 4500.5, 22000.1, 18000.75, 9000.0,
    3500.25, 6000.8,
  ],
};
