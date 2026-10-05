"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[97522],{

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ 61800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2024_2025_projects_prj_002_presentation_slides_md_c14_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2024-2025-projects-prj-002-presentation-slides-md-c14.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2024_2025_projects_prj_002_presentation_slides_md_c14_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/PRJ002/presentation/slides","title":"slides","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2024-2025/projects/PRJ002/presentation/slides.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2024-2025/projects/PRJ002/presentation","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/PRJ002/presentation/slides","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/PRJ002/presentation/slides","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-10-05T12:53:05.945797+00:00","fm_version_comment":"","guid":"08d5a1a7-cf69-441c-9352-266fb45c638d","dao":"class_sthdf_dashboard","title":"slides","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2026-10-05 14:53","modified":"2026-10-05 14:53","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"PRJ002","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/PRJ002/"},"next":{"title":"notes","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/PRJ002/sdlc/business/notes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2024-2025/projects/PRJ002/presentation/slides.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-10-05T12:53:05.945797+00:00',
	fm_version_comment: '',
	guid: '08d5a1a7-cf69-441c-9352-266fb45c638d',
	dao: 'class_sthdf_dashboard',
	title: 'slides',
	description: '{{DESCRIPTION}}',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: '',
	type: '',
	priority: '',
	tags: [],
	locale: 'sk',
	created: '2026-10-05 14:53',
	modified: '2026-10-05 14:53',
	status: 'backlog',
	privacy: 'public',
	rights_holder_content: 'Roman Kazicka',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2025 Roman Kazicka',
	origin_repo: '',
	origin_repo_url: '',
	origin_commit: '',
	origin_branch: '',
	origin_system: 'CAA',
	origin_author: 'Roman Kazicka',
	origin_imported_from: '',
	origin_import_date: '',
	fm_reserved1: '',
	fm_reserved2: ''
};
const contentTitle = 'PRJ002 — Presentation';

const assets = {

};



const toc = [{
  "value": "SMVIT-AuroVision-Labs",
  "id": "smvit-aurovision-labs",
  "level": 2
}, {
  "value": "<strong>Authors</strong>",
  "id": "authors",
  "level": 4
}, {
  "value": "Key Improvements",
  "id": "key-improvements",
  "level": 3
}, {
  "value": "<strong>Thermo-measure</strong>",
  "id": "thermo-measure",
  "level": 2
}, {
  "value": "<strong>Description</strong>",
  "id": "description",
  "level": 3
}, {
  "value": "<strong>Motivation</strong>",
  "id": "motivation",
  "level": 3
}, {
  "value": "Prototype Sketch",
  "id": "prototype-sketch",
  "level": 4
}, {
  "value": "Temperature measurement methods",
  "id": "temperature-measurement-methods",
  "level": 4
}, {
  "value": "Main Use Cases",
  "id": "main-use-cases",
  "level": 3
}, {
  "value": "<strong>EA Modeling</strong>",
  "id": "ea-modeling",
  "level": 3
}, {
  "value": "Preparation of HW",
  "id": "preparation-of-hw",
  "level": 3
}, {
  "value": "Programming &amp; Deployment",
  "id": "programming--deployment",
  "level": 3
}, {
  "value": "Deployment of the Web App",
  "id": "deployment-of-the-web-app",
  "level": 4
}, {
  "value": "<strong>Testing</strong>",
  "id": "testing",
  "level": 3
}, {
  "value": "<strong>Outcome</strong>",
  "id": "outcome",
  "level": 3
}, {
  "value": "Lesson Learned",
  "id": "lesson-learned",
  "level": 3
}, {
  "value": "Documentation and Videos",
  "id": "documentation-and-videos",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/",
        children: "🏠 Domov"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../",
        children: "⬅️ Nahor"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "prj002--presentation",
        children: "PRJ002 — Presentation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "smvit-aurovision-labs",
      children: "SMVIT-AuroVision-Labs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: "https://img.shields.io/badge/Python-3.12-a?style=flat&logo=python&logoColor=white&labelColor=blue&color=black",
        alt: "Python"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://img.shields.io/badge/FastAPI-0.115.5-a?style=flat&logo=fastapi&logoColor=white&labelColor=%23009688&color=black",
        alt: "FastAPI"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://img.shields.io/badge/Raspberry%20PI-Pico-a?style=flat&logo=raspberrypi&logoColor=white&labelColor=%23A22846&color=black",
        alt: "Raspberry_PI"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "preview"
      }), " of our documentation. The full version is available here."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "authors",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Authors"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bc. Peter Slovák"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bc. Tibor Vanek"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bc. Pavol Hradský"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We are a group of three enthusiastic students working together on an exciting project: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "measuring the temperature of coffee or tea using a Raspberry Pi Pico"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is our first project which we decided to do together and we are all committed to contributing our skills and ideas to achieve great results. We will continue with project from previous years ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://wikifactory.com/+fablabbratislava/automated-tea-infuser",
        children: "Automated Tea Infuser | Overview | Wikifactory"
      }), " where students created an automated tea infuser."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-improvements",
      children: "Key Improvements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["📱 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Interactive web app"
        }), ": Real-time notifications and customizable temperature thresholds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["📊 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "View measurement history"
        }), ": Easily track and review past temperature measurements for better insights."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🔍 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Enhanced accuracy"
        }), ": Improved sensor placement for precise measurements directly in the drink."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🌐 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Mobile-Friendly"
        }), ": Full functionality on desktops and mobile devices."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "thermo-measure",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Thermo-measure"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "description",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Our project involves creating a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "temperature measurement system"
      }), " for beverages using a Raspberry Pi Pico. The system will monitor the drink's temperature in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "real-time"
      }), " placed directly on the cup, and users can access measured data via a web application on their devices."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "motivation",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Motivation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We share a love for coffee and tea and know the struggle of sipping a too-hot beverage. Our solution aims to help users enjoy their drinks safely at the perfect temperature and will be for everyone, but especially for home usage."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "prototype-sketch",
      children: "Prototype Sketch"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "./img/images/paperbook.jpg",
      alt: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "temperature-measurement-methods",
      children: "Temperature measurement methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "There are several methods to measure the temperature of a beverage, and each has its own advantages and drawbacks. Below are a few common alternatives to using a Raspberry Pi Pico-based system for measuring temperature, along with a discussion of why we chose our approach."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Thermal strips (Color-changing thermometers)"
          }), " 9,91€:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How it works"
            }), " : These strips change color when exposed to heat. They are typically placed on the surface of a cup. The color change corresponds to different temperature ranges."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Why we didn't choose this method"
            }), " : While thermal strips are inexpensive and simple, they don't offer the precision, real-time monitoring or convenience of a digital system. The accuracy limitations and the lack of integration with a modern monitoring system like a smartphone app were significant drawbacks for our needs."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Laser thermometers (Infrared thermometers)"
          }), "  37,99 €:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How it works"
            }), " : These devices use infrared radiation to measure the temperature of a surface from a distance without making physical contact. The thermometer detects the infrared radiation emitted by the object and calculates its temperature."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Why we didn't choose this method"
            }), " : Although laser thermometers offer non-contact measurements, we found them to be impractical for continuous real-time monitoring of a drink's temperature, especially when it's placed on a table or cup holder. Additionally, the cost and reliance on manual measurements made it less suitable for our goal of providing seamless, automatic, and remote temperature tracking."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Contact Thermometers"
          }), " :"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How it works"
            }), " : These are traditional thermometers that use a metal probe to measure the temperature by physically contacting the liquid."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Why we chose this method"
            }), " : We deemed this method to be the most fitting for our particular project, as it is not meant for commercial use, only as a personal tool."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "main-use-cases",
      children: "Main Use Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Safe Drinking Temperature Monitoring:"
        }), " Users can check the temperature of their drinks before sipping, ensuring they don’t burn their mouths. This feature gives real-time updates on the temperature of coffee or tea, helping users avoid discomfort."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Safe Drinking Temperature Notification:"
        }), " Users get notification when coffee or tea has a desired temperature. This ensures that users can enjoy their beverages at the perfect temperature without having to constantly check. There will be set tresholds for notifying."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remote Monitoring for Multiple Drinks:"
        }), " With the web application, users can monitor the temperature of multiple cups simultaneously, making it useful for gatherings or family settings."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      children: (0,jsx_runtime.jsx)("img", {
        src: "./img/images/usecase_connected.png",
        alt: "Use Cases"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ea-modeling",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "EA Modeling"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Our technology stack includes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Raspberry Pi Pico"
        }), " - a low-cost microcontroller, making it accessible for hobbyists and learners."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DS18B20 waterproof temperature sensor"
        }), " - accurate temperature readings in liquids, and the integration with a web application."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Web application"
        }), " - user-friendly interface with using MicroPython for programming the Pico."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "./img/images/usecase_detailed.png",
      alt: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Note: more models are available to be viewed in the full version of the documentation."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "preparation-of-hw",
      children: "Preparation of HW"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For this project, we needed to gather and prepare several essential components to ensure the temperature measurement system works correctly with the Raspberry Pi Pico. Below is a list of the hardware we purchased and prepared:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metalized Resistor 4K7 - 0.125W:"
        }), " This resistor is used as a pull-up resistor to stabilize the data line between the temperature sensor and the microcontroller."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Waterproof Temperature Sensor for Single-Board Computers (DS18B20):"
        }), " The DS18B20 sensor is responsible for measuring the temperature of the liquid (coffee or tea) and can be easily interfaced with the Raspberry Pi Pico. Its waterproof feature makes it ideal for measuring the temperature of beverages."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Raspberry Pi Pico:"
        }), " The Raspberry Pi Pico is the microcontroller at the heart of our system. It reads data from the DS18B20 sensor and sends it to the web app."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Breadboard:"
        }), " The breadboard is used to connect the components (sensor, resistor, and Raspberry Pi Pico) without soldering, allowing for easy prototyping and testing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We followed the detailed instructions provided by ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://randomnerdtutorials.com/raspberry-pi-pico-ds18b20-micropython/",
        children: "Random Nerd Tutorials"
      }), " to set up the Raspberry Pi Pico with the DS18B20 temperature sensor. This guide helped us with wiring the components, installing the necessary libraries, and writing the MicroPython code to read temperature data from the sensor."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Some components we had at home:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Raspberry Pi Pico + Breadboard"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Powerbank to power our system"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)("div", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "./img/images/hardware/rpi%2Cbreadboard.jpg",
        alt: "Rpi and breadbard"
      }), (0,jsx_runtime.jsx)("img", {
        src: "./img/images/hardware/powerbank.png",
        alt: "powerbank"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Some components needed to be bought, and here are the links to where we purchased them:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Thermometer sensor: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.drotik-elektro.sk/arduino-platforma/848-vodeodolny-teplomer-pre-jednodoskove-pocitace-ds18b20-1-meter.html",
          children: "Arduino teploměr vodotěsný DS18B20 | drotik-elektro.sk"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Resistor: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.drotik-elektro.sk/arduino-platforma/7663-metalizovany-rezistor-4k7-0-125w-1.html",
          children: "Metalizovaný rezistor 4k7 0.125 W 1% | drotik-elektro.sk"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)("div", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "./img/images/hardware/sensor.png",
        alt: "Sensor"
      }), (0,jsx_runtime.jsx)("img", {
        src: "./img/images/hardware/connectors.png",
        alt: "Connectors"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3D printed model of box for storing our product"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)("div", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "./img/images/box/box1.png",
        alt: "Sensor"
      }), (0,jsx_runtime.jsx)("img", {
        src: "./img/images/box/box3.png",
        alt: "Connectors"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "programming--deployment",
      children: "Programming & Deployment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Raspberry"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "raspberry is connected to Wi-Fi"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "every 2 seconds the temperature is measured and a POST request is sent to server"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Server"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "the server is in Python, an app using FastAPI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "has (POST) endpoint which, every 2 seconds, receives output from rpi about actual temperature"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "temperature is written to global variables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "has (GET) endpoint which services this temperature"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frontend"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "simple frontend app (vanilla js + tailwind css)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "every 2 seconds a GET request is sent to the server, and the updated temperature is shown on frontend"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)("div", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "./img/images/schema1.png",
        alt: "Sensor"
      }), (0,jsx_runtime.jsx)("img", {
        src: "./img/images/schema2.png",
        alt: "Connectors"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "deployment-of-the-web-app",
      children: "Deployment of the Web App"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Using Hetzner VPS (", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://console.hetzner.cloud/",
        children: "https://console.hetzner.cloud/"
      }), ") on IP 49.12.65.96 you can easily see our result:"]
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "./img/images/app/temp_history.png",
      alt: ""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Video about deploying web app on hetzner vps is recorded on the following link: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://youtu.be/vCuRECcbWYA",
        children: "https://youtu.be/vCuRECcbWYA"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "testing",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Testing is a crucial part of our project:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Functional testing"
        }), " : Ensuring all components work together correctly, including the sensor, microcontroller, and web application."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Temperature accuracy"
        }), " : Comparing the readings from our system with a reliable thermometer to verify accuracy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User experience testing"
        }), " : Gathering feedback from users on the web application’s interface and overall functionality."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Durability testing"
        }), " : Checking how the system performs over extended use and under varying conditions, such as different drink types and ambient temperatures."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Video about testing web app and our thermometer is recorded on the following link: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://youtu.be/J3pNO6BmosM",
        children: "https://youtu.be/J3pNO6BmosM"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "outcome",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome"
      })
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "./img/images/hardware/final_outcome.png",
      alt: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lesson-learned",
      children: "Lesson Learned"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vyskúšali sme si prácu so 7D modelom, ktorý nám v projekte pomohol s organizáciou. Každá dimenzia mala svoje opodstatnenie aj v našom projekte a vďaka odkazom sme sa jednoducho mohli dostať presne tam kam sme potrebovali vďaka organizácii, ktorú 7D poskytuje."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Príklad TODO listu:"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "./img/images/Screenshot%20from%202024-12-10%2010-57-56.png",
      alt: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Príklad Resource nášho projektu, kde vidno linky v rámci Note (poznámky), odkiaľ sme čerpali informácie, spojené s Class s výstižnejším popisom."
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "./img/images/Screenshot%20from%202024-12-10%2010-57-33.png",
      alt: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vyskúšali sme si prácu aj s LemonTree, konkrétne jeho Git diff, kedy nám pomohol pri zistení zmien v modeli na úrovni až labelov, connections a podobne. Vďaka porovnávaniu zmien sme minimalizovali riziko konfliktov, duplikátov pri práci viacerých členov tímu a zefektívnili sme prácu."
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "./img/images/Screenshot%20from%202024-12-10%2010-57-09.png",
      alt: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Predmet SMVIT (Systémové myslenie v IT) nás ukázal ako funguje taký start-up, vyskúšali sme si prácu v tíme za pomoci nástrojov ako 7D model a lemontree, čo výrazne zlepšilo efektivitu, organizáciu a profesionalitu v tíme. Celkovo sme pochopili základné princípy ako správne previesť svoje myšlienky do reality a dokonca „predať“ verejnosti svoj produkt na známych platformách ako LinkedIn, Youtube, Patreon vo forme videí a príspevkov. Prínos predmetu bol veľký pre nás a odporúčame budúcim generáciám."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "documentation-and-videos",
      children: "Documentation and Videos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!TIP]\nIf you appreciate our efforts and would like to support our projects to the future, consider visiting us on social media listed below. Your support helps us acquire better equipment, fund new projects, and continue sharing our journey with the community 😊. Thank you for your support!"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!NOTE]\nAll steps in our project are documented and videos are uploaded to our YouTube channel, featuring an unlisted playlist. This playlist shows our progress, tutorials, and the challenges we faced. We hope this content inspires others to explore similar projects and learn alongside us!"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.youtube.com/@AuroVisionLabs",
          children: "Youtube"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.linkedin.com/in/aurovision-labs",
          children: "LinkedIN"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.patreon.com/AuroVisionLabs",
          children: "Patreon"
        })
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ })

}]);