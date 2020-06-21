const EducationExperienceReducer = (state = "", action) => {
  switch (action.type) {
    case "IOWASTATE":
      return action.payload;
    case "PRINCIPAL":
      return action.payload;
    default:
      return state;
  }
};

export default EducationExperienceReducer;
