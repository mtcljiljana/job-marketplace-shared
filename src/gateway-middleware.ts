import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "./error-handeler";

const tokens: string[] = ['auth', 'seller', 'gig', 'search', 'buyer', 'message', 'order', 'review']; // TODO: remove hardcoded values

type Payload = {
    id: string,
    iat: number
}

export function verifyGatewayRequest(req: Request, res: Response, next: NextFunction): void {
    if (!req.headers?.gatewayToken) {
        throw new NotAuthorizedError('Invalid request', 'verifyGatewayRequest(): Request not comming from API gateway');
    }
    const token: string = req.headers?.gatewayToken as string;
    if (!token) {
        throw new NotAuthorizedError('Invalid request', 'verifyGatewayRequest(): Request not comming from API gateway');
    }

    try {
        const payload: Payload = verify(token, '') as Payload;
        if (!tokens.includes(payload.id)) {
            throw new NotAuthorizedError('Invalid request', 'verifyGatewayRequest(): Request payload is invalid');
        }
    } catch (error) {
        throw new NotAuthorizedError('Invalid request', 'verifyGatewayRequest(): Request not comming from API gateway');
    }
}
