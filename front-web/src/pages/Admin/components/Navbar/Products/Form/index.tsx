import { makeRequest } from "core/utils/request";
import React, { useState } from "react";
import BaseForm from "../../BaseForm";
import "./style.scss";

type FormState = {
  name: string;
  price: string;
  category: string;
  description: string;
};

type FormEvent = React.ChangeEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;

const Form = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    price: "",
    category: "1",
    description: "",
  });

  const handleOnChange = (event: FormEvent) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      ...formData,
      imgUrl:
        "https://static.fnac-static.com/multimedia/Images/PT/NR/33/25/62/6432051/1540-1.jpg",
      categories: [{ id: formData.category }],
    };

    makeRequest({ url: "/products", method: "POST", data: payload }).then(
      () => {
        setFormData({ name: "", category: "", price: "", description: "" });
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <BaseForm title="register product">
        <div className="row">
          <div className="col-6">
            <input
              value={formData.name}
              name="name"
              type="text"
              className="form-control mb-5"
              onChange={handleOnChange}
              placeholder="Product Name"
            />
            <select
              value={formData.category}
              name="category"
              className="form-control mb-5"
              onChange={handleOnChange}
            >
              <option value="1">Livros</option>
              <option value="3">computador</option>
              <option value="2">Eletronicos</option>
            </select>
            <input
              value={formData.price}
              name="price"
              type="text"
              className="form-control"
              onChange={handleOnChange}
              placeholder="Price"
            />
          </div>
          <div className="col-6">
            <textarea
              value={formData.description}
              name="description"
              onChange={handleOnChange}
              className="form-control"
              cols={30}
              rows={10}
            />
          </div>
        </div>
      </BaseForm>
    </form>
  );
};

export default Form;
