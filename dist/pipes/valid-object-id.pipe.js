"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const common_1 = require("@nestjs/common");
const errors_1 = require("../errors");
class ObjectIdPipe {
    transform(value, metadata) {
        if (metadata.type === 'param' && metadata.data === 'id') {
            if (!new class_validator_1.Validator().isMongoId(value)) {
                throw new common_1.BadRequestException(errors_1.default.id_invalid_format);
            }
        }
        return value;
    }
}
exports.ObjectIdPipe = ObjectIdPipe;
//# sourceMappingURL=valid-object-id.pipe.js.map