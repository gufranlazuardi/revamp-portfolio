export interface Works {
  id: number;
  project: string;
  photo: string;
  techstack: string[];
  description: string;
  github: string;
  web: string;
}

export const works: Works[] = [
  {
    id: 1,
    project: "hi'SPEC",
    photo: "/hispec-ss.png",
    techstack: ["react", "typescript", "tailwind"],
    description:
      "hi'SPEC is a cutting-edge web platform revolutionizing laptop shopping. Developed with React, TypeScript, Axios, Tailwind, and Shadcn, hi'SPEC seamlessly integrates e-commerce features with a powerful laptop comparison tool. Users can explore a vast range of laptops, evaluating detailed specifications and instantly comparing multiple models side by side. The sleek and user- friendly interface, enhanced by Shadcn's visual sophistication, ensures an enjoyable and efficient shopping experience. hi'SPEC empowers users to make informed decisions, setting a new standard in tech retail by prioritizing high specifications and personalized exploration of laptops",
    github: "https://github.com/gufranlazuardi/hi-SPEC",
    web: "https://hi-spec.vercel.app/",
  },
  {
    id: 2,
    project: "Cloudbite",
    photo: "/cloudbite-ss.png",
    techstack: ["react", "typescript", "tailwind"],
    description:
      "Cloudbite is modern social media for Gen Z who wanna post some activites with text and image, also can add comment in friend's post. build with React js, Tailwind, and Axios for data fetching",
    github: "https://github.com/gufranlazuardi/cinemahub",
    web: "https://cloudbite.vercel.app/",
  },
  {
    id: 3,
    project: "My Pokemon",
    photo: "/my-pokemon-ss.png",
    techstack: ["react", "typescript", "tailwind"],
    description:
      " My Pokemon is a user-friendly web platform designed for Pokemon enthusiasts. Built with React, TypeScript, and Tailwind, it simplifies the Pokemon experience. Explore different Pokemon types, delve into detailed Pokemon profiles, catch Pokemon, and build your own collection. The straightforward interface ensures easy navigation, making it accessible for users of all levels. With a focus on simplicity and enjoyment, My Pokemon allows you to immerse yourself in the world of Pokemon, from discovering types to catching and collecting your favorite Pokemon. Whether you're a seasoned trainer or a newcomer, My Pokemon makes the journey delightful and engaging",
    github: "https://github.com/gufranlazuardi/My-Pokemon",
    web: "https://my-pokemon-tawny.vercel.app/",
  },
  {
    id: 4,
    project: "Cinemahub",
    photo: "/cinemahub-ss.png",
    techstack: ["react", "typescript", "tailwind"],
    description:
      "Cinemahub is a sleek and user-friendly movie platform crafted with React, TypeScript, Tailwind and Axios. It simplifies the movie-watching experience, allowing users to explore a variety of films, filter by categories, and access detailed movie information. With seamless YouTube integration, users can also watch trailers directly on the platform. Cinemahub offers an intuitive interface, making it easy for users to navigate and enjoy the world of cinema",
    github: "https://github.com/gufranlazuardi/cinemahub",
    web: "https://cinemahub-gamma.vercel.app",
  },
  {
    id: 5,
    project: "Simple Todolist",
    photo: "/todolist-ss.png",
    techstack: ["react", "typescript", "tailwind"],
    description:
      "Elevate your task management experience with the Simple Todolist app—an effortlessly intuitive solution crafted with React, TypeScript, and Tailwind CSS. Seamlessly add, complete, and scratch off tasks, streamlining your daily productivity. The app's minimalist design ensures a clean, user-friendly interface, providing a delightful and efficient platform for managing your to-do list. Whether you're organizing personal goals or professional tasks, Simple Todolist is your companion for a productive and stress-free day. Enjoy the convenience of efficient task tracking and an aesthetically pleasing interface, making every day more organized and manageable",
    github: "https://github.com/gufranlazuardi/simple-todolist",
    web: "https://scratched-todolist.vercel.app/",
  },
];
