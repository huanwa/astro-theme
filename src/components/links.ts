// links.ts
export type Link = {
  title: string;
  url: string;
};

export const internalLinks: Link[] = [
  { title: "Home", url: "#" },
  { title: "About", url: "#" },
  { title: "Terms of Use", url: "#" },
];

export const externalLinks: Link[] = [
  { title: "Twitter", url: "#" },
  { title: "YouTube", url: "#" },
  { title: "Instagram", url: "#" },
];
