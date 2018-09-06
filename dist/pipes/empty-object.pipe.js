"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const common_1 = require("@nestjs/common");
const errors_1 = require("../errors");
class EmptyObjectPipe {
    transform(value, metadata) {
        if (lodash_1._.isEmpty(value)) {
            throw new common_1.BadRequestException(errors_1.default.request_without_payload);
        }
        return value;
    }
}
exports.EmptyObjectPipe = EmptyObjectPipe;
//# sourceMappingURL=empty-object.pipe.js.map