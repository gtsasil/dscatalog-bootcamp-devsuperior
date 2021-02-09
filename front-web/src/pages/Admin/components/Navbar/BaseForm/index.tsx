import React from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";

type Props = {
  title: String;
  children: React.ReactNode;
};

const BaseForm = ({ title, children }: Props) => {
  const history = useHistory();

  const handleCancel = () => {
    history.push("../");
  };
  return (
    <div className="admin-base-form card-base">
      <h1 className="base-form-title">{title}</h1>
      {children}
      <div className="base-form-action">
        <button
          className="btn btn-outline-danger border-radius-10 mr-3"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button className="btn btn-primary border-radius-10 ">Register</button>
      </div>
    </div>
  );
};

export default BaseForm;
