"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FMC = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const FMC = (key) => {
    if (!key)
        throw new Error('key is required');
    firebase_admin_1.default.initializeApp({
        credential: firebase_admin_1.default.credential.cert(JSON.parse(key)),
    });
    const subscribeToTopic = (token, topic) => __awaiter(void 0, void 0, void 0, function* () {
        if (!token)
            throw new Error('token is required');
        if (!topic)
            throw new Error('topic is required');
        const response = yield firebase_admin_1.default.messaging().subscribeToTopic(token, topic);
        if (response.failureCount > 0) {
            throw new Error('Failed to subscribe to topic, Reason' + response.errors);
        }
        return response;
    });
    const unsubscribeFromTopic = (token, topic) => __awaiter(void 0, void 0, void 0, function* () {
        if (!token)
            throw new Error('token is required');
        if (!topic)
            throw new Error('topic is required');
        const response = yield firebase_admin_1.default.messaging().unsubscribeFromTopic(token, topic);
        if (response.failureCount > 0) {
            throw new Error('Failed to unsubscribe from topic, Reason' + response.errors);
        }
        return response;
    });
    function send(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!payload)
                    throw new Error('please provide a message object');
                const response = yield firebase_admin_1.default.messaging().send(payload);
                return response;
            }
            catch (error) {
                return error;
            }
        });
    }
    const multipleTopics = (i, topics, payload) => __awaiter(void 0, void 0, void 0, function* () {
        let objArr = {};
        let results = [];
        try {
            if (i === topics.length)
                return results;
            payload['topic'] = topics[i];
            objArr.topic = topics[i];
            const result = yield send(payload);
            if (result) {
                objArr['response'] = 'Successfully sent message to topic: ' + result;
            }
            results.push(objArr);
            i = i + 1;
            multipleTopics(i, topics, payload);
            return results;
        }
        catch (error) {
            objArr['response'] = error;
            return results.push(objArr);
        }
    });
    const multipleTokens = (i, tokens, payload) => __awaiter(void 0, void 0, void 0, function* () {
        let objArr = {};
        let results = [];
        try {
            if (i === tokens.length)
                return results;
            payload['token'] = tokens[i];
            objArr.token = tokens[i];
            const result = yield send(payload);
            if (result) {
                objArr['response'] = 'Successfully sent message to token: ' + result;
            }
            results.push(result);
            i = i + 1;
            multipleTokens(i, tokens, payload);
        }
        catch (error) {
            objArr['response'] = error;
            results.push(objArr);
            return results;
        }
    });
    return {
        send,
        subscribeToTopic,
        unsubscribeFromTopic,
        sendToMultipleTopics: multipleTopics,
        multipleTokens,
    };
};
exports.FMC = FMC;
