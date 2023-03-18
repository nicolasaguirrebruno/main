import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";
import { MyTextInput } from "../components/MyTextInput";
import { useAuthStore } from "../../hooks";
import { Navigate, useNavigate } from "react-router-dom";
import { ChalesRoutes } from "../../chales/routes/ChalesRoutes";

const loginFormFields = {
  loginEmail: "",
  loginPassword: "",
};

export const LoginPage = () => {
  const { startLogin, status, errorMessage } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (status == "authenticated") {
      navigate("/");
    }
  }, [status]);

  return (
    <section className="login">
      <div className="login__form">
        <h1 className="login__heading">Ingresar</h1>
        {/* <hr className="login__hr" /> */}

        <Formik
          initialValues={loginFormFields}
          onSubmit={({ loginEmail, loginPassword }) => {
            startLogin({
              email: loginEmail,
              password: loginPassword,
            });
          }}
          validationSchema={Yup.object({
            loginEmail: Yup.string()
              .email("El formato del mail no es valido")
              .required("El campo email es obligatorio"),
            loginPassword: Yup.string().required(
              "El campo contraseña es obligatorio"
            ),
          })}
        >
          {({ handleReset }) => (
            <Form>
              <MyTextInput
                placeholder="juanperez@gmail.com"
                label="Email"
                name="loginEmail"
              />

              <MyTextInput
                placeholder=""
                label="Contraseña"
                name="loginPassword"
                type="Password"
              />

              <button type="submit" className="login__button">
                Ingresar
              </button>

              {errorMessage ? (
                <span className="login__error">{errorMessage}</span>
              ) : (
                ""
              )}

              <button
                type="button"
                onClick={handleReset}
                className="login__button"
              >
                Limpiar campos
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="login__images">
        <img className="login__img img__1" src="/src/img/login-1.jpeg" alt="" />
        <img
          className="login__img  img__2"
          src="/src/img/login-2.jpeg"
          alt=""
        />

        <img
          className="login__img  img__3"
          src="/src/img/login-3.jpeg"
          alt=""
        />

        <img
          className="login__img  img__4"
          src="/src/img/login-4.jpeg"
          alt=""
        />

        <img
          className="login__img  img__5"
          src="/src/img/login-5.jpeg"
          alt=""
        />

        <img
          className="login__img  img__6"
          src="/src/img/login-6.jpeg"
          alt=""
        />
      </div>
    </section>
  );
};
