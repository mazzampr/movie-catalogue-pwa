import nowPlaying from "../views/pages/now-playing";
import Upcoming from "../views/pages/upcoming";
import Detail from "../views/pages/detail";

const routes = {
    '/': nowPlaying,
    '/now-playing': nowPlaying,
    '/upcoming': Upcoming,
    '/detail/:id': Detail,
}

export default routes;