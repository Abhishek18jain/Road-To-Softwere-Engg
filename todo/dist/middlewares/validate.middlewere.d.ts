import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod/v3";
export declare function validate(schema: ZodSchema): (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=validate.middlewere.d.ts.map