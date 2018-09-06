"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const users_service_1 = require("./users.service");
const valid_object_id_pipe_1 = require("../pipes/valid-object-id.pipe");
const empty_object_pipe_1 = require("../pipes/empty-object.pipe");
const user_dto_1 = require("../dto/user.dto");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.usersService.remove(id);
            if (!result)
                throw new common_1.NotFoundException();
            return result;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.usersService.findAll();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.usersService.findById(id);
            if (!data) {
                throw new common_1.NotFoundException();
            }
            return data;
        });
    }
    update(id, updateUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.usersService.update(id, updateUserDto);
            return response;
        });
    }
    create(createUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersService.create(createUserDto);
            return user;
        });
    }
};
__decorate([
    common_1.Delete(':id'),
    swagger_1.ApiOkResponse({ type: Boolean }),
    swagger_1.ApiNotFoundResponse({}),
    __param(0, common_1.Param('id', new valid_object_id_pipe_1.ObjectIdPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "remove", null);
__decorate([
    swagger_1.ApiInternalServerErrorResponse({}),
    swagger_1.ApiOkResponse({ isArray: true, type: user_dto_1.CreateUserDto }),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiOkResponse({ description: 'User found', type: user_dto_1.CreateUserDto }),
    swagger_1.ApiNotFoundResponse({ description: 'User not found' }),
    __param(0, common_1.Param('id', new valid_object_id_pipe_1.ObjectIdPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findById", null);
__decorate([
    common_1.Patch(':id'),
    swagger_1.ApiOkResponse({ type: Object }),
    __param(0, common_1.Param('id', new valid_object_id_pipe_1.ObjectIdPipe())),
    __param(1, common_1.Body(new empty_object_pipe_1.EmptyObjectPipe(), new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    common_1.Post(),
    swagger_1.ApiCreatedResponse({ description: 'User created successfully', type: user_dto_1.CreateUserDto }),
    swagger_1.ApiForbiddenResponse({ description: 'Forbidden' }),
    common_1.UsePipes(new common_1.ValidationPipe({ transform: true })),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
UsersController = __decorate([
    swagger_1.ApiUseTags('users'),
    common_1.Controller('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map