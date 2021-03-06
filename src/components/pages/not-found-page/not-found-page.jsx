import React from "react";
import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";


const NotFoundPage = () => {
  return (
    <div className="page page--favorites-empty">
      <Header />

      <div className="page page--favorites-empty">
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Not found</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">404 Not Found.</b>
              </div>
            </section>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default NotFoundPage;
