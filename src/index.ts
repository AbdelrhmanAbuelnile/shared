// src/index.ts

export enum UserRole {
	CLIENT = "CLIENT",
	CHEF = "CHEF",
	ADMIN = "ADMIN",
}

export enum OrderStatus {
	PENDING = "PENDING",
	ACCEPTED = "ACCEPTED",
	REJECTED = "REJECTED",
	COOKING = "COOKING",
	DELIVERING = "DELIVERING",
	COMPLETED = "COMPLETED",
}

export interface IUser {
	id: string;
	email: string;
	password: string;
	role: UserRole;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	imageUrl?: string;
	nationalId?: string;
	nationalIdFaceImageUrl?: string;
	nationalIdBackImageUrl?: string;
	nationalIdSelfieImageUrl?: string;
	nationalIdVerified?: boolean;
	nationalIdExpiresAt?: Date;
	createdAt: Date;
	updatedAt: Date;
}
