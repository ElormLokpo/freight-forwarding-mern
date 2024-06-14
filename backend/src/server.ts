import UsersController from "./entities/user/users.controller";
import App from "./app";
import "dotenv/config"
import PingController from "./entities/ping/ping.controller";

const app = new App([
    new UsersController()
    new PingController()
]);
app.listen();