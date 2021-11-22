import nowPlaying from "../views/pages/now-playing";
import Upcoming from "../views/pages/upcoming";
import Detail from "../views/pages/detail";
import Like from "../views/pages/like";

const routes = {
    '/': nowPlaying,
    '/now-playing': nowPlaying,
    '/upcoming': Upcoming,
    '/detail/:id': Detail,
    '/like': Like,
};

export default routes;