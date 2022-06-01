export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62974871b874a600bd545661",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-qxz3irid",
                  apiId: "ec4842f9-a482-417a-ba1d-afeeb428fef8",
                },
                {
                  buildHookId: "629748717896c3022d729bba",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-p6ipsenf",
                  apiId: "33d23cd3-83c9-402e-a072-07aef961a3ae",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/aunumever/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-p6ipsenf.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
