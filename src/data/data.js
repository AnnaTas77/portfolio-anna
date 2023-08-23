import RedditGeeks from "../assets/RedditScreenshot7.jpg";
import WeatherApp from "../assets/WeatherApp_merged7A.jpg";
import NCNews from "../assets/NcNews.png";
import Meteorites from "../assets/Meteorite Landings Viewer.png";

export const projects = [
    {
        title: "NC News",
        description:
            "NC News is a full-stack project with a custom backend News API, mimicking Reddit's functionalities. The frontend serves as a user interface, enabling access to various API endpoints for seamless interaction with news content.",
        image: NCNews,
        tech: ["PostgreSQL", "Express.js", "React", "Axios", "CSS"],
        live: "https://nc-news-anna.netlify.app/",
        github: [
            { label: "Frontend", url: "https://github.com/AnnaTas77/nc-news-frontend-project" },
            { label: "Backend", url: "https://github.com/AnnaTas77/nc-news-backend-project" },
        ],
    },
    {
        title: "Reddit Geeks",
        description:
            "Reddit Geeks offers a user-friendly platform to explore and keep track of favourite subreddit topics. Each subreddit topic is neatly contained within its dedicated box, displaying all associated articles. Users have the flexibility to add, edit, or remove selected topics, ensuring a personalized and enjoyable browsing experience.",
        image: RedditGeeks,
        tech: ["React", "CSS"],
        live: "https://annatas77.github.io/redditgeeks/",
        github: "https://github.com/AnnaTas77/redditgeeks",
    },
    {
        title: "Weather App",
        description:
            "This weather app uses the Fetch API to retrieve current weather data from the Open Weather Map API. It features an Autocomplete function that suggests cities and highlights matching letters in bold. The city data is sourced from the Api Ninjas API, streamlining city selection for a smoother user experience.",
        image: WeatherApp,
        tech: ["JavaScript", "CSS", "HTML"],
        live: "https://annatas-weather-app.netlify.app/",
        github: "https://github.com/AnnaTas77/weather-app",
    },
    {
        title: "Meteorite Landings Interactive Map",
        description:
            "This project features an interactive map of meteorite landings, sourcing data from NASA's Meteorite Landings API. Users can conveniently sort the table of all known landings by name, year of discovery, and mass in grams by clicking the column headings.",
        image: Meteorites,
        tech: ["React", "Axios", "CSS", "HTML"],
        live: null,
        github: "https://github.com/AnnaTas77/fe-react-data-visualisation",
    },
];
