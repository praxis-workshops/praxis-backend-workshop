"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.NoteSchema = new mongoose_1.Schema({
    text: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    }
}, {
    timestamps: {
        createdAt: true,
        updatedAt: true
    }
});
//# sourceMappingURL=note.js.map