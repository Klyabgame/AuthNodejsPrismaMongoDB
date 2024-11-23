import { AuthDatasource, AuthEntity, AuthRepository, CreateAuthDto, LoginAuthDto } from "@/domain";



export class AuthRepositoryImpl implements AuthRepository{

    constructor(
        private readonly userDatasource:AuthDatasource,
    ){}
    postLoginAuth(loginAuthDto: LoginAuthDto): Promise<AuthEntity> {
        return this.userDatasource.postLoginAuth(loginAuthDto);
    }

    postRegisterAuth(createAuthDto: CreateAuthDto): Promise<AuthEntity> {
        return this.userDatasource.postRegisterAuth(createAuthDto);
    }
    

}