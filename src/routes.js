import Home from "./components/Home";
import ShowJokes from "./components/jokes/ShowJokes";
import InfoJoke from "./components/jokes/InfoJoke";


export const routes = [{
    path: '',
    component: Home
    },
    {
        path: '/jokes',
        component: ShowJokes,
    },
    {
        path: '/joke/:id',
        component: InfoJoke
    },


    ]