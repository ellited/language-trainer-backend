import { RegisterRoutes } from "../build/routes";
import swaggerUi from "swagger-ui-express";
import express, { json, urlencoded, Request, Response , NextFunction } from "express";


export const app = express();

app.use(
    urlencoded({
        extended: true,
    })
);
app.use(json());

app.use("/docs", swaggerUi.serve, async (_req: Request, res: Response) => {
    return res.send(swaggerUi.generateHTML(await import("../build/swagger.json")));
});

app.get("/swagger/swagger.json", async (req, res) => {
    const swaggerJson = await import("../build/swagger.json");
    res.send(swaggerJson);
});

RegisterRoutes(app);
