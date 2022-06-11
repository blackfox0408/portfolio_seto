(() => {
var exports = {};
exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 2973:
/***/ ((module) => {

// Exports
module.exports = {
	"code": "ContactCode_code__eZpTM",
	"line": "ContactCode_line__HEU_b",
	"className": "ContactCode_className__LCTTe"
};


/***/ }),

/***/ 6602:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "ContactPage_container__ApSoI",
	"flex": "ContactPage_flex__YPyzr",
	"form": "ContactPage_form__3P_5V",
	"heading": "ContactPage_heading__886zg"
};


/***/ }),

/***/ 1418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/ContactCode.module.css
var ContactCode_module = __webpack_require__(2973);
var ContactCode_module_default = /*#__PURE__*/__webpack_require__.n(ContactCode_module);
;// CONCATENATED MODULE: ./components/ContactCode.jsx


const contactItems = [
    {
        social: 'email',
        link: 'jalilmak519@gmail.com',
        href: 'mailto:jalilmak519@gmail.com'
    },
    {
        social: 'github',
        link: 'https://github.com/seto0125',
        href: 'https://github.com/seto0125'
    },
    {
        social: 'skype',
        link: 'live:.cid.1d208b24fbdc62b0',
        href: 'https://join.skype.com/invite/xinGVAniElsC'
    }, 
];
const ContactCode = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (ContactCode_module_default()).code,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: (ContactCode_module_default()).line,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (ContactCode_module_default()).className,
                        children: ".socials"
                    }),
                    " {"
                ]
            }),
            contactItems.slice(0, 8).map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: (ContactCode_module_default()).line,
                    children: [
                        "\xa0\xa0\xa0",
                        item.social,
                        ":",
                        ' ',
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            target: "_blank",
                            rel: "noopener",
                            children: item.link
                        })
                    ]
                }, index)
            ),
            contactItems.slice(8, contactItems.length).map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: (ContactCode_module_default()).line,
                    children: [
                        "\xa0\xa0",
                        item.social,
                        ":",
                        ' ',
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            target: "_blank",
                            rel: "noopener",
                            children: item.link
                        })
                    ]
                }, index)
            ),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (ContactCode_module_default()).line,
                children: "}"
            })
        ]
    }));
};
/* harmony default export */ const components_ContactCode = (ContactCode);

// EXTERNAL MODULE: ./styles/ContactPage.module.css
var ContactPage_module = __webpack_require__(6602);
var ContactPage_module_default = /*#__PURE__*/__webpack_require__.n(ContactPage_module);
;// CONCATENATED MODULE: ./pages/contact.jsx




const ContactPage = ()=>{
    const { 0: name , 1: setName  } = (0,external_react_.useState)('');
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)('');
    const { 0: subject , 1: setSubject  } = (0,external_react_.useState)('');
    const { 0: message , 1: setMessage  } = (0,external_react_.useState)('');
    const submitForm = async (e)=>{
        e.preventDefault();
        console.log("https://www.nitinranganath.me/api");
        const res = await fetch(`${"https://www.nitinranganath.me/api"}/contact`, {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                subject,
                message
            })
        });
        if (res.ok) {
            alert('Your response has been received!');
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        } else {
            alert('There was an error. Please try again in a while.');
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (ContactPage_module_default()).container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: (ContactPage_module_default()).heading,
                    children: "Reach Out Via Socials"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(components_ContactCode, {
                })
            ]
        })
    }));
};
async function getStaticProps() {
    return {
        props: {
            title: 'Contact'
        }
    };
}
/* harmony default export */ const contact = (ContactPage);


/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1418));
module.exports = __webpack_exports__;

})();