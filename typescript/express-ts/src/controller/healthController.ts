import { HealthService } from "../services/healthService.js";
import type { Response , Request } from "express";

const service = new HealthService();

export function healthCheck(req:Request, res : Response) {
  res.status(200).json(service.getStatus());
}
