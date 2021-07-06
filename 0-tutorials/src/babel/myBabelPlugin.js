module.exports = function myBabelPlugin() {
  return {
    visitor: {
      Identifier(path) {
        const name = path.node.name;

        console.log("Identifier() name", name);

        path.node.name = name.split("").reverse().join("");
      },
      VariableDeclaration(path) {
        console.log("VariableDeclaration() kind", path.node.kind);

        if (path.node.kind === "const") {
          path.node.kind = "var";
        }
      },
    },
  };
};
