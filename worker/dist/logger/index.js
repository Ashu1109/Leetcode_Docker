"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const logger = winston_1.default.createLogger({
    format: winston_1.default.format.json(),
    transports: [
        new winston_1.default.transports.File({ filename: "dist/logger/error.log", level: "error" }),
        new winston_1.default.transports.File({ filename: "dist/logger/info.log", level: "info" }),
        new winston_1.default.transports.File({ filename: "dist/logger/combined.log" })
    ],
});
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston_1.default.transports.Console({
        format: winston_1.default.format.simple(),
    }));
}
exports.default = logger;
