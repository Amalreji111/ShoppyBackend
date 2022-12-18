import { PartialType } from "@nestjs/mapped-types";
import { User } from "./user.Entity";

export class UserPartial extends PartialType(User) {}
