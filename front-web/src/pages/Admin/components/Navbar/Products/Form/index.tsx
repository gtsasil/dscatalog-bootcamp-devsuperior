import React from "react";
import BaseForm from "../../BaseForm";
import "./style.scss";

const Form = () => {
  return (
    <BaseForm title="register product">
      <div className="row">
        <div className="col-6">
          <input type="text" className="form-control" />
        </div>
      </div>
    </BaseForm>
  );
};

export default Form;
