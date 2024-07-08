import UsersController from "./entities/user/users.controller";
import App from "./app";
import "dotenv/config"
import PingController from "./entities/ping/ping.controller";
import AuthController from "./features/auth/auth.controller";
import WarehouseController from "./entities/warehouse/warehouse.controller";
import WarehouseStaffController from "./entities/warehouse/warehouse.staff/warehouse.staff.controller";
import FreightCompanyController from "./entities/freight-company/freight-company.controller";
import ShipmentController from "./entities/shipment/shipment.controller";
import VehicleController from "./entities/vehicles/vehicle.controller";
import PickUpController from "./entities/pickup-dropoff/pickup/pickup.controller";
import DropOffController from "./entities/pickup-dropoff/dropoff/dropoff.controller";

const app = new App([
    new AuthController(),
    new FreightCompanyController(),
    new UsersController(),
    new PingController(),
    new WarehouseController(),
    new WarehouseStaffController(),
    new ShipmentController(),
    new VehicleController(),
    new PickUpController(),
    new DropOffController(),
]);
app.listen();