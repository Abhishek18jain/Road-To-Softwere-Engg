import { ZodAny, ZodObject } from "zod";
import { Request, Response, NextFunction } from "express";

export const validate =
  (schema: ZodObject) =>
  (req: Request, _: Response, next: NextFunction) => {
    schema.parse(req.body);
    next();
  };
