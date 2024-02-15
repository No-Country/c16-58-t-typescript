<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [API Endpoints](#api-endpoints)
- [Ruta: `/api/auth/register`](#ruta-apiauthregister)
- [Ruta: `/api/auth/login`](#ruta-apiauthlogin)
- [Ruta: `/api/auth/is_authenticated`](#ruta-apiauthis_authenticated)
- [Ruta: `/api/auth/refresh`](#ruta-apiauthrefresh)
- [Ruta: `/api/auth/logout`](#ruta-apiauthlogout)
- [Classes](#classes)
  - [Class: AppModule](#class-appmodule)
    - [Table of contents](#table-of-contents)
    - [Constructors](#constructors)
  - [Class: User](#class-user)
    - [Hierarchy](#hierarchy)
    - [Table of contents](#table-of-contents-1)
    - [Constructors](#constructors-1)
    - [Properties](#properties)
  - [Class: UserModel](#class-usermodel)
    - [Hierarchy](#hierarchy-1)
    - [Table of contents](#table-of-contents-2)
    - [Constructors](#constructors-2)
    - [Properties](#properties-1)
  - [Class: AllExceptionFilter](#class-allexceptionfilter)
    - [Implements](#implements)
    - [Table of contents](#table-of-contents-3)
    - [Constructors](#constructors-3)
    - [Properties](#properties-2)
    - [Methods](#methods)
  - [Class: JwtAuthGuard](#class-jwtauthguard)
    - [Hierarchy](#hierarchy-2)
    - [Table of contents](#table-of-contents-4)
    - [Constructors](#constructors-4)
    - [Properties](#properties-3)
    - [Methods](#methods-1)
  - [Class: default](#class-default)
    - [Hierarchy](#hierarchy-3)
    - [Table of contents](#table-of-contents-5)
    - [Constructors](#constructors-5)
    - [Properties](#properties-4)
    - [Methods](#methods-2)
  - [Class: LoginGuard](#class-loginguard)
    - [Hierarchy](#hierarchy-4)
    - [Table of contents](#table-of-contents-6)
    - [Constructors](#constructors-6)
    - [Properties](#properties-5)
    - [Methods](#methods-3)
  - [Class: LoggingInterceptor](#class-logginginterceptor)
    - [Implements](#implements-1)
    - [Table of contents](#table-of-contents-7)
    - [Constructors](#constructors-7)
    - [Properties](#properties-6)
    - [Methods](#methods-4)
  - [Class: ResponseFormat\<T\>](#class-responseformat%5Ct%5C)
    - [Type parameters](#type-parameters)
    - [Table of contents](#table-of-contents-8)
    - [Constructors](#constructors-8)
    - [Properties](#properties-7)
  - [Class: ResponseInterceptor\<T\>](#class-responseinterceptor%5Ct%5C)
    - [Type parameters](#type-parameters-1)
    - [Implements](#implements-2)
    - [Table of contents](#table-of-contents-9)
    - [Constructors](#constructors-9)
    - [Methods](#methods-5)
  - [Class: JwtRefreshTokenStrategy](#class-jwtrefreshtokenstrategy)
    - [Hierarchy](#hierarchy-5)
    - [Table of contents](#table-of-contents-10)
    - [Constructors](#constructors-10)
    - [Properties](#properties-8)
    - [Methods](#methods-6)
  - [Class: JwtStrategy](#class-jwtstrategy)
    - [Hierarchy](#hierarchy-6)
    - [Table of contents](#table-of-contents-11)
    - [Constructors](#constructors-11)
    - [Properties](#properties-9)
    - [Methods](#methods-7)
  - [Class: LocalStrategy](#class-localstrategy)
    - [Hierarchy](#hierarchy-7)
    - [Table of contents](#table-of-contents-12)
    - [Constructors](#constructors-12)
    - [Properties](#properties-10)
    - [Methods](#methods-8)
  - [Class: EnvironmentConfigModule](#class-environmentconfigmodule)
    - [Table of contents](#table-of-contents-13)
    - [Constructors](#constructors-13)
  - [Class: EnvironmentConfigService](#class-environmentconfigservice)
    - [Implements](#implements-3)
    - [Table of contents](#table-of-contents-14)
    - [Constructors](#constructors-14)
    - [Properties](#properties-11)
    - [Methods](#methods-9)
  - [Class: AuthController](#class-authcontroller)
    - [Table of contents](#table-of-contents-15)
    - [Constructors](#constructors-15)
    - [Properties](#properties-12)
    - [Methods](#methods-10)
  - [Class: AuthLoginDto](#class-authlogindto)
    - [Table of contents](#table-of-contents-16)
    - [Constructors](#constructors-16)
    - [Properties](#properties-13)
  - [Class: AuthRegisterDto](#class-authregisterdto)
    - [Table of contents](#table-of-contents-17)
    - [Constructors](#constructors-17)
    - [Properties](#properties-14)
  - [Class: IsAuthPresenter](#class-isauthpresenter)
    - [Table of contents](#table-of-contents-18)
    - [Constructors](#constructors-18)
    - [Properties](#properties-15)
  - [Class: ControllersModule](#class-controllersmodule)
    - [Table of contents](#table-of-contents-19)
    - [Constructors](#constructors-19)
  - [Class: ExceptionsModule](#class-exceptionsmodule)
    - [Table of contents](#table-of-contents-20)
    - [Constructors](#constructors-20)
  - [Class: ExceptionsService](#class-exceptionsservice)
    - [Implements](#implements-4)
    - [Table of contents](#table-of-contents-21)
    - [Constructors](#constructors-21)
    - [Methods](#methods-11)
  - [Class: LoggerModule](#class-loggermodule)
    - [Table of contents](#table-of-contents-22)
    - [Constructors](#constructors-22)
  - [Class: LoggerService](#class-loggerservice)
    - [Hierarchy](#hierarchy-8)
    - [Implements](#implements-5)
    - [Table of contents](#table-of-contents-23)
    - [Constructors](#constructors-23)
    - [Properties](#properties-16)
    - [Accessors](#accessors)
    - [Methods](#methods-12)
  - [Class: MongoConfigModule](#class-mongoconfigmodule)
    - [Table of contents](#table-of-contents-24)
    - [Constructors](#constructors-24)
  - [Class: RepositoriesModule](#class-repositoriesmodule)
    - [Table of contents](#table-of-contents-25)
    - [Constructors](#constructors-25)
  - [Class: DatabaseUserRepository](#class-databaseuserrepository)
    - [Implements](#implements-6)
    - [Table of contents](#table-of-contents-26)
    - [Constructors](#constructors-26)
    - [Properties](#properties-17)
    - [Methods](#methods-13)
  - [Class: User](#class-user-1)
    - [Implements](#implements-7)
    - [Table of contents](#table-of-contents-27)
    - [Constructors](#constructors-27)
    - [Properties](#properties-18)
  - [Class: BcryptModule](#class-bcryptmodule)
    - [Table of contents](#table-of-contents-28)
    - [Constructors](#constructors-28)
  - [Class: BcryptService](#class-bcryptservice)
    - [Implements](#implements-8)
    - [Table of contents](#table-of-contents-29)
    - [Constructors](#constructors-29)
    - [Properties](#properties-19)
    - [Methods](#methods-14)
  - [Class: JwtModule](#class-jwtmodule)
    - [Table of contents](#table-of-contents-30)
    - [Constructors](#constructors-30)
  - [Class: JwtTokenService](#class-jwttokenservice)
    - [Implements](#implements-9)
    - [Table of contents](#table-of-contents-31)
    - [Constructors](#constructors-31)
    - [Properties](#properties-20)
    - [Methods](#methods-15)
  - [Class: UseCaseProxy\<T\>](#class-usecaseproxy%5Ct%5C)
    - [Type parameters](#type-parameters-2)
    - [Table of contents](#table-of-contents-32)
    - [Constructors](#constructors-32)
    - [Properties](#properties-21)
    - [Methods](#methods-16)
  - [Class: UsecasesProxyModule](#class-usecasesproxymodule)
    - [Table of contents](#table-of-contents-33)
    - [Constructors](#constructors-33)
    - [Properties](#properties-22)
    - [Methods](#methods-17)
  - [Class: IsAuthenticatedUseCases](#class-isauthenticatedusecases)
    - [Table of contents](#table-of-contents-34)
    - [Constructors](#constructors-34)
    - [Properties](#properties-23)
    - [Methods](#methods-18)
  - [Class: LoginUseCases](#class-loginusecases)
    - [Table of contents](#table-of-contents-35)
    - [Constructors](#constructors-35)
    - [Properties](#properties-24)
    - [Methods](#methods-19)
  - [Class: LogoutUseCases](#class-logoutusecases)
    - [Table of contents](#table-of-contents-36)
    - [Constructors](#constructors-36)
    - [Methods](#methods-20)
  - [Class: RegisterUseCases](#class-registerusecases)
    - [Table of contents](#table-of-contents-37)
    - [Constructors](#constructors-37)
    - [Properties](#properties-25)
    - [Methods](#methods-21)
- [Interfaces](#interfaces)
  - [Interface: IBcryptService](#interface-ibcryptservice)
    - [Implemented by](#implemented-by)
    - [Table of contents](#table-of-contents-38)
    - [Methods](#methods-22)
  - [Interface: IJwtService](#interface-ijwtservice)
    - [Implemented by](#implemented-by-1)
    - [Table of contents](#table-of-contents-39)
    - [Methods](#methods-23)
  - [Interface: IJwtServicePayload](#interface-ijwtservicepayload)
    - [Table of contents](#table-of-contents-40)
    - [Properties](#properties-26)
  - [Interface: JWTConfig](#interface-jwtconfig)
    - [Implemented by](#implemented-by-2)
    - [Table of contents](#table-of-contents-41)
    - [Methods](#methods-24)
  - [Interface: MongoDbConfig](#interface-mongodbconfig)
    - [Implemented by](#implemented-by-3)
    - [Table of contents](#table-of-contents-42)
    - [Methods](#methods-25)
  - [Interface: IException](#interface-iexception)
    - [Implemented by](#implemented-by-4)
    - [Table of contents](#table-of-contents-43)
    - [Methods](#methods-26)
  - [Interface: IFormatExceptionMessage](#interface-iformatexceptionmessage)
    - [Table of contents](#table-of-contents-44)
    - [Properties](#properties-27)
  - [Interface: IError](#interface-ierror)
    - [Table of contents](#table-of-contents-45)
    - [Properties](#properties-28)
  - [Interface: ILogger](#interface-ilogger)
    - [Implemented by](#implemented-by-5)
    - [Table of contents](#table-of-contents-46)
    - [Methods](#methods-27)
  - [Interface: TokenPayload](#interface-tokenpayload)
    - [Table of contents](#table-of-contents-47)
    - [Properties](#properties-29)
  - [Interface: UserRepository](#interface-userrepository)
    - [Implemented by](#implemented-by-6)
    - [Table of contents](#table-of-contents-48)
    - [Methods](#methods-28)
- [api](#api)
  - [Table of contents](#table-of-contents-49)
    - [Modules](#modules)
- [Modules](#modules-1)
  - [Module: app.module](#module-appmodule)
    - [Table of contents](#table-of-contents-50)
  - [Module: domain/adapters/bcrypt.interface](#module-domainadaptersbcryptinterface)
    - [Table of contents](#table-of-contents-51)
  - [Module: domain/adapters/jwt.interface](#module-domainadaptersjwtinterface)
    - [Table of contents](#table-of-contents-52)
  - [Module: domain/config/jwt.interface](#module-domainconfigjwtinterface)
    - [Table of contents](#table-of-contents-53)
  - [Module: domain/config/mongo.interface](#module-domainconfigmongointerface)
    - [Table of contents](#table-of-contents-54)
  - [Module: domain/exceptions/exceptions.interface](#module-domainexceptionsexceptionsinterface)
    - [Table of contents](#table-of-contents-55)
  - [Module: domain/filter/filter.interface](#module-domainfilterfilterinterface)
    - [Table of contents](#table-of-contents-56)
  - [Module: domain/logger/logger.interface](#module-domainloggerloggerinterface)
    - [Table of contents](#table-of-contents-57)
  - [Module: domain/model/auth](#module-domainmodelauth)
    - [Table of contents](#table-of-contents-58)
  - [Module: domain/model/user](#module-domainmodeluser)
    - [Table of contents](#table-of-contents-59)
  - [Module: domain/repositories/userRepository.interface](#module-domainrepositoriesuserrepositoryinterface)
    - [Table of contents](#table-of-contents-60)
  - [Module: infrastructure/common/filter/exception.filter](#module-infrastructurecommonfilterexceptionfilter)
    - [Table of contents](#table-of-contents-61)
  - [Module: infrastructure/common/guards/jwtAuth.guard](#module-infrastructurecommonguardsjwtauthguard)
    - [Table of contents](#table-of-contents-62)
  - [Module: infrastructure/common/guards/jwtRefresh.guard](#module-infrastructurecommonguardsjwtrefreshguard)
    - [Table of contents](#table-of-contents-63)
  - [Module: infrastructure/common/guards/login.guard](#module-infrastructurecommonguardsloginguard)
    - [Table of contents](#table-of-contents-64)
  - [Module: infrastructure/common/interceptor/logger.interceptor](#module-infrastructurecommoninterceptorloggerinterceptor)
    - [Table of contents](#table-of-contents-65)
  - [Module: infrastructure/common/interceptor/response.interceptor](#module-infrastructurecommoninterceptorresponseinterceptor)
    - [Table of contents](#table-of-contents-66)
  - [Module: infrastructure/common/strategies/jwtRefresh.strategy](#module-infrastructurecommonstrategiesjwtrefreshstrategy)
    - [Table of contents](#table-of-contents-67)
  - [Module: infrastructure/common/strategies/jwt.strategy](#module-infrastructurecommonstrategiesjwtstrategy)
    - [Table of contents](#table-of-contents-68)
  - [Module: infrastructure/common/strategies/local.strategy](#module-infrastructurecommonstrategieslocalstrategy)
    - [Table of contents](#table-of-contents-69)
  - [Module: infrastructure/common/swagger/response.decorator](#module-infrastructurecommonswaggerresponsedecorator)
    - [Table of contents](#table-of-contents-70)
    - [Functions](#functions)
  - [Module: infrastructure/config/environment/environment-config.module](#module-infrastructureconfigenvironmentenvironment-configmodule)
    - [Table of contents](#table-of-contents-71)
  - [Module: infrastructure/config/environment/environment-config.service](#module-infrastructureconfigenvironmentenvironment-configservice)
    - [Table of contents](#table-of-contents-72)
  - [Module: infrastructure/config/environment/environment-config.validation](#module-infrastructureconfigenvironmentenvironment-configvalidation)
    - [Table of contents](#table-of-contents-73)
    - [Functions](#functions-1)
  - [Module: infrastructure/controllers/auth/auth.controller](#module-infrastructurecontrollersauthauthcontroller)
    - [Table of contents](#table-of-contents-74)
  - [Module: infrastructure/controllers/auth/auth-dto.class](#module-infrastructurecontrollersauthauth-dtoclass)
    - [Table of contents](#table-of-contents-75)
  - [Module: infrastructure/controllers/auth/auth.presenter](#module-infrastructurecontrollersauthauthpresenter)
    - [Table of contents](#table-of-contents-76)
  - [Module: infrastructure/controllers/controllers.module](#module-infrastructurecontrollerscontrollersmodule)
    - [Table of contents](#table-of-contents-77)
  - [Module: infrastructure/exceptions/exceptions.module](#module-infrastructureexceptionsexceptionsmodule)
    - [Table of contents](#table-of-contents-78)
  - [Module: infrastructure/exceptions/exceptions.service](#module-infrastructureexceptionsexceptionsservice)
    - [Table of contents](#table-of-contents-79)
  - [Module: infrastructure/logger/logger.module](#module-infrastructureloggerloggermodule)
    - [Table of contents](#table-of-contents-80)
  - [Module: infrastructure/logger/logger.service](#module-infrastructureloggerloggerservice)
    - [Table of contents](#table-of-contents-81)
    - [Variables](#variables)
  - [Module: infrastructure/mongo/mongo.module](#module-infrastructuremongomongomodule)
    - [Table of contents](#table-of-contents-82)
    - [Functions](#functions-2)
  - [Module: infrastructure/repositories/repositories.module](#module-infrastructurerepositoriesrepositoriesmodule)
    - [Table of contents](#table-of-contents-83)
  - [Module: infrastructure/repositories/user/user.repository](#module-infrastructurerepositoriesuseruserrepository)
    - [Table of contents](#table-of-contents-84)
  - [Module: infrastructure/schemas/user.schema](#module-infrastructureschemasuserschema)
    - [Table of contents](#table-of-contents-85)
    - [Type Aliases](#type-aliases)
    - [Variables](#variables-1)
  - [Module: infrastructure/services/bcrypt/bcrypt.module](#module-infrastructureservicesbcryptbcryptmodule)
    - [Table of contents](#table-of-contents-86)
  - [Module: infrastructure/services/bcrypt/bcrypt.service](#module-infrastructureservicesbcryptbcryptservice)
    - [Table of contents](#table-of-contents-87)
  - [Module: infrastructure/services/jwt/jwt.module](#module-infrastructureservicesjwtjwtmodule)
    - [Table of contents](#table-of-contents-88)
  - [Module: infrastructure/services/jwt/jwt.service](#module-infrastructureservicesjwtjwtservice)
    - [Table of contents](#table-of-contents-89)
  - [Module: infrastructure/usecases-proxy/usecases-proxy](#module-infrastructureusecases-proxyusecases-proxy)
    - [Table of contents](#table-of-contents-90)
  - [Module: infrastructure/usecases-proxy/usecases-proxy.module](#module-infrastructureusecases-proxyusecases-proxymodule)
    - [Table of contents](#table-of-contents-91)
  - [Module: main](#module-main)
  - [Module: usecases/auth/isAuthenticated.usecases](#module-usecasesauthisauthenticatedusecases)
    - [Table of contents](#table-of-contents-92)
  - [Module: usecases/auth/login.usecases](#module-usecasesauthloginusecases)
    - [Table of contents](#table-of-contents-93)
  - [Module: usecases/auth/logout.usecases](#module-usecasesauthlogoutusecases)
    - [Table of contents](#table-of-contents-94)
  - [Module: usecases/auth/register.usecases](#module-usecasesauthregisterusecases)
    - [Table of contents](#table-of-contents-95)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<a name="readmemd"></a>

api / [Exports](#modulesmd)

# API Endpoints

# Ruta: `/api/auth/register`

#### Descripción:

Este endpoint se utiliza para registrar un nuevo usuario.

#### Método: `POST`

#### Información necesaria en el cuerpo (Body):

```json
{
  "email": "string",
  "username": "string",
  "password": "string",
  "confirmPassword": "string"
}
```

#### Respuesta positiva:

- Código: `201`
- Tipo de respuesta: JSON

```json
{
  "data": "User with email 'email' and username 'username' has been registered",
  "isArray": false,
  "path": "/api/auth/register",
  "duration": "101ms",
  "method": "POST"
}
```

#### Respuestas negativas:

1. Código: `409`

   - Tipo de respuesta: JSON

   ```json
   {
     "statusCode": 409,
     "timestamp": "2024-02-14T01:00:10.052Z",
     "path": "/api/auth/register",
     "message": "User with email 'testing98@testing.com' and username 'testing98' already exists"
   }
   ```

2. Código: `400`

   - Tipo de respuesta: JSON

   ```json
   {
     "statusCode": 400,
     "timestamp": "2024-02-14T01:00:22.222Z",
     "path": "/api/auth/register",
     "message": [
       "email must be an email",
       "email must be a string",
       "email should not be empty"
     ],
     "error": "Bad Request"
   }
   ```

3. Código: `400`

   - Tipo de respuesta: JSON

   ```json
   {
     "statusCode": 400,
     "timestamp": "2024-02-14T01:00:37.218Z",
     "path": "/api/auth/register",
     "message": ["username must be a string", "username should not be empty"],
     "error": "Bad Request"
   }
   ```

4. Código: `400`

   - Tipo de respuesta: JSON

   ```json
   {
     "statusCode": 400,
     "timestamp": "2024-02-14T01:00:49.322Z",
     "path": "/api/auth/register",
     "message": [
       "password must be a string",
       "password should not be empty",
       "password is not strong enough"
     ],
     "error": "Bad Request"
   }
   ```

5. Código: `400`

   - Tipo de respuesta: JSON

   ```json
   {
     "statusCode": 400,
     "timestamp": "2024-02-14T01:01:52.487Z",
     "path": "/api/auth/register",
     "message": [
       "confirmPassword must be a string",
       "confirmPassword should not be empty",
       "confirmPassword is not strong enough"
     ],
     "error": "Bad Request"
   }
   ```

6. Código: `409`

   - Tipo de respuesta: JSON

   ```json
   {
     "statusCode": 409,
     "timestamp": "2024-02-14T01:06:15.629Z",
     "path": "/api/auth/register",
     "message": "Passwords do not match"
   }
   ```

7. Código: `500`
   - Tipo de respuesta: JSON
   ```json
   {
     "statusCode": 500,
     "timestamp": "2024-02-14T01:03:02.837Z",
     "path": "/api/auth/register",
     "message": "connect ECONNREFUSED ::1:27001, connect ECONNREFUSED 127.0.0.1:27001",
     "code_error": null
   }
   ```

# Ruta: `/api/auth/login`

#### Descripción:

Este endpoint se utiliza para que un usuario inicie sesión en el sistema.

#### Método: `POST`

#### Información necesaria en el cuerpo (Body):

```json
{
  "username": "string",
  "password": "string"
}
```

#### Respuesta positiva:

- Código: `201`
- Tipo de respuesta: JSON

```json
{
  "data": "Login successful",
  "isArray": false,
  "path": "/api/auth/login",
  "duration": "89ms",
  "method": "POST"
}
```

#### Respuestas negativas:

1. Código: `401`

   - Tipo de respuesta: JSON

   ```json
   {
     "statusCode": 401,
     "timestamp": "2024-02-14T01:08:55.447Z",
     "path": "/api/auth/login",
     "message": "Invalid username or password."
   }
   ```

2. Código: `401`

   - Tipo de respuesta: JSON

   ```json
   {
     "statusCode": 401,
     "timestamp": "2024-02-14T01:09:14.874Z",
     "path": "/api/auth/login",
     "message": "Unauthorized"
   }
   ```

3. Código: `500`

   - Tipo de respuesta: JSON

   ```json
   {
     "statusCode": 500,
     "timestamp": "2024-02-14T01:03:02.837Z",
     "path": "/api/auth/register",
     "message": "connect ECONNREFUSED ::1:27001, connect ECONNREFUSED 127.0.0.1:27001",
     "code_error": null
   }
   ```

# Ruta: `/api/auth/is_authenticated`

#### Descripción:

Este endpoint se utiliza para verificar si el usuario actual está autenticado.

#### Método: `GET`

#### Información necesaria:

No hay información requerida en el cuerpo de la solicitud. La autenticación se verifica a través de cookies.

#### Respuesta positiva:

- Código: `200`
- Tipo de respuesta: JSON

```json
{
  "data": {
    "username": "testingd98"
  },
  "isArray": false,
  "path": "/api/auth/is_authenticated",
  "duration": "6ms",
  "method": "GET"
}
```

#### Respuesta negativa:

- Código: `401`
- Tipo de respuesta: JSON

```json
{
  "statusCode": 401,
  "timestamp": "2024-02-14T01:11:54.520Z",
  "path": "/api/auth/is_authenticated",
  "message": "Unauthorized"
}
```

# Ruta: `/api/auth/refresh`

#### Descripción:

Este endpoint se utiliza para solicitar una actualización de la sesión de autenticación.

#### Método: `GET`

#### Información necesaria:

No se requiere información en el cuerpo de la solicitud.

#### Respuesta positiva:

- Código: `200`
- Tipo de respuesta: JSON

```json
{
  "data": "Refresh successful",
  "isArray": false,
  "path": "/api/auth/refresh",
  "duration": "1ms",
  "method": "GET"
}
```

#### Respuesta negativa:

- Código: `401`
- Tipo de respuesta: JSON

```json
{
  "statusCode": 401,
  "timestamp": "2024-02-14T01:14:36.073Z",
  "path": "/api/auth/refresh",
  "message": "Unauthorized"
}
```

# Ruta: `/api/auth/logout`

#### Descripción:

Este endpoint se utiliza para cerrar la sesión del usuario y realizar el logout.

#### Método: `POST`

#### Información necesaria:

No se requiere información en el cuerpo de la solicitud.

#### Respuesta positiva:

- Código: `200`
- Tipo de respuesta: JSON

```json
{
  "data": "Logout successful",
  "isArray": false,
  "path": "/api/auth/logout",
  "duration": "1ms",
  "method": "POST"
}
```

#### Respuesta negativa:

- Código: `401`
- Tipo de respuesta: JSON

```json
{
  "statusCode": 401,
  "timestamp": "2024-02-14T01:14:36.073Z",
  "path": "/api/auth/logout",
  "message": "Unauthorized"
}
```

# Classes

<a name="classesapp_moduleappmodulemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [app.module](#modulesapp_modulemd) / AppModule

## Class: AppModule

[app.module](#modulesapp_modulemd).AppModule

Represents the main module of the application.
This module is responsible for importing and configuring other modules,
as well as defining controllers and providers.

### Table of contents

#### Constructors

- [constructor](#constructor)

### Constructors

#### constructor

• **new AppModule**(): [`AppModule`](#classesapp_moduleappmodulemd)

##### Returns

[`AppModule`](#classesapp_moduleappmodulemd)

<a name="classesdomain_model_userusermd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [domain/model/user](#modulesdomain_model_usermd) / User

## Class: User

[domain/model/user](#modulesdomain_model_usermd).User

Represents a user.

### Hierarchy

- **`User`**

  ↳ [`UserModel`](#classesdomain_model_userusermodelmd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [createDate](#createdate)
- [email](#email)
- [hashRefreshToken](#hashrefreshtoken)
- [id](#id)
- [lastLogin](#lastlogin)
- [updatedDate](#updateddate)
- [username](#username)

### Constructors

#### constructor

• **new User**(): [`User`](#classesdomain_model_userusermd)

##### Returns

[`User`](#classesdomain_model_userusermd)

### Properties

#### createDate

• **createDate**: `Date`

##### Defined in

[api/src/domain/model/user.ts:8](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/model/user.ts#L8)

---

#### email

• **email**: `string`

##### Defined in

[api/src/domain/model/user.ts:7](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/model/user.ts#L7)

---

#### hashRefreshToken

• **hashRefreshToken**: `string`

##### Defined in

[api/src/domain/model/user.ts:11](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/model/user.ts#L11)

---

#### id

• **id**: `string`

##### Defined in

[api/src/domain/model/user.ts:5](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/model/user.ts#L5)

---

#### lastLogin

• **lastLogin**: `Date`

##### Defined in

[api/src/domain/model/user.ts:10](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/model/user.ts#L10)

---

#### updatedDate

• **updatedDate**: `Date`

##### Defined in

[api/src/domain/model/user.ts:9](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/model/user.ts#L9)

---

#### username

• **username**: `string`

##### Defined in

[api/src/domain/model/user.ts:6](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/model/user.ts#L6)

<a name="classesdomain_model_userusermodelmd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [domain/model/user](#modulesdomain_model_usermd) / UserModel

## Class: UserModel

[domain/model/user](#modulesdomain_model_usermd).UserModel

Represents a user model.

### Hierarchy

- [`User`](#classesdomain_model_userusermd)

  ↳ **`UserModel`**

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [createDate](#createdate)
- [email](#email)
- [hashRefreshToken](#hashrefreshtoken)
- [id](#id)
- [lastLogin](#lastlogin)
- [password](#password)
- [updatedDate](#updateddate)
- [username](#username)

### Constructors

#### constructor

• **new UserModel**(): [`UserModel`](#classesdomain_model_userusermodelmd)

##### Returns

[`UserModel`](#classesdomain_model_userusermodelmd)

##### Inherited from

[User](#classesdomain_model_userusermd).[constructor](#constructor)

### Properties

#### createDate

• **createDate**: `Date`

##### Inherited from

[User](#classesdomain_model_userusermd).[createDate](#createdate)

##### Defined in

[api/src/domain/model/user.ts:8](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/model/user.ts#L8)

---

#### email

• **email**: `string`

##### Inherited from

[User](#classesdomain_model_userusermd).[email](#email)

##### Defined in

[api/src/domain/model/user.ts:7](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/model/user.ts#L7)

---

#### hashRefreshToken

• **hashRefreshToken**: `string`

##### Inherited from

[User](#classesdomain_model_userusermd).[hashRefreshToken](#hashrefreshtoken)

##### Defined in

[api/src/domain/model/user.ts:11](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/model/user.ts#L11)

---

#### id

• **id**: `string`

##### Inherited from

[User](#classesdomain_model_userusermd).[id](#id)

##### Defined in

[api/src/domain/model/user.ts:5](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/model/user.ts#L5)

---

#### lastLogin

• **lastLogin**: `Date`

##### Inherited from

[User](#classesdomain_model_userusermd).[lastLogin](#lastlogin)

##### Defined in

[api/src/domain/model/user.ts:10](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/model/user.ts#L10)

---

#### password

• **password**: `string`

##### Defined in

[api/src/domain/model/user.ts:18](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/model/user.ts#L18)

---

#### updatedDate

• **updatedDate**: `Date`

##### Inherited from

[User](#classesdomain_model_userusermd).[updatedDate](#updateddate)

##### Defined in

[api/src/domain/model/user.ts:9](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/model/user.ts#L9)

---

#### username

• **username**: `string`

##### Inherited from

[User](#classesdomain_model_userusermd).[username](#username)

##### Defined in

[api/src/domain/model/user.ts:6](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/model/user.ts#L6)

<a name="classesinfrastructure_common_filter_exception_filterallexceptionfiltermd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/common/filter/exception.filter](#modulesinfrastructure_common_filter_exception_filtermd) / AllExceptionFilter

## Class: AllExceptionFilter

[infrastructure/common/filter/exception.filter](#modulesinfrastructure_common_filter_exception_filtermd).AllExceptionFilter

### Implements

- `ExceptionFilter`

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [logger](#logger)

#### Methods

- [catch](#catch)
- [logMessage](#logmessage)

### Constructors

#### constructor

• **new AllExceptionFilter**(`logger`): [`AllExceptionFilter`](#classesinfrastructure_common_filter_exception_filterallexceptionfiltermd)

Creates an instance of the ExceptionFilter class.

##### Parameters

| Name     | Type                                                                           | Description                          |
| :------- | :----------------------------------------------------------------------------- | :----------------------------------- |
| `logger` | [`LoggerService`](#classesinfrastructure_logger_logger_serviceloggerservicemd) | The logger service used for logging. |

##### Returns

[`AllExceptionFilter`](#classesinfrastructure_common_filter_exception_filterallexceptionfiltermd)

##### Defined in

[api/src/infrastructure/common/filter/exception.filter.ts:18](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/filter/exception.filter.ts#L18)

### Properties

#### logger

• `Private` `Readonly` **logger**: [`LoggerService`](#classesinfrastructure_logger_logger_serviceloggerservicemd)

The logger service used for logging.

##### Defined in

[api/src/infrastructure/common/filter/exception.filter.ts:18](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/filter/exception.filter.ts#L18)

### Methods

#### catch

▸ **catch**(`exception`, `host`): `void`

Catches and handles exceptions thrown during request processing.

##### Parameters

| Name        | Type            | Description                                                     |
| :---------- | :-------------- | :-------------------------------------------------------------- |
| `exception` | `Error`         | The exception that was thrown.                                  |
| `host`      | `ArgumentsHost` | The arguments host containing the request and response objects. |

##### Returns

`void`

##### Implementation of

ExceptionFilter.catch

##### Defined in

[api/src/infrastructure/common/filter/exception.filter.ts:25](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/filter/exception.filter.ts#L25)

---

#### logMessage

▸ **logMessage**(`«destructured»`): `void`

Logs the error message and request details.

##### Parameters

| Name             | Type                                                                                   |
| :--------------- | :------------------------------------------------------------------------------------- |
| `«destructured»` | `Object`                                                                               |
| › `exception`    | `Error`                                                                                |
| › `message`      | [`IError`](#interfacesdomain_filter_filter_interfaceierrormd)                          |
| › `request`      | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| › `status`       | `number`                                                                               |

##### Returns

`void`

##### Defined in

[api/src/infrastructure/common/filter/exception.filter.ts:61](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/filter/exception.filter.ts#L61)

<a name="classesinfrastructure_common_guards_jwtauth_guardjwtauthguardmd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/common/guards/jwtAuth.guard](#modulesinfrastructure_common_guards_jwtauth_guardmd) / JwtAuthGuard

## Class: JwtAuthGuard

[infrastructure/common/guards/jwtAuth.guard](#modulesinfrastructure_common_guards_jwtauth_guardmd).JwtAuthGuard

### Hierarchy

- `IAuthGuard`

  ↳ **`JwtAuthGuard`**

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [arguments](#arguments)
- [caller](#caller)
- [length](#length)
- [name](#name)

#### Methods

- [canActivate](#canactivate)
- [getAuthenticateOptions](#getauthenticateoptions)
- [getRequest](#getrequest)
- [handleRequest](#handlerequest)
- [logIn](#login)
- [[hasInstance]](infrastructure_common_guards_jwtAuth_guard.JwtAuthGuard.md#[hasinstance])
- [apply](#apply)
- [bind](#bind)
- [call](#call)
- [toString](#tostring)

### Constructors

#### constructor

• **new JwtAuthGuard**(`...args`): [`JwtAuthGuard`](#classesinfrastructure_common_guards_jwtauth_guardjwtauthguardmd)

##### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

##### Returns

[`JwtAuthGuard`](#classesinfrastructure_common_guards_jwtauth_guardjwtauthguardmd)

##### Inherited from

AuthGuard('jwt').constructor

##### Defined in

node*modules/.pnpm/@nestjs+passport@10.0.3*@nestjs+common@10.3.3_passport@0.7.0/node_modules/@nestjs/passport/dist/interfaces/type.interface.d.ts:2

### Properties

#### arguments

▪ `Static` **arguments**: `any`

##### Inherited from

AuthGuard('jwt').arguments

##### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:305

---

#### caller

▪ `Static` **caller**: `Function`

##### Inherited from

AuthGuard('jwt').caller

##### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:306

---

#### length

▪ `Static` `Readonly` **length**: `number`

##### Inherited from

AuthGuard('jwt').length

##### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:302

---

#### name

▪ `Static` `Readonly` **name**: `string`

Returns the name of the function. Function names are read-only and can not be changed.

##### Inherited from

AuthGuard('jwt').name

##### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts:95

### Methods

#### canActivate

▸ **canActivate**(`context`): `boolean` \| `Promise`\<`boolean`\> \| `Observable`\<`boolean`\>

##### Parameters

| Name      | Type               | Description                                                                               |
| :-------- | :----------------- | :---------------------------------------------------------------------------------------- |
| `context` | `ExecutionContext` | Current execution context. Provides access to details about the current request pipeline. |

##### Returns

`boolean` \| `Promise`\<`boolean`\> \| `Observable`\<`boolean`\>

Value indicating whether or not the current request is allowed to
proceed.

##### Inherited from

AuthGuard('jwt').canActivate

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/interfaces/features/can-activate.interface.d.ts:21

---

#### getAuthenticateOptions

▸ **getAuthenticateOptions**(`context`): `IAuthModuleOptions`\<`any`\>

##### Parameters

| Name      | Type               |
| :-------- | :----------------- |
| `context` | `ExecutionContext` |

##### Returns

`IAuthModuleOptions`\<`any`\>

##### Inherited from

AuthGuard('jwt').getAuthenticateOptions

##### Defined in

node*modules/.pnpm/@nestjs+passport@10.0.3*@nestjs+common@10.3.3_passport@0.7.0/node_modules/@nestjs/passport/dist/auth.guard.d.ts:9

---

#### getRequest

▸ **getRequest**(`context`): `any`

##### Parameters

| Name      | Type               |
| :-------- | :----------------- |
| `context` | `ExecutionContext` |

##### Returns

`any`

##### Inherited from

AuthGuard('jwt').getRequest

##### Defined in

node*modules/.pnpm/@nestjs+passport@10.0.3*@nestjs+common@10.3.3_passport@0.7.0/node_modules/@nestjs/passport/dist/auth.guard.d.ts:10

---

#### handleRequest

▸ **handleRequest**\<`TUser`\>(`err`, `user`, `info`, `context`, `status?`): `TUser`

##### Type parameters

| Name    | Type  |
| :------ | :---- |
| `TUser` | `any` |

##### Parameters

| Name      | Type               |
| :-------- | :----------------- |
| `err`     | `any`              |
| `user`    | `any`              |
| `info`    | `any`              |
| `context` | `ExecutionContext` |
| `status?` | `any`              |

##### Returns

`TUser`

##### Inherited from

AuthGuard('jwt').handleRequest

##### Defined in

node*modules/.pnpm/@nestjs+passport@10.0.3*@nestjs+common@10.3.3_passport@0.7.0/node_modules/@nestjs/passport/dist/auth.guard.d.ts:8

---

#### logIn

▸ **logIn**\<`TRequest`\>(`request`): `Promise`\<`void`\>

##### Type parameters

| Name       | Type                     |
| :--------- | :----------------------- |
| `TRequest` | extends `Object` = `any` |

##### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `request` | `TRequest` |

##### Returns

`Promise`\<`void`\>

##### Inherited from

AuthGuard('jwt').logIn

##### Defined in

node*modules/.pnpm/@nestjs+passport@10.0.3*@nestjs+common@10.3.3_passport@0.7.0/node_modules/@nestjs/passport/dist/auth.guard.d.ts:5

---

#### [hasInstance]

▸ **[hasInstance]**(`value`): `boolean`

Determines whether the given value inherits from this function if this function was used
as a constructor function.

A constructor function can control which objects are recognized as its instances by
'instanceof' by overriding this method.

##### Parameters

| Name    | Type  |
| :------ | :---- |
| `value` | `any` |

##### Returns

`boolean`

##### Inherited from

AuthGuard('jwt').[hasInstance]

##### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:164

---

#### apply

▸ **apply**(`this`, `thisArg`, `argArray?`): `any`

Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.

##### Parameters

| Name        | Type       | Description                                      |
| :---------- | :--------- | :----------------------------------------------- |
| `this`      | `Function` | -                                                |
| `thisArg`   | `any`      | The object to be used as the this object.        |
| `argArray?` | `any`      | A set of arguments to be passed to the function. |

##### Returns

`any`

##### Inherited from

AuthGuard('jwt').apply

##### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:281

---

#### bind

▸ **bind**(`this`, `thisArg`, `...argArray`): `any`

For a given function, creates a bound function that has the same body as the original function.
The this object of the bound function is associated with the specified object, and has the specified initial parameters.

##### Parameters

| Name          | Type       | Description                                                            |
| :------------ | :--------- | :--------------------------------------------------------------------- |
| `this`        | `Function` | -                                                                      |
| `thisArg`     | `any`      | An object to which the this keyword can refer inside the new function. |
| `...argArray` | `any`[]    | A list of arguments to be passed to the new function.                  |

##### Returns

`any`

##### Inherited from

AuthGuard('jwt').bind

##### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:296

---

#### call

▸ **call**(`this`, `thisArg`, `...argArray`): `any`

Calls a method of an object, substituting another object for the current object.

##### Parameters

| Name          | Type       | Description                                     |
| :------------ | :--------- | :---------------------------------------------- |
| `this`        | `Function` | -                                               |
| `thisArg`     | `any`      | The object to be used as the current object.    |
| `...argArray` | `any`[]    | A list of arguments to be passed to the method. |

##### Returns

`any`

##### Inherited from

AuthGuard('jwt').call

##### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:288

---

#### toString

▸ **toString**(): `string`

Returns a string representation of a function.

##### Returns

`string`

##### Inherited from

AuthGuard('jwt').toString

##### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:299

<a name="classesinfrastructure_common_guards_jwtrefresh_guarddefaultmd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/common/guards/jwtRefresh.guard](#modulesinfrastructure_common_guards_jwtrefresh_guardmd) / default

## Class: default

[infrastructure/common/guards/jwtRefresh.guard](#modulesinfrastructure_common_guards_jwtrefresh_guardmd).default

### Hierarchy

- `IAuthGuard`

  ↳ **`default`**

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [arguments](#arguments)
- [caller](#caller)
- [length](#length)
- [name](#name)

#### Methods

- [canActivate](#canactivate)
- [getAuthenticateOptions](#getauthenticateoptions)
- [getRequest](#getrequest)
- [handleRequest](#handlerequest)
- [logIn](#login)
- [[hasInstance]](infrastructure_common_guards_jwtRefresh_guard.default.md#[hasinstance])
- [apply](#apply)
- [bind](#bind)
- [call](#call)
- [toString](#tostring)

### Constructors

#### constructor

• **new default**(`...args`): [`default`](#classesinfrastructure_common_guards_jwtrefresh_guarddefaultmd)

##### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

##### Returns

[`default`](#classesinfrastructure_common_guards_jwtrefresh_guarddefaultmd)

##### Inherited from

AuthGuard('jwt-refresh-token').constructor

##### Defined in

node*modules/.pnpm/@nestjs+passport@10.0.3*@nestjs+common@10.3.3_passport@0.7.0/node_modules/@nestjs/passport/dist/interfaces/type.interface.d.ts:2

### Properties

#### arguments

▪ `Static` **arguments**: `any`

##### Inherited from

AuthGuard('jwt-refresh-token').arguments

##### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:305

---

#### caller

▪ `Static` **caller**: `Function`

##### Inherited from

AuthGuard('jwt-refresh-token').caller

##### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:306

---

#### length

▪ `Static` `Readonly` **length**: `number`

##### Inherited from

AuthGuard('jwt-refresh-token').length

##### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:302

---

#### name

▪ `Static` `Readonly` **name**: `string`

Returns the name of the function. Function names are read-only and can not be changed.

##### Inherited from

AuthGuard('jwt-refresh-token').name

##### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts:95

### Methods

#### canActivate

▸ **canActivate**(`context`): `boolean` \| `Promise`\<`boolean`\> \| `Observable`\<`boolean`\>

##### Parameters

| Name      | Type               | Description                                                                               |
| :-------- | :----------------- | :---------------------------------------------------------------------------------------- |
| `context` | `ExecutionContext` | Current execution context. Provides access to details about the current request pipeline. |

##### Returns

`boolean` \| `Promise`\<`boolean`\> \| `Observable`\<`boolean`\>

Value indicating whether or not the current request is allowed to
proceed.

##### Inherited from

AuthGuard('jwt-refresh-token').canActivate

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/interfaces/features/can-activate.interface.d.ts:21

---

#### getAuthenticateOptions

▸ **getAuthenticateOptions**(`context`): `IAuthModuleOptions`\<`any`\>

##### Parameters

| Name      | Type               |
| :-------- | :----------------- |
| `context` | `ExecutionContext` |

##### Returns

`IAuthModuleOptions`\<`any`\>

##### Inherited from

AuthGuard('jwt-refresh-token').getAuthenticateOptions

##### Defined in

node*modules/.pnpm/@nestjs+passport@10.0.3*@nestjs+common@10.3.3_passport@0.7.0/node_modules/@nestjs/passport/dist/auth.guard.d.ts:9

---

#### getRequest

▸ **getRequest**(`context`): `any`

##### Parameters

| Name      | Type               |
| :-------- | :----------------- |
| `context` | `ExecutionContext` |

##### Returns

`any`

##### Inherited from

AuthGuard('jwt-refresh-token').getRequest

##### Defined in

node*modules/.pnpm/@nestjs+passport@10.0.3*@nestjs+common@10.3.3_passport@0.7.0/node_modules/@nestjs/passport/dist/auth.guard.d.ts:10

---

#### handleRequest

▸ **handleRequest**\<`TUser`\>(`err`, `user`, `info`, `context`, `status?`): `TUser`

##### Type parameters

| Name    | Type  |
| :------ | :---- |
| `TUser` | `any` |

##### Parameters

| Name      | Type               |
| :-------- | :----------------- |
| `err`     | `any`              |
| `user`    | `any`              |
| `info`    | `any`              |
| `context` | `ExecutionContext` |
| `status?` | `any`              |

##### Returns

`TUser`

##### Inherited from

AuthGuard('jwt-refresh-token').handleRequest

##### Defined in

node*modules/.pnpm/@nestjs+passport@10.0.3*@nestjs+common@10.3.3_passport@0.7.0/node_modules/@nestjs/passport/dist/auth.guard.d.ts:8

---

#### logIn

▸ **logIn**\<`TRequest`\>(`request`): `Promise`\<`void`\>

##### Type parameters

| Name       | Type                     |
| :--------- | :----------------------- |
| `TRequest` | extends `Object` = `any` |

##### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `request` | `TRequest` |

##### Returns

`Promise`\<`void`\>

##### Inherited from

AuthGuard('jwt-refresh-token').logIn

##### Defined in

node*modules/.pnpm/@nestjs+passport@10.0.3*@nestjs+common@10.3.3_passport@0.7.0/node_modules/@nestjs/passport/dist/auth.guard.d.ts:5

---

#### [hasInstance]

▸ **[hasInstance]**(`value`): `boolean`

Determines whether the given value inherits from this function if this function was used
as a constructor function.

A constructor function can control which objects are recognized as its instances by
'instanceof' by overriding this method.

##### Parameters

| Name    | Type  |
| :------ | :---- |
| `value` | `any` |

##### Returns

`boolean`

##### Inherited from

AuthGuard('jwt-refresh-token').[hasInstance]

##### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:164

---

#### apply

▸ **apply**(`this`, `thisArg`, `argArray?`): `any`

Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.

##### Parameters

| Name        | Type       | Description                                      |
| :---------- | :--------- | :----------------------------------------------- |
| `this`      | `Function` | -                                                |
| `thisArg`   | `any`      | The object to be used as the this object.        |
| `argArray?` | `any`      | A set of arguments to be passed to the function. |

##### Returns

`any`

##### Inherited from

AuthGuard('jwt-refresh-token').apply

##### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:281

---

#### bind

▸ **bind**(`this`, `thisArg`, `...argArray`): `any`

For a given function, creates a bound function that has the same body as the original function.
The this object of the bound function is associated with the specified object, and has the specified initial parameters.

##### Parameters

| Name          | Type       | Description                                                            |
| :------------ | :--------- | :--------------------------------------------------------------------- |
| `this`        | `Function` | -                                                                      |
| `thisArg`     | `any`      | An object to which the this keyword can refer inside the new function. |
| `...argArray` | `any`[]    | A list of arguments to be passed to the new function.                  |

##### Returns

`any`

##### Inherited from

AuthGuard('jwt-refresh-token').bind

##### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:296

---

#### call

▸ **call**(`this`, `thisArg`, `...argArray`): `any`

Calls a method of an object, substituting another object for the current object.

##### Parameters

| Name          | Type       | Description                                     |
| :------------ | :--------- | :---------------------------------------------- |
| `this`        | `Function` | -                                               |
| `thisArg`     | `any`      | The object to be used as the current object.    |
| `...argArray` | `any`[]    | A list of arguments to be passed to the method. |

##### Returns

`any`

##### Inherited from

AuthGuard('jwt-refresh-token').call

##### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:288

---

#### toString

▸ **toString**(): `string`

Returns a string representation of a function.

##### Returns

`string`

##### Inherited from

AuthGuard('jwt-refresh-token').toString

##### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:299

<a name="classesinfrastructure_common_guards_login_guardloginguardmd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/common/guards/login.guard](#modulesinfrastructure_common_guards_login_guardmd) / LoginGuard

## Class: LoginGuard

[infrastructure/common/guards/login.guard](#modulesinfrastructure_common_guards_login_guardmd).LoginGuard

### Hierarchy

- `IAuthGuard`

  ↳ **`LoginGuard`**

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [arguments](#arguments)
- [caller](#caller)
- [length](#length)
- [name](#name)

#### Methods

- [canActivate](#canactivate)
- [getAuthenticateOptions](#getauthenticateoptions)
- [getRequest](#getrequest)
- [handleRequest](#handlerequest)
- [logIn](#login)
- [[hasInstance]](infrastructure_common_guards_login_guard.LoginGuard.md#[hasinstance])
- [apply](#apply)
- [bind](#bind)
- [call](#call)
- [toString](#tostring)

### Constructors

#### constructor

• **new LoginGuard**(`...args`): [`LoginGuard`](#classesinfrastructure_common_guards_login_guardloginguardmd)

##### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

##### Returns

[`LoginGuard`](#classesinfrastructure_common_guards_login_guardloginguardmd)

##### Inherited from

AuthGuard('local').constructor

##### Defined in

node*modules/.pnpm/@nestjs+passport@10.0.3*@nestjs+common@10.3.3_passport@0.7.0/node_modules/@nestjs/passport/dist/interfaces/type.interface.d.ts:2

### Properties

#### arguments

▪ `Static` **arguments**: `any`

##### Inherited from

AuthGuard('local').arguments

##### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:305

---

#### caller

▪ `Static` **caller**: `Function`

##### Inherited from

AuthGuard('local').caller

##### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:306

---

#### length

▪ `Static` `Readonly` **length**: `number`

##### Inherited from

AuthGuard('local').length

##### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:302

---

#### name

▪ `Static` `Readonly` **name**: `string`

Returns the name of the function. Function names are read-only and can not be changed.

##### Inherited from

AuthGuard('local').name

##### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts:95

### Methods

#### canActivate

▸ **canActivate**(`context`): `boolean` \| `Promise`\<`boolean`\> \| `Observable`\<`boolean`\>

##### Parameters

| Name      | Type               | Description                                                                               |
| :-------- | :----------------- | :---------------------------------------------------------------------------------------- |
| `context` | `ExecutionContext` | Current execution context. Provides access to details about the current request pipeline. |

##### Returns

`boolean` \| `Promise`\<`boolean`\> \| `Observable`\<`boolean`\>

Value indicating whether or not the current request is allowed to
proceed.

##### Inherited from

AuthGuard('local').canActivate

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/interfaces/features/can-activate.interface.d.ts:21

---

#### getAuthenticateOptions

▸ **getAuthenticateOptions**(`context`): `IAuthModuleOptions`\<`any`\>

##### Parameters

| Name      | Type               |
| :-------- | :----------------- |
| `context` | `ExecutionContext` |

##### Returns

`IAuthModuleOptions`\<`any`\>

##### Inherited from

AuthGuard('local').getAuthenticateOptions

##### Defined in

node*modules/.pnpm/@nestjs+passport@10.0.3*@nestjs+common@10.3.3_passport@0.7.0/node_modules/@nestjs/passport/dist/auth.guard.d.ts:9

---

#### getRequest

▸ **getRequest**(`context`): `any`

##### Parameters

| Name      | Type               |
| :-------- | :----------------- |
| `context` | `ExecutionContext` |

##### Returns

`any`

##### Inherited from

AuthGuard('local').getRequest

##### Defined in

node*modules/.pnpm/@nestjs+passport@10.0.3*@nestjs+common@10.3.3_passport@0.7.0/node_modules/@nestjs/passport/dist/auth.guard.d.ts:10

---

#### handleRequest

▸ **handleRequest**\<`TUser`\>(`err`, `user`, `info`, `context`, `status?`): `TUser`

##### Type parameters

| Name    | Type  |
| :------ | :---- |
| `TUser` | `any` |

##### Parameters

| Name      | Type               |
| :-------- | :----------------- |
| `err`     | `any`              |
| `user`    | `any`              |
| `info`    | `any`              |
| `context` | `ExecutionContext` |
| `status?` | `any`              |

##### Returns

`TUser`

##### Inherited from

AuthGuard('local').handleRequest

##### Defined in

node*modules/.pnpm/@nestjs+passport@10.0.3*@nestjs+common@10.3.3_passport@0.7.0/node_modules/@nestjs/passport/dist/auth.guard.d.ts:8

---

#### logIn

▸ **logIn**\<`TRequest`\>(`request`): `Promise`\<`void`\>

##### Type parameters

| Name       | Type                     |
| :--------- | :----------------------- |
| `TRequest` | extends `Object` = `any` |

##### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `request` | `TRequest` |

##### Returns

`Promise`\<`void`\>

##### Inherited from

AuthGuard('local').logIn

##### Defined in

node*modules/.pnpm/@nestjs+passport@10.0.3*@nestjs+common@10.3.3_passport@0.7.0/node_modules/@nestjs/passport/dist/auth.guard.d.ts:5

---

#### [hasInstance]

▸ **[hasInstance]**(`value`): `boolean`

Determines whether the given value inherits from this function if this function was used
as a constructor function.

A constructor function can control which objects are recognized as its instances by
'instanceof' by overriding this method.

##### Parameters

| Name    | Type  |
| :------ | :---- |
| `value` | `any` |

##### Returns

`boolean`

##### Inherited from

AuthGuard('local').[hasInstance]

##### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:164

---

#### apply

▸ **apply**(`this`, `thisArg`, `argArray?`): `any`

Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.

##### Parameters

| Name        | Type       | Description                                      |
| :---------- | :--------- | :----------------------------------------------- |
| `this`      | `Function` | -                                                |
| `thisArg`   | `any`      | The object to be used as the this object.        |
| `argArray?` | `any`      | A set of arguments to be passed to the function. |

##### Returns

`any`

##### Inherited from

AuthGuard('local').apply

##### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:281

---

#### bind

▸ **bind**(`this`, `thisArg`, `...argArray`): `any`

For a given function, creates a bound function that has the same body as the original function.
The this object of the bound function is associated with the specified object, and has the specified initial parameters.

##### Parameters

| Name          | Type       | Description                                                            |
| :------------ | :--------- | :--------------------------------------------------------------------- |
| `this`        | `Function` | -                                                                      |
| `thisArg`     | `any`      | An object to which the this keyword can refer inside the new function. |
| `...argArray` | `any`[]    | A list of arguments to be passed to the new function.                  |

##### Returns

`any`

##### Inherited from

AuthGuard('local').bind

##### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:296

---

#### call

▸ **call**(`this`, `thisArg`, `...argArray`): `any`

Calls a method of an object, substituting another object for the current object.

##### Parameters

| Name          | Type       | Description                                     |
| :------------ | :--------- | :---------------------------------------------- |
| `this`        | `Function` | -                                               |
| `thisArg`     | `any`      | The object to be used as the current object.    |
| `...argArray` | `any`[]    | A list of arguments to be passed to the method. |

##### Returns

`any`

##### Inherited from

AuthGuard('local').call

##### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:288

---

#### toString

▸ **toString**(): `string`

Returns a string representation of a function.

##### Returns

`string`

##### Inherited from

AuthGuard('local').toString

##### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:299

<a name="classesinfrastructure_common_interceptor_logger_interceptorlogginginterceptormd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/common/interceptor/logger.interceptor](#modulesinfrastructure_common_interceptor_logger_interceptormd) / LoggingInterceptor

## Class: LoggingInterceptor

[infrastructure/common/interceptor/logger.interceptor](#modulesinfrastructure_common_interceptor_logger_interceptormd).LoggingInterceptor

### Implements

- `NestInterceptor`

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [logger](#logger)

#### Methods

- [getIP](#getip)
- [intercept](#intercept)

### Constructors

#### constructor

• **new LoggingInterceptor**(`logger`): [`LoggingInterceptor`](#classesinfrastructure_common_interceptor_logger_interceptorlogginginterceptormd)

Creates an instance of the LoggerInterceptor class.

##### Parameters

| Name     | Type                                                                           | Description                          |
| :------- | :----------------------------------------------------------------------------- | :----------------------------------- |
| `logger` | [`LoggerService`](#classesinfrastructure_logger_logger_serviceloggerservicemd) | The logger service used for logging. |

##### Returns

[`LoggingInterceptor`](#classesinfrastructure_common_interceptor_logger_interceptorlogginginterceptormd)

##### Defined in

[api/src/infrastructure/common/interceptor/logger.interceptor.ts:17](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/interceptor/logger.interceptor.ts#L17)

### Properties

#### logger

• `Private` `Readonly` **logger**: [`LoggerService`](#classesinfrastructure_logger_logger_serviceloggerservicemd)

The logger service used for logging.

##### Defined in

[api/src/infrastructure/common/interceptor/logger.interceptor.ts:17](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/interceptor/logger.interceptor.ts#L17)

### Methods

#### getIP

▸ **getIP**(`request`): `string`

Retrieves the IP address from the request object.

##### Parameters

| Name                                       | Type     | Description                                                           |
| :----------------------------------------- | :------- | :-------------------------------------------------------------------- |
| `request`                                  | `Object` | The request object containing the headers and connection information. |
| `request.request`                          | `Object` | -                                                                     |
| `request.request.connection`               | `Object` | -                                                                     |
| `request.request.connection.remoteAddress` | `string` | -                                                                     |
| `request.request.headers`                  | `Object` | -                                                                     |
| `request.request.headers.x-forwarded-for`  | `string` | -                                                                     |

##### Returns

`string`

The IP address as a string.

##### Defined in

[api/src/infrastructure/common/interceptor/logger.interceptor.ts:52](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/interceptor/logger.interceptor.ts#L52)

---

#### intercept

▸ **intercept**(`context`, `next`): `Observable`\<`any`\>

Intercepts incoming requests and logs information about the request and response.

##### Parameters

| Name      | Type                   | Description                           |
| :-------- | :--------------------- | :------------------------------------ |
| `context` | `ExecutionContext`     | The execution context of the request. |
| `next`    | `CallHandler`\<`any`\> | The next call handler in the chain.   |

##### Returns

`Observable`\<`any`\>

An observable that represents the response stream.

##### Implementation of

NestInterceptor.intercept

##### Defined in

[api/src/infrastructure/common/interceptor/logger.interceptor.ts:25](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/interceptor/logger.interceptor.ts#L25)

<a name="classesinfrastructure_common_interceptor_response_interceptorresponseformatmd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/common/interceptor/response.interceptor](#modulesinfrastructure_common_interceptor_response_interceptormd) / ResponseFormat

## Class: ResponseFormat\<T\>

[infrastructure/common/interceptor/response.interceptor](#modulesinfrastructure_common_interceptor_response_interceptormd).ResponseFormat

Represents the format of a response.

### Type parameters

| Name | Description                           |
| :--- | :------------------------------------ |
| `T`  | The type of the data in the response. |

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [data](#data)
- [duration](#duration)
- [isArray](#isarray)
- [method](#method)
- [path](#path)

### Constructors

#### constructor

• **new ResponseFormat**\<`T`\>(): [`ResponseFormat`](#classesinfrastructure_common_interceptor_response_interceptorresponseformatmd)\<`T`\>

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Returns

[`ResponseFormat`](#classesinfrastructure_common_interceptor_response_interceptorresponseformatmd)\<`T`\>

### Properties

#### data

• **data**: `T`

##### Defined in

[api/src/infrastructure/common/interceptor/response.interceptor.ts:25](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/interceptor/response.interceptor.ts#L25)

---

#### duration

• **duration**: `string`

##### Defined in

[api/src/infrastructure/common/interceptor/response.interceptor.ts:21](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/interceptor/response.interceptor.ts#L21)

---

#### isArray

• **isArray**: `boolean`

##### Defined in

[api/src/infrastructure/common/interceptor/response.interceptor.ts:17](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/interceptor/response.interceptor.ts#L17)

---

#### method

• **method**: `string`

##### Defined in

[api/src/infrastructure/common/interceptor/response.interceptor.ts:23](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/interceptor/response.interceptor.ts#L23)

---

#### path

• **path**: `string`

##### Defined in

[api/src/infrastructure/common/interceptor/response.interceptor.ts:19](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/interceptor/response.interceptor.ts#L19)

<a name="classesinfrastructure_common_interceptor_response_interceptorresponseinterceptormd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/common/interceptor/response.interceptor](#modulesinfrastructure_common_interceptor_response_interceptormd) / ResponseInterceptor

## Class: ResponseInterceptor\<T\>

[infrastructure/common/interceptor/response.interceptor](#modulesinfrastructure_common_interceptor_response_interceptormd).ResponseInterceptor

### Type parameters

| Name |
| :--- |
| `T`  |

### Implements

- `NestInterceptor`\<`T`, [`ResponseFormat`](#classesinfrastructure_common_interceptor_response_interceptorresponseformatmd)\<`T`\>\>

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Methods

- [intercept](#intercept)

### Constructors

#### constructor

• **new ResponseInterceptor**\<`T`\>(): [`ResponseInterceptor`](#classesinfrastructure_common_interceptor_response_interceptorresponseinterceptormd)\<`T`\>

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Returns

[`ResponseInterceptor`](#classesinfrastructure_common_interceptor_response_interceptorresponseinterceptormd)\<`T`\>

### Methods

#### intercept

▸ **intercept**(`context`, `next`): `Observable`\<[`ResponseFormat`](#classesinfrastructure_common_interceptor_response_interceptorresponseformatmd)\<`T`\>\>

Intercepts the incoming request and transforms the response format.

##### Parameters

| Name      | Type                   | Description                           |
| :-------- | :--------------------- | :------------------------------------ |
| `context` | `ExecutionContext`     | The execution context of the request. |
| `next`    | `CallHandler`\<`any`\> | The next call handler in the chain.   |

##### Returns

`Observable`\<[`ResponseFormat`](#classesinfrastructure_common_interceptor_response_interceptorresponseformatmd)\<`T`\>\>

An observable of the transformed response format.

##### Implementation of

NestInterceptor.intercept

##### Defined in

[api/src/infrastructure/common/interceptor/response.interceptor.ts:42](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/interceptor/response.interceptor.ts#L42)

<a name="classesinfrastructure_common_strategies_jwtrefresh_strategyjwtrefreshtokenstrategymd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/common/strategies/jwtRefresh.strategy](#modulesinfrastructure_common_strategies_jwtrefresh_strategymd) / JwtRefreshTokenStrategy

## Class: JwtRefreshTokenStrategy

[infrastructure/common/strategies/jwtRefresh.strategy](#modulesinfrastructure_common_strategies_jwtrefresh_strategymd).JwtRefreshTokenStrategy

### Hierarchy

- `Strategy`\<`this`\>

  ↳ **`JwtRefreshTokenStrategy`**

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [configService](#configservice)
- [exceptionService](#exceptionservice)
- [logger](#logger)
- [loginUsecaseProxy](#loginusecaseproxy)
- [name](#name)

#### Methods

- [authenticate](#authenticate)
- [error](#error)
- [fail](#fail)
- [pass](#pass)
- [redirect](#redirect)
- [success](#success)
- [validate](#validate)

### Constructors

#### constructor

• **new JwtRefreshTokenStrategy**(`configService`, `loginUsecaseProxy`, `logger`, `exceptionService`): [`JwtRefreshTokenStrategy`](#classesinfrastructure_common_strategies_jwtrefresh_strategyjwtrefreshtokenstrategymd)

Constructs a new instance of the JwtRefreshStrategy class.

##### Parameters

| Name                | Type                                                                                                                                                           | Description                            |
| :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------- |
| `configService`     | [`EnvironmentConfigService`](#classesinfrastructure_config_environment_environment_config_serviceenvironmentconfigservicemd)                                   | The environment configuration service. |
| `loginUsecaseProxy` | [`UseCaseProxy`](#classesinfrastructure_usecases_proxy_usecases_proxyusecaseproxymd)\<[`LoginUseCases`](#classesusecases_auth_login_usecasesloginusecasesmd)\> | The login use case proxy.              |
| `logger`            | [`LoggerService`](#classesinfrastructure_logger_logger_serviceloggerservicemd)                                                                                 | The logger service.                    |
| `exceptionService`  | [`ExceptionsService`](#classesinfrastructure_exceptions_exceptions_serviceexceptionsservicemd)                                                                 | The exceptions service.                |

##### Returns

[`JwtRefreshTokenStrategy`](#classesinfrastructure_common_strategies_jwtrefresh_strategyjwtrefreshtokenstrategymd)

##### Overrides

PassportStrategy(
Strategy,
&#x27;jwt-refresh-token&#x27;,
).constructor

##### Defined in

[api/src/infrastructure/common/strategies/jwtRefresh.strategy.ts:28](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/strategies/jwtRefresh.strategy.ts#L28)

### Properties

#### configService

• `Private` `Readonly` **configService**: [`EnvironmentConfigService`](#classesinfrastructure_config_environment_environment_config_serviceenvironmentconfigservicemd)

The environment configuration service.

##### Defined in

[api/src/infrastructure/common/strategies/jwtRefresh.strategy.ts:29](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/strategies/jwtRefresh.strategy.ts#L29)

---

#### exceptionService

• `Private` `Readonly` **exceptionService**: [`ExceptionsService`](#classesinfrastructure_exceptions_exceptions_serviceexceptionsservicemd)

The exceptions service.

##### Defined in

[api/src/infrastructure/common/strategies/jwtRefresh.strategy.ts:33](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/strategies/jwtRefresh.strategy.ts#L33)

---

#### logger

• `Private` `Readonly` **logger**: [`LoggerService`](#classesinfrastructure_logger_logger_serviceloggerservicemd)

The logger service.

##### Defined in

[api/src/infrastructure/common/strategies/jwtRefresh.strategy.ts:32](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/strategies/jwtRefresh.strategy.ts#L32)

---

#### loginUsecaseProxy

• `Private` `Readonly` **loginUsecaseProxy**: [`UseCaseProxy`](#classesinfrastructure_usecases_proxy_usecases_proxyusecaseproxymd)\<[`LoginUseCases`](#classesusecases_auth_login_usecasesloginusecasesmd)\>

The login use case proxy.

##### Defined in

[api/src/infrastructure/common/strategies/jwtRefresh.strategy.ts:31](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/strategies/jwtRefresh.strategy.ts#L31)

---

#### name

• **name**: `string`

##### Inherited from

PassportStrategy(
Strategy,
'jwt-refresh-token',
).name

##### Defined in

node_modules/.pnpm/@types+passport-jwt@4.0.1/node_modules/@types/passport-jwt/index.d.ts:13

### Methods

#### authenticate

▸ **authenticate**(`req`, `options?`): `void`

Performs authentication for the request.
Note: Virtual function - re-implement in the strategy.

##### Parameters

| Name       | Type                                                                                   | Description                     |
| :--------- | :------------------------------------------------------------------------------------- | :------------------------------ |
| `req`      | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> | The request to authenticate.    |
| `options?` | `any`                                                                                  | Options passed to the strategy. |

##### Returns

`void`

##### Inherited from

PassportStrategy(
Strategy,
'jwt-refresh-token',
).authenticate

##### Defined in

node_modules/.pnpm/@types+passport-strategy@0.2.38/node_modules/@types/passport-strategy/index.d.ts:20

---

#### error

▸ **error**(`err`): `void`

Internal error while performing authentication.

Strategies should call this function when an internal error occurs
during the process of performing authentication; for example, if the
user directory is not available.

##### Parameters

| Name  | Type    |
| :---- | :------ |
| `err` | `Error` |

##### Returns

`void`

**`Api`**

public

##### Inherited from

PassportStrategy(
Strategy,
'jwt-refresh-token',
).error

##### Defined in

node_modules/.pnpm/@types+passport-strategy@0.2.38/node_modules/@types/passport-strategy/index.d.ts:90

---

#### fail

▸ **fail**(`challenge`, `status`): `void`

Fail authentication, with optional `challenge` and `status`, defaulting
to 401.

Strategies should call this function to fail an authentication attempt.

##### Parameters

| Name        | Type     | Description                                               |
| :---------- | :------- | :-------------------------------------------------------- |
| `challenge` | `any`    | (Can also be an object with 'message' and 'type' fields). |
| `status`    | `number` |                                                           |

##### Returns

`void`

**`Api`**

public

##### Inherited from

PassportStrategy(
Strategy,
'jwt-refresh-token',
).fail

##### Defined in

node_modules/.pnpm/@types+passport-strategy@0.2.38/node_modules/@types/passport-strategy/index.d.ts:54

▸ **fail**(`status`): `void`

##### Parameters

| Name     | Type     |
| :------- | :------- |
| `status` | `number` |

##### Returns

`void`

##### Inherited from

PassportStrategy(
Strategy,
'jwt-refresh-token',
).fail

##### Defined in

node_modules/.pnpm/@types+passport-strategy@0.2.38/node_modules/@types/passport-strategy/index.d.ts:55

---

#### pass

▸ **pass**(): `void`

Pass without making a success or fail decision.

Under most circumstances, Strategies should not need to call this
function. It exists primarily to allow previous authentication state
to be restored, for example from an HTTP session.

##### Returns

`void`

**`Api`**

public

##### Inherited from

PassportStrategy(
Strategy,
'jwt-refresh-token',
).pass

##### Defined in

node_modules/.pnpm/@types+passport-strategy@0.2.38/node_modules/@types/passport-strategy/index.d.ts:78

---

#### redirect

▸ **redirect**(`url`, `status?`): `void`

Redirect to `url` with optional `status`, defaulting to 302.

Strategies should call this function to redirect the user (via their
user agent) to a third-party website for authentication.

##### Parameters

| Name      | Type     |
| :-------- | :------- |
| `url`     | `string` |
| `status?` | `number` |

##### Returns

`void`

**`Api`**

public

##### Inherited from

PassportStrategy(
Strategy,
'jwt-refresh-token',
).redirect

##### Defined in

node_modules/.pnpm/@types+passport-strategy@0.2.38/node_modules/@types/passport-strategy/index.d.ts:67

---

#### success

▸ **success**(`user`, `info?`): `void`

Authenticate `user`, with optional `info`.

Strategies should call this function to successfully authenticate a
user. `user` should be an object supplied by the application after it
has been given an opportunity to verify credentials. `info` is an
optional argument containing additional user information. This is
useful for third-party authentication strategies to pass profile
details.

##### Parameters

| Name    | Type  |
| :------ | :---- |
| `user`  | `any` |
| `info?` | `any` |

##### Returns

`void`

**`Api`**

public

##### Inherited from

PassportStrategy(
Strategy,
'jwt-refresh-token',
).success

##### Defined in

node_modules/.pnpm/@types+passport-strategy@0.2.38/node_modules/@types/passport-strategy/index.d.ts:42

---

#### validate

▸ **validate**(`request`, `payload`): `Promise`\<[`UserModel`](#classesdomain_model_userusermodelmd)\>

Validates the request and payload for JWT refresh strategy.

##### Parameters

| Name      | Type                                                                                   | Description         |
| :-------- | :------------------------------------------------------------------------------------- | :------------------ |
| `request` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> | The request object. |
| `payload` | [`TokenPayload`](#interfacesdomain_model_authtokenpayloadmd)                           | The token payload.  |

##### Returns

`Promise`\<[`UserModel`](#classesdomain_model_userusermodelmd)\>

The user object if validation is successful.

##### Defined in

[api/src/infrastructure/common/strategies/jwtRefresh.strategy.ts:52](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/strategies/jwtRefresh.strategy.ts#L52)

<a name="classesinfrastructure_common_strategies_jwt_strategyjwtstrategymd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/common/strategies/jwt.strategy](#modulesinfrastructure_common_strategies_jwt_strategymd) / JwtStrategy

## Class: JwtStrategy

[infrastructure/common/strategies/jwt.strategy](#modulesinfrastructure_common_strategies_jwt_strategymd).JwtStrategy

### Hierarchy

- `Strategy`\<`this`\>

  ↳ **`JwtStrategy`**

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [exceptionService](#exceptionservice)
- [logger](#logger)
- [loginUsecaseProxy](#loginusecaseproxy)
- [name](#name)

#### Methods

- [authenticate](#authenticate)
- [error](#error)
- [fail](#fail)
- [pass](#pass)
- [redirect](#redirect)
- [success](#success)
- [validate](#validate)

### Constructors

#### constructor

• **new JwtStrategy**(`loginUsecaseProxy`, `logger`, `exceptionService`): [`JwtStrategy`](#classesinfrastructure_common_strategies_jwt_strategyjwtstrategymd)

Constructs a new instance of the JwtStrategy class.

##### Parameters

| Name                | Type                                                                                                                                                           | Description               |
| :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------ |
| `loginUsecaseProxy` | [`UseCaseProxy`](#classesinfrastructure_usecases_proxy_usecases_proxyusecaseproxymd)\<[`LoginUseCases`](#classesusecases_auth_login_usecasesloginusecasesmd)\> | The login use case proxy. |
| `logger`            | [`LoggerService`](#classesinfrastructure_logger_logger_serviceloggerservicemd)                                                                                 | The logger service.       |
| `exceptionService`  | [`ExceptionsService`](#classesinfrastructure_exceptions_exceptions_serviceexceptionsservicemd)                                                                 | The exceptions service.   |

##### Returns

[`JwtStrategy`](#classesinfrastructure_common_strategies_jwt_strategyjwtstrategymd)

##### Overrides

PassportStrategy(Strategy).constructor

##### Defined in

[api/src/infrastructure/common/strategies/jwt.strategy.ts:22](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/strategies/jwt.strategy.ts#L22)

### Properties

#### exceptionService

• `Private` `Readonly` **exceptionService**: [`ExceptionsService`](#classesinfrastructure_exceptions_exceptions_serviceexceptionsservicemd)

The exceptions service.

##### Defined in

[api/src/infrastructure/common/strategies/jwt.strategy.ts:26](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/strategies/jwt.strategy.ts#L26)

---

#### logger

• `Private` `Readonly` **logger**: [`LoggerService`](#classesinfrastructure_logger_logger_serviceloggerservicemd)

The logger service.

##### Defined in

[api/src/infrastructure/common/strategies/jwt.strategy.ts:25](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/strategies/jwt.strategy.ts#L25)

---

#### loginUsecaseProxy

• `Private` `Readonly` **loginUsecaseProxy**: [`UseCaseProxy`](#classesinfrastructure_usecases_proxy_usecases_proxyusecaseproxymd)\<[`LoginUseCases`](#classesusecases_auth_login_usecasesloginusecasesmd)\>

The login use case proxy.

##### Defined in

[api/src/infrastructure/common/strategies/jwt.strategy.ts:24](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/strategies/jwt.strategy.ts#L24)

---

#### name

• **name**: `string`

##### Inherited from

PassportStrategy(Strategy).name

##### Defined in

node_modules/.pnpm/@types+passport-jwt@4.0.1/node_modules/@types/passport-jwt/index.d.ts:13

### Methods

#### authenticate

▸ **authenticate**(`req`, `options?`): `void`

Performs authentication for the request.
Note: Virtual function - re-implement in the strategy.

##### Parameters

| Name       | Type                                                                                   | Description                     |
| :--------- | :------------------------------------------------------------------------------------- | :------------------------------ |
| `req`      | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> | The request to authenticate.    |
| `options?` | `any`                                                                                  | Options passed to the strategy. |

##### Returns

`void`

##### Inherited from

PassportStrategy(Strategy).authenticate

##### Defined in

node_modules/.pnpm/@types+passport-strategy@0.2.38/node_modules/@types/passport-strategy/index.d.ts:20

---

#### error

▸ **error**(`err`): `void`

Internal error while performing authentication.

Strategies should call this function when an internal error occurs
during the process of performing authentication; for example, if the
user directory is not available.

##### Parameters

| Name  | Type    |
| :---- | :------ |
| `err` | `Error` |

##### Returns

`void`

**`Api`**

public

##### Inherited from

PassportStrategy(Strategy).error

##### Defined in

node_modules/.pnpm/@types+passport-strategy@0.2.38/node_modules/@types/passport-strategy/index.d.ts:90

---

#### fail

▸ **fail**(`challenge`, `status`): `void`

Fail authentication, with optional `challenge` and `status`, defaulting
to 401.

Strategies should call this function to fail an authentication attempt.

##### Parameters

| Name        | Type     | Description                                               |
| :---------- | :------- | :-------------------------------------------------------- |
| `challenge` | `any`    | (Can also be an object with 'message' and 'type' fields). |
| `status`    | `number` |                                                           |

##### Returns

`void`

**`Api`**

public

##### Inherited from

PassportStrategy(Strategy).fail

##### Defined in

node_modules/.pnpm/@types+passport-strategy@0.2.38/node_modules/@types/passport-strategy/index.d.ts:54

▸ **fail**(`status`): `void`

##### Parameters

| Name     | Type     |
| :------- | :------- |
| `status` | `number` |

##### Returns

`void`

##### Inherited from

PassportStrategy(Strategy).fail

##### Defined in

node_modules/.pnpm/@types+passport-strategy@0.2.38/node_modules/@types/passport-strategy/index.d.ts:55

---

#### pass

▸ **pass**(): `void`

Pass without making a success or fail decision.

Under most circumstances, Strategies should not need to call this
function. It exists primarily to allow previous authentication state
to be restored, for example from an HTTP session.

##### Returns

`void`

**`Api`**

public

##### Inherited from

PassportStrategy(Strategy).pass

##### Defined in

node_modules/.pnpm/@types+passport-strategy@0.2.38/node_modules/@types/passport-strategy/index.d.ts:78

---

#### redirect

▸ **redirect**(`url`, `status?`): `void`

Redirect to `url` with optional `status`, defaulting to 302.

Strategies should call this function to redirect the user (via their
user agent) to a third-party website for authentication.

##### Parameters

| Name      | Type     |
| :-------- | :------- |
| `url`     | `string` |
| `status?` | `number` |

##### Returns

`void`

**`Api`**

public

##### Inherited from

PassportStrategy(Strategy).redirect

##### Defined in

node_modules/.pnpm/@types+passport-strategy@0.2.38/node_modules/@types/passport-strategy/index.d.ts:67

---

#### success

▸ **success**(`user`, `info?`): `void`

Authenticate `user`, with optional `info`.

Strategies should call this function to successfully authenticate a
user. `user` should be an object supplied by the application after it
has been given an opportunity to verify credentials. `info` is an
optional argument containing additional user information. This is
useful for third-party authentication strategies to pass profile
details.

##### Parameters

| Name    | Type  |
| :------ | :---- |
| `user`  | `any` |
| `info?` | `any` |

##### Returns

`void`

**`Api`**

public

##### Inherited from

PassportStrategy(Strategy).success

##### Defined in

node_modules/.pnpm/@types+passport-strategy@0.2.38/node_modules/@types/passport-strategy/index.d.ts:42

---

#### validate

▸ **validate**(`payload`): `Promise`\<[`UserModel`](#classesdomain_model_userusermodelmd)\>

Validates the payload of a JWT token.

##### Parameters

| Name               | Type     | Description                   |
| :----------------- | :------- | :---------------------------- |
| `payload`          | `Object` | The payload of the JWT token. |
| `payload.username` | `string` | -                             |

##### Returns

`Promise`\<[`UserModel`](#classesdomain_model_userusermodelmd)\>

The user associated with the payload.

##### Defined in

[api/src/infrastructure/common/strategies/jwt.strategy.ts:43](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/strategies/jwt.strategy.ts#L43)

<a name="classesinfrastructure_common_strategies_local_strategylocalstrategymd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/common/strategies/local.strategy](#modulesinfrastructure_common_strategies_local_strategymd) / LocalStrategy

## Class: LocalStrategy

[infrastructure/common/strategies/local.strategy](#modulesinfrastructure_common_strategies_local_strategymd).LocalStrategy

### Hierarchy

- `Strategy`\<`this`\>

  ↳ **`LocalStrategy`**

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [exceptionService](#exceptionservice)
- [logger](#logger)
- [loginUsecaseProxy](#loginusecaseproxy)
- [name](#name)

#### Methods

- [authenticate](#authenticate)
- [error](#error)
- [fail](#fail)
- [pass](#pass)
- [redirect](#redirect)
- [success](#success)
- [validate](#validate)

### Constructors

#### constructor

• **new LocalStrategy**(`loginUsecaseProxy`, `logger`, `exceptionService`): [`LocalStrategy`](#classesinfrastructure_common_strategies_local_strategylocalstrategymd)

Constructs a new instance of the LocalStrategy class.

##### Parameters

| Name                | Type                                                                                                                                                           | Description               |
| :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------ |
| `loginUsecaseProxy` | [`UseCaseProxy`](#classesinfrastructure_usecases_proxy_usecases_proxyusecaseproxymd)\<[`LoginUseCases`](#classesusecases_auth_login_usecasesloginusecasesmd)\> | The login use case proxy. |
| `logger`            | [`LoggerService`](#classesinfrastructure_logger_logger_serviceloggerservicemd)                                                                                 | The logger service.       |
| `exceptionService`  | [`ExceptionsService`](#classesinfrastructure_exceptions_exceptions_serviceexceptionsservicemd)                                                                 | The exceptions service.   |

##### Returns

[`LocalStrategy`](#classesinfrastructure_common_strategies_local_strategylocalstrategymd)

##### Overrides

PassportStrategy(Strategy).constructor

##### Defined in

[api/src/infrastructure/common/strategies/local.strategy.ts:21](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/strategies/local.strategy.ts#L21)

### Properties

#### exceptionService

• `Private` `Readonly` **exceptionService**: [`ExceptionsService`](#classesinfrastructure_exceptions_exceptions_serviceexceptionsservicemd)

The exceptions service.

##### Defined in

[api/src/infrastructure/common/strategies/local.strategy.ts:25](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/strategies/local.strategy.ts#L25)

---

#### logger

• `Private` `Readonly` **logger**: [`LoggerService`](#classesinfrastructure_logger_logger_serviceloggerservicemd)

The logger service.

##### Defined in

[api/src/infrastructure/common/strategies/local.strategy.ts:24](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/strategies/local.strategy.ts#L24)

---

#### loginUsecaseProxy

• `Private` `Readonly` **loginUsecaseProxy**: [`UseCaseProxy`](#classesinfrastructure_usecases_proxy_usecases_proxyusecaseproxymd)\<[`LoginUseCases`](#classesusecases_auth_login_usecasesloginusecasesmd)\>

The login use case proxy.

##### Defined in

[api/src/infrastructure/common/strategies/local.strategy.ts:23](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/strategies/local.strategy.ts#L23)

---

#### name

• **name**: `string`

##### Inherited from

PassportStrategy(Strategy).name

##### Defined in

node_modules/.pnpm/@types+passport-local@1.0.38/node_modules/@types/passport-local/index.d.ts:46

### Methods

#### authenticate

▸ **authenticate**(`req`, `options?`): `void`

Performs authentication for the request.
Note: Virtual function - re-implement in the strategy.

##### Parameters

| Name       | Type                                                                                   | Description                     |
| :--------- | :------------------------------------------------------------------------------------- | :------------------------------ |
| `req`      | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> | The request to authenticate.    |
| `options?` | `any`                                                                                  | Options passed to the strategy. |

##### Returns

`void`

##### Inherited from

PassportStrategy(Strategy).authenticate

##### Defined in

node_modules/.pnpm/@types+passport-strategy@0.2.38/node_modules/@types/passport-strategy/index.d.ts:20

---

#### error

▸ **error**(`err`): `void`

Internal error while performing authentication.

Strategies should call this function when an internal error occurs
during the process of performing authentication; for example, if the
user directory is not available.

##### Parameters

| Name  | Type    |
| :---- | :------ |
| `err` | `Error` |

##### Returns

`void`

**`Api`**

public

##### Inherited from

PassportStrategy(Strategy).error

##### Defined in

node_modules/.pnpm/@types+passport-strategy@0.2.38/node_modules/@types/passport-strategy/index.d.ts:90

---

#### fail

▸ **fail**(`challenge`, `status`): `void`

Fail authentication, with optional `challenge` and `status`, defaulting
to 401.

Strategies should call this function to fail an authentication attempt.

##### Parameters

| Name        | Type     | Description                                               |
| :---------- | :------- | :-------------------------------------------------------- |
| `challenge` | `any`    | (Can also be an object with 'message' and 'type' fields). |
| `status`    | `number` |                                                           |

##### Returns

`void`

**`Api`**

public

##### Inherited from

PassportStrategy(Strategy).fail

##### Defined in

node_modules/.pnpm/@types+passport-strategy@0.2.38/node_modules/@types/passport-strategy/index.d.ts:54

▸ **fail**(`status`): `void`

##### Parameters

| Name     | Type     |
| :------- | :------- |
| `status` | `number` |

##### Returns

`void`

##### Inherited from

PassportStrategy(Strategy).fail

##### Defined in

node_modules/.pnpm/@types+passport-strategy@0.2.38/node_modules/@types/passport-strategy/index.d.ts:55

---

#### pass

▸ **pass**(): `void`

Pass without making a success or fail decision.

Under most circumstances, Strategies should not need to call this
function. It exists primarily to allow previous authentication state
to be restored, for example from an HTTP session.

##### Returns

`void`

**`Api`**

public

##### Inherited from

PassportStrategy(Strategy).pass

##### Defined in

node_modules/.pnpm/@types+passport-strategy@0.2.38/node_modules/@types/passport-strategy/index.d.ts:78

---

#### redirect

▸ **redirect**(`url`, `status?`): `void`

Redirect to `url` with optional `status`, defaulting to 302.

Strategies should call this function to redirect the user (via their
user agent) to a third-party website for authentication.

##### Parameters

| Name      | Type     |
| :-------- | :------- |
| `url`     | `string` |
| `status?` | `number` |

##### Returns

`void`

**`Api`**

public

##### Inherited from

PassportStrategy(Strategy).redirect

##### Defined in

node_modules/.pnpm/@types+passport-strategy@0.2.38/node_modules/@types/passport-strategy/index.d.ts:67

---

#### success

▸ **success**(`user`, `info?`): `void`

Authenticate `user`, with optional `info`.

Strategies should call this function to successfully authenticate a
user. `user` should be an object supplied by the application after it
has been given an opportunity to verify credentials. `info` is an
optional argument containing additional user information. This is
useful for third-party authentication strategies to pass profile
details.

##### Parameters

| Name    | Type  |
| :------ | :---- |
| `user`  | `any` |
| `info?` | `any` |

##### Returns

`void`

**`Api`**

public

##### Inherited from

PassportStrategy(Strategy).success

##### Defined in

node_modules/.pnpm/@types+passport-strategy@0.2.38/node_modules/@types/passport-strategy/index.d.ts:42

---

#### validate

▸ **validate**(`username`, `password`): `Promise`\<\{ `createDate`: `Date` ; `email`: `string` ; `hashRefreshToken`: `string` ; `id`: `string` ; `lastLogin`: `Date` ; `updatedDate`: `Date` ; `username`: `string` }\>

Validates the username and password for local strategy.

##### Parameters

| Name       | Type     | Description               |
| :--------- | :------- | :------------------------ |
| `username` | `string` | The username to validate. |
| `password` | `string` | The password to validate. |

##### Returns

`Promise`\<\{ `createDate`: `Date` ; `email`: `string` ; `hashRefreshToken`: `string` ; `id`: `string` ; `lastLogin`: `Date` ; `updatedDate`: `Date` ; `username`: `string` }\>

The validated user.

##### Defined in

[api/src/infrastructure/common/strategies/local.strategy.ts:36](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/strategies/local.strategy.ts#L36)

<a name="classesinfrastructure_config_environment_environment_config_moduleenvironmentconfigmodulemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/config/environment/environment-config.module](#modulesinfrastructure_config_environment_environment_config_modulemd) / EnvironmentConfigModule

## Class: EnvironmentConfigModule

[infrastructure/config/environment/environment-config.module](#modulesinfrastructure_config_environment_environment_config_modulemd).EnvironmentConfigModule

Module for configuring the environment settings.

### Table of contents

#### Constructors

- [constructor](#constructor)

### Constructors

#### constructor

• **new EnvironmentConfigModule**(): [`EnvironmentConfigModule`](#classesinfrastructure_config_environment_environment_config_moduleenvironmentconfigmodulemd)

##### Returns

[`EnvironmentConfigModule`](#classesinfrastructure_config_environment_environment_config_moduleenvironmentconfigmodulemd)

<a name="classesinfrastructure_config_environment_environment_config_serviceenvironmentconfigservicemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/config/environment/environment-config.service](#modulesinfrastructure_config_environment_environment_config_servicemd) / EnvironmentConfigService

## Class: EnvironmentConfigService

[infrastructure/config/environment/environment-config.service](#modulesinfrastructure_config_environment_environment_config_servicemd).EnvironmentConfigService

Service that provides environment configuration values for MongoDB and JWT.

### Implements

- [`MongoDbConfig`](#interfacesdomain_config_mongo_interfacemongodbconfigmd)
- [`JWTConfig`](#interfacesdomain_config_jwt_interfacejwtconfigmd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [configService](#configservice)

#### Methods

- [getJwtExpirationTime](#getjwtexpirationtime)
- [getJwtRefreshExpirationTime](#getjwtrefreshexpirationtime)
- [getJwtRefreshSecret](#getjwtrefreshsecret)
- [getJwtSecret](#getjwtsecret)
- [getMongoDbPassword](#getmongodbpassword)
- [getMongoDbUri](#getmongodburi)
- [getMongoDbUsername](#getmongodbusername)

### Constructors

#### constructor

• **new EnvironmentConfigService**(`configService`): [`EnvironmentConfigService`](#classesinfrastructure_config_environment_environment_config_serviceenvironmentconfigservicemd)

##### Parameters

| Name            | Type                                                        |
| :-------------- | :---------------------------------------------------------- |
| `configService` | `ConfigService`\<`Record`\<`string`, `unknown`\>, `false`\> |

##### Returns

[`EnvironmentConfigService`](#classesinfrastructure_config_environment_environment_config_serviceenvironmentconfigservicemd)

##### Defined in

[api/src/infrastructure/config/environment/environment-config.service.ts:11](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/config/environment/environment-config.service.ts#L11)

### Properties

#### configService

• `Private` **configService**: `ConfigService`\<`Record`\<`string`, `unknown`\>, `false`\>

##### Defined in

[api/src/infrastructure/config/environment/environment-config.service.ts:11](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/config/environment/environment-config.service.ts#L11)

### Methods

#### getJwtExpirationTime

▸ **getJwtExpirationTime**(): `string`

Retrieves the JWT expiration time from the configuration.

##### Returns

`string`

The JWT expiration time.

##### Implementation of

[JWTConfig](#interfacesdomain_config_jwt_interfacejwtconfigmd).[getJwtExpirationTime](#getjwtexpirationtime)

##### Defined in

[api/src/infrastructure/config/environment/environment-config.service.ts:50](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/config/environment/environment-config.service.ts#L50)

---

#### getJwtRefreshExpirationTime

▸ **getJwtRefreshExpirationTime**(): `string`

Retrieves the JWT refresh token expiration time from the configuration.

##### Returns

`string`

The JWT refresh token expiration time.

##### Implementation of

[JWTConfig](#interfacesdomain_config_jwt_interfacejwtconfigmd).[getJwtRefreshExpirationTime](#getjwtrefreshexpirationtime)

##### Defined in

[api/src/infrastructure/config/environment/environment-config.service.ts:66](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/config/environment/environment-config.service.ts#L66)

---

#### getJwtRefreshSecret

▸ **getJwtRefreshSecret**(): `string`

Retrieves the JWT refresh token secret from the configuration.

##### Returns

`string`

The JWT refresh token secret.

##### Implementation of

[JWTConfig](#interfacesdomain_config_jwt_interfacejwtconfigmd).[getJwtRefreshSecret](#getjwtrefreshsecret)

##### Defined in

[api/src/infrastructure/config/environment/environment-config.service.ts:58](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/config/environment/environment-config.service.ts#L58)

---

#### getJwtSecret

▸ **getJwtSecret**(): `string`

Retrieves the JWT secret from the configuration.

##### Returns

`string`

The JWT secret.

##### Implementation of

[JWTConfig](#interfacesdomain_config_jwt_interfacejwtconfigmd).[getJwtSecret](#getjwtsecret)

##### Defined in

[api/src/infrastructure/config/environment/environment-config.service.ts:42](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/config/environment/environment-config.service.ts#L42)

---

#### getMongoDbPassword

▸ **getMongoDbPassword**(): `string`

Retrieves the MongoDB password from the configuration service.

##### Returns

`string`

The MongoDB password as a string.

##### Implementation of

[MongoDbConfig](#interfacesdomain_config_mongo_interfacemongodbconfigmd).[getMongoDbPassword](#getmongodbpassword)

##### Defined in

[api/src/infrastructure/config/environment/environment-config.service.ts:26](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/config/environment/environment-config.service.ts#L26)

---

#### getMongoDbUri

▸ **getMongoDbUri**(): `string`

Retrieves the MongoDB URI from the configuration.

##### Returns

`string`

The MongoDB URI.

##### Implementation of

[MongoDbConfig](#interfacesdomain_config_mongo_interfacemongodbconfigmd).[getMongoDbUri](#getmongodburi)

##### Defined in

[api/src/infrastructure/config/environment/environment-config.service.ts:17](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/config/environment/environment-config.service.ts#L17)

---

#### getMongoDbUsername

▸ **getMongoDbUsername**(): `string`

Retrieves the MongoDB username from the configuration.

##### Returns

`string`

The MongoDB username.

##### Implementation of

[MongoDbConfig](#interfacesdomain_config_mongo_interfacemongodbconfigmd).[getMongoDbUsername](#getmongodbusername)

##### Defined in

[api/src/infrastructure/config/environment/environment-config.service.ts:34](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/config/environment/environment-config.service.ts#L34)

<a name="classesinfrastructure_controllers_auth_auth_controllerauthcontrollermd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/controllers/auth/auth.controller](#modulesinfrastructure_controllers_auth_auth_controllermd) / AuthController

## Class: AuthController

[infrastructure/controllers/auth/auth.controller](#modulesinfrastructure_controllers_auth_auth_controllermd).AuthController

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [exceptionsService](#exceptionsservice)
- [isAuthUsecaseProxy](#isauthusecaseproxy)
- [loginUsecaseProxy](#loginusecaseproxy)
- [logoutUseCaseProxy](#logoutusecaseproxy)
- [registerUseCaseProxy](#registerusecaseproxy)

#### Methods

- [isAuthenticated](#isauthenticated)
- [login](#login)
- [logout](#logout)
- [refresh](#refresh)
- [register](#register)

### Constructors

#### constructor

• **new AuthController**(`loginUsecaseProxy`, `registerUseCaseProxy`, `logoutUseCaseProxy`, `isAuthUsecaseProxy`, `exceptionsService`): [`AuthController`](#classesinfrastructure_controllers_auth_auth_controllerauthcontrollermd)

Constructs a new instance of the AuthController class.

##### Parameters

| Name                   | Type                                                                                                                                                                                         | Description                                |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------- |
| `loginUsecaseProxy`    | [`UseCaseProxy`](#classesinfrastructure_usecases_proxy_usecases_proxyusecaseproxymd)\<[`LoginUseCases`](#classesusecases_auth_login_usecasesloginusecasesmd)\>                               | The proxy for the LoginUseCases.           |
| `registerUseCaseProxy` | [`UseCaseProxy`](#classesinfrastructure_usecases_proxy_usecases_proxyusecaseproxymd)\<[`RegisterUseCases`](#classesusecases_auth_register_usecasesregisterusecasesmd)\>                      | The proxy for the RegisterUseCases.        |
| `logoutUseCaseProxy`   | [`UseCaseProxy`](#classesinfrastructure_usecases_proxy_usecases_proxyusecaseproxymd)\<[`LogoutUseCases`](#classesusecases_auth_logout_usecaseslogoutusecasesmd)\>                            | The proxy for the LogoutUseCases.          |
| `isAuthUsecaseProxy`   | [`UseCaseProxy`](#classesinfrastructure_usecases_proxy_usecases_proxyusecaseproxymd)\<[`IsAuthenticatedUseCases`](#classesusecases_auth_isauthenticated_usecasesisauthenticatedusecasesmd)\> | The proxy for the IsAuthenticatedUseCases. |
| `exceptionsService`    | [`ExceptionsService`](#classesinfrastructure_exceptions_exceptions_serviceexceptionsservicemd)                                                                                               | The service for handling exceptions.       |

##### Returns

[`AuthController`](#classesinfrastructure_controllers_auth_auth_controllerauthcontrollermd)

##### Defined in

[api/src/infrastructure/controllers/auth/auth.controller.ts:50](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/controllers/auth/auth.controller.ts#L50)

### Properties

#### exceptionsService

• `Private` `Readonly` **exceptionsService**: [`ExceptionsService`](#classesinfrastructure_exceptions_exceptions_serviceexceptionsservicemd)

The service for handling exceptions.

##### Defined in

[api/src/infrastructure/controllers/auth/auth.controller.ts:59](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/controllers/auth/auth.controller.ts#L59)

---

#### isAuthUsecaseProxy

• `Private` `Readonly` **isAuthUsecaseProxy**: [`UseCaseProxy`](#classesinfrastructure_usecases_proxy_usecases_proxyusecaseproxymd)\<[`IsAuthenticatedUseCases`](#classesusecases_auth_isauthenticated_usecasesisauthenticatedusecasesmd)\>

The proxy for the IsAuthenticatedUseCases.

##### Defined in

[api/src/infrastructure/controllers/auth/auth.controller.ts:58](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/controllers/auth/auth.controller.ts#L58)

---

#### loginUsecaseProxy

• `Private` `Readonly` **loginUsecaseProxy**: [`UseCaseProxy`](#classesinfrastructure_usecases_proxy_usecases_proxyusecaseproxymd)\<[`LoginUseCases`](#classesusecases_auth_login_usecasesloginusecasesmd)\>

The proxy for the LoginUseCases.

##### Defined in

[api/src/infrastructure/controllers/auth/auth.controller.ts:52](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/controllers/auth/auth.controller.ts#L52)

---

#### logoutUseCaseProxy

• `Private` `Readonly` **logoutUseCaseProxy**: [`UseCaseProxy`](#classesinfrastructure_usecases_proxy_usecases_proxyusecaseproxymd)\<[`LogoutUseCases`](#classesusecases_auth_logout_usecaseslogoutusecasesmd)\>

The proxy for the LogoutUseCases.

##### Defined in

[api/src/infrastructure/controllers/auth/auth.controller.ts:56](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/controllers/auth/auth.controller.ts#L56)

---

#### registerUseCaseProxy

• `Private` `Readonly` **registerUseCaseProxy**: [`UseCaseProxy`](#classesinfrastructure_usecases_proxy_usecases_proxyusecaseproxymd)\<[`RegisterUseCases`](#classesusecases_auth_register_usecasesregisterusecasesmd)\>

The proxy for the RegisterUseCases.

##### Defined in

[api/src/infrastructure/controllers/auth/auth.controller.ts:54](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/controllers/auth/auth.controller.ts#L54)

### Methods

#### isAuthenticated

▸ **isAuthenticated**(`request`): `Promise`\<[`IsAuthPresenter`](#classesinfrastructure_controllers_auth_auth_presenterisauthpresentermd)\>

##### Parameters

| Name      | Type  |
| :-------- | :---- |
| `request` | `any` |

##### Returns

`Promise`\<[`IsAuthPresenter`](#classesinfrastructure_controllers_auth_auth_presenterisauthpresentermd)\>

##### Defined in

[api/src/infrastructure/controllers/auth/auth.controller.ts:151](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/controllers/auth/auth.controller.ts#L151)

---

#### login

▸ **login**(`auth`, `request`): `Promise`\<`string`\>

##### Parameters

| Name      | Type                                                                                   |
| :-------- | :------------------------------------------------------------------------------------- |
| `auth`    | [`AuthLoginDto`](#classesinfrastructure_controllers_auth_auth_dto_classauthlogindtomd) |
| `request` | `any`                                                                                  |

##### Returns

`Promise`\<`string`\>

##### Defined in

[api/src/infrastructure/controllers/auth/auth.controller.ts:110](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/controllers/auth/auth.controller.ts#L110)

---

#### logout

▸ **logout**(`request`): `Promise`\<`string`\>

##### Parameters

| Name      | Type  |
| :-------- | :---- |
| `request` | `any` |

##### Returns

`Promise`\<`string`\>

##### Defined in

[api/src/infrastructure/controllers/auth/auth.controller.ts:135](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/controllers/auth/auth.controller.ts#L135)

---

#### refresh

▸ **refresh**(`request`): `Promise`\<`string`\>

##### Parameters

| Name                    | Type                                           |
| :---------------------- | :--------------------------------------------- |
| `request`               | `Object`                                       |
| `request.res`           | `Object`                                       |
| `request.res.setHeader` | (`arg0`: `string`, `arg1`: `string`) => `void` |
| `request.user`          | `Object`                                       |
| `request.user.username` | `string`                                       |

##### Returns

`Promise`\<`string`\>

##### Defined in

[api/src/infrastructure/controllers/auth/auth.controller.ts:168](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/controllers/auth/auth.controller.ts#L168)

---

#### register

▸ **register**(`body`): `Promise`\<`string`\>

##### Parameters

| Name   | Type                                                                                         |
| :----- | :------------------------------------------------------------------------------------------- |
| `body` | [`AuthRegisterDto`](#classesinfrastructure_controllers_auth_auth_dto_classauthregisterdtomd) |

##### Returns

`Promise`\<`string`\>

##### Defined in

[api/src/infrastructure/controllers/auth/auth.controller.ts:70](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/controllers/auth/auth.controller.ts#L70)

<a name="classesinfrastructure_controllers_auth_auth_dto_classauthlogindtomd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/controllers/auth/auth-dto.class](#modulesinfrastructure_controllers_auth_auth_dto_classmd) / AuthLoginDto

## Class: AuthLoginDto

[infrastructure/controllers/auth/auth-dto.class](#modulesinfrastructure_controllers_auth_auth_dto_classmd).AuthLoginDto

Data transfer object for authenticating a user.

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [password](#password)
- [username](#username)

### Constructors

#### constructor

• **new AuthLoginDto**(): [`AuthLoginDto`](#classesinfrastructure_controllers_auth_auth_dto_classauthlogindtomd)

##### Returns

[`AuthLoginDto`](#classesinfrastructure_controllers_auth_auth_dto_classauthlogindtomd)

### Properties

#### password

• `Readonly` **password**: `string`

##### Defined in

[api/src/infrastructure/controllers/auth/auth-dto.class.ts:22](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/controllers/auth/auth-dto.class.ts#L22)

---

#### username

• `Readonly` **username**: `string`

##### Defined in

[api/src/infrastructure/controllers/auth/auth-dto.class.ts:16](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/controllers/auth/auth-dto.class.ts#L16)

<a name="classesinfrastructure_controllers_auth_auth_dto_classauthregisterdtomd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/controllers/auth/auth-dto.class](#modulesinfrastructure_controllers_auth_auth_dto_classmd) / AuthRegisterDto

## Class: AuthRegisterDto

[infrastructure/controllers/auth/auth-dto.class](#modulesinfrastructure_controllers_auth_auth_dto_classmd).AuthRegisterDto

Data transfer object for registering a new user.

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [confirmPassword](#confirmpassword)
- [email](#email)
- [password](#password)
- [username](#username)

### Constructors

#### constructor

• **new AuthRegisterDto**(): [`AuthRegisterDto`](#classesinfrastructure_controllers_auth_auth_dto_classauthregisterdtomd)

##### Returns

[`AuthRegisterDto`](#classesinfrastructure_controllers_auth_auth_dto_classauthregisterdtomd)

### Properties

#### confirmPassword

• `Readonly` **confirmPassword**: `string`

##### Defined in

[api/src/infrastructure/controllers/auth/auth-dto.class.ts:44](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/controllers/auth/auth-dto.class.ts#L44)

---

#### email

• `Readonly` **email**: `string`

##### Defined in

[api/src/infrastructure/controllers/auth/auth-dto.class.ts:50](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/controllers/auth/auth-dto.class.ts#L50)

---

#### password

• `Readonly` **password**: `string`

##### Defined in

[api/src/infrastructure/controllers/auth/auth-dto.class.ts:38](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/controllers/auth/auth-dto.class.ts#L38)

---

#### username

• `Readonly` **username**: `string`

##### Defined in

[api/src/infrastructure/controllers/auth/auth-dto.class.ts:32](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/controllers/auth/auth-dto.class.ts#L32)

<a name="classesinfrastructure_controllers_auth_auth_presenterisauthpresentermd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/controllers/auth/auth.presenter](#modulesinfrastructure_controllers_auth_auth_presentermd) / IsAuthPresenter

## Class: IsAuthPresenter

[infrastructure/controllers/auth/auth.presenter](#modulesinfrastructure_controllers_auth_auth_presentermd).IsAuthPresenter

Represents the presenter for the IsAuth functionality.

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [username](#username)

### Constructors

#### constructor

• **new IsAuthPresenter**(): [`IsAuthPresenter`](#classesinfrastructure_controllers_auth_auth_presenterisauthpresentermd)

##### Returns

[`IsAuthPresenter`](#classesinfrastructure_controllers_auth_auth_presenterisauthpresentermd)

### Properties

#### username

• **username**: `string`

##### Defined in

[api/src/infrastructure/controllers/auth/auth.presenter.ts:8](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/controllers/auth/auth.presenter.ts#L8)

<a name="classesinfrastructure_controllers_controllers_modulecontrollersmodulemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/controllers/controllers.module](#modulesinfrastructure_controllers_controllers_modulemd) / ControllersModule

## Class: ControllersModule

[infrastructure/controllers/controllers.module](#modulesinfrastructure_controllers_controllers_modulemd).ControllersModule

Module that defines the controllers for the application.

### Table of contents

#### Constructors

- [constructor](#constructor)

### Constructors

#### constructor

• **new ControllersModule**(): [`ControllersModule`](#classesinfrastructure_controllers_controllers_modulecontrollersmodulemd)

##### Returns

[`ControllersModule`](#classesinfrastructure_controllers_controllers_modulecontrollersmodulemd)

<a name="classesinfrastructure_exceptions_exceptions_moduleexceptionsmodulemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/exceptions/exceptions.module](#modulesinfrastructure_exceptions_exceptions_modulemd) / ExceptionsModule

## Class: ExceptionsModule

[infrastructure/exceptions/exceptions.module](#modulesinfrastructure_exceptions_exceptions_modulemd).ExceptionsModule

Module for handling exceptions.

### Table of contents

#### Constructors

- [constructor](#constructor)

### Constructors

#### constructor

• **new ExceptionsModule**(): [`ExceptionsModule`](#classesinfrastructure_exceptions_exceptions_moduleexceptionsmodulemd)

##### Returns

[`ExceptionsModule`](#classesinfrastructure_exceptions_exceptions_moduleexceptionsmodulemd)

<a name="classesinfrastructure_exceptions_exceptions_serviceexceptionsservicemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/exceptions/exceptions.service](#modulesinfrastructure_exceptions_exceptions_servicemd) / ExceptionsService

## Class: ExceptionsService

[infrastructure/exceptions/exceptions.service](#modulesinfrastructure_exceptions_exceptions_servicemd).ExceptionsService

### Implements

- [`IException`](#interfacesdomain_exceptions_exceptions_interfaceiexceptionmd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Methods

- [badRequestException](#badrequestexception)
- [conflictException](#conflictexception)
- [forbiddenException](#forbiddenexception)
- [internalServerErrorException](#internalservererrorexception)
- [throwException](#throwexception)
- [unauthorizedException](#unauthorizedexception)

### Constructors

#### constructor

• **new ExceptionsService**(): [`ExceptionsService`](#classesinfrastructure_exceptions_exceptions_serviceexceptionsservicemd)

##### Returns

[`ExceptionsService`](#classesinfrastructure_exceptions_exceptions_serviceexceptionsservicemd)

### Methods

#### badRequestException

▸ **badRequestException**(`data`): `void`

Throws a BadRequestException with the provided format exception message.

##### Parameters

| Name   | Type                                                                                                    | Description                   |
| :----- | :------------------------------------------------------------------------------------------------------ | :---------------------------- |
| `data` | [`IFormatExceptionMessage`](#interfacesdomain_exceptions_exceptions_interfaceiformatexceptionmessagemd) | The format exception message. |

##### Returns

`void`

##### Implementation of

[IException](#interfacesdomain_exceptions_exceptions_interfaceiexceptionmd).[badRequestException](#badrequestexception)

##### Defined in

[api/src/infrastructure/exceptions/exceptions.service.ts:48](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/exceptions/exceptions.service.ts#L48)

---

#### conflictException

▸ **conflictException**(`data?`): `void`

Throws a ConflictException with optional data.

##### Parameters

| Name    | Type                                                                                                    | Description                                          |
| :------ | :------------------------------------------------------------------------------------------------------ | :--------------------------------------------------- |
| `data?` | [`IFormatExceptionMessage`](#interfacesdomain_exceptions_exceptions_interfaceiformatexceptionmessagemd) | Optional data to be passed to the ConflictException. |

##### Returns

`void`

##### Defined in

[api/src/infrastructure/exceptions/exceptions.service.ts:39](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/exceptions/exceptions.service.ts#L39)

---

#### forbiddenException

▸ **forbiddenException**(`data?`): `void`

Throws a ForbiddenException with the optional format exception message.

##### Parameters

| Name    | Type                                                                                                    | Description                              |
| :------ | :------------------------------------------------------------------------------------------------------ | :--------------------------------------- |
| `data?` | [`IFormatExceptionMessage`](#interfacesdomain_exceptions_exceptions_interfaceiformatexceptionmessagemd) | The format exception message (optional). |

##### Returns

`void`

##### Implementation of

[IException](#interfacesdomain_exceptions_exceptions_interfaceiexceptionmd).[forbiddenException](#forbiddenexception)

##### Defined in

[api/src/infrastructure/exceptions/exceptions.service.ts:66](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/exceptions/exceptions.service.ts#L66)

---

#### internalServerErrorException

▸ **internalServerErrorException**(`data?`): `void`

Throws an InternalServerErrorException with the optional format exception message.

##### Parameters

| Name    | Type                                                                                                    | Description                              |
| :------ | :------------------------------------------------------------------------------------------------------ | :--------------------------------------- |
| `data?` | [`IFormatExceptionMessage`](#interfacesdomain_exceptions_exceptions_interfaceiformatexceptionmessagemd) | The format exception message (optional). |

##### Returns

`void`

##### Implementation of

[IException](#interfacesdomain_exceptions_exceptions_interfaceiexceptionmd).[internalServerErrorException](#internalservererrorexception)

##### Defined in

[api/src/infrastructure/exceptions/exceptions.service.ts:57](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/exceptions/exceptions.service.ts#L57)

---

#### throwException

▸ **throwException**(`exception`, `message?`): `void`

Throws a BadRequestException with the provided format exception message.

##### Parameters

| Name        | Type                                                                                                    |
| :---------- | :------------------------------------------------------------------------------------------------------ |
| `exception` | `any`                                                                                                   |
| `message?`  | [`IFormatExceptionMessage`](#interfacesdomain_exceptions_exceptions_interfaceiformatexceptionmessagemd) |

##### Returns

`void`

##### Defined in

[api/src/infrastructure/exceptions/exceptions.service.ts:24](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/exceptions/exceptions.service.ts#L24)

---

#### unauthorizedException

▸ **unauthorizedException**(`data?`): `void`

Throws an UnauthorizedException with the optional format exception message.

##### Parameters

| Name    | Type                                                                                                    | Description                              |
| :------ | :------------------------------------------------------------------------------------------------------ | :--------------------------------------- |
| `data?` | [`IFormatExceptionMessage`](#interfacesdomain_exceptions_exceptions_interfaceiformatexceptionmessagemd) | The format exception message (optional). |

##### Returns

`void`

##### Implementation of

[IException](#interfacesdomain_exceptions_exceptions_interfaceiexceptionmd).[unauthorizedException](#unauthorizedexception)

##### Defined in

[api/src/infrastructure/exceptions/exceptions.service.ts:75](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/exceptions/exceptions.service.ts#L75)

<a name="classesinfrastructure_logger_logger_moduleloggermodulemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/logger/logger.module](#modulesinfrastructure_logger_logger_modulemd) / LoggerModule

## Class: LoggerModule

[infrastructure/logger/logger.module](#modulesinfrastructure_logger_logger_modulemd).LoggerModule

Module for providing and exporting the LoggerService.

### Table of contents

#### Constructors

- [constructor](#constructor)

### Constructors

#### constructor

• **new LoggerModule**(): [`LoggerModule`](#classesinfrastructure_logger_logger_moduleloggermodulemd)

##### Returns

[`LoggerModule`](#classesinfrastructure_logger_logger_moduleloggermodulemd)

<a name="classesinfrastructure_logger_logger_serviceloggerservicemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/logger/logger.service](#modulesinfrastructure_logger_logger_servicemd) / LoggerService

## Class: LoggerService

[infrastructure/logger/logger.service](#modulesinfrastructure_logger_logger_servicemd).LoggerService

LoggerService class that extends Logger and implements ILogger.
Provides logging functionality for the application.

### Hierarchy

- `Logger`

  ↳ **`LoggerService`**

### Implements

- [`ILogger`](#interfacesdomain_logger_logger_interfaceiloggermd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [context](#context)
- [localInstanceRef](#localinstanceref)
- [options](#options)
- [logBuffer](#logbuffer)
- [logLevels](#loglevels)
- [staticInstanceRef](#staticinstanceref)

#### Accessors

- [localInstance](#localinstance)

#### Methods

- [debug](#debug)
- [error](#error)
- [fatal](#fatal)
- [log](#log)
- [verbose](#verbose)
- [warn](#warn)
- [attachBuffer](#attachbuffer)
- [debug](#debug-1)
- [detachBuffer](#detachbuffer)
- [error](#error-1)
- [fatal](#fatal-1)
- [flush](#flush)
- [getTimestamp](#gettimestamp)
- [isLevelEnabled](#islevelenabled)
- [log](#log-1)
- [overrideLogger](#overridelogger)
- [verbose](#verbose-1)
- [warn](#warn-1)

### Constructors

#### constructor

• **new LoggerService**(): [`LoggerService`](#classesinfrastructure_logger_logger_serviceloggerservicemd)

##### Returns

[`LoggerService`](#classesinfrastructure_logger_logger_serviceloggerservicemd)

##### Inherited from

Logger.constructor

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:63

• **new LoggerService**(`context`): [`LoggerService`](#classesinfrastructure_logger_logger_serviceloggerservicemd)

##### Parameters

| Name      | Type     |
| :-------- | :------- |
| `context` | `string` |

##### Returns

[`LoggerService`](#classesinfrastructure_logger_logger_serviceloggerservicemd)

##### Inherited from

Logger.constructor

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:64

• **new LoggerService**(`context`, `options?`): [`LoggerService`](#classesinfrastructure_logger_logger_serviceloggerservicemd)

##### Parameters

| Name                 | Type      |
| :------------------- | :-------- |
| `context`            | `string`  |
| `options?`           | `Object`  |
| `options.timestamp?` | `boolean` |

##### Returns

[`LoggerService`](#classesinfrastructure_logger_logger_serviceloggerservicemd)

##### Inherited from

Logger.constructor

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:65

### Properties

#### context

• `Protected` `Optional` **context**: `string`

##### Inherited from

Logger.context

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:53

---

#### localInstanceRef

• `Protected` `Optional` **localInstanceRef**: `LoggerService`

##### Inherited from

Logger.localInstanceRef

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:61

---

#### options

• `Protected` **options**: `Object`

##### Type declaration

| Name         | Type      |
| :----------- | :-------- |
| `timestamp?` | `boolean` |

##### Inherited from

Logger.options

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:54

---

#### logBuffer

▪ `Static` `Protected` **logBuffer**: `LogBufferRecord`[]

##### Inherited from

Logger.logBuffer

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:57

---

#### logLevels

▪ `Static` `Protected` `Optional` **logLevels**: `LogLevel`[]

##### Inherited from

Logger.logLevels

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:59

---

#### staticInstanceRef

▪ `Static` `Protected` `Optional` **staticInstanceRef**: `LoggerService`

##### Inherited from

Logger.staticInstanceRef

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:58

### Accessors

#### localInstance

• `get` **localInstance**(): `LoggerService`

##### Returns

`LoggerService`

##### Inherited from

Logger.localInstance

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:68

### Methods

#### debug

▸ **debug**(`context`, `message`): `void`

Logs a debug message with the specified context.

##### Parameters

| Name      | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `context` | `string` | The context of the log message. |
| `message` | `string` | The debug message to log.       |

##### Returns

`void`

##### Implementation of

[ILogger](#interfacesdomain_logger_logger_interfaceiloggermd).[debug](#debug)

##### Overrides

Logger.debug

##### Defined in

[api/src/infrastructure/logger/logger.service.ts:32](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/logger/logger.service.ts#L32)

---

#### error

▸ **error**(`context`, `message`, `trace?`): `void`

Logs an error message with the specified context and optional trace.

##### Parameters

| Name      | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `context` | `string` | The context of the log message. |
| `message` | `string` | The error message to log.       |
| `trace?`  | `string` | Optional trace information.     |

##### Returns

`void`

##### Implementation of

[ILogger](#interfacesdomain_logger_logger_interfaceiloggermd).[error](#error)

##### Overrides

Logger.error

##### Defined in

[api/src/infrastructure/logger/logger.service.ts:55](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/logger/logger.service.ts#L55)

---

#### fatal

▸ **fatal**(`message`, `context?`): `void`

Write a 'fatal' level log.

##### Parameters

| Name       | Type     |
| :--------- | :------- |
| `message`  | `any`    |
| `context?` | `string` |

##### Returns

`void`

##### Inherited from

Logger.fatal

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:97

▸ **fatal**(`message`, `...optionalParams`): `void`

##### Parameters

| Name                | Type    |
| :------------------ | :------ |
| `message`           | `any`   |
| `...optionalParams` | `any`[] |

##### Returns

`void`

##### Inherited from

Logger.fatal

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:98

---

#### log

▸ **log**(`context`, `message`): `void`

Logs an info message with the specified context.

##### Parameters

| Name      | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `context` | `string` | The context of the log message. |
| `message` | `string` | The info message to log.        |

##### Returns

`void`

##### Implementation of

[ILogger](#interfacesdomain_logger_logger_interfaceiloggermd).[log](#log)

##### Overrides

Logger.log

##### Defined in

[api/src/infrastructure/logger/logger.service.ts:44](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/logger/logger.service.ts#L44)

---

#### verbose

▸ **verbose**(`context`, `message`): `void`

Logs a verbose message with the specified context.

##### Parameters

| Name      | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `context` | `string` | The context of the log message. |
| `message` | `string` | The verbose message to log.     |

##### Returns

`void`

##### Implementation of

[ILogger](#interfacesdomain_logger_logger_interfaceiloggermd).[verbose](#verbose)

##### Overrides

Logger.verbose

##### Defined in

[api/src/infrastructure/logger/logger.service.ts:75](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/logger/logger.service.ts#L75)

---

#### warn

▸ **warn**(`context`, `message`): `void`

Logs a warning message with the specified context.

##### Parameters

| Name      | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `context` | `string` | The context of the log message. |
| `message` | `string` | The warning message to log.     |

##### Returns

`void`

##### Implementation of

[ILogger](#interfacesdomain_logger_logger_interfaceiloggermd).[warn](#warn)

##### Overrides

Logger.warn

##### Defined in

[api/src/infrastructure/logger/logger.service.ts:65](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/logger/logger.service.ts#L65)

---

#### attachBuffer

▸ **attachBuffer**(): `void`

Attach buffer.
Turns on initialization logs buffering.

##### Returns

`void`

##### Inherited from

Logger.attachBuffer

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:140

---

#### debug

▸ **debug**(`message`, `context?`): `void`

Write a 'debug' level log, if the configured level allows for it.
Prints to `stdout` with newline.

##### Parameters

| Name       | Type     |
| :--------- | :------- |
| `message`  | `any`    |
| `context?` | `string` |

##### Returns

`void`

##### Inherited from

Logger.debug

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:120

▸ **debug**(`message`, `...optionalParams`): `void`

##### Parameters

| Name                | Type    |
| :------------------ | :------ |
| `message`           | `any`   |
| `...optionalParams` | `any`[] |

##### Returns

`void`

##### Inherited from

Logger.debug

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:121

---

#### detachBuffer

▸ **detachBuffer**(): `void`

Detach buffer.
Turns off initialization logs buffering.

##### Returns

`void`

##### Inherited from

Logger.detachBuffer

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:145

---

#### error

▸ **error**(`message`, `stackOrContext?`): `void`

Write an 'error' level log.

##### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `message`         | `any`    |
| `stackOrContext?` | `string` |

##### Returns

`void`

##### Inherited from

Logger.error

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:102

▸ **error**(`message`, `context?`): `void`

##### Parameters

| Name       | Type     |
| :--------- | :------- |
| `message`  | `any`    |
| `context?` | `string` |

##### Returns

`void`

##### Inherited from

Logger.error

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:103

▸ **error**(`message`, `stack?`, `context?`): `void`

##### Parameters

| Name       | Type     |
| :--------- | :------- |
| `message`  | `any`    |
| `stack?`   | `string` |
| `context?` | `string` |

##### Returns

`void`

##### Inherited from

Logger.error

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:104

▸ **error**(`message`, `...optionalParams`): `void`

##### Parameters

| Name                | Type    |
| :------------------ | :------ |
| `message`           | `any`   |
| `...optionalParams` | `any`[] |

##### Returns

`void`

##### Inherited from

Logger.error

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:105

---

#### fatal

▸ **fatal**(`message`, `context?`): `void`

Write a 'fatal' level log.

##### Parameters

| Name       | Type     |
| :--------- | :------- |
| `message`  | `any`    |
| `context?` | `string` |

##### Returns

`void`

##### Inherited from

Logger.fatal

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:130

▸ **fatal**(`message`, `...optionalParams`): `void`

##### Parameters

| Name                | Type    |
| :------------------ | :------ |
| `message`           | `any`   |
| `...optionalParams` | `any`[] |

##### Returns

`void`

##### Inherited from

Logger.fatal

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:131

---

#### flush

▸ **flush**(): `void`

Print buffered logs and detach buffer.

##### Returns

`void`

##### Inherited from

Logger.flush

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:135

---

#### getTimestamp

▸ **getTimestamp**(): `string`

##### Returns

`string`

##### Inherited from

Logger.getTimestamp

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:146

---

#### isLevelEnabled

▸ **isLevelEnabled**(`level`): `boolean`

##### Parameters

| Name    | Type       |
| :------ | :--------- |
| `level` | `LogLevel` |

##### Returns

`boolean`

##### Inherited from

Logger.isLevelEnabled

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:148

---

#### log

▸ **log**(`message`, `context?`): `void`

Write a 'log' level log.

##### Parameters

| Name       | Type     |
| :--------- | :------- |
| `message`  | `any`    |
| `context?` | `string` |

##### Returns

`void`

##### Inherited from

Logger.log

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:109

▸ **log**(`message`, `...optionalParams`): `void`

##### Parameters

| Name                | Type    |
| :------------------ | :------ |
| `message`           | `any`   |
| `...optionalParams` | `any`[] |

##### Returns

`void`

##### Inherited from

Logger.log

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:110

---

#### overrideLogger

▸ **overrideLogger**(`logger`): `any`

##### Parameters

| Name     | Type                                         |
| :------- | :------------------------------------------- |
| `logger` | `boolean` \| `LoggerService` \| `LogLevel`[] |

##### Returns

`any`

##### Inherited from

Logger.overrideLogger

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:147

---

#### verbose

▸ **verbose**(`message`, `context?`): `void`

Write a 'verbose' level log.

##### Parameters

| Name       | Type     |
| :--------- | :------- |
| `message`  | `any`    |
| `context?` | `string` |

##### Returns

`void`

##### Inherited from

Logger.verbose

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:125

▸ **verbose**(`message`, `...optionalParams`): `void`

##### Parameters

| Name                | Type    |
| :------------------ | :------ |
| `message`           | `any`   |
| `...optionalParams` | `any`[] |

##### Returns

`void`

##### Inherited from

Logger.verbose

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:126

---

#### warn

▸ **warn**(`message`, `context?`): `void`

Write a 'warn' level log.

##### Parameters

| Name       | Type     |
| :--------- | :------- |
| `message`  | `any`    |
| `context?` | `string` |

##### Returns

`void`

##### Inherited from

Logger.warn

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:114

▸ **warn**(`message`, `...optionalParams`): `void`

##### Parameters

| Name                | Type    |
| :------------------ | :------ |
| `message`           | `any`   |
| `...optionalParams` | `any`[] |

##### Returns

`void`

##### Inherited from

Logger.warn

##### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:115

<a name="classesinfrastructure_mongo_mongo_modulemongoconfigmodulemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/mongo/mongo.module](#modulesinfrastructure_mongo_mongo_modulemd) / MongoConfigModule

## Class: MongoConfigModule

[infrastructure/mongo/mongo.module](#modulesinfrastructure_mongo_mongo_modulemd).MongoConfigModule

Module for configuring MongoDB connection using Mongoose.

### Table of contents

#### Constructors

- [constructor](#constructor)

### Constructors

#### constructor

• **new MongoConfigModule**(): [`MongoConfigModule`](#classesinfrastructure_mongo_mongo_modulemongoconfigmodulemd)

##### Returns

[`MongoConfigModule`](#classesinfrastructure_mongo_mongo_modulemongoconfigmodulemd)

<a name="classesinfrastructure_repositories_repositories_modulerepositoriesmodulemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/repositories/repositories.module](#modulesinfrastructure_repositories_repositories_modulemd) / RepositoriesModule

## Class: RepositoriesModule

[infrastructure/repositories/repositories.module](#modulesinfrastructure_repositories_repositories_modulemd).RepositoriesModule

Module for defining repositories in the MongoDB infrastructure.

### Table of contents

#### Constructors

- [constructor](#constructor)

### Constructors

#### constructor

• **new RepositoriesModule**(): [`RepositoriesModule`](#classesinfrastructure_repositories_repositories_modulerepositoriesmodulemd)

##### Returns

[`RepositoriesModule`](#classesinfrastructure_repositories_repositories_modulerepositoriesmodulemd)

<a name="classesinfrastructure_repositories_user_user_repositorydatabaseuserrepositorymd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/repositories/user/user.repository](#modulesinfrastructure_repositories_user_user_repositorymd) / DatabaseUserRepository

## Class: DatabaseUserRepository

[infrastructure/repositories/user/user.repository](#modulesinfrastructure_repositories_user_user_repositorymd).DatabaseUserRepository

DatabaseUserRepository class that implements the UserRepository interface.
This class provides methods to interact with the user collection in the MongoDB database.

### Implements

- [`UserRepository`](#interfacesdomain_repositories_userrepository_interfaceuserrepositorymd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [userSchemaRepository](#userschemarepository)

#### Methods

- [createUser](#createuser)
- [getUserByEmail](#getuserbyemail)
- [getUserByUsername](#getuserbyusername)
- [toUser](#touser)
- [toUserEntity](#touserentity)
- [updateLastLogin](#updatelastlogin)
- [updateRefreshToken](#updaterefreshtoken)

### Constructors

#### constructor

• **new DatabaseUserRepository**(`userSchemaRepository`): [`DatabaseUserRepository`](#classesinfrastructure_repositories_user_user_repositorydatabaseuserrepositorymd)

##### Parameters

| Name                   | Type                                                                                                                                                                                                                                                                                  |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `userSchemaRepository` | `Model`\<[`User`](#classesinfrastructure_schemas_user_schemausermd), {}, {}, {}, `Document`\<`unknown`, {}, [`User`](#classesinfrastructure_schemas_user_schemausermd)\> & [`User`](#classesinfrastructure_schemas_user_schemausermd) & `Required`\<\{ `_id`: `ObjectId` }\>, `any`\> |

##### Returns

[`DatabaseUserRepository`](#classesinfrastructure_repositories_user_user_repositorydatabaseuserrepositorymd)

##### Defined in

[api/src/infrastructure/repositories/user/user.repository.ts:14](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/repositories/user/user.repository.ts#L14)

### Properties

#### userSchemaRepository

• `Private` **userSchemaRepository**: `Model`\<[`User`](#classesinfrastructure_schemas_user_schemausermd), {}, {}, {}, `Document`\<`unknown`, {}, [`User`](#classesinfrastructure_schemas_user_schemausermd)\> & [`User`](#classesinfrastructure_schemas_user_schemausermd) & `Required`\<\{ `_id`: `ObjectId` }\>, `any`\>

##### Defined in

[api/src/infrastructure/repositories/user/user.repository.ts:16](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/repositories/user/user.repository.ts#L16)

### Methods

#### createUser

▸ **createUser**(`email`, `username`, `password`): `Promise`\<[`UserModel`](#classesdomain_model_userusermodelmd)\>

Creates a new user with the given username and password.

##### Parameters

| Name       | Type     | Description               |
| :--------- | :------- | :------------------------ |
| `email`    | `string` | -                         |
| `username` | `string` | The username of the user. |
| `password` | `string` | The password of the user. |

##### Returns

`Promise`\<[`UserModel`](#classesdomain_model_userusermodelmd)\>

A Promise that resolves to the created UserModel.

##### Implementation of

[UserRepository](#interfacesdomain_repositories_userrepository_interfaceuserrepositorymd).[createUser](#createuser)

##### Defined in

[api/src/infrastructure/repositories/user/user.repository.ts:25](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/repositories/user/user.repository.ts#L25)

---

#### getUserByEmail

▸ **getUserByEmail**(`email`): `Promise`\<[`UserModel`](#classesdomain_model_userusermodelmd)\>

Retrieves a user by their email address.

##### Parameters

| Name    | Type     | Description                    |
| :------ | :------- | :----------------------------- |
| `email` | `string` | The email address of the user. |

##### Returns

`Promise`\<[`UserModel`](#classesdomain_model_userusermodelmd)\>

A Promise that resolves to a UserModel if a user with the specified email is found, or null otherwise.

##### Implementation of

[UserRepository](#interfacesdomain_repositories_userrepository_interfaceuserrepositorymd).[getUserByEmail](#getuserbyemail)

##### Defined in

[api/src/infrastructure/repositories/user/user.repository.ts:76](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/repositories/user/user.repository.ts#L76)

---

#### getUserByUsername

▸ **getUserByUsername**(`username`): `Promise`\<[`UserModel`](#classesdomain_model_userusermodelmd)\>

Retrieves a user by their username.

##### Parameters

| Name       | Type     | Description                           |
| :--------- | :------- | :------------------------------------ |
| `username` | `string` | The username of the user to retrieve. |

##### Returns

`Promise`\<[`UserModel`](#classesdomain_model_userusermodelmd)\>

A Promise that resolves to the UserModel if found, or null if not found.

##### Implementation of

[UserRepository](#interfacesdomain_repositories_userrepository_interfaceuserrepositorymd).[getUserByUsername](#getuserbyusername)

##### Defined in

[api/src/infrastructure/repositories/user/user.repository.ts:88](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/repositories/user/user.repository.ts#L88)

---

#### toUser

▸ **toUser**(`userEntity`): [`UserModel`](#classesdomain_model_userusermodelmd)

Converts a User entity to a UserModel.

##### Parameters

| Name         | Type                                                       | Description                 |
| :----------- | :--------------------------------------------------------- | :-------------------------- |
| `userEntity` | [`User`](#classesinfrastructure_schemas_user_schemausermd) | The User entity to convert. |

##### Returns

[`UserModel`](#classesdomain_model_userusermodelmd)

The converted UserModel.

##### Defined in

[api/src/infrastructure/repositories/user/user.repository.ts:100](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/repositories/user/user.repository.ts#L100)

---

#### toUserEntity

▸ **toUserEntity**(`adminUser`): [`User`](#classesinfrastructure_schemas_user_schemausermd)

Converts an admin user model to a user entity.

##### Parameters

| Name        | Type                                                | Description                      |
| :---------- | :-------------------------------------------------- | :------------------------------- |
| `adminUser` | [`UserModel`](#classesdomain_model_userusermodelmd) | The admin user model to convert. |

##### Returns

[`User`](#classesinfrastructure_schemas_user_schemausermd)

The converted user entity.

##### Defined in

[api/src/infrastructure/repositories/user/user.repository.ts:121](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/repositories/user/user.repository.ts#L121)

---

#### updateLastLogin

▸ **updateLastLogin**(`username`): `Promise`\<`void`\>

Updates the last login date for a user.

##### Parameters

| Name       | Type     | Description               |
| :--------- | :------- | :------------------------ |
| `username` | `string` | The username of the user. |

##### Returns

`Promise`\<`void`\>

A promise that resolves to void.

##### Implementation of

[UserRepository](#interfacesdomain_repositories_userrepository_interfaceuserrepositorymd).[updateLastLogin](#updatelastlogin)

##### Defined in

[api/src/infrastructure/repositories/user/user.repository.ts:65](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/repositories/user/user.repository.ts#L65)

---

#### updateRefreshToken

▸ **updateRefreshToken**(`username`, `refreshToken`): `Promise`\<`void`\>

Updates the refresh token for a user.

##### Parameters

| Name           | Type     | Description               |
| :------------- | :------- | :------------------------ |
| `username`     | `string` | The username of the user. |
| `refreshToken` | `string` | The new refresh token.    |

##### Returns

`Promise`\<`void`\>

A promise that resolves when the refresh token is updated.

##### Implementation of

[UserRepository](#interfacesdomain_repositories_userrepository_interfaceuserrepositorymd).[updateRefreshToken](#updaterefreshtoken)

##### Defined in

[api/src/infrastructure/repositories/user/user.repository.ts:50](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/repositories/user/user.repository.ts#L50)

<a name="classesinfrastructure_schemas_user_schemausermd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/schemas/user.schema](#modulesinfrastructure_schemas_user_schemamd) / User

## Class: User

[infrastructure/schemas/user.schema](#modulesinfrastructure_schemas_user_schemamd).User

Represents a User schema in MongoDB.

### Implements

- `Omit`\<[`UserModel`](#classesdomain_model_userusermodelmd), `"id"` \| `"refreshToken"` \| `"accessToken"`\>

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [\_id](#_id)
- [createDate](#createdate)
- [email](#email)
- [hashRefreshToken](#hashrefreshtoken)
- [lastLogin](#lastlogin)
- [password](#password)
- [updatedDate](#updateddate)
- [username](#username)

### Constructors

#### constructor

• **new User**(): [`User`](#classesinfrastructure_schemas_user_schemausermd)

##### Returns

[`User`](#classesinfrastructure_schemas_user_schemausermd)

### Properties

#### \_id

• **\_id**: `ObjectId`

The id of the user.

##### Defined in

[api/src/infrastructure/schemas/user.schema.ts:20](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/schemas/user.schema.ts#L20)

---

#### createDate

• **createDate**: `Date`

The date the user was created.

##### Implementation of

Omit.createDate

##### Defined in

[api/src/infrastructure/schemas/user.schema.ts:52](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/schemas/user.schema.ts#L52)

---

#### email

• **email**: `string`

The email of the user.

##### Implementation of

Omit.email

##### Defined in

[api/src/infrastructure/schemas/user.schema.ts:29](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/schemas/user.schema.ts#L29)

---

#### hashRefreshToken

• **hashRefreshToken**: `string`

The refresh token hash of the user.

##### Implementation of

Omit.hashRefreshToken

##### Defined in

[api/src/infrastructure/schemas/user.schema.ts:46](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/schemas/user.schema.ts#L46)

---

#### lastLogin

• **lastLogin**: `Date`

The date the user last logged in.

##### Implementation of

Omit.lastLogin

##### Defined in

[api/src/infrastructure/schemas/user.schema.ts:58](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/schemas/user.schema.ts#L58)

---

#### password

• **password**: `string`

The password of the user.

##### Implementation of

Omit.password

##### Defined in

[api/src/infrastructure/schemas/user.schema.ts:40](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/schemas/user.schema.ts#L40)

---

#### updatedDate

• **updatedDate**: `Date`

The date the user was last updated.

##### Implementation of

Omit.updatedDate

##### Defined in

[api/src/infrastructure/schemas/user.schema.ts:64](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/schemas/user.schema.ts#L64)

---

#### username

• **username**: `string`

The username of the user.

##### Implementation of

Omit.username

##### Defined in

[api/src/infrastructure/schemas/user.schema.ts:34](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/schemas/user.schema.ts#L34)

<a name="classesinfrastructure_services_bcrypt_bcrypt_modulebcryptmodulemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/services/bcrypt/bcrypt.module](#modulesinfrastructure_services_bcrypt_bcrypt_modulemd) / BcryptModule

## Class: BcryptModule

[infrastructure/services/bcrypt/bcrypt.module](#modulesinfrastructure_services_bcrypt_bcrypt_modulemd).BcryptModule

Module for providing and exporting the BcryptService.

### Table of contents

#### Constructors

- [constructor](#constructor)

### Constructors

#### constructor

• **new BcryptModule**(): [`BcryptModule`](#classesinfrastructure_services_bcrypt_bcrypt_modulebcryptmodulemd)

##### Returns

[`BcryptModule`](#classesinfrastructure_services_bcrypt_bcrypt_modulebcryptmodulemd)

<a name="classesinfrastructure_services_bcrypt_bcrypt_servicebcryptservicemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/services/bcrypt/bcrypt.service](#modulesinfrastructure_services_bcrypt_bcrypt_servicemd) / BcryptService

## Class: BcryptService

[infrastructure/services/bcrypt/bcrypt.service](#modulesinfrastructure_services_bcrypt_bcrypt_servicemd).BcryptService

Interface for the Bcrypt service.

### Implements

- [`IBcryptService`](#interfacesdomain_adapters_bcrypt_interfaceibcryptservicemd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [rounds](#rounds)

#### Methods

- [compare](#compare)
- [hash](#hash)

### Constructors

#### constructor

• **new BcryptService**(): [`BcryptService`](#classesinfrastructure_services_bcrypt_bcrypt_servicebcryptservicemd)

##### Returns

[`BcryptService`](#classesinfrastructure_services_bcrypt_bcrypt_servicebcryptservicemd)

### Properties

#### rounds

• `Private` `Readonly` **rounds**: `10`

##### Defined in

[api/src/infrastructure/services/bcrypt/bcrypt.service.ts:10](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/services/bcrypt/bcrypt.service.ts#L10)

### Methods

#### compare

▸ **compare**(`password`, `hashPassword`): `Promise`\<`boolean`\>

Compares a plain text password with a hashed password.

##### Parameters

| Name           | Type     | Description                             |
| :------------- | :------- | :-------------------------------------- |
| `password`     | `string` | The plain text password to compare.     |
| `hashPassword` | `string` | The hashed password to compare against. |

##### Returns

`Promise`\<`boolean`\>

A promise that resolves to a boolean indicating whether the passwords match.

##### Implementation of

[IBcryptService](#interfacesdomain_adapters_bcrypt_interfaceibcryptservicemd).[compare](#compare)

##### Defined in

[api/src/infrastructure/services/bcrypt/bcrypt.service.ts:27](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/services/bcrypt/bcrypt.service.ts#L27)

---

#### hash

▸ **hash**(`hashString`): `Promise`\<`string`\>

Hashes a string using bcrypt.

##### Parameters

| Name         | Type     | Description              |
| :----------- | :------- | :----------------------- |
| `hashString` | `string` | The string to be hashed. |

##### Returns

`Promise`\<`string`\>

A promise that resolves to the hashed string.

##### Implementation of

[IBcryptService](#interfacesdomain_adapters_bcrypt_interfaceibcryptservicemd).[hash](#hash)

##### Defined in

[api/src/infrastructure/services/bcrypt/bcrypt.service.ts:17](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/services/bcrypt/bcrypt.service.ts#L17)

<a name="classesinfrastructure_services_jwt_jwt_modulejwtmodulemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/services/jwt/jwt.module](#modulesinfrastructure_services_jwt_jwt_modulemd) / JwtModule

## Class: JwtModule

[infrastructure/services/jwt/jwt.module](#modulesinfrastructure_services_jwt_jwt_modulemd).JwtModule

Module for handling JSON Web Tokens (JWT) in the application.

### Table of contents

#### Constructors

- [constructor](#constructor)

### Constructors

#### constructor

• **new JwtModule**(): [`JwtModule`](#classesinfrastructure_services_jwt_jwt_modulejwtmodulemd)

##### Returns

[`JwtModule`](#classesinfrastructure_services_jwt_jwt_modulejwtmodulemd)

<a name="classesinfrastructure_services_jwt_jwt_servicejwttokenservicemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/services/jwt/jwt.service](#modulesinfrastructure_services_jwt_jwt_servicemd) / JwtTokenService

## Class: JwtTokenService

[infrastructure/services/jwt/jwt.service](#modulesinfrastructure_services_jwt_jwt_servicemd).JwtTokenService

Interface for JWT service.

### Implements

- [`IJwtService`](#interfacesdomain_adapters_jwt_interfaceijwtservicemd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [jwtService](#jwtservice)

#### Methods

- [checkToken](#checktoken)
- [createToken](#createtoken)

### Constructors

#### constructor

• **new JwtTokenService**(`jwtService`): [`JwtTokenService`](#classesinfrastructure_services_jwt_jwt_servicejwttokenservicemd)

##### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `jwtService` | `JwtService` |

##### Returns

[`JwtTokenService`](#classesinfrastructure_services_jwt_jwt_servicejwttokenservicemd)

##### Defined in

[api/src/infrastructure/services/jwt/jwt.service.ts:13](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/services/jwt/jwt.service.ts#L13)

### Properties

#### jwtService

• `Private` `Readonly` **jwtService**: `JwtService`

##### Defined in

[api/src/infrastructure/services/jwt/jwt.service.ts:13](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/services/jwt/jwt.service.ts#L13)

### Methods

#### checkToken

▸ **checkToken**(`token`): `Promise`\<`any`\>

Checks the validity of a JWT token.

##### Parameters

| Name    | Type     | Description                  |
| :------ | :------- | :--------------------------- |
| `token` | `string` | The JWT token to be checked. |

##### Returns

`Promise`\<`any`\>

A Promise that resolves to the decoded token payload.

##### Implementation of

[IJwtService](#interfacesdomain_adapters_jwt_interfaceijwtservicemd).[checkToken](#checktoken)

##### Defined in

[api/src/infrastructure/services/jwt/jwt.service.ts:20](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/services/jwt/jwt.service.ts#L20)

---

#### createToken

▸ **createToken**(`payload`, `secret`, `expiresIn`): `string`

Creates a JWT token with the given payload, secret, and expiration time.

##### Parameters

| Name        | Type                                                                                 | Description                            |
| :---------- | :----------------------------------------------------------------------------------- | :------------------------------------- |
| `payload`   | [`IJwtServicePayload`](#interfacesdomain_adapters_jwt_interfaceijwtservicepayloadmd) | The data to be included in the token.  |
| `secret`    | `string`                                                                             | The secret key used to sign the token. |
| `expiresIn` | `string`                                                                             | The expiration time for the token.     |

##### Returns

`string`

The generated JWT token.

##### Implementation of

[IJwtService](#interfacesdomain_adapters_jwt_interfaceijwtservicemd).[createToken](#createtoken)

##### Defined in

[api/src/infrastructure/services/jwt/jwt.service.ts:32](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/services/jwt/jwt.service.ts#L32)

<a name="classesinfrastructure_usecases_proxy_usecases_proxyusecaseproxymd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/usecases-proxy/usecases-proxy](#modulesinfrastructure_usecases_proxy_usecases_proxymd) / UseCaseProxy

## Class: UseCaseProxy\<T\>

[infrastructure/usecases-proxy/usecases-proxy](#modulesinfrastructure_usecases_proxy_usecases_proxymd).UseCaseProxy

A generic proxy class for use cases.

### Type parameters

| Name | Description               |
| :--- | :------------------------ |
| `T`  | The type of the use case. |

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [useCase](#usecase)

#### Methods

- [getInstance](#getinstance)

### Constructors

#### constructor

• **new UseCaseProxy**\<`T`\>(`useCase`): [`UseCaseProxy`](#classesinfrastructure_usecases_proxy_usecases_proxyusecaseproxymd)\<`T`\>

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name      | Type |
| :-------- | :--- |
| `useCase` | `T`  |

##### Returns

[`UseCaseProxy`](#classesinfrastructure_usecases_proxy_usecases_proxyusecaseproxymd)\<`T`\>

##### Defined in

[api/src/infrastructure/usecases-proxy/usecases-proxy.ts:6](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/usecases-proxy/usecases-proxy.ts#L6)

### Properties

#### useCase

• `Private` `Readonly` **useCase**: `T`

##### Defined in

[api/src/infrastructure/usecases-proxy/usecases-proxy.ts:6](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/usecases-proxy/usecases-proxy.ts#L6)

### Methods

#### getInstance

▸ **getInstance**(): `T`

##### Returns

`T`

##### Defined in

[api/src/infrastructure/usecases-proxy/usecases-proxy.ts:7](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/usecases-proxy/usecases-proxy.ts#L7)

<a name="classesinfrastructure_usecases_proxy_usecases_proxy_moduleusecasesproxymodulemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [infrastructure/usecases-proxy/usecases-proxy.module](#modulesinfrastructure_usecases_proxy_usecases_proxy_modulemd) / UsecasesProxyModule

## Class: UsecasesProxyModule

[infrastructure/usecases-proxy/usecases-proxy.module](#modulesinfrastructure_usecases_proxy_usecases_proxy_modulemd).UsecasesProxyModule

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [IS_AUTHENTICATED_USECASES_PROXY](#is_authenticated_usecases_proxy)
- [LOGIN_USECASES_PROXY](#login_usecases_proxy)
- [LOGOUT_USECASES_PROXY](#logout_usecases_proxy)
- [REGISTER_USECASES_PROXY](#register_usecases_proxy)

#### Methods

- [register](#register)

### Constructors

#### constructor

• **new UsecasesProxyModule**(): [`UsecasesProxyModule`](#classesinfrastructure_usecases_proxy_usecases_proxy_moduleusecasesproxymodulemd)

##### Returns

[`UsecasesProxyModule`](#classesinfrastructure_usecases_proxy_usecases_proxy_moduleusecasesproxymodulemd)

### Properties

#### IS_AUTHENTICATED_USECASES_PROXY

▪ `Static` **IS_AUTHENTICATED_USECASES_PROXY**: `symbol`

Symbol representing the use cases proxy for checking authentication.

##### Defined in

[api/src/infrastructure/usecases-proxy/usecases-proxy.module.ts:48](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/usecases-proxy/usecases-proxy.module.ts#L48)

---

#### LOGIN_USECASES_PROXY

▪ `Static` `Readonly` **LOGIN_USECASES_PROXY**: typeof [`LOGIN_USECASES_PROXY`](#login_usecases_proxy)

Symbol representing the login use cases proxy.

##### Defined in

[api/src/infrastructure/usecases-proxy/usecases-proxy.module.ts:40](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/usecases-proxy/usecases-proxy.module.ts#L40)

---

#### LOGOUT_USECASES_PROXY

▪ `Static` `Readonly` **LOGOUT_USECASES_PROXY**: typeof [`LOGOUT_USECASES_PROXY`](#logout_usecases_proxy)

Symbol representing the logout use cases proxy.

##### Defined in

[api/src/infrastructure/usecases-proxy/usecases-proxy.module.ts:54](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/usecases-proxy/usecases-proxy.module.ts#L54)

---

#### REGISTER_USECASES_PROXY

▪ `Static` `Readonly` **REGISTER_USECASES_PROXY**: typeof [`REGISTER_USECASES_PROXY`](#register_usecases_proxy)

Symbol used for registering use cases proxy.

##### Defined in

[api/src/infrastructure/usecases-proxy/usecases-proxy.module.ts:44](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/usecases-proxy/usecases-proxy.module.ts#L44)

### Methods

#### register

▸ **register**(): `DynamicModule`

Registers the UsecasesProxyModule.

##### Returns

`DynamicModule`

A dynamic module configuration object.

##### Defined in

[api/src/infrastructure/usecases-proxy/usecases-proxy.module.ts:60](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/usecases-proxy/usecases-proxy.module.ts#L60)

<a name="classesusecases_auth_isauthenticated_usecasesisauthenticatedusecasesmd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [usecases/auth/isAuthenticated.usecases](#modulesusecases_auth_isauthenticated_usecasesmd) / IsAuthenticatedUseCases

## Class: IsAuthenticatedUseCases

[usecases/auth/isAuthenticated.usecases](#modulesusecases_auth_isauthenticated_usecasesmd).IsAuthenticatedUseCases

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [adminUserRepo](#adminuserrepo)

#### Methods

- [execute](#execute)

### Constructors

#### constructor

• **new IsAuthenticatedUseCases**(`adminUserRepo`): [`IsAuthenticatedUseCases`](#classesusecases_auth_isauthenticated_usecasesisauthenticatedusecasesmd)

Constructs a new instance of the `isAuthenticated` use case.

##### Parameters

| Name            | Type                                                                                        | Description                     |
| :-------------- | :------------------------------------------------------------------------------------------ | :------------------------------ |
| `adminUserRepo` | [`UserRepository`](#interfacesdomain_repositories_userrepository_interfaceuserrepositorymd) | The repository for admin users. |

##### Returns

[`IsAuthenticatedUseCases`](#classesusecases_auth_isauthenticated_usecasesisauthenticatedusecasesmd)

##### Defined in

[api/src/usecases/auth/isAuthenticated.usecases.ts:9](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/isAuthenticated.usecases.ts#L9)

### Properties

#### adminUserRepo

• `Private` `Readonly` **adminUserRepo**: [`UserRepository`](#interfacesdomain_repositories_userrepository_interfaceuserrepositorymd)

The repository for admin users.

##### Defined in

[api/src/usecases/auth/isAuthenticated.usecases.ts:9](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/isAuthenticated.usecases.ts#L9)

### Methods

#### execute

▸ **execute**(`username`): `Promise`\<[`User`](#classesdomain_model_userusermd)\>

Executes the isAuthenticated use case.
Retrieves a user by their username.

##### Parameters

| Name       | Type     | Description                           |
| :--------- | :------- | :------------------------------------ |
| `username` | `string` | The username of the user to retrieve. |

##### Returns

`Promise`\<[`User`](#classesdomain_model_userusermd)\>

A Promise that resolves to the retrieved User object.

##### Defined in

[api/src/usecases/auth/isAuthenticated.usecases.ts:18](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/isAuthenticated.usecases.ts#L18)

<a name="classesusecases_auth_login_usecasesloginusecasesmd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [usecases/auth/login.usecases](#modulesusecases_auth_login_usecasesmd) / LoginUseCases

## Class: LoginUseCases

[usecases/auth/login.usecases](#modulesusecases_auth_login_usecasesmd).LoginUseCases

Represents the use cases for user login functionality.

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [bcryptService](#bcryptservice)
- [jwtConfig](#jwtconfig)
- [jwtTokenService](#jwttokenservice)
- [logger](#logger)
- [userRepository](#userrepository)

#### Methods

- [getCookieWithJwtRefreshToken](#getcookiewithjwtrefreshtoken)
- [getCookieWithJwtToken](#getcookiewithjwttoken)
- [getUserIfRefreshTokenMatches](#getuserifrefreshtokenmatches)
- [setCurrentRefreshToken](#setcurrentrefreshtoken)
- [updateLoginTime](#updatelogintime)
- [validateUserForJWTStragtegy](#validateuserforjwtstragtegy)
- [validateUserForLocalStragtegy](#validateuserforlocalstragtegy)

### Constructors

#### constructor

• **new LoginUseCases**(`logger`, `jwtTokenService`, `jwtConfig`, `userRepository`, `bcryptService`): [`LoginUseCases`](#classesusecases_auth_login_usecasesloginusecasesmd)

Constructs a new instance of the LoginUseCases class.

##### Parameters

| Name              | Type                                                                                        | Description            |
| :---------------- | :------------------------------------------------------------------------------------------ | :--------------------- |
| `logger`          | [`ILogger`](#interfacesdomain_logger_logger_interfaceiloggermd)                             | The logger instance.   |
| `jwtTokenService` | [`IJwtService`](#interfacesdomain_adapters_jwt_interfaceijwtservicemd)                      | The JWT token service. |
| `jwtConfig`       | [`JWTConfig`](#interfacesdomain_config_jwt_interfacejwtconfigmd)                            | The JWT configuration. |
| `userRepository`  | [`UserRepository`](#interfacesdomain_repositories_userrepository_interfaceuserrepositorymd) | The user repository.   |
| `bcryptService`   | [`IBcryptService`](#interfacesdomain_adapters_bcrypt_interfaceibcryptservicemd)             | The bcrypt service.    |

##### Returns

[`LoginUseCases`](#classesusecases_auth_login_usecasesloginusecasesmd)

##### Defined in

[api/src/usecases/auth/login.usecases.ts:22](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/login.usecases.ts#L22)

### Properties

#### bcryptService

• `Private` `Readonly` **bcryptService**: [`IBcryptService`](#interfacesdomain_adapters_bcrypt_interfaceibcryptservicemd)

The bcrypt service.

##### Defined in

[api/src/usecases/auth/login.usecases.ts:27](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/login.usecases.ts#L27)

---

#### jwtConfig

• `Private` `Readonly` **jwtConfig**: [`JWTConfig`](#interfacesdomain_config_jwt_interfacejwtconfigmd)

The JWT configuration.

##### Defined in

[api/src/usecases/auth/login.usecases.ts:25](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/login.usecases.ts#L25)

---

#### jwtTokenService

• `Private` `Readonly` **jwtTokenService**: [`IJwtService`](#interfacesdomain_adapters_jwt_interfaceijwtservicemd)

The JWT token service.

##### Defined in

[api/src/usecases/auth/login.usecases.ts:24](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/login.usecases.ts#L24)

---

#### logger

• `Private` `Readonly` **logger**: [`ILogger`](#interfacesdomain_logger_logger_interfaceiloggermd)

The logger instance.

##### Defined in

[api/src/usecases/auth/login.usecases.ts:23](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/login.usecases.ts#L23)

---

#### userRepository

• `Private` `Readonly` **userRepository**: [`UserRepository`](#interfacesdomain_repositories_userrepository_interfaceuserrepositorymd)

The user repository.

##### Defined in

[api/src/usecases/auth/login.usecases.ts:26](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/login.usecases.ts#L26)

### Methods

#### getCookieWithJwtRefreshToken

▸ **getCookieWithJwtRefreshToken**(`username`): `Promise`\<`string`\>

Retrieves a cookie with a JWT refresh token for the specified username.

##### Parameters

| Name       | Type     | Description               |
| :--------- | :------- | :------------------------ |
| `username` | `string` | The username of the user. |

##### Returns

`Promise`\<`string`\>

The cookie containing the JWT refresh token.

##### Defined in

[api/src/usecases/auth/login.usecases.ts:52](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/login.usecases.ts#L52)

---

#### getCookieWithJwtToken

▸ **getCookieWithJwtToken**(`username`): `Promise`\<`string`\>

Generates a cookie with a JWT token for the specified username.

##### Parameters

| Name       | Type     | Description                                        |
| :--------- | :------- | :------------------------------------------------- |
| `username` | `string` | The username for which the JWT token is generated. |

##### Returns

`Promise`\<`string`\>

A string representing the generated cookie with the JWT token.

##### Defined in

[api/src/usecases/auth/login.usecases.ts:35](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/login.usecases.ts#L35)

---

#### getUserIfRefreshTokenMatches

▸ **getUserIfRefreshTokenMatches**(`refreshToken`, `username`): `Promise`\<[`UserModel`](#classesdomain_model_userusermodelmd)\>

Retrieves a user if the refresh token matches the stored hashed refresh token.

##### Parameters

| Name           | Type     | Description                   |
| :------------- | :------- | :---------------------------- |
| `refreshToken` | `string` | The refresh token to compare. |
| `username`     | `string` | The username of the user.     |

##### Returns

`Promise`\<[`UserModel`](#classesdomain_model_userusermodelmd)\>

The user object if the refresh token matches, otherwise null.

##### Defined in

[api/src/usecases/auth/login.usecases.ts:131](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/login.usecases.ts#L131)

---

#### setCurrentRefreshToken

▸ **setCurrentRefreshToken**(`refreshToken`, `username`): `Promise`\<`void`\>

Sets the current refresh token for a user.

##### Parameters

| Name           | Type     | Description               |
| :------------- | :------- | :------------------------ |
| `refreshToken` | `string` | The new refresh token.    |
| `username`     | `string` | The username of the user. |

##### Returns

`Promise`\<`void`\>

Promise<void>

##### Defined in

[api/src/usecases/auth/login.usecases.ts:116](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/login.usecases.ts#L116)

---

#### updateLoginTime

▸ **updateLoginTime**(`username`): `Promise`\<`void`\>

Updates the last login time for a user.

##### Parameters

| Name       | Type     | Description               |
| :--------- | :------- | :------------------------ |
| `username` | `string` | The username of the user. |

##### Returns

`Promise`\<`void`\>

A promise that resolves when the last login time is updated.

##### Defined in

[api/src/usecases/auth/login.usecases.ts:106](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/login.usecases.ts#L106)

---

#### validateUserForJWTStragtegy

▸ **validateUserForJWTStragtegy**(`username`): `Promise`\<[`UserModel`](#classesdomain_model_userusermodelmd)\>

Validates a user for JWT strategy.

##### Parameters

| Name       | Type     | Description                           |
| :--------- | :------- | :------------------------------------ |
| `username` | `string` | The username of the user to validate. |

##### Returns

`Promise`\<[`UserModel`](#classesdomain_model_userusermodelmd)\>

The validated user or null if the user does not exist.

##### Defined in

[api/src/usecases/auth/login.usecases.ts:93](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/login.usecases.ts#L93)

---

#### validateUserForLocalStragtegy

▸ **validateUserForLocalStragtegy**(`username`, `pass`): `Promise`\<\{ `createDate`: `Date` ; `email`: `string` ; `hashRefreshToken`: `string` ; `id`: `string` ; `lastLogin`: `Date` ; `updatedDate`: `Date` ; `username`: `string` }\>

Validates a user for local strategy authentication.

##### Parameters

| Name       | Type     | Description               |
| :--------- | :------- | :------------------------ |
| `username` | `string` | The username of the user. |
| `pass`     | `string` | The password of the user. |

##### Returns

`Promise`\<\{ `createDate`: `Date` ; `email`: `string` ; `hashRefreshToken`: `string` ; `id`: `string` ; `lastLogin`: `Date` ; `updatedDate`: `Date` ; `username`: `string` }\>

The user object if validation is successful, otherwise null.

##### Defined in

[api/src/usecases/auth/login.usecases.ts:73](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/login.usecases.ts#L73)

<a name="classesusecases_auth_logout_usecaseslogoutusecasesmd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [usecases/auth/logout.usecases](#modulesusecases_auth_logout_usecasesmd) / LogoutUseCases

## Class: LogoutUseCases

[usecases/auth/logout.usecases](#modulesusecases_auth_logout_usecasesmd).LogoutUseCases

Represents the use case for logging out a user.

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Methods

- [execute](#execute)

### Constructors

#### constructor

• **new LogoutUseCases**(): [`LogoutUseCases`](#classesusecases_auth_logout_usecaseslogoutusecasesmd)

Creates a new instance of the LogoutUseCase class.

##### Returns

[`LogoutUseCases`](#classesusecases_auth_logout_usecaseslogoutusecasesmd)

##### Defined in

[api/src/usecases/auth/logout.usecases.ts:8](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/logout.usecases.ts#L8)

### Methods

#### execute

▸ **execute**(): `Promise`\<`string`[]\>

Executes the logout use case.

##### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of strings representing the cookies to be cleared.

##### Defined in

[api/src/usecases/auth/logout.usecases.ts:14](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/logout.usecases.ts#L14)

<a name="classesusecases_auth_register_usecasesregisterusecasesmd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [usecases/auth/register.usecases](#modulesusecases_auth_register_usecasesmd) / RegisterUseCases

## Class: RegisterUseCases

[usecases/auth/register.usecases](#modulesusecases_auth_register_usecasesmd).RegisterUseCases

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [bcryptService](#bcryptservice)
- [userRepository](#userrepository)

#### Methods

- [checkPassword](#checkpassword)
- [registerUser](#registeruser)
- [userShouldNotExist](#usershouldnotexist)

### Constructors

#### constructor

• **new RegisterUseCases**(`userRepository`, `bcryptService`): [`RegisterUseCases`](#classesusecases_auth_register_usecasesregisterusecasesmd)

Constructs a new instance of the RegisterUseCases class.

##### Parameters

| Name             | Type                                                                                        | Description          |
| :--------------- | :------------------------------------------------------------------------------------------ | :------------------- |
| `userRepository` | [`UserRepository`](#interfacesdomain_repositories_userrepository_interfaceuserrepositorymd) | The user repository. |
| `bcryptService`  | [`IBcryptService`](#interfacesdomain_adapters_bcrypt_interfaceibcryptservicemd)             | The bcrypt service.  |

##### Returns

[`RegisterUseCases`](#classesusecases_auth_register_usecasesregisterusecasesmd)

##### Defined in

[api/src/usecases/auth/register.usecases.ts:11](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/register.usecases.ts#L11)

### Properties

#### bcryptService

• `Private` `Readonly` **bcryptService**: [`IBcryptService`](#interfacesdomain_adapters_bcrypt_interfaceibcryptservicemd)

The bcrypt service.

##### Defined in

[api/src/usecases/auth/register.usecases.ts:13](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/register.usecases.ts#L13)

---

#### userRepository

• `Private` `Readonly` **userRepository**: [`UserRepository`](#interfacesdomain_repositories_userrepository_interfaceuserrepositorymd)

The user repository.

##### Defined in

[api/src/usecases/auth/register.usecases.ts:12](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/register.usecases.ts#L12)

### Methods

#### checkPassword

▸ **checkPassword**(`params`): `Promise`\<`string`\>

Checks if the provided password matches the confirmed password.

##### Parameters

| Name                     | Type     | Description                                              |
| :----------------------- | :------- | :------------------------------------------------------- |
| `params`                 | `Object` | The parameters for checking the password.                |
| `params.confirmPassword` | `string` | The confirmed password to be compared with the password. |
| `params.password`        | `string` | The password to be checked.                              |

##### Returns

`Promise`\<`string`\>

- A promise that resolves to a string if the passwords do not match, or null if they match.

##### Defined in

[api/src/usecases/auth/register.usecases.ts:50](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/register.usecases.ts#L50)

---

#### registerUser

▸ **registerUser**(`params`): `Promise`\<[`User`](#classesdomain_model_userusermd)\>

Registers a new user.

##### Parameters

| Name              | Type     | Description                  |
| :---------------- | :------- | :--------------------------- |
| `params`          | `Object` | The registration parameters. |
| `params.email`    | `string` | The email of the user.       |
| `params.password` | `string` | The password of the user.    |
| `params.username` | `string` | -                            |

##### Returns

`Promise`\<[`User`](#classesdomain_model_userusermd)\>

- The newly registered user.

##### Defined in

[api/src/usecases/auth/register.usecases.ts:70](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/register.usecases.ts#L70)

---

#### userShouldNotExist

▸ **userShouldNotExist**(`«destructured»`): `Promise`\<`string`\>

Checks if a user with the given email and username already exists.

##### Parameters

| Name             | Type     |
| :--------------- | :------- |
| `«destructured»` | `Object` |
| › `email`        | `string` |
| › `username`     | `string` |

##### Returns

`Promise`\<`string`\>

A promise that resolves to a string indicating if the user exists.

##### Defined in

[api/src/usecases/auth/register.usecases.ts:22](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/register.usecases.ts#L22)

# Interfaces

<a name="interfacesdomain_adapters_bcrypt_interfaceibcryptservicemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [domain/adapters/bcrypt.interface](#modulesdomain_adapters_bcrypt_interfacemd) / IBcryptService

## Interface: IBcryptService

[domain/adapters/bcrypt.interface](#modulesdomain_adapters_bcrypt_interfacemd).IBcryptService

Interface for the Bcrypt service.

### Implemented by

- [`BcryptService`](#classesinfrastructure_services_bcrypt_bcrypt_servicebcryptservicemd)

### Table of contents

#### Methods

- [compare](#compare)
- [hash](#hash)

### Methods

#### compare

▸ **compare**(`password`, `hashPassword`): `Promise`\<`boolean`\>

Compares a password with a hashed password.

##### Parameters

| Name           | Type     | Description                             |
| :------------- | :------- | :-------------------------------------- |
| `password`     | `string` | The password to be compared.            |
| `hashPassword` | `string` | The hashed password to compare against. |

##### Returns

`Promise`\<`boolean`\>

A promise that resolves to a boolean indicating whether the password matches the hashed password.

##### Defined in

[api/src/domain/adapters/bcrypt.interface.ts:18](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/adapters/bcrypt.interface.ts#L18)

---

#### hash

▸ **hash**(`hashString`): `Promise`\<`string`\>

Hashes a string.

##### Parameters

| Name         | Type     | Description              |
| :----------- | :------- | :----------------------- |
| `hashString` | `string` | The string to be hashed. |

##### Returns

`Promise`\<`string`\>

A promise that resolves to the hashed string.

##### Defined in

[api/src/domain/adapters/bcrypt.interface.ts:10](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/adapters/bcrypt.interface.ts#L10)

<a name="interfacesdomain_adapters_jwt_interfaceijwtservicemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [domain/adapters/jwt.interface](#modulesdomain_adapters_jwt_interfacemd) / IJwtService

## Interface: IJwtService

[domain/adapters/jwt.interface](#modulesdomain_adapters_jwt_interfacemd).IJwtService

Interface for JWT service.

### Implemented by

- [`JwtTokenService`](#classesinfrastructure_services_jwt_jwt_servicejwttokenservicemd)

### Table of contents

#### Methods

- [checkToken](#checktoken)
- [createToken](#createtoken)

### Methods

#### checkToken

▸ **checkToken**(`token`): `Promise`\<`any`\>

##### Parameters

| Name    | Type     |
| :------ | :------- |
| `token` | `string` |

##### Returns

`Promise`\<`any`\>

##### Defined in

[api/src/domain/adapters/jwt.interface.ts:13](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/adapters/jwt.interface.ts#L13)

---

#### createToken

▸ **createToken**(`payload`, `secret`, `expiresIn`): `string`

##### Parameters

| Name        | Type                                                                                 |
| :---------- | :----------------------------------------------------------------------------------- |
| `payload`   | [`IJwtServicePayload`](#interfacesdomain_adapters_jwt_interfaceijwtservicepayloadmd) |
| `secret`    | `string`                                                                             |
| `expiresIn` | `string`                                                                             |

##### Returns

`string`

##### Defined in

[api/src/domain/adapters/jwt.interface.ts:14](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/adapters/jwt.interface.ts#L14)

<a name="interfacesdomain_adapters_jwt_interfaceijwtservicepayloadmd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [domain/adapters/jwt.interface](#modulesdomain_adapters_jwt_interfacemd) / IJwtServicePayload

## Interface: IJwtServicePayload

[domain/adapters/jwt.interface](#modulesdomain_adapters_jwt_interfacemd).IJwtServicePayload

Represents the payload of a JWT service.

### Table of contents

#### Properties

- [id](#id)
- [username](#username)

### Properties

#### id

• `Optional` **id**: `string`

##### Defined in

[api/src/domain/adapters/jwt.interface.ts:6](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/adapters/jwt.interface.ts#L6)

---

#### username

• `Optional` **username**: `string`

##### Defined in

[api/src/domain/adapters/jwt.interface.ts:5](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/adapters/jwt.interface.ts#L5)

<a name="interfacesdomain_config_jwt_interfacejwtconfigmd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [domain/config/jwt.interface](#modulesdomain_config_jwt_interfacemd) / JWTConfig

## Interface: JWTConfig

[domain/config/jwt.interface](#modulesdomain_config_jwt_interfacemd).JWTConfig

Represents the configuration for JWT (JSON Web Token).

### Implemented by

- [`EnvironmentConfigService`](#classesinfrastructure_config_environment_environment_config_serviceenvironmentconfigservicemd)

### Table of contents

#### Methods

- [getJwtExpirationTime](#getjwtexpirationtime)
- [getJwtRefreshExpirationTime](#getjwtrefreshexpirationtime)
- [getJwtRefreshSecret](#getjwtrefreshsecret)
- [getJwtSecret](#getjwtsecret)

### Methods

#### getJwtExpirationTime

▸ **getJwtExpirationTime**(): `string`

Retrieves the JWT expiration time.

##### Returns

`string`

The JWT expiration time.

##### Defined in

[api/src/domain/config/jwt.interface.ts:15](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/config/jwt.interface.ts#L15)

---

#### getJwtRefreshExpirationTime

▸ **getJwtRefreshExpirationTime**(): `string`

Retrieves the JWT refresh expiration time.

##### Returns

`string`

The JWT refresh expiration time.

##### Defined in

[api/src/domain/config/jwt.interface.ts:27](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/config/jwt.interface.ts#L27)

---

#### getJwtRefreshSecret

▸ **getJwtRefreshSecret**(): `string`

Retrieves the JWT refresh secret.

##### Returns

`string`

The JWT refresh secret.

##### Defined in

[api/src/domain/config/jwt.interface.ts:21](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/config/jwt.interface.ts#L21)

---

#### getJwtSecret

▸ **getJwtSecret**(): `string`

Retrieves the JWT secret.

##### Returns

`string`

The JWT secret.

##### Defined in

[api/src/domain/config/jwt.interface.ts:9](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/config/jwt.interface.ts#L9)

<a name="interfacesdomain_config_mongo_interfacemongodbconfigmd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [domain/config/mongo.interface](#modulesdomain_config_mongo_interfacemd) / MongoDbConfig

## Interface: MongoDbConfig

[domain/config/mongo.interface](#modulesdomain_config_mongo_interfacemd).MongoDbConfig

Represents the configuration for MongoDB.

### Implemented by

- [`EnvironmentConfigService`](#classesinfrastructure_config_environment_environment_config_serviceenvironmentconfigservicemd)

### Table of contents

#### Methods

- [getMongoDbPassword](#getmongodbpassword)
- [getMongoDbUri](#getmongodburi)
- [getMongoDbUsername](#getmongodbusername)

### Methods

#### getMongoDbPassword

▸ **getMongoDbPassword**(): `string`

Retrieves the MongoDB password.

##### Returns

`string`

The MongoDB password.

##### Defined in

[api/src/domain/config/mongo.interface.ts:19](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/config/mongo.interface.ts#L19)

---

#### getMongoDbUri

▸ **getMongoDbUri**(): `string`

Retrieves the MongoDB URI.

##### Returns

`string`

The MongoDB URI.

##### Defined in

[api/src/domain/config/mongo.interface.ts:9](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/config/mongo.interface.ts#L9)

---

#### getMongoDbUsername

▸ **getMongoDbUsername**(): `string`

Retrieves the MongoDB username.

##### Returns

`string`

The MongoDB username.

##### Defined in

[api/src/domain/config/mongo.interface.ts:14](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/config/mongo.interface.ts#L14)

<a name="interfacesdomain_exceptions_exceptions_interfaceiexceptionmd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [domain/exceptions/exceptions.interface](#modulesdomain_exceptions_exceptions_interfacemd) / IException

## Interface: IException

[domain/exceptions/exceptions.interface](#modulesdomain_exceptions_exceptions_interfacemd).IException

### Implemented by

- [`ExceptionsService`](#classesinfrastructure_exceptions_exceptions_serviceexceptionsservicemd)

### Table of contents

#### Methods

- [badRequestException](#badrequestexception)
- [forbiddenException](#forbiddenexception)
- [internalServerErrorException](#internalservererrorexception)
- [unauthorizedException](#unauthorizedexception)

### Methods

#### badRequestException

▸ **badRequestException**(`data`): `void`

Throws a Bad Request exception with the specified format message.

##### Parameters

| Name   | Type                                                                                                    | Description                           |
| :----- | :------------------------------------------------------------------------------------------------------ | :------------------------------------ |
| `data` | [`IFormatExceptionMessage`](#interfacesdomain_exceptions_exceptions_interfaceiformatexceptionmessagemd) | The format message for the exception. |

##### Returns

`void`

##### Defined in

[api/src/domain/exceptions/exceptions.interface.ts:11](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/exceptions/exceptions.interface.ts#L11)

---

#### forbiddenException

▸ **forbiddenException**(`data?`): `void`

Throws a Forbidden exception with the specified format message.

##### Parameters

| Name    | Type                                                                                                    | Description                           |
| :------ | :------------------------------------------------------------------------------------------------------ | :------------------------------------ |
| `data?` | [`IFormatExceptionMessage`](#interfacesdomain_exceptions_exceptions_interfaceiformatexceptionmessagemd) | The format message for the exception. |

##### Returns

`void`

##### Defined in

[api/src/domain/exceptions/exceptions.interface.ts:23](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/exceptions/exceptions.interface.ts#L23)

---

#### internalServerErrorException

▸ **internalServerErrorException**(`data?`): `void`

Throws an Internal Server Error exception with the specified format message.

##### Parameters

| Name    | Type                                                                                                    | Description                           |
| :------ | :------------------------------------------------------------------------------------------------------ | :------------------------------------ |
| `data?` | [`IFormatExceptionMessage`](#interfacesdomain_exceptions_exceptions_interfaceiformatexceptionmessagemd) | The format message for the exception. |

##### Returns

`void`

##### Defined in

[api/src/domain/exceptions/exceptions.interface.ts:17](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/exceptions/exceptions.interface.ts#L17)

---

#### unauthorizedException

▸ **unauthorizedException**(`data?`): `void`

Throws an Unauthorized exception with the specified format message.

##### Parameters

| Name    | Type                                                                                                    | Description                           |
| :------ | :------------------------------------------------------------------------------------------------------ | :------------------------------------ |
| `data?` | [`IFormatExceptionMessage`](#interfacesdomain_exceptions_exceptions_interfaceiformatexceptionmessagemd) | The format message for the exception. |

##### Returns

`void`

##### Defined in

[api/src/domain/exceptions/exceptions.interface.ts:29](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/exceptions/exceptions.interface.ts#L29)

<a name="interfacesdomain_exceptions_exceptions_interfaceiformatexceptionmessagemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [domain/exceptions/exceptions.interface](#modulesdomain_exceptions_exceptions_interfacemd) / IFormatExceptionMessage

## Interface: IFormatExceptionMessage

[domain/exceptions/exceptions.interface](#modulesdomain_exceptions_exceptions_interfacemd).IFormatExceptionMessage

### Table of contents

#### Properties

- [code_error](#code_error)
- [message](#message)

### Properties

#### code_error

• `Optional` **code_error**: `number`

##### Defined in

[api/src/domain/exceptions/exceptions.interface.ts:3](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/exceptions/exceptions.interface.ts#L3)

---

#### message

• **message**: `string`

##### Defined in

[api/src/domain/exceptions/exceptions.interface.ts:2](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/exceptions/exceptions.interface.ts#L2)

<a name="interfacesdomain_filter_filter_interfaceierrormd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [domain/filter/filter.interface](#modulesdomain_filter_filter_interfacemd) / IError

## Interface: IError

[domain/filter/filter.interface](#modulesdomain_filter_filter_interfacemd).IError

Represents an error object.

### Table of contents

#### Properties

- [code_error](#code_error)
- [message](#message)

### Properties

#### code_error

• **code_error**: `string`

##### Defined in

[api/src/domain/filter/filter.interface.ts:6](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/filter/filter.interface.ts#L6)

---

#### message

• **message**: `string`

##### Defined in

[api/src/domain/filter/filter.interface.ts:5](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/filter/filter.interface.ts#L5)

<a name="interfacesdomain_logger_logger_interfaceiloggermd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [domain/logger/logger.interface](#modulesdomain_logger_logger_interfacemd) / ILogger

## Interface: ILogger

[domain/logger/logger.interface](#modulesdomain_logger_logger_interfacemd).ILogger

Represents a logger interface.

### Implemented by

- [`LoggerService`](#classesinfrastructure_logger_logger_serviceloggerservicemd)

### Table of contents

#### Methods

- [debug](#debug)
- [error](#error)
- [log](#log)
- [verbose](#verbose)
- [warn](#warn)

### Methods

#### debug

▸ **debug**(`context`, `message`): `void`

Logs a debug message.

##### Parameters

| Name      | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `context` | `string` | The context of the log message. |
| `message` | `string` | The log message.                |

##### Returns

`void`

##### Defined in

[api/src/domain/logger/logger.interface.ts:10](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/logger/logger.interface.ts#L10)

---

#### error

▸ **error**(`context`, `message`, `trace?`): `void`

Logs an error message.

##### Parameters

| Name      | Type     | Description                             |
| :-------- | :------- | :-------------------------------------- |
| `context` | `string` | The context of the log message.         |
| `message` | `string` | The log message.                        |
| `trace?`  | `string` | Optional. The stack trace of the error. |

##### Returns

`void`

##### Defined in

[api/src/domain/logger/logger.interface.ts:25](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/logger/logger.interface.ts#L25)

---

#### log

▸ **log**(`context`, `message`): `void`

Logs an informational message.

##### Parameters

| Name      | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `context` | `string` | The context of the log message. |
| `message` | `string` | The log message.                |

##### Returns

`void`

##### Defined in

[api/src/domain/logger/logger.interface.ts:17](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/logger/logger.interface.ts#L17)

---

#### verbose

▸ **verbose**(`context`, `message`): `void`

Logs a verbose message.

##### Parameters

| Name      | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `context` | `string` | The context of the log message. |
| `message` | `string` | The log message.                |

##### Returns

`void`

##### Defined in

[api/src/domain/logger/logger.interface.ts:39](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/logger/logger.interface.ts#L39)

---

#### warn

▸ **warn**(`context`, `message`): `void`

Logs a warning message.

##### Parameters

| Name      | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `context` | `string` | The context of the log message. |
| `message` | `string` | The log message.                |

##### Returns

`void`

##### Defined in

[api/src/domain/logger/logger.interface.ts:32](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/logger/logger.interface.ts#L32)

<a name="interfacesdomain_model_authtokenpayloadmd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [domain/model/auth](#modulesdomain_model_authmd) / TokenPayload

## Interface: TokenPayload

[domain/model/auth](#modulesdomain_model_authmd).TokenPayload

Represents the payload of a token.

### Table of contents

#### Properties

- [userId](#userid)
- [username](#username)

### Properties

#### userId

• **userId**: `string`

##### Defined in

[api/src/domain/model/auth.ts:6](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/model/auth.ts#L6)

---

#### username

• **username**: `string`

##### Defined in

[api/src/domain/model/auth.ts:5](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/model/auth.ts#L5)

<a name="interfacesdomain_repositories_userrepository_interfaceuserrepositorymd"></a>

[api](#readmemd) / [Exports](#modulesmd) / [domain/repositories/userRepository.interface](#modulesdomain_repositories_userrepository_interfacemd) / UserRepository

## Interface: UserRepository

[domain/repositories/userRepository.interface](#modulesdomain_repositories_userrepository_interfacemd).UserRepository

Represents a repository for managing user data.

### Implemented by

- [`DatabaseUserRepository`](#classesinfrastructure_repositories_user_user_repositorydatabaseuserrepositorymd)

### Table of contents

#### Methods

- [createUser](#createuser)
- [getUserByEmail](#getuserbyemail)
- [getUserByUsername](#getuserbyusername)
- [updateLastLogin](#updatelastlogin)
- [updateRefreshToken](#updaterefreshtoken)

### Methods

#### createUser

▸ **createUser**(`email`, `username`, `password`): `Promise`\<[`UserModel`](#classesdomain_model_userusermodelmd)\>

Creates a new user with the specified email, username, and password.

##### Parameters

| Name       | Type     | Description               |
| :--------- | :------- | :------------------------ |
| `email`    | `string` | The email of the user.    |
| `username` | `string` | The username of the user. |
| `password` | `string` | The password of the user. |

##### Returns

`Promise`\<[`UserModel`](#classesdomain_model_userusermodelmd)\>

A promise that resolves to the created user model.

##### Defined in

[api/src/domain/repositories/userRepository.interface.ts:18](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/repositories/userRepository.interface.ts#L18)

---

#### getUserByEmail

▸ **getUserByEmail**(`email`): `Promise`\<[`UserModel`](#classesdomain_model_userusermodelmd)\>

Retrieves a user by their email.

##### Parameters

| Name    | Type     | Description            |
| :------ | :------- | :--------------------- |
| `email` | `string` | The email of the user. |

##### Returns

`Promise`\<[`UserModel`](#classesdomain_model_userusermodelmd)\>

A promise that resolves to the user model.

##### Defined in

[api/src/domain/repositories/userRepository.interface.ts:51](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/repositories/userRepository.interface.ts#L51)

---

#### getUserByUsername

▸ **getUserByUsername**(`username`): `Promise`\<[`UserModel`](#classesdomain_model_userusermodelmd)\>

Retrieves a user by their username.

##### Parameters

| Name       | Type     | Description               |
| :--------- | :------- | :------------------------ |
| `username` | `string` | The username of the user. |

##### Returns

`Promise`\<[`UserModel`](#classesdomain_model_userusermodelmd)\>

A promise that resolves to the user model.

##### Defined in

[api/src/domain/repositories/userRepository.interface.ts:29](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/repositories/userRepository.interface.ts#L29)

---

#### updateLastLogin

▸ **updateLastLogin**(`username`): `Promise`\<`void`\>

Updates the last login timestamp for a user.

##### Parameters

| Name       | Type     | Description               |
| :--------- | :------- | :------------------------ |
| `username` | `string` | The username of the user. |

##### Returns

`Promise`\<`void`\>

A promise that resolves when the update is complete.

##### Defined in

[api/src/domain/repositories/userRepository.interface.ts:36](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/repositories/userRepository.interface.ts#L36)

---

#### updateRefreshToken

▸ **updateRefreshToken**(`username`, `refreshToken`): `Promise`\<`void`\>

Updates the refresh token for a user.

##### Parameters

| Name           | Type     | Description               |
| :------------- | :------- | :------------------------ |
| `username`     | `string` | The username of the user. |
| `refreshToken` | `string` | The new refresh token.    |

##### Returns

`Promise`\<`void`\>

A promise that resolves when the update is complete.

##### Defined in

[api/src/domain/repositories/userRepository.interface.ts:44](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/repositories/userRepository.interface.ts#L44)

<a name="modulesmd"></a>

[api](#readmemd) / Exports

# api

## Table of contents

### Modules

- [app.module](#modulesapp_modulemd)
- [domain/adapters/bcrypt.interface](#modulesdomain_adapters_bcrypt_interfacemd)
- [domain/adapters/jwt.interface](#modulesdomain_adapters_jwt_interfacemd)
- [domain/config/jwt.interface](#modulesdomain_config_jwt_interfacemd)
- [domain/config/mongo.interface](#modulesdomain_config_mongo_interfacemd)
- [domain/exceptions/exceptions.interface](#modulesdomain_exceptions_exceptions_interfacemd)
- [domain/filter/filter.interface](#modulesdomain_filter_filter_interfacemd)
- [domain/logger/logger.interface](#modulesdomain_logger_logger_interfacemd)
- [domain/model/auth](#modulesdomain_model_authmd)
- [domain/model/user](#modulesdomain_model_usermd)
- [domain/repositories/userRepository.interface](#modulesdomain_repositories_userrepository_interfacemd)
- [infrastructure/common/filter/exception.filter](#modulesinfrastructure_common_filter_exception_filtermd)
- [infrastructure/common/guards/jwtAuth.guard](#modulesinfrastructure_common_guards_jwtauth_guardmd)
- [infrastructure/common/guards/jwtRefresh.guard](#modulesinfrastructure_common_guards_jwtrefresh_guardmd)
- [infrastructure/common/guards/login.guard](#modulesinfrastructure_common_guards_login_guardmd)
- [infrastructure/common/interceptor/logger.interceptor](#modulesinfrastructure_common_interceptor_logger_interceptormd)
- [infrastructure/common/interceptor/response.interceptor](#modulesinfrastructure_common_interceptor_response_interceptormd)
- [infrastructure/common/strategies/jwt.strategy](#modulesinfrastructure_common_strategies_jwt_strategymd)
- [infrastructure/common/strategies/jwtRefresh.strategy](#modulesinfrastructure_common_strategies_jwtrefresh_strategymd)
- [infrastructure/common/strategies/local.strategy](#modulesinfrastructure_common_strategies_local_strategymd)
- [infrastructure/common/swagger/response.decorator](#modulesinfrastructure_common_swagger_response_decoratormd)
- [infrastructure/config/environment/environment-config.module](#modulesinfrastructure_config_environment_environment_config_modulemd)
- [infrastructure/config/environment/environment-config.service](#modulesinfrastructure_config_environment_environment_config_servicemd)
- [infrastructure/config/environment/environment-config.validation](#modulesinfrastructure_config_environment_environment_config_validationmd)
- [infrastructure/controllers/auth/auth-dto.class](#modulesinfrastructure_controllers_auth_auth_dto_classmd)
- [infrastructure/controllers/auth/auth.controller](#modulesinfrastructure_controllers_auth_auth_controllermd)
- [infrastructure/controllers/auth/auth.presenter](#modulesinfrastructure_controllers_auth_auth_presentermd)
- [infrastructure/controllers/controllers.module](#modulesinfrastructure_controllers_controllers_modulemd)
- [infrastructure/exceptions/exceptions.module](#modulesinfrastructure_exceptions_exceptions_modulemd)
- [infrastructure/exceptions/exceptions.service](#modulesinfrastructure_exceptions_exceptions_servicemd)
- [infrastructure/logger/logger.module](#modulesinfrastructure_logger_logger_modulemd)
- [infrastructure/logger/logger.service](#modulesinfrastructure_logger_logger_servicemd)
- [infrastructure/mongo/mongo.module](#modulesinfrastructure_mongo_mongo_modulemd)
- [infrastructure/repositories/repositories.module](#modulesinfrastructure_repositories_repositories_modulemd)
- [infrastructure/repositories/user/user.repository](#modulesinfrastructure_repositories_user_user_repositorymd)
- [infrastructure/schemas/user.schema](#modulesinfrastructure_schemas_user_schemamd)
- [infrastructure/services/bcrypt/bcrypt.module](#modulesinfrastructure_services_bcrypt_bcrypt_modulemd)
- [infrastructure/services/bcrypt/bcrypt.service](#modulesinfrastructure_services_bcrypt_bcrypt_servicemd)
- [infrastructure/services/jwt/jwt.module](#modulesinfrastructure_services_jwt_jwt_modulemd)
- [infrastructure/services/jwt/jwt.service](#modulesinfrastructure_services_jwt_jwt_servicemd)
- [infrastructure/usecases-proxy/usecases-proxy](#modulesinfrastructure_usecases_proxy_usecases_proxymd)
- [infrastructure/usecases-proxy/usecases-proxy.module](#modulesinfrastructure_usecases_proxy_usecases_proxy_modulemd)
- [main](#modulesmainmd)
- [usecases/auth/isAuthenticated.usecases](#modulesusecases_auth_isauthenticated_usecasesmd)
- [usecases/auth/login.usecases](#modulesusecases_auth_login_usecasesmd)
- [usecases/auth/logout.usecases](#modulesusecases_auth_logout_usecasesmd)
- [usecases/auth/register.usecases](#modulesusecases_auth_register_usecasesmd)

# Modules

<a name="modulesapp_modulemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / app.module

## Module: app.module

### Table of contents

#### Classes

- [AppModule](#classesapp_moduleappmodulemd)

<a name="modulesdomain_adapters_bcrypt_interfacemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / domain/adapters/bcrypt.interface

## Module: domain/adapters/bcrypt.interface

### Table of contents

#### Interfaces

- [IBcryptService](#interfacesdomain_adapters_bcrypt_interfaceibcryptservicemd)

<a name="modulesdomain_adapters_jwt_interfacemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / domain/adapters/jwt.interface

## Module: domain/adapters/jwt.interface

### Table of contents

#### Interfaces

- [IJwtService](#interfacesdomain_adapters_jwt_interfaceijwtservicemd)
- [IJwtServicePayload](#interfacesdomain_adapters_jwt_interfaceijwtservicepayloadmd)

<a name="modulesdomain_config_jwt_interfacemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / domain/config/jwt.interface

## Module: domain/config/jwt.interface

### Table of contents

#### Interfaces

- [JWTConfig](#interfacesdomain_config_jwt_interfacejwtconfigmd)

<a name="modulesdomain_config_mongo_interfacemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / domain/config/mongo.interface

## Module: domain/config/mongo.interface

### Table of contents

#### Interfaces

- [MongoDbConfig](#interfacesdomain_config_mongo_interfacemongodbconfigmd)

<a name="modulesdomain_exceptions_exceptions_interfacemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / domain/exceptions/exceptions.interface

## Module: domain/exceptions/exceptions.interface

### Table of contents

#### Interfaces

- [IException](#interfacesdomain_exceptions_exceptions_interfaceiexceptionmd)
- [IFormatExceptionMessage](#interfacesdomain_exceptions_exceptions_interfaceiformatexceptionmessagemd)

<a name="modulesdomain_filter_filter_interfacemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / domain/filter/filter.interface

## Module: domain/filter/filter.interface

### Table of contents

#### Interfaces

- [IError](#interfacesdomain_filter_filter_interfaceierrormd)

<a name="modulesdomain_logger_logger_interfacemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / domain/logger/logger.interface

## Module: domain/logger/logger.interface

### Table of contents

#### Interfaces

- [ILogger](#interfacesdomain_logger_logger_interfaceiloggermd)

<a name="modulesdomain_model_authmd"></a>

[api](#readmemd) / [Exports](#modulesmd) / domain/model/auth

## Module: domain/model/auth

### Table of contents

#### Interfaces

- [TokenPayload](#interfacesdomain_model_authtokenpayloadmd)

<a name="modulesdomain_model_usermd"></a>

[api](#readmemd) / [Exports](#modulesmd) / domain/model/user

## Module: domain/model/user

### Table of contents

#### Classes

- [User](#classesdomain_model_userusermd)
- [UserModel](#classesdomain_model_userusermodelmd)

<a name="modulesdomain_repositories_userrepository_interfacemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / domain/repositories/userRepository.interface

## Module: domain/repositories/userRepository.interface

### Table of contents

#### Interfaces

- [UserRepository](#interfacesdomain_repositories_userrepository_interfaceuserrepositorymd)

<a name="modulesinfrastructure_common_filter_exception_filtermd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/common/filter/exception.filter

## Module: infrastructure/common/filter/exception.filter

### Table of contents

#### Classes

- [AllExceptionFilter](#classesinfrastructure_common_filter_exception_filterallexceptionfiltermd)

<a name="modulesinfrastructure_common_guards_jwtauth_guardmd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/common/guards/jwtAuth.guard

## Module: infrastructure/common/guards/jwtAuth.guard

### Table of contents

#### Classes

- [JwtAuthGuard](#classesinfrastructure_common_guards_jwtauth_guardjwtauthguardmd)

<a name="modulesinfrastructure_common_guards_jwtrefresh_guardmd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/common/guards/jwtRefresh.guard

## Module: infrastructure/common/guards/jwtRefresh.guard

### Table of contents

#### Classes

- [default](#classesinfrastructure_common_guards_jwtrefresh_guarddefaultmd)

<a name="modulesinfrastructure_common_guards_login_guardmd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/common/guards/login.guard

## Module: infrastructure/common/guards/login.guard

### Table of contents

#### Classes

- [LoginGuard](#classesinfrastructure_common_guards_login_guardloginguardmd)

<a name="modulesinfrastructure_common_interceptor_logger_interceptormd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/common/interceptor/logger.interceptor

## Module: infrastructure/common/interceptor/logger.interceptor

### Table of contents

#### Classes

- [LoggingInterceptor](#classesinfrastructure_common_interceptor_logger_interceptorlogginginterceptormd)

<a name="modulesinfrastructure_common_interceptor_response_interceptormd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/common/interceptor/response.interceptor

## Module: infrastructure/common/interceptor/response.interceptor

### Table of contents

#### Classes

- [ResponseFormat](#classesinfrastructure_common_interceptor_response_interceptorresponseformatmd)
- [ResponseInterceptor](#classesinfrastructure_common_interceptor_response_interceptorresponseinterceptormd)

<a name="modulesinfrastructure_common_strategies_jwtrefresh_strategymd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/common/strategies/jwtRefresh.strategy

## Module: infrastructure/common/strategies/jwtRefresh.strategy

### Table of contents

#### Classes

- [JwtRefreshTokenStrategy](#classesinfrastructure_common_strategies_jwtrefresh_strategyjwtrefreshtokenstrategymd)

<a name="modulesinfrastructure_common_strategies_jwt_strategymd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/common/strategies/jwt.strategy

## Module: infrastructure/common/strategies/jwt.strategy

### Table of contents

#### Classes

- [JwtStrategy](#classesinfrastructure_common_strategies_jwt_strategyjwtstrategymd)

<a name="modulesinfrastructure_common_strategies_local_strategymd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/common/strategies/local.strategy

## Module: infrastructure/common/strategies/local.strategy

### Table of contents

#### Classes

- [LocalStrategy](#classesinfrastructure_common_strategies_local_strategylocalstrategymd)

<a name="modulesinfrastructure_common_swagger_response_decoratormd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/common/swagger/response.decorator

## Module: infrastructure/common/swagger/response.decorator

### Table of contents

#### Functions

- [ApiResponseType](#apiresponsetype)

### Functions

#### ApiResponseType

▸ **ApiResponseType**\<`TModel`\>(`model`, `isArray`): \<TFunction, Y\>(`target`: `object` \| `TFunction`, `propertyKey?`: `string` \| `symbol`, `descriptor?`: `TypedPropertyDescriptor`\<`Y`\>) => `void`

Decorator that specifies the response type for an API endpoint.

##### Type parameters

| Name     | Type                    |
| :------- | :---------------------- |
| `TModel` | extends `Type`\<`any`\> |

##### Parameters

| Name      | Type      | Description                                      |
| :-------- | :-------- | :----------------------------------------------- |
| `model`   | `TModel`  | The model type for the response data.            |
| `isArray` | `boolean` | Indicates whether the response data is an array. |

##### Returns

`fn`

The decorated function.

▸ \<`TFunction`, `Y`\>(`target`, `propertyKey?`, `descriptor?`): `void`

###### Type parameters

| Name        | Type               |
| :---------- | :----------------- |
| `TFunction` | extends `Function` |
| `Y`         | `Y`                |

###### Parameters

| Name           | Type                             |
| :------------- | :------------------------------- |
| `target`       | `object` \| `TFunction`          |
| `propertyKey?` | `string` \| `symbol`             |
| `descriptor?`  | `TypedPropertyDescriptor`\<`Y`\> |

###### Returns

`void`

##### Defined in

[api/src/infrastructure/common/swagger/response.decorator.ts:12](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/swagger/response.decorator.ts#L12)

<a name="modulesinfrastructure_config_environment_environment_config_modulemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/config/environment/environment-config.module

## Module: infrastructure/config/environment/environment-config.module

### Table of contents

#### Classes

- [EnvironmentConfigModule](#classesinfrastructure_config_environment_environment_config_moduleenvironmentconfigmodulemd)

<a name="modulesinfrastructure_config_environment_environment_config_servicemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/config/environment/environment-config.service

## Module: infrastructure/config/environment/environment-config.service

### Table of contents

#### Classes

- [EnvironmentConfigService](#classesinfrastructure_config_environment_environment_config_serviceenvironmentconfigservicemd)

<a name="modulesinfrastructure_config_environment_environment_config_validationmd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/config/environment/environment-config.validation

## Module: infrastructure/config/environment/environment-config.validation

### Table of contents

#### Functions

- [validate](#validate)

### Functions

#### validate

▸ **validate**(`config`): `EnvironmentVariables`

Validates the environment configuration object.

##### Parameters

| Name     | Type                            | Description                                       |
| :------- | :------------------------------ | :------------------------------------------------ |
| `config` | `Record`\<`string`, `unknown`\> | The environment configuration object to validate. |

##### Returns

`EnvironmentVariables`

The validated environment configuration object.

**`Throws`**

Error if there are validation errors.

##### Defined in

[api/src/infrastructure/config/environment/environment-config.validation.ts:44](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/config/environment/environment-config.validation.ts#L44)

<a name="modulesinfrastructure_controllers_auth_auth_controllermd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/controllers/auth/auth.controller

## Module: infrastructure/controllers/auth/auth.controller

### Table of contents

#### Classes

- [AuthController](#classesinfrastructure_controllers_auth_auth_controllerauthcontrollermd)

<a name="modulesinfrastructure_controllers_auth_auth_dto_classmd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/controllers/auth/auth-dto.class

## Module: infrastructure/controllers/auth/auth-dto.class

### Table of contents

#### Classes

- [AuthLoginDto](#classesinfrastructure_controllers_auth_auth_dto_classauthlogindtomd)
- [AuthRegisterDto](#classesinfrastructure_controllers_auth_auth_dto_classauthregisterdtomd)

<a name="modulesinfrastructure_controllers_auth_auth_presentermd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/controllers/auth/auth.presenter

## Module: infrastructure/controllers/auth/auth.presenter

### Table of contents

#### Classes

- [IsAuthPresenter](#classesinfrastructure_controllers_auth_auth_presenterisauthpresentermd)

<a name="modulesinfrastructure_controllers_controllers_modulemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/controllers/controllers.module

## Module: infrastructure/controllers/controllers.module

### Table of contents

#### Classes

- [ControllersModule](#classesinfrastructure_controllers_controllers_modulecontrollersmodulemd)

<a name="modulesinfrastructure_exceptions_exceptions_modulemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/exceptions/exceptions.module

## Module: infrastructure/exceptions/exceptions.module

### Table of contents

#### Classes

- [ExceptionsModule](#classesinfrastructure_exceptions_exceptions_moduleexceptionsmodulemd)

<a name="modulesinfrastructure_exceptions_exceptions_servicemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/exceptions/exceptions.service

## Module: infrastructure/exceptions/exceptions.service

### Table of contents

#### Classes

- [ExceptionsService](#classesinfrastructure_exceptions_exceptions_serviceexceptionsservicemd)

<a name="modulesinfrastructure_logger_logger_modulemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/logger/logger.module

## Module: infrastructure/logger/logger.module

### Table of contents

#### Classes

- [LoggerModule](#classesinfrastructure_logger_logger_moduleloggermodulemd)

<a name="modulesinfrastructure_logger_logger_servicemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/logger/logger.service

## Module: infrastructure/logger/logger.service

### Table of contents

#### Classes

- [LoggerService](#classesinfrastructure_logger_logger_serviceloggerservicemd)

#### Variables

- [winstonLogger](#winstonlogger)

### Variables

#### winstonLogger

• `Const` **winstonLogger**: `Logger`

Winston logger instance.

##### Defined in

[api/src/infrastructure/logger/logger.service.ts:8](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/logger/logger.service.ts#L8)

<a name="modulesinfrastructure_mongo_mongo_modulemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/mongo/mongo.module

## Module: infrastructure/mongo/mongo.module

### Table of contents

#### Classes

- [MongoConfigModule](#classesinfrastructure_mongo_mongo_modulemongoconfigmodulemd)

#### Functions

- [getMongooseModuleOptions](#getmongoosemoduleoptions)

### Functions

#### getMongooseModuleOptions

▸ **getMongooseModuleOptions**(`config`): `MongooseModuleFactoryOptions`

##### Parameters

| Name     | Type                                                                                                                         |
| :------- | :--------------------------------------------------------------------------------------------------------------------------- |
| `config` | [`EnvironmentConfigService`](#classesinfrastructure_config_environment_environment_config_serviceenvironmentconfigservicemd) |

##### Returns

`MongooseModuleFactoryOptions`

##### Defined in

[api/src/infrastructure/mongo/mongo.module.ts:6](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/mongo/mongo.module.ts#L6)

<a name="modulesinfrastructure_repositories_repositories_modulemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/repositories/repositories.module

## Module: infrastructure/repositories/repositories.module

### Table of contents

#### Classes

- [RepositoriesModule](#classesinfrastructure_repositories_repositories_modulerepositoriesmodulemd)

<a name="modulesinfrastructure_repositories_user_user_repositorymd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/repositories/user/user.repository

## Module: infrastructure/repositories/user/user.repository

### Table of contents

#### Classes

- [DatabaseUserRepository](#classesinfrastructure_repositories_user_user_repositorydatabaseuserrepositorymd)

<a name="modulesinfrastructure_schemas_user_schemamd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/schemas/user.schema

## Module: infrastructure/schemas/user.schema

### Table of contents

#### Classes

- [User](#classesinfrastructure_schemas_user_schemausermd)

#### Type Aliases

- [UserDocument](#userdocument)

#### Variables

- [UserSchema](#userschema)

### Type Aliases

#### UserDocument

Ƭ **UserDocument**: [`User`](#classesinfrastructure_schemas_user_schemausermd) & `Document`

##### Defined in

[api/src/infrastructure/schemas/user.schema.ts:5](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/schemas/user.schema.ts#L5)

### Variables

#### UserSchema

• `Const` **UserSchema**: `Schema`\<[`User`](#classesinfrastructure_schemas_user_schemausermd), `Model`\<[`User`](#classesinfrastructure_schemas_user_schemausermd), `any`, `any`, `any`, `Document`\<`unknown`, `any`, [`User`](#classesinfrastructure_schemas_user_schemausermd)\> & [`User`](#classesinfrastructure_schemas_user_schemausermd) & `Required`\<\{ `_id`: `ObjectId` }\>, `any`\>, {}, {}, {}, {}, `DefaultSchemaOptions`, [`User`](#classesinfrastructure_schemas_user_schemausermd), `Document`\<`unknown`, {}, `FlatRecord`\<[`User`](#classesinfrastructure_schemas_user_schemausermd)\>\> & `FlatRecord`\<[`User`](#classesinfrastructure_schemas_user_schemausermd)\> & `Required`\<\{ `_id`: `ObjectId` }\>\>

##### Defined in

[api/src/infrastructure/schemas/user.schema.ts:67](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/schemas/user.schema.ts#L67)

<a name="modulesinfrastructure_services_bcrypt_bcrypt_modulemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/services/bcrypt/bcrypt.module

## Module: infrastructure/services/bcrypt/bcrypt.module

### Table of contents

#### Classes

- [BcryptModule](#classesinfrastructure_services_bcrypt_bcrypt_modulebcryptmodulemd)

<a name="modulesinfrastructure_services_bcrypt_bcrypt_servicemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/services/bcrypt/bcrypt.service

## Module: infrastructure/services/bcrypt/bcrypt.service

### Table of contents

#### Classes

- [BcryptService](#classesinfrastructure_services_bcrypt_bcrypt_servicebcryptservicemd)

<a name="modulesinfrastructure_services_jwt_jwt_modulemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/services/jwt/jwt.module

## Module: infrastructure/services/jwt/jwt.module

### Table of contents

#### Classes

- [JwtModule](#classesinfrastructure_services_jwt_jwt_modulejwtmodulemd)

<a name="modulesinfrastructure_services_jwt_jwt_servicemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/services/jwt/jwt.service

## Module: infrastructure/services/jwt/jwt.service

### Table of contents

#### Classes

- [JwtTokenService](#classesinfrastructure_services_jwt_jwt_servicejwttokenservicemd)

<a name="modulesinfrastructure_usecases_proxy_usecases_proxymd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/usecases-proxy/usecases-proxy

## Module: infrastructure/usecases-proxy/usecases-proxy

### Table of contents

#### Classes

- [UseCaseProxy](#classesinfrastructure_usecases_proxy_usecases_proxyusecaseproxymd)

<a name="modulesinfrastructure_usecases_proxy_usecases_proxy_modulemd"></a>

[api](#readmemd) / [Exports](#modulesmd) / infrastructure/usecases-proxy/usecases-proxy.module

## Module: infrastructure/usecases-proxy/usecases-proxy.module

### Table of contents

#### Classes

- [UsecasesProxyModule](#classesinfrastructure_usecases_proxy_usecases_proxy_moduleusecasesproxymodulemd)

<a name="modulesmainmd"></a>

[api](#readmemd) / [Exports](#modulesmd) / main

## Module: main

<a name="modulesusecases_auth_isauthenticated_usecasesmd"></a>

[api](#readmemd) / [Exports](#modulesmd) / usecases/auth/isAuthenticated.usecases

## Module: usecases/auth/isAuthenticated.usecases

### Table of contents

#### Classes

- [IsAuthenticatedUseCases](#classesusecases_auth_isauthenticated_usecasesisauthenticatedusecasesmd)

<a name="modulesusecases_auth_login_usecasesmd"></a>

[api](#readmemd) / [Exports](#modulesmd) / usecases/auth/login.usecases

## Module: usecases/auth/login.usecases

### Table of contents

#### Classes

- [LoginUseCases](#classesusecases_auth_login_usecasesloginusecasesmd)

<a name="modulesusecases_auth_logout_usecasesmd"></a>

[api](#readmemd) / [Exports](#modulesmd) / usecases/auth/logout.usecases

## Module: usecases/auth/logout.usecases

### Table of contents

#### Classes

- [LogoutUseCases](#classesusecases_auth_logout_usecaseslogoutusecasesmd)

<a name="modulesusecases_auth_register_usecasesmd"></a>

[api](#readmemd) / [Exports](#modulesmd) / usecases/auth/register.usecases

## Module: usecases/auth/register.usecases

### Table of contents

#### Classes

- [RegisterUseCases](#classesusecases_auth_register_usecasesregisterusecasesmd)
