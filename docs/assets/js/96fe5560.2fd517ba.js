"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[64845],{

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

/***/ 65929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2024_2025_projects_prj_005_presentation_slides_md_96f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2024-2025-projects-prj-005-presentation-slides-md-96f.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2024_2025_projects_prj_005_presentation_slides_md_96f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/PRJ005/presentation/slides","title":"slides","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2024-2025/projects/PRJ005/presentation/slides.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2024-2025/projects/PRJ005/presentation","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/PRJ005/presentation/slides","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/PRJ005/presentation/slides","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-10-05T12:53:05.956333+00:00","fm_version_comment":"","guid":"a5846894-5f34-4fd1-90de-ef55929d475a","dao":"class_sthdf_dashboard","title":"slides","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2026-10-05 14:53","modified":"2026-10-05 14:53","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"PRJ005","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/PRJ005/"},"next":{"title":"notes","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/PRJ005/sdlc/business/notes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2024-2025/projects/PRJ005/presentation/slides.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-10-05T12:53:05.956333+00:00',
	fm_version_comment: '',
	guid: 'a5846894-5f34-4fd1-90de-ef55929d475a',
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
const contentTitle = 'PRJ005 — Presentation';

const assets = {

};



const toc = [{
  "value": "Sonic Sight",
  "id": "sonic-sight",
  "level": 2
}, {
  "value": "Description",
  "id": "description",
  "level": 2
}, {
  "value": "Motivation",
  "id": "motivation",
  "level": 2
}, {
  "value": "Business analysis",
  "id": "business-analysis",
  "level": 2
}, {
  "value": "Visual drafts",
  "id": "visual-drafts",
  "level": 3
}, {
  "value": "Stakeholder interviews",
  "id": "stakeholder-interviews",
  "level": 3
}, {
  "value": "Requirements",
  "id": "requirements",
  "level": 3
}, {
  "value": "Business requirements",
  "id": "business-requirements",
  "level": 4
}, {
  "value": "Functional and non-functional requirements",
  "id": "functional-and-non-functional-requirements",
  "level": 4
}, {
  "value": "System modeling",
  "id": "system-modeling",
  "level": 2
}, {
  "value": "System diagrams",
  "id": "system-diagrams",
  "level": 3
}, {
  "value": "Implementation",
  "id": "implementation",
  "level": 3
}, {
  "value": "Future work",
  "id": "future-work",
  "level": 2
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
        id: "prj005--presentation",
        children: "PRJ005 — Presentation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sonic-sight",
      children: "Sonic Sight"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "./img/diagrams_and_images/SonicSightLogo.png",
      alt: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "description",
      children: "Description"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sonic Sight"
      }), " is an innovative application designed to transform music into vibrant visual experiences. It captures the essence of sound and represents it through colors, shapes and motion. Thus it is accessible to everyone, including individuals with hearing difficulties because of the unique way to perceive and interact with music. The app connects two different factors - hearing and seeing, which makes it perfect not only for music enthusiasts but also for educators and basically anyone looking for a fresh way to experience sound. With a user-friendly interface and customizable visuals, it is an intuitive tool for exploring the beauty of music."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "motivation",
      children: "Motivation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Music is a universal language, but not everyone experiences it in the same way. With this app, the aim is to make music more inclusive by providing a way to visualize sound for those who cannot hear it. It is not only about breaking barriers but also about proving that music can be felt, seen and shared across all senses which can make it easier for education as a valuable tool. Students can grasp concepts more effectively by seeing what they might miss through hearing alone. Ultimately, it is about bridging gaps, inspiring creativity and making music accessible to everyone."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "business-analysis",
      children: "Business analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "There are existing tools that offer real-time audio visualization and analysis to enhance music education. These tools provide functionalities that align with the concept of this presenting application, however, there is no application so far that was intended and visualized like the one proposed in this documentation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Here are three similar and notable examples:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sing&See"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sing&See is software that provides visual feedback of the singing voice, including pitch, dynamics and timbre. It helps singers and teachers identify areas for improvement by displaying real-time pitch graphs and other vocal parameters."
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "./img/diagrams_and_images/sing_and_see.png",
      alt: ""
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Singing carrots' vocal pitch monitor"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This online tool offers real-time pitch detection and visualization. It displays the pitch of the user's voice on a musical scale."
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "./img/diagrams_and_images/singing_carrots_pitch_monitor.png",
      alt: ""
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Seeing music by Jay Alan Zimmerman"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An interactive tool that visualizes music by turning sounds into dynamic visualizations. Users can sing or play sounds and the tool generates corresponding visual patterns, which can aid in understanding musical structures and dynamics."
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "./img/diagrams_and_images/seeing_music_similar_app.png",
      alt: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "visual-drafts",
      children: "Visual drafts"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "./img/diagrams_and_images/1731332459878.jpg",
      alt: ""
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "./img/diagrams_and_images/visual_draft.png",
      alt: ""
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "./img/diagrams_and_images/main_flow.png",
      alt: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stakeholder-interviews",
      children: "Stakeholder interviews"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This section provides questions and answers as qualitative insights from\nstakeholders that can validate or refine the project’s requirements.\nBased on these requirements the objective of this project was adjusted\nwhich ensures the project aligns with real-world needs and expectations."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two participants took part in the interview:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Marta"
        }), " - around 60 years old, an experienced violin teacher"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Petra"
        }), " - 28 years old, a younger violin teacher with better\nunderstanding of modern technologies"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These are the following questions and answers:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: Do you use any technological tools in teaching violin? If yes, which ones? If not, why not?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Marta:"
        }), " I don’t use any technology in my teaching. I’ve always\nrelied on traditional methods like demonstrations, sheet music and\ndirect feedback. I think technology might complicate things for both\nme and my students."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Petra:"
        }), " Yes, I use metronome apps, digital tuners, and occasionally\nvideo recordings for feedback. I find these tools helpful in making\nlessons more interactive and personalized."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: Do you think it would be appropriate or necessary to include technology in violin teaching?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Marta:"
        }), " It might be appropriate for younger teachers or students,\nbut for someone like me, I’m not sure how much value it would add. I\nprefer face-to-face interactions, which are crucial for this art."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Petra:"
        }), " Absolutely, technology has so much potential to enhance\nlearning. It can provide visual and auditory aids that are hard to\nreplicate manually. But I must add that individual face-to-face\ninteractions are crucial - without it, I think, it would be impossible\nto teach and learn."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: Do you have access to a computer?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Marta:"
        }), " Yes, I have a computer at home, but teachers in (music)\nschool don’t have computers since there is no need."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Petra:"
        }), " No. I mean, yes. I have my own personal laptop but in\nschool we don’t have access to one. But if we want to, we can use our\nown."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: How often does it happen that a student does not understand what you’re trying to explain unless you show multiple examples and practical demonstrations?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Marta:"
        }), " Quite often, especially with beginners. I need to repeat\nexplanations and demonstrate several times until they grasp the\nconcept."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Petra:"
        }), " It depends on the student, but yes, practical\ndemonstrations are crucial. Visual aids can often clarify what words\ncannot."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: (After explaining the app's functionality and its role in teaching) Do you think this app would help you in your teaching?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Marta:"
        }), " It sounds interesting, especially if it can visually\nrepresent sound and techniques. It might help some students better\nunderstand the nuances. But for me it would be, I think, very\ndifficult to understand and use when I teach."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Petra:"
        }), " Yes, I think it would be a fantastic addition! It could\nmake lessons more engaging and help students practice independently\nwith guidance."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6: Do you think such an app could be integrated into the teaching process in general?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Marta:"
        }), " It could work as a supplementary tool, but I would still\nfocus on personal interaction and traditional methods since not\neveryone has access to a computer or they are my age and it could be\ndifficult for them to learn how to use it and incorporate it into the\nlessons."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Petra:"
        }), " Definitely! It could even become a core part of the\nlearning experience, especially for younger students. It can also\nbecome a useful tool in capturing their attention, because some\nstudents are so attached to their phones and I think it is sad. Then\nthey can’t detach easily and I think that prevents them from truly\nfeeling the music."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7: What do you like about this app?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Marta:"
        }), " I like the idea of visualizing sound. It’s unique and could\nhelp students, especially the new generations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Petra:"
        }), " I love the interactive and visual aspects and the potential\nto give students instant feedback on their playing. And of course, I\nlike the purpose as I said in the previous question."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "(Author's note: The interview was conducted in Slovak and was translated into English for the purposes of this documentation.)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirements",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Creating a new application involves specifying clear and well-defined requirements to ensure the success of a project. These requirements are typically divided into categories like business requirements, functional requirements and non-functional requirements. Within this project requirements for each category were defined to contribute to a better development phase and overall meet the business objectives."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "business-requirements",
      children: "Business requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Business requirements define the high-level objectives and goals that the application should achieve from a business perspective. Such requirements serve as the foundation for the entire project and for this project the business requirements are defined as following, because they are needed to ensure that the system meets user needs and also aligns with legal and market demands in terms of music education."
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "./img/diagrams_and_images/Business_requirements.png",
      alt: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "functional-and-non-functional-requirements",
      children: "Functional and non-functional requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Functional requirements specify the features and functionalities that the application must possess to meet the business requirements mentioned above. On the other hand, non-functional requirements define the criteria that measure the performance, usability, reliability and security of the application. Both of these requirements are specified in more detail in the following diagram."
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "./img/diagrams_and_images/Requirements.png",
      alt: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "system-modeling",
      children: "System modeling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After the requirement specification, the software development phase follows by modeling the system by providing a visual representation of the architecture, processes and interactions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "system-diagrams",
      children: "System diagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "First to mention are use case diagrams. These diagrams provide a high-level overview of the functionality from the user’s perspective. Since this application is intended for 3 roles which are Administrator, Teacher and Student, three use case diagrams are provided to specify use cases for each role separately."
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "./img/diagrams_and_images/Use_cases_admin.png",
      alt: ""
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "./img/diagrams_and_images/Use_cases_teacher.png",
      alt: ""
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "./img/diagrams_and_images/Use_cases_student.png",
      alt: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For the main usage of this system, the activity diagram was designed to show the main purpose of this system/application. It shows what should be the main control flow of the utilization when used during a lesson."
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "./img/diagrams_and_images/Activity_diagram.png",
      alt: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Finally, the component diagram provides a structural view of the system by showing its various components. So far the components are defined as general as possible since this application should not be dependent on hardware."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "(Author's note: For the initial experiments a computer was chosen as the main device since it meets the specification displayed in the component diagram.)"
      })
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "./img/diagrams_and_images/Component_diagram.png",
      alt: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementation",
      children: "Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "As mentioned before, this application is a real-time audio visualization tool that uses the audio processing and visualizing libraries. It captures audio input, processes it to estimate pitch and visually represents the pitch on a simulated sheet music interface."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For the initial experiment, programming language Python was chosen. The entire logic is so far within one python file that, when executed, it starts the whole app."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Libraries used:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PyAudio"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NumPy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Librosa"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pygame"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Main features:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "frequency mapping - converting frequency values to y-coordinates for simulation of moving visualization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pitch smoothing - appling a moving average filter to smooth the pitch values"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.blockquote, {
      children: "\n"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "real-time display - continuously updating the graphical interface to show the pitch changes in real-time"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "./img/diagrams_and_images/app_example.png",
      alt: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "future-work",
      children: "Future work"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In the future, the application will be enhanced with several additional features. User accounts will be introduced which then allows visualizations to be saved, progress to be tracked and lessons to be shared and thus creating a collaborative community. A significant focus will be placed on incorporating AI to improve the detection and identification of musical instruments, which can then provide more detailed and accurate visualizations that could help in the educational process. Additionally, visualization capabilities will be enhanced with more sophisticated representations of audio data and the application's performance will be optimized for better scalability and efficiency. These improvements will make the application more interactive, insightful and user-friendly."
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