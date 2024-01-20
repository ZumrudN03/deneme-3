import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { SeacrhContext } from "../../Context/search";

function AddPage() {
  const [card, setCard] = useState([]);
  const [sortBt, setsortBt] = useState(null);
  const { search, handleSearch } = useContext(SeacrhContext);

  function getFetch() {
    fetch("http://localhost:3100/")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }
  useEffect(() => {
    getFetch();
  }, []);

  function postMethod(val) {
    fetch("http://localhost:3100/", {
      method: "POST",
      body: JSON.stringify(val),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => getFetch());
  }

  function deleteMethod(id) {
    fetch("http://localhost:3100/" + id, { method: "DELETE" }).then(() =>
      getFetch()
    );
  }

  return (
    <>
      <Helmet>
        <title>Add Page</title>
      </Helmet>
      <div className="formik">
        <Formik
          initialValues={{ title: "", price: "" }}
          validationSchema={Yup.object({
            title: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            price: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              postMethod(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <label htmlFor="title">Title</label>
            <Field name="title" type="text" />
            <ErrorMessage name="title" />

            <label htmlFor="price">Price</label>
            <Field name="price" type="text" />
            <ErrorMessage name="price" />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
      <div className="table">
        <input
          type="text"
          placeholder="serach..."
          onChange={(e) => handleSearch(e)}
        />
        <div>
          <button onClick={() => setsortBt({ field: "title", asc: true })}>
            A-Z
          </button>
          <button onClick={() => setsortBt({ field: "title", asc: false })}>
            Z-A
          </button>
          <button onClick={()=>setsortBt(null)}>Default</button>
          <button onClick={() => setsortBt({ field: "price", asc: true })}>
            up
          </button>
          <button onClick={() => setsortBt({ field: "price", asc: false })}>
            down
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {[...card]
              .sort((a, b) => {
                if (!sortBt) {
                  return 0;
                } else if (sortBt.asc) {
                  return a[sortBt.field] > b[sortBt.field]
                    ? 1
                    : b[sortBt.field] > a[sortBt.field]
                    ? -1
                    : 0;
                } else if (sortBt.asc === false) {
                  return a[sortBt.field] > b[sortBt.field]
                    ? -1
                    : b[sortBt.field] > a[sortBt.field]
                    ? 1
                    : 0;
                }
              })

              .filter((x) =>
                x.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((x) => (
                <tr>
                  <td>{x.title}</td>
                  <td>{x.price}</td>
                  <td onClick={() => deleteMethod(x._id)}>delete</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AddPage;
