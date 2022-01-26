import { RequestInterface } from "src/interfaces/request.interface";
import { AuthenticationService } from "../services/authentication.service";
import  express  from 'express'

export class AuthenticationController {
    private readonly authenticationService: AuthenticationService;

    constructor (authenticationService: AuthenticationService) {
        this.authenticationService = authenticationService;
    }

    async authorization(req: RequestInterface, res: express.Response): Promise<void> {
        if (!req.user.email || !req.user.password) {
            res.send('Have not email or login')
        }

        const decoded = await this.authenticationService.authenticator(req.user.email, req.user.password);

        if (decoded.authenticated) {
            const decodedUser = String(decoded.user)

            const token = this.authenticationService.newToken(decodedUser)

            if (res) {
                res.cookie('jwtToken', token);
                res.send('Succes log in')
            } else {
                throw 'Have not response'
            }

        } else {
            res.send('Wrong email or password')
        }
    }
}