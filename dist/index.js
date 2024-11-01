"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  MainFeedback: () => MainFeedback
});
module.exports = __toCommonJS(src_exports);

// src/main.jsx
var import_react6 = require("react");
var import_client = require("react-dom/client");

// src/components/Citation.jsx
var import_react = __toESM(require("react"));
var import_jsx_runtime = require("react/jsx-runtime");
var Citation = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mb-30", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "mb-10", children: 'Hi "UserName"' }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "lh-15", children: "We sincerely thank you for your support and trust in our company's products. We genuinely value all your valuable suggestions regarding our products, as they will serve as nourishment for our growth. In the future, we will continue to optimize our products, and we hope you will not hesitate to share your thoughts with us. Thank you very much!" })
  ] });
};
var Citation_default = Citation;

// src/components/Rating.jsx
var import_react3 = __toESM(require("react"));

// src/components/StarRate.jsx
var import_react2 = __toESM(require("react"));
var import_fa = require("react-icons/fa");
var import_jsx_runtime2 = require("react/jsx-runtime");
var StarRate = () => {
  const [rating, setRating] = (0, import_react2.useState)(null);
  const [hover, setHover] = (0, import_react2.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "mb-10", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("form", { action: "", className: "", children: [...Array(5)].map((_, index) => {
    const currentRate = index + 1;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "label",
      {
        className: "cursor-pointer",
        onMouseEnter: () => setHover(currentRate),
        onMouseLeave: () => setHover(null),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "input",
            {
              type: "radio",
              name: "rate",
              value: currentRate,
              onChange: () => setRating(currentRate),
              className: "hidden"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_fa.FaStar,
            {
              size: 40,
              className: `
                  transition-all duration-200
                  ${(hover || rating) >= currentRate ? "fill-Star" : "default"}
                  ${hover === currentRate ? "scale-110 shadow-md" : ""}
                `
            }
          )
        ]
      },
      index
    );
  }) }) });
};
var StarRate_default = StarRate;

// src/components/Rating.jsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Rating = ({ listings = [] }) => {
  const renderItems = listings.map((item, index) => {
    const renderParagraph = item.description.map((question, paraDex) => {
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", { className: "mb-10", children: [
          "(",
          paraDex + 1,
          ") ",
          question
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(StarRate_default, {})
      ] }, paraDex);
    });
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "mb-20", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("h2", { className: "mb-10", children: [
        index + 1,
        ". ",
        item.title
      ] }),
      renderParagraph
    ] }, index);
  });
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "mb-30", children: renderItems });
};
var Rating_default = Rating;

// src/components/OpenQuestion.jsx
var import_react4 = __toESM(require("react"));
var import_fa2 = require("react-icons/fa");
var import_jsx_runtime4 = require("react/jsx-runtime");
var open_placeholder = "Please tell us your opinion. To help you protect your privacy, please do not contain any personal information(Eg: your name or address).";
var OpenQuestion = () => {
  const [text, setText] = (0, import_react4.useState)("");
  const [method, setMethod] = (0, import_react4.useState)("");
  const [selectMethod, setSelectedMethod] = (0, import_react4.useState)("");
  const feedbackMethod = [
    {
      id: "text",
      icon: import_fa2.FaTextHeight
    },
    {
      id: "audio",
      icon: import_fa2.FaMicrophoneAlt
    },
    {
      id: "image",
      icon: import_fa2.FaImage
    },
    {
      id: "video",
      icon: import_fa2.FaVideo
    }
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { text };
    console.log(blog);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: "mb-10", children: "How can we further enhance your experience?" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("form", { action: "", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "textarea",
        {
          name: "open-question",
          id: "",
          placeholder: open_placeholder,
          className: "fw textAreah bd-rd-5 pd-10",
          onChange: (e) => setText(e.target.value)
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("ul", { className: "df", children: feedbackMethod.map((methodItem, index) => {
        const Icon = methodItem.icon;
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "li",
          {
            onClick: () => setSelectedMethod(feedbackMethod.id),
            className: `
                    ${selectMethod === methodItem.id}
                    ? ' pd-10 mg-r-10 bd-rd-10 method-hover-bg hover:method-hover-bg cursor-pointer '
                    : ' '
                  `,
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Icon, { size: 25, className: "mg-ct" })
          },
          index
        );
      }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "df fw jc-fe", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("button", { className: "sm-btn df aln-tm-ct jc-sb", children: [
        "Submit",
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_fa2.FaTelegramPlane, { className: "mg-l-10" })
      ] }) })
    ] })
  ] });
};
var OpenQuestion_default = OpenQuestion;

// src/components/Practicality.jsx
var import_react5 = __toESM(require("react"));
var import_jsx_runtime5 = require("react/jsx-runtime");
var Practicality = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { children: "Practicality" });
};
var Practicality_default = Practicality;

// src/components/Feedback.jsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function Feedback({ id, data }) {
  const Feedback_id = () => {
    switch (id) {
      case "openQues":
        return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(OpenQuestion_default, {});
      case "rating":
        return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Rating_default, { listings: data });
      case "practicality":
        return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Practicality_default, {});
    }
  };
  return Feedback_id();
}
var Feedback_default = Feedback;

// src/data/rating.json
var rating_default = [
  {
    id: 1,
    title: "Overall Qufirewall Feedback",
    description: [
      "As a QNAP NAS user, how satisfied are you with how Qufirewall helps you ensure the security of the NAS?"
    ]
  },
  {
    id: 2,
    title: "Questions about functions",
    description: [
      "How satisfied are you with the 'Add Profile Denied IP Address' feature?",
      "How satisfied are you with the 'Event Court'?"
    ]
  }
];

// src/App.jsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "frame pd-frame bd-rd-frame-20 fh quesps", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h1", { className: "mb-20", children: "Rate Your Experience with " }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Citation_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      Feedback_default,
      {
        id: "rating",
        data: rating_default
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      Feedback_default,
      {
        id: "openQues",
        data: {}
      }
    )
  ] });
}
var App_default = App;

// src/main.jsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var MainFeedback = () => {
  return (0, import_client.createRoot)(document.getElementById("root")).render(
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react6.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(App_default, {}) })
  );
};
MainFeedback();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MainFeedback
});
