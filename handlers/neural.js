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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeuralHandler = void 0;
class NeuralHandler {
    constructor(client) {
        this.client = client;
    }
    // Method to handle prediction requests
    predict(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.post('/predict', data);
            return response.data;
        });
    }
    // Method to handle forecasting requests
    forecast(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.post('/forecast', data);
            return response.data;
        });
    }
}
exports.NeuralHandler = NeuralHandler;
