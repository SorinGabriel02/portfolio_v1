import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const PROJECTS = [
  {
    id: 1,
    title: "SoulLink",
    description:
      "An app that will let you connect with your friends, so you can post and chat. To build this app I used HTML CSS and JavaScript on the frontend and Node Express and MongoDB for the backend.",
    linkCode: "https://github.com/SorinGabriel02/sLink",
    linkLive: "https://soul-link.herokuapp.com/",
    image: project1
  },
  {
    id: 2,
    title: "Ravenous",
    description:
      "React APP that is using the Yelp API and lets the user look for a type of business in a certain area.",
    linkCode: "http://github.com/SorinGabriel02/raven",
    linkLive: "https://soringabriel02.github.io/raven/",
    image: project2
  },
  {
    id: 3,
    title: "Jahming",
    description:
      "React web app that uses the Spotify API and lets the user search for tunes and create a Spotify playlist.",
    linkCode: "http://github.com/SorinGabriel02/jahming",
    linkLive: "http://jahming.surge.sh/",
    image: project3
  }
];

export default PROJECTS;
