import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(request:Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if(!authHeader) {
        throw new Error("Token missing");
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: userId } = verify(token, "291e745966b7dcbe076607a003b4440c") as IPayload;
        console.log(userId);

        const userRepository = new UsersRepository();
        const user = await userRepository.findById(userId);

        if(!user) {
            throw new Error("User does not exists!");
        }

        next();
    } catch {
        throw new Error("Invalid token");
    }
}