// src/index.ts

export enum UserRole {
	CLIENT = "CLIENT",
	CHEF = "CHEF",
	ADMIN = "ADMIN",
}

export enum IdentityVerificationStatus {
	PENDING = "PENDING",
	VERIFIED = "VERIFIED",
	REJECTED = "REJECTED",
}

export enum ServiceType {
	DELIVERY = "DELIVERY",
	IN_HOME_CHEF = "IN_HOME_CHEF",
}

export enum OrderStatus {
	PENDING = "PENDING",
	ACCEPTED = "ACCEPTED",
	REJECTED = "REJECTED",
	COOKING = "COOKING",
	DELIVERING = "DELIVERING",
	COMPLETED = "COMPLETED",
}

export enum NotificationType {
	ORDER_STATUS_UPDATE = "ORDER_STATUS_UPDATE",
	NEW_MESSAGE = "NEW_MESSAGE",
	PAYMENT_ALERT = "PAYMENT_ALERT",
	SYSTEM_ALERT = "SYSTEM_ALERT",
}

export enum MessageType {
	TEXT = "TEXT",
	IMAGE = "IMAGE",
	VIDEO = "VIDEO",
}

export interface IUser {
	_id: string;
	email: string;
	password: string;
	role: UserRole;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	imageUrl?: string;
	isOnline: boolean;
	lastSeenAt: Date;
	refreshTokens: string[];
	createdAt: Date;
	updatedAt: Date;
}

export interface IdentityVerification {
	_id: string;
	nationalId: string;
	faceImageUrl: string;
	backImageUrl: string;
	selfieImageUrl: string;
	status: IdentityVerificationStatus;
	expiresAt: Date;
	adminNotes?: string;
	userId: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface IMenu {
	_id: string;
	providerId: string;
	name: string;
	description: string;
	price: number;
	images: string[];
	isAvailable: boolean;
	preparationTimeMinutes: number;
	createdAt: Date;
	updatedAt: Date;
}

export interface IOrderItem {
	menuId: string;
	quantity: number;
	priceAtTimeOfOrder: number;
}

export interface IOrder {
	_id: string;
	clientId: string;
	providerId: string;
	serviceType: ServiceType;
	status: OrderStatus;
	totalAmount: number;
	scheduledFor: Date;
	deliveryAddress: string;
	items: IOrderItem[];
	createdAt: Date;
	updatedAt: Date;
}

export interface ICalendar {
	_id: string;
	providerId: string;
	blackoutDates: Date[];
	workingHours: object;
	createdAt: Date;
	updatedAt: Date;
}

export interface IReview {
	_id: string;
	transactionId: string;
	reviewerId: string;
	revieweeId: string;
	score: number;
	comment?: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface INotification {
	_id: string;
	recipientId: string;
	title: string;
	body: string;
	type: NotificationType;
	isRead: boolean;
	referenceId: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface IMessage {
	_id: string;
	transactionId: string;
	senderId: string;
	receiverId: string;
	type: MessageType;
	content: string;
	createdAt: Date;
	updatedAt: Date;
}
