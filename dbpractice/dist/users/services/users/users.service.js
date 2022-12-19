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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const User_1 = require("../../../typeorm/entities/User");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    fetchusers() {
        return this.userRepository.find();
    }
    async createuser(userdetails) {
        if (await this.userexists(userdetails)) {
            throw new common_1.HttpException('User exists already', common_1.HttpStatus.BAD_GATEWAY);
        }
        else {
            const newuser = this.userRepository.create(Object.assign(Object.assign({}, userdetails), { createdAt: new Date() }));
            this.userRepository.save(newuser);
            console.log("created the new user");
            return "created new user";
        }
    }
    updateuser(id, userupdatedetails) {
        return this.userRepository.update(id, Object.assign({}, userupdatedetails));
    }
    async deleteuser(id) {
        if (await this.useridexists(id)) {
            this.userRepository.delete(id);
        }
        else {
            throw new common_1.HttpException("User dosen't exist", common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async userexists(userdetails) {
        const user = await this.userRepository.findOne({
            where: {
                username: userdetails.username
            }
        });
        if (user) {
            return true;
        }
        else {
            return false;
        }
    }
    async useridexists(userid) {
        const user = await this.userRepository.findOneBy({ id: userid });
        if (user) {
            return true;
        }
        else {
            return false;
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(User_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map