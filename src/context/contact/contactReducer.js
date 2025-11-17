const reducer = (state, action) => {
  switch (action.type) {
    case "SETDATA":
      return action.payload || state;
    case "ADD":
      const newStateAdd = [...state, action.payload];
      localStorage.setItem("data", JSON.stringify(newStateAdd));
      return newStateAdd;

    case "DELETE":
      const newStateDelete = state.filter(
        (item, index) => item.id !== action.payload
      );
      localStorage.setItem("data", JSON.stringify(newStateDelete));
      return newStateDelete;

    case "EDIT":
      const { id, contact } = action.payload;
      const newStateEdit = state.map((item) =>
        item.id === id ? contact : item
      );
      localStorage.setItem("data", JSON.stringify(newStateEdit));
      return newStateEdit;

    default:
      throw new Error("invalid action");
  }
};
