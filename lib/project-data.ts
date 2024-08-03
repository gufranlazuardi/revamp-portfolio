export interface Works {
  id: number;
  project: string;
  photo: string;
  techstack: string[];
  link: string;
}

export const works: Works[] = [
  {
    id: 1,
    project: "hi'SPEC",
    photo: "/hispec-ss.png",
    link: "https://github.com/gufranlazuardi/hi-SPEC",
    techstack: ["react", "typescript", "tailwind", "axios"],
  },
  {
    id: 2,
    project: "Cloudbite",
    photo: "/cloudbite-ss.png",
    link: "www.google.com",
    techstack: ["react", "typescript", "tailwind", "axios"],
  },
  {
    id: 3,
    project: "My Pokemon",
    photo: "/my-pokemon-ss.png",
    link: "https://github.com/gufranlazuardi/My-Pokemon",
    techstack: ["react", "typescript", "tailwind", "axios"],
  },
  {
    id: 4,
    project: "Cinemahub",
    photo: "/cinemahub-ss.png",
    link: "https://github.com/gufranlazuardi/cinemahub",
    techstack: ["react", "typescript", "tailwind"],
  },
  {
    id: 5,
    project: "Simple Todolist",
    photo: "/todolist-ss.png",
    link: "https://github.com/gufranlazuardi/simple-todolist",
    techstack: ["react", "typescript", "tailwind"],
  },
];
