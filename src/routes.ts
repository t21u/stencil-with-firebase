const Routes: Array<{
  type: string;
  title: string;
  url: string;
  icon: string;
  children?: Array<string>;
}> = [
  {
    type: "static",
    title: "Home",
    url: "/",
    icon: "home",
  },
  {
    type: "dynamic",
    title: "Profile",
    url: "/profile/:name",
    icon: "person",
    children: ["ionic"],
  },
];

export { Routes };
