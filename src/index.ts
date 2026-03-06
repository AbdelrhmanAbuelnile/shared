import { Types } from "mongoose";

// ==========================================
// 1. ENUMS & CONSTANTS
// ==========================================

export enum UserRole {
	CLIENT = "CLIENT",
	CHEF = "CHEF",
	ADMIN = "ADMIN",
}

export enum ChefType {
	CLOUD_KITCHEN = "CLOUD_KITCHEN",
	IN_HOME_CHEF = "IN_HOME_CHEF",
}

export enum IdentityVerificationStatus {
	PENDING = "PENDING",
	VERIFIED = "VERIFIED",
	REJECTED = "REJECTED",
	EXPIRED = "EXPIRED",
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
	BUYING_GROCERIES = "BUYING_GROCERIES",
	ON_THE_WAY = "ON_THE_WAY",
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

// ==========================================
// 2. INTERFACES
// ==========================================

export interface IUser {
	_id: Types.ObjectId;
	email: string;
	password: string;
	role: UserRole;
	chefType?: ChefType;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	imageUrl?: string;
	cuisines?: Types.ObjectId[];
	bio?: string;
	isDeleted: boolean;
	isOnline: boolean;
	lastSeenAt: Date;
	refreshTokens: string[];
	pushTokens: string[];
	createdAt: Date;
	updatedAt: Date;
}

export interface IdentityVerification {
	_id: Types.ObjectId;
	nationalId: string;
	faceImageUrl: string;
	backImageUrl: string;
	selfieImageUrl: string;
	status: IdentityVerificationStatus;
	expiresAt: Date;
	adminNotes?: string;
	userId: Types.ObjectId;
	createdAt: Date;
	updatedAt: Date;
}

export interface IMenu {
	_id: Types.ObjectId;
	providerId: Types.ObjectId;
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
	menuId: Types.ObjectId;
	quantity: number;
	priceAtTimeOfOrder: number;
}

export interface IInHomeService {
	_id: Types.ObjectId;
	providerId: Types.ObjectId;
	title: string;
	description: string;
	pricePerDay: number;
	images: string[];
	isAvailable: boolean;
	createdAt: Date;
	updatedAt: Date;
}

export interface IOrder {
	_id: Types.ObjectId;
	clientId: Types.ObjectId;
	providerId: Types.ObjectId;
	serviceType: ServiceType;
	status: OrderStatus;
	totalAmount: number;
	scheduledFor: Date;
	deliveryAddress: string;
	items?: IOrderItem[];
	inHomeDetails?: {
		days: number;
		pricePerDayAtBooking: number;
	};
	statusHistory: {
		status: OrderStatus;
		timestamp: Date;
	}[];
	createdAt: Date;
	updatedAt: Date;
}

export interface ICalendar {
	_id: Types.ObjectId;
	providerId: Types.ObjectId;
	blackoutDates: Date[];
	workingHours: object;
	createdAt: Date;
	updatedAt: Date;
}

export interface IReview {
	_id: Types.ObjectId;
	orderId: Types.ObjectId;
	reviewerId: Types.ObjectId;
	revieweeId: Types.ObjectId;
	score: number;
	itemScore: ItemRating;
	comment?: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface ItemRating {
	menuId: Types.ObjectId;
	score: number;
	comment: string;
}
export interface INotification {
	_id: Types.ObjectId;
	recipientId: Types.ObjectId;
	title: string;
	body: string;
	type: NotificationType;
	isRead: boolean;
	referenceId: Types.ObjectId;
	createdAt: Date;
	updatedAt: Date;
}

export interface IMessage {
	_id: Types.ObjectId;
	orderId?: Types.ObjectId;
	senderId: Types.ObjectId;
	receiverId: Types.ObjectId;
	type: MessageType;
	content: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface ISupportTicket {
	_id: Types.ObjectId;
	userId: Types.ObjectId;
	orderId?: Types.ObjectId;
	subject: string;
	message: string;
	status: "OPEN" | "RESOLVED";
	createdAt: Date;
	updatedAt: Date;
}

export interface ISystemIssue {
	_id: Types.ObjectId;
	title: string;
	description: string;
	assets: string[];
	isResolved: boolean;
	userId?: Types.ObjectId;
	applicationArea?: "PAYMENTS" | "ORDERS" | "USER_MANAGEMENT" | "NOTIFICATIONS";
	applicationType?: "chef-app" | "client-app" | "admin-dashboard";
	createdAt: Date;
	updatedAt: Date;
}

export interface ICuisine {
	_id: Types.ObjectId;
	name: string;
	nameEn: string;
	imageUrl: string;
	isActive: boolean;
	createdBy?: Types.ObjectId;
	createdAt: Date;
	updatedAt: Date;
}
