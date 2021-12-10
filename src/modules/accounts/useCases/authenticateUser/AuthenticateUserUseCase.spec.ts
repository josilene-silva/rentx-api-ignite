import { AppError } from "../../../../erros/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    });

    // it("shold be able to authenticate an user", async () => {
    //     const user: ICreateUserDTO = {
    //         driver_license: "0000122",
    //         email: "josi@gmail.com",
    //         password: "123",
    //         name: "josi"
    //     }

    //     await createUserUseCase.execute(user);

    //     const result = await authenticateUserUseCase.execute({
    //         email: user.email,
    //         password: user.password
    //     });

    //     console.log(result);

    //     expect(result).toHaveProperty("token");
    // });

    it("shold not be able to authenticate an nonexistent user", () => {
        expect(async () => {
            await authenticateUserUseCase.execute({
                email: "false@gmail.com",
                password: "567"
            });
        }).rejects.toBeInstanceOf(AppError);
    });


    it("shold not be able to atuthenticate with incorrect password", () => {
        expect(async () => {
            const user: ICreateUserDTO = {
                driver_license: "0000122",
                email: "error@gmail.com",
                password: "1234",
                name: "error"
            }

            await createUserUseCase.execute(user);

            await authenticateUserUseCase.execute({
                email: "error@gmail.com",
                password: "123"
            });
        }).rejects.toBeInstanceOf(AppError);
    });

});