"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[42068],{

/***/ 4460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dashboard-ba9a718b55c53961c875113bf5b87740.png");

/***/ }),

/***/ 23484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Business process view-bae48e5c02aae4e4c8ac26352547a4be.png");

/***/ }),

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

/***/ 28872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/schematics-eb77314ed7fec07e870febb908813161.png");

/***/ }),

/***/ 29398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2024_2025_projects_prj_006_presentation_slides_md_0b4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2024-2025-projects-prj-006-presentation-slides-md-0b4.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2024_2025_projects_prj_006_presentation_slides_md_0b4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/PRJ006/presentation/slides","title":"slides","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2024-2025/projects/PRJ006/presentation/slides.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2024-2025/projects/PRJ006/presentation","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/PRJ006/presentation/slides","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/PRJ006/presentation/slides","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-10-05T12:53:05.959978+00:00","fm_version_comment":"","guid":"bf50fdfc-a296-43c5-96af-8516c0cf5ad1","dao":"class_sthdf_dashboard","title":"slides","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2026-10-05 14:53","modified":"2026-10-05 14:53","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"PRJ006","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/PRJ006/"},"next":{"title":"notes","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/PRJ006/sdlc/business/notes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2024-2025/projects/PRJ006/presentation/slides.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-10-05T12:53:05.959978+00:00',
	fm_version_comment: '',
	guid: 'bf50fdfc-a296-43c5-96af-8516c0cf5ad1',
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
const contentTitle = 'PRJ006 — Presentation';

const assets = {

};



const toc = [{
  "value": "Meteorologická stanica",
  "id": "meteorologická-stanica",
  "level": 2
}, {
  "value": "<strong>Zámer projektu</strong>",
  "id": "zámer-projektu",
  "level": 2
}, {
  "value": "<strong>Cieľ a motivácia</strong>",
  "id": "cieľ-a-motivácia",
  "level": 2
}, {
  "value": "<strong>Komponenty projektu:</strong>",
  "id": "komponenty-projektu",
  "level": 2
}, {
  "value": "<strong>Projektové aplikácie a prípady použitia:</strong>",
  "id": "projektové-aplikácie-a-prípady-použitia",
  "level": 2
}, {
  "value": "<strong>Uce Case diagram a Business Process diagram</strong>",
  "id": "uce-case-diagram-a-business-process-diagram",
  "level": 2
}, {
  "value": "<strong>Technická špecifikácia</strong>",
  "id": "technická-špecifikácia",
  "level": 2
}, {
  "value": "<strong>Meteorologická stanica</strong>",
  "id": "meteorologická-stanica-1",
  "level": 2
}, {
  "value": "** 3D Tlačiareň a obal pre meteorologickú stanicu**",
  "id": "-3d-tlačiareň-a-obal-pre-meteorologickú-stanicu",
  "level": 2
}, {
  "value": "<strong>Home Assistant aplikácia</strong>",
  "id": "home-assistant-aplikácia",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "prj006--presentation",
        children: "PRJ006 — Presentation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "meteorologická-stanica",
      children: "Meteorologická stanica"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Systémové Myslenie v IT"
      })
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "./img/model/metostation_ai_cover.png",
      alt: ""
    }), "\n", (0,jsx_runtime.jsx)("small", {
      children: "Cover image generated with use of DALLE-2"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bc. Christian Danižek, Bc. Patrik Malina, Bc. Ondrej Lesák, Bc. Dávid Kováľ"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Slovenská technická univerzita v Bratislave"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fakulta informatiky a informačných technológií"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "zámer-projektu",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Zámer projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cieľom tohto projektu je navrhnúť a zostrojiť vlastnú, cenovo dostupnú, modulárnu a univerzálnu meteorologickú stanicu pomocou 3D tlačených dielov, komponentov Raspberry Pi 2 model B a niekoľkých ďalších senzorov a modulov. Meteorologická stanica bude zbierať údaje rôznych premenných prostredia a bude komunikovať s aplikáciou Home Assistant, populárnou open-source platformou pre domácu automatizáciu. Integráciou s aplikáciou Home Assistant umožní stanica používateľom automatizáciu vnútorného prostredia na základe aktuálnych podmienok ovplyvneného prostredia, napríklad prispôsobenie termostatu, zopnutie prístrojov pre úpravu kvality ovzdušia, klimatizáciu a podobne."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cieľ-a-motivácia",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cieľ a motivácia"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Medzi hlavné ciele projektu, ktoré sme si v rámci tímu stanovili, sú:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vytvorenie modulárnej a univerzálnej meteorologickej stanice", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Zariadenie bude schopné monitorovať rôzne premenné prostredia, ako je napríklad teplota, vlhkosť alebo kvalitu ovzdušia. Ďalej to poskytne flexibilitu pre rozšírenie o ďalšie senzory podľa potrieb užívateľa"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Integrácia s Home Assistant", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Naša meteorologická stanica bude plne kompatibilná s aplikáciou Home Assistant, čo umožňuje efektívnu automatizáciu do domáceho prostredia na základe daných podmienok v prostredí"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Podpora automatizácie pre zlepšenie kvality života", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Zariadenie bude schopné púšťať automatizačné procesy, ktoré dokážu zlepšiť napríklad komfort, zdravie používateľov, zlepšenie a šetrenie životného prostredia, napríklad reguláciou vykurovania, klimatizácie alebo napríklad čistenia vzduchu"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Optimalizácia nákladov na prostredie", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Zariadenie bude schopné aktívne monitorovať teplotu a vlhkosť, a spolu s automatickými procesmi dokáže prispieť k zníženiu nákladov na klimatizáciu alebo vykurovanie"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Motivácia pre vytvorenie meteorologickej stanice je hlavne spojená s efektívnosťou, ktorá dokáže zabezpečiť pohodlie užívateľa, zlepšenie kvality života alebo optimalizáciu nákladov používateľa, čím dokáže časom ušetriť nemalé peniaze. Ďalšou motiváciou pre nás vytvoriť a implementovať projekt je prispieť k rýchlo rastúcemu technologickému odvetviu a automatizáciou pre zlepšenie životných podmienok a využívaniu zdrojov, čo je v dnešnej dobe veľkou celosvetovou témou."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Na záver sme si pripravili motivačný diagram, ktorý zhrnie naše ciele a motivácie do diagramovej podoby."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Motivation Diagram",
        src: (__webpack_require__(39599)/* ["default"] */ .A) + "",
        width: "542",
        height: "675"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "komponenty-projektu",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Komponenty projektu:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3D tlačený kryt: Prispôsobiteľné puzdrá odolné voči fyzickému poškodeniu a počítač Raspberry Pi, navrhnuté tak, aby odolali podmienkam vonkajšieho prostredia."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Počítač Raspberry Pi 2 model B: Základná spracovateľská jednotka na zber údajov z rôznych snímačov a komunikáciu s domácim asistentom."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Senzory:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Snímač teploty"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Snímač vlhkosti"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Snímač kvality ovzdušia"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Domáci asistent - Home Assistant"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "projektové-aplikácie-a-prípady-použitia",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Projektové aplikácie a prípady použitia:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Meteorologická stanica bude generovať cenné údaje o prostredí, ktoré môžu spustiť automatizačné postupy prostredníctvom aplikácie Home Assistant, čím sa zvýši energetická účinnosť, bezpečnosť a pohodlie domova. Niektoré praktické príklady automatizácie zahŕňajú:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nastavenie HVAC: Teplota a vlhkosť môžu optimalizovať vykurovanie, vetranie a klimatizáciu, automaticky upravovať vnútorné podmienky na základe aktuálneho stavu, prípadne rutiny"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatizácia čistenia vzduchu: Aktívne monitorovanie kvality ovzdušia prostredníctvom senzorov, v prípade poklesu kvality pod stanovený limit, zašle udalosť do aplikácie Home Assistant, ktorá spustí rutinu pre úpravu kvality ovzdušia v prípade, že používateľ takým prístrojom disponuje"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Starostlivosť o vnútorné rastliny: Niektoré rastliny vyžadujú pre ich optimálny rast stabilné podmienky prostredia. Automatizácia prostredníctvom monitorovania kvality a teploty ovzdušia umožňuje takéto prostredie vytvoriť a zabezpečiť tak optimálny rast rastlín"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Znižovanie podielu stimulov respiračných ochorení v ovzduší: Až 10% svetovej populácie trpí alergiou na prach. Nízka vlhkosť významne vplýva na vytváranie prachových častíc a ich rýchlejšej distribúcii v prostredí. Meteorologická stanica so snímačom vlhkosti a kvality ovzdušia môže jednoducho aktivovať rutinu, ktorú si používateľ prispôsobí podľa zdravotného stavu a tak môžu byť podmienky v uzavretom priestore optimalizované pre maximálne minimalizovanie alergénov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optimalizácia nákladov na energie: V neposlednom rade je pre používateľov zariadenie, ktoré dokáže optimalizovať náklady veľmi atraktívnou voľbou. Aktívnym monitorovaním a automatizáciou prostredníctvom aplikácie Home Assistant dokáže modulárna meteorologická stanica optimalizovať náklady na vykurovanie, resp. ochladzovanie na základe udržiavania teploty v intervaloch, ktoré zamedzia potrebe akútnej úpravy teploty alebo vlhkosti prostredia."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uce-case-diagram-a-business-process-diagram",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Uce Case diagram a Business Process diagram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Use Case Diagram",
        src: (__webpack_require__(31669)/* ["default"] */ .A) + "",
        width: "697",
        height: "483"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kroky pre jednotlivé prípady použitia:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nastavenie HVAC", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Užívatelia nakonfigurujú požadované teplotné a vlhkostné úrovne v Home Assistant aplikácií"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Meteorologická stanica bude pravidelne zbierať údaje o teplote a vlhkosti"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Spracované údaje sa odošlú do systému HVAC"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "HVAC systém prispôsobí vykurovanie, chladenie alebo vetranie podľa aktuálnych podmienok"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Automatizácia čistenia vzduchu", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Meteorologická stanica monitoruje kvalitu ovzdušia prostredníctvom senzorom"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ak kvalita klesne pod nastavený limit, stanica spustí udalosť v Home Assistant aplikácií"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "HA spustí príkaz na aktiváciu čistenia vzduchu"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Čistenie vzduchu sa zapne"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Po dosiahnutí optimálnej hodnoty sa čistenie vzduchu zastaví"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Optimalizácia nákladov na energie", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Meteorologická stanica monitoruje teplotu a vlhkosť prostredia"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Údaje sa vyhodnocujú HA aplikáciou na základe preddefinovaných parametrov"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Systém automaticky optimalizuje využitie HVAC zariadení podľa potreby"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Používateľ dostane prehľad o energetickej úspore prostredníctvom HA aplikácie"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Na základe zhromaždených dát sa môžu generovať dlhodobé odporúčania na zníženie spotreby"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Starostlivosť o vnútorné rastliny", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Používateľ zadá požiadavky na optimálne podmienky pre rastliny do aplikácie HA"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Meteorologická stanica pravidelne bude zbierať údaje o vnútornom prostredí"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ak sa parametre odchýlia od požadovaných hodnôt, aplikácia vyšle príkaz na aktiváciu HVAC alebo zvlhčovača"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Používateľ dostane správu o aktuálnych podmienkach a stave rastlín"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Znižovanie rizika respiračných ochorení", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Meteorologická stanica monitoruje kvalitu ovzdušia, teplotu a vlhkosť v prostredí"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Pri identifikácií nízkej vlhkosti alebo nízkej kvality ovzdušia vyšle stanica upozornenie do HA aplikácie"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Aplikácia aktivuje zvlhčovač"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Systém upravuje činnosť zariadení na základe kontinuálneho monitorovania"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Používateľ bude dostávať pravidelné notifikácie na zlepšenie prostredia"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Na lepšie porozumenie komunikácie meteorologickej stanice, používateľa a aplikáciou Home Assistant sme pripravili Business process view diagram, ktorý vizualizuje procesy od momentu monitorovania prostredia - získaniu údajov - odoslanie do systému až po zmenu prostredia."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Business Process View Diagram",
        src: (__webpack_require__(23484)/* ["default"] */ .A) + "",
        width: "1128",
        height: "517"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "technická-špecifikácia",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technická špecifikácia"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Technická špecifikácia a upresnenie komponentov využitých na implementáciu:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C++"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Docker Compose, Docker"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Raspberry Pi 2B"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DHT11 senzor vlhkosti a teploty"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DFRobot Fermion ENS160"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tlačiareň Prusa Mk4"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pre lepšie znázornenie a pre lepší prehľad máme Technology Diagram, kde sú komponenty a technológie, ktoré využívame, vrátane ich prepojení a spôsob ich \"spolupráce\"."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Technology Diagram",
        src: (__webpack_require__(44713)/* ["default"] */ .A) + "",
        width: "899",
        height: "606"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "meteorologická-stanica-1",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Meteorologická stanica"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Komponenty, z ktorých je implementovaná samotná meteorologická stanica:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Raspberry Pi 2B - hlavný modul systému, ktorý spracúva údaje zo senzorov a riadi komunikáciu s aplikáciou Home Assistant"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DHT11 senzor vlhkosti a teploty - Zaisťuje meranie teploty a relatívnej vlhkosti vzduchu. Údaje sú zasielané do Raspberry Pi"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DFRobot Fermion ENS160 Senzor kvality ovzdušia - Senzor monitorujúci kvalitu vzduchu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LED indikátor - slúži na spätnú väzbu o stave systému alebo zmenách prostredia"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breadboard - slúži na prepojenie senzorov s Raspberry Pi"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ochranný obal"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Component View Diagram",
        src: (__webpack_require__(44914)/* ["default"] */ .A) + "",
        width: "724",
        height: "508"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Na základe komponent diagramu sme implementovali aj v reálnej podobe prototyp meteorologickej stanice:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Zapojenie",
        src: (__webpack_require__(81053)/* ["default"] */ .A) + "",
        width: "1800",
        height: "1012"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Naľavo je možné vidieť Raspberry Pi v ochrannom obale a napravo zapojený senzor DHT11 senzor vlhkosti a teploty na Breadboard experimentálnej doske."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Na obrázku máme znázornenú aj schému zapojenia, ako je to všetko zapojené:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Schema Zapojenia",
        src: (__webpack_require__(28872)/* ["default"] */ .A) + "",
        width: "2480",
        height: "1748"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Čo sa týka priamo implementačnej časti, je naimplementovaný daemon na čítanie dát zo senzorov dht11 + ens160, ktorý zapisuje dáta do súborov a zároveň ovláda LED indikátor. Je implementovaný aj dashboard , ktorý číta dáta zo súborov a na princípe API ich ďalej posiela na frontend. Je naimplementovaný ďalší daemon, ktorý číta dáta zo súborov a tie sú následne zasielané do aplikácie Home Assistant."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Dashboard Frontend",
        src: (__webpack_require__(4460)/* ["default"] */ .A) + "",
        width: "1765",
        height: "935"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-3d-tlačiareň-a-obal-pre-meteorologickú-stanicu",
      children: "** 3D Tlačiareň a obal pre meteorologickú stanicu**"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Po zapojení Raspberry a potrebných komponentov sme sa rozhodli navrhnúť a vytlačiť ochranný obal pre meteorologickú stanicu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Model je vytvorený z materiálu PETG, ktorý je mimoriadne odolný a silný, je rezistentný proti vode, kvapalinám, čím je vhodný do rôznych prostredí či už vnútri alebo vonku. Dokáže zvládnuť až teplotu do 70-80 stupňov Celzia."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "3D Model",
        src: (__webpack_require__(76427)/* ["default"] */ .A) + "",
        width: "1000",
        height: "617"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Namodelovali sme obal, ktorý sa skladá z 2 častí. V jednej časti bude uložené Raspberry a v druhej Breadboard so senzormi. Takisto sme zabezpečili ventilačné otvory, ktoré umožnia cirkuláciu vzduchu, čím zabránime prehriatiu. Na boku su vedené otvory na pripojenie cez port.\nVýsledný vytlačený obal s uloženými komponentami:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "MeteoStanica1",
        src: (__webpack_require__(40968)/* ["default"] */ .A) + "",
        width: "1800",
        height: "1012"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "MeteoStanica2",
        src: (__webpack_require__(51895)/* ["default"] */ .A) + "",
        width: "1800",
        height: "1012"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "home-assistant-aplikácia",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Home Assistant aplikácia"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Aplikáciu, ktorá bude prepojená s meteorologickou stanicou, sme implementovali v prrograme Python pomocou MQTT protokolu. Prostredie beží na dockeri.\nNa začiatok pre spustenie je potrebné si nainštalovať nasledovné požiadavky do systému:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "certifi==2024.8.30"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "charset-normalizer==3.4.0"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "idna==3.10"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "paho-mqtt==2.1.0"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "python-dotenv==1.0.1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "urllib3==2.2.3"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Po nainštalovaní naštartujeme docker cez príkaz “docker compose up -d” a spustíme na prehliadači “http:--localhost:8123”. V prostredí spustíme hlavný python script “python main.py”, v ktorom sa nachádzajú nasledovné hlavné funkcie aplikácie:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "pripojenie k MQTT brokeru"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Čítanie dát zo súborov: táto funkcia číta dáta zo súborov, ktoré sú definované v prostredí, napríklad súbory obsahujúce teplotu, vlhkosť, …"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Publikácia správ: kontroluje sa tu stav odoslania a prípadne zaznamenaný úspech alebo neúspech"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hlavná časť a zobrazenie údajov: Tu sa načítavajú údaje zo senzorov (teplota, vlhkosť, kvalita vzduchu, TVOC, CO2) a odosielajú sa do Home Assistant pomocou MQTT brokera"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grafické rozhranie pre aplikáciu vyzerá nasledovne:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Home Assistant aplikácia",
        src: (__webpack_require__(79090)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1440"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Takisto aplikácia loguje všetky správy, ktoré vyzerajú nasledovne:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n[2025-01-11 14:49:01] LOG: Message `{\"temperature\": 26.5, \"humidity\": 87}` sent to topic `home/sensor/weather_station`\n[2025-01-11 14:49:04] LOG: Message `{\"temperature\": 25.4, \"humidity\": 67}` sent to topic `home/sensor/weather_station`\n[2025-01-11 14:49:07] LOG: Message `{\"temperature\": 27.6, \"humidity\": 78}` sent to topic `home/sensor/weather_station`\n[2025-01-14 07:41:21] LOG: Message `{\"temperature\": 24.86, \"humidity\": 46.47, \"air_quality\": 439, \"tvoc\": 1396.26, \"eco2\": 939.03}` sent to topic `home/sensor/weather_station`\n[2025-01-14 07:41:24] LOG: Message `{\"temperature\": 27.78, \"humidity\": 54.01, \"air_quality\": 447, \"tvoc\": 1130.53, \"eco2\": 814.89}` sent to topic `home/sensor/weather_station`\n[2025-01-14 07:41:27] LOG: Message `{\"temperature\": 26.71, \"humidity\": 28.82, \"air_quality\": 163, \"tvoc\": 931.48, \"eco2\": 461.16}` sent to topic `home/sensor/weather_station`\n\n"
      })
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



/***/ }),

/***/ 31669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Use Case-6232578b42007c5cefcf9333bb05b17a.png");

/***/ }),

/***/ 39599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Motivation view-49c5a3de5b8b5cfda55f73117b8f6539.png");

/***/ }),

/***/ 40968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/skrinka1-6f21b6880b7f0ad13fa73edd9120e105.jpg");

/***/ }),

/***/ 44713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Technology view-361c8b830532d7fdfffc1585b5c45e80.png");

/***/ }),

/***/ 44914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Component view-bfe6b5b99e3523262fd64cdb6fff460c.png");

/***/ }),

/***/ 51895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/skrinka2-87d3c9c68e16b89bec24e19ec1dde9d0.jpg");

/***/ }),

/***/ 76427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/model_03-0ccc4e91d07f542d1bcb8fb3a52e427f.png");

/***/ }),

/***/ 79090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ha_photo-470ea5d1637d028b9838c7d730c8dca6.png");

/***/ }),

/***/ 81053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/zapojenie-28128bd7518f933edc9d34ecb3786c37.jpg");

/***/ })

}]);