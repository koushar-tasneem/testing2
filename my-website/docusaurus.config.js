module.exports = {
    title: "Introduction to Puppeteer",
    tagline: "Puppeteer made it easy",
    url: "https://realtime-apps-iap.github.io",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",

    organizationName: "Chromium",
    projectName: "realtime-apps-iap.github.io",
    themeConfig: {
        hideableSidebar: true,
        navbar: {
            style:"primary",
            title: "Puppeteer",
            logo: {
                alt: "Realtime Apps Logo",
                src: "img/pptr.png",
            },
            items: [{
                to: "docs/puppeteer.browser",
                //activeBasePath: "docs",
                label: "API",
                position: "left",
            },
            {
              type: 'docsVersionDropdown',
            },
            {
                to: "docs/CONTRIBUTING",
                //activeBasePath: "docs",
                label: "Contribute",
                position: "left",
            },
            // {
            //     to: "docs/README",
            //     //activeBasePath: "docs",
            //     label: "ReadME",
            //     position: "right",
            // },

            // {
            //     to: "competition",
            //     //activeBasePath: "competition",
            //     label: "Competition",
            //     position: "right",
            // },
            // { to: "blog", label: "Blog", position: "right" },

            {
                // tagName : "link",
                // rel : "icon",
                // src: "img/github.png",
                label: "Github",
                href: "https://github.com/puppeteer/puppeteer",
                position: "right"
                // logo: {
                //   src: "img/pptr.png",
                //   href: "https://github.com/puppeteer/puppeteer"
                // },
                // backgroundimage: 'img/pptr.png',

                // // favicon:"imag/logo.png",
                // position: "right",
              //   html: `
              //   <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
              //     <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" />
              //   </a>
              // `,
            },
            {
              //Renders the html pass-through instead of a simple link
              html: `
                  <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                    <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" />
                  </a>
                `,
            },
            {
              label: "Stack",
              href: "https://stackoverflow.com/questions/tagged/puppeteer",
              position: "right"
            },
            {
              label: "Version 1.0",
              href: "https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md",
              position: "right"
            }
          ],
        },
        // footer: {
        //     style: "dark",
        //     links: [{
        //         title: "Docs",
        //         items: [{
        //             label: "Learning Materials",
        //             to: "docs/puppeteer.puppeteer",
        //         },
        //         {
        //             label: "Puppeteer",
        //             to: "docs/puppeteer.puppeteer",
        //         },
        //         {
        //             label: "Puppeteer",
        //             to: "docs/puppeteer.puppeteer",
        //         },
        //         {
        //             label: "Puppeteer",
        //             to: "docs/puppeteer.puppeteer",
        //         },
        //         {
        //             label: "Puppeteer",
        //             to: "docs/puppeteer.puppeteer",
        //         },
        //         ],
        //     },
        //     {
        //         title: "Competition",
        //         items: [{
        //             label: "Puppeteer",
        //             to: "docs/puppeteer.puppeteer",
        //         },
        //         {
        //             label: "Puppeteer",
        //             to: "docs/puppeteer.puppeteer",
        //         },
        //         {
        //             label: "Puppeteer",
        //             to: "docs/puppeteer.puppeteer",
        //         },
        //         ],
        //     },
        //     {
        //         title: "More",
        //         items: [
        //             // {
        //             //     label: "Blog",
        //             //     to: "blog",
        //             // },
        //             {
        //                 label: "GitHub",
        //                 href: "https://github.com/puppeteer/puppeteer",
        //             },
        //         ],
        //     },
        //     ],
        //     // copyright: `Realtime Apps IAP | Built with ❤️`,
        // },
        gtag: {
            trackingID: "G-WT3D2HSL72",
            // Optional fields.
            anonymizeIP: false, // Should IPs be anonymized?
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // routeBasePath: '/',
                    // Please change this to your repo.
                    //editUrl: "https://github.com/facebook/docusaurus/edit/master/website/",
                    //editUrl: null, // set as null to hide edit option
                },
                // blog: {
                //     showReadingTime: true,
                //     // Please change this to your repo.
                //     //editUrl: "https://github.com/facebook/docusaurus/edit/master/website/blog/",
                //     //editUrl: null, // set as null to hide edit option
                // },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
    stylesheets: [
        "https://fonts.googleapis.com/icon?family=Material+Icons",
    ],
};
