import classNames from "classnames";

export const combineClassNames = (field, errors, touched, baseClassNames) =>
  classNames(baseClassNames, {
    "is-success": field.value || (!errors[field.name] && touched[field.name]),
    "is-invalid": errors[field.name] && touched[field.name]
  });
