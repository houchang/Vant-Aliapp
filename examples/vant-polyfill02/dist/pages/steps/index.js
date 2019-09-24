"use strict";

var _page = _interopRequireDefault(require("../../common/page"));

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

(0, _page["default"])({
    data: {
        active: 0,
        steps: [
            {
                text: "步骤一",
                desc: "描述信息"
            },
            {
                text: "步骤二",
                desc: "描述信息"
            },
            {
                text: "步骤三",
                desc: "描述信息"
            },
            {
                text: "步骤四",
                desc: "描述信息"
            }
        ]
    },
    nextStep: function nextStep() {
        this.setData({
            active: ++this.data.active % 4
        });
    }
});
