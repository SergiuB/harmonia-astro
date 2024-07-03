type Link = {
  title: string;
  url: string;
  className?: string;
};

export const spaceLink = {
  title: "Spatiu",
  url: "/space",
};

export const activitiesLink = {
  title: "Activitati",
  url: "/activities",
};

export const links: Link[] = [
  activitiesLink,
  {
    title: "Facilitatori",
    url: "/facilitators",
  },
  spaceLink,
  {
    title: "Contact",
    url: "/space#contact",
    className: "closable-link",
  },
];
