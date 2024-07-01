import UsersController from "./entities/user/users.controller";
import App from "./app";
import "dotenv/config"
import PingController from "./entities/ping/ping.controller";
import AuthController from "./features/auth/auth.controller";
import WarehouseController from "./entities/warehouse/warehouse.controller";

const app = new App([
    new AuthController(),
    new UsersController(),
    new PingController(),
    new WarehouseController()
]);
app.listen();