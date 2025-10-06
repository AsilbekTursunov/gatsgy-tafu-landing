// gatsby-node.js
const path = require("path")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField, createRedirect } = actions
  createRedirect({
    fromPath: '/',
    toPath: '/en/',
    isPermanent: true,
    redirectInBrowser: true,
  })
  if (node.internal.type === "MarkdownRemark") {
    const fileName = path.basename(node.fileAbsolutePath, ".md") // navbar.en
    const [key, lang] = fileName.split(".") // ["navbar", "en"]

    createNodeField({
      node,
      name: "key",
      value: key, // navbar, banner
    })

    createNodeField({
      node,
      name: "lang",
      value: lang, // en, ru, uz
    })
  }
}
