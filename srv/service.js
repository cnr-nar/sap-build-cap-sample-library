module.exports = (srv) => {
  srv.on("toInteger", (req) => {
    const { value } = req.data;
    return { value: parseInt(value) };
  });

  srv.on("toNumber", (req) => {
    const { value } = req.data;
    return { value: parseFloat(value) };
  });

  srv.on("toStr", (req) => {
    const { value } = req.data;
    return { value: value.toString() };
  });

  srv.on("addQuotes", (req) => {
    const { value } = req.data;
    return { value: "'" + value + "'" };
  });

  srv.on("listToString", (req) => {
    let values = req.data.responseArray;
    let resultList = [];
    let field = req.data.field;
    if (values) {
      for (let i = 0; i < values.length; i++) {
        resultList.push(values[i][field]);
      }
    }

    return { value: resultList.toString() };
  });

  srv.on("getListTodos", () => {
    return {
      responseArray: [
        {
          id: 1,
          completed: false,
          title: "delectus aut autem",
          userId: 1,
        },
        {
          id: 2,
          completed: false,
          title: "quis ut nam facilis et officia qui",
          userId: 1,
        },
      ],
    };
  });
};
