import React from "react";
import classNames from "classnames";
import InputFeedback from "./InputFeedback";

const CheckboxGroup = props => {
  const handleChange = event => {
    const target = event.currentTarget;
    let valueArray = [...props.value] || [];
    if (target.checked) {
      valueArray.push(target.name);
    } else {
      valueArray.splice(valueArray.indexOf(target.name), 1);
    }
    props.onChange(props.id, valueArray);
  };

  const handleBlur = () => {
    props.onBlur(props.id, true);
  };

  const { value, error, touched, label, className, children } = props;

  const classes = classNames(
    "form-control h-100",
    {
      "is-success": value || (!error && touched), // handle prefilled or user-filled
      "is-invalid": !!error && touched
    },
    className
  );

  return (
    <div className="form-group h-100">
      <div className={classes}>
        <label>{label}</label>
        {React.Children.map(children, child => {
          const name = child.props.id;
          return React.cloneElement(child, {
            field: {
              name: name,
              value: value.includes(child.props.id)
            },
            form: {
              values: { name: value.includes(child.props.id) },
              handleChange: handleChange,
              handleBlur: handleBlur,
              errors: { name: undefined },
              touched: { name: false }
            }
          });
        })}
      </div>
      {touched && <InputFeedback error={error} />}
    </div>
  );
};

export default CheckboxGroup;
