type Link = {
  title: string;
  url: string;
  className?: string;
};

export const spaceLink = {
  title: "Spațiu",
  url: "/space",
};

export const servicesLink = {
  title: "Servicii",
  url: "/activities",
};

export const links: Link[] = [
  servicesLink,
  {
    title: "Facilitatori",
    url: "/facilitators",
  },
  spaceLink,
  {
    title: "Activități",
    url: "/space/?scrollTo=events_calendar",
    className: "closable-link",
  },
  {
    title: "Contact",
    url: "/space/?scrollTo=contact",
    className: "closable-link",
  },
];
