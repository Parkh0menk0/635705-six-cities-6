import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {fetchFavoriteOffers} from "src/store/api-actions";
import LoadingScreen from "src/components/loading-screen/loading-screen";
import {ActionCreator} from "src/store/action";
import {connect} from "react-redux";
import Header from "src/components/layout/header/header";
import Footer from "src/components/layout/footer/footer";
import PlacesList from "src/components/places/places";
import {AppRoute} from "src/const";

const FavoritesPage = ({favoriteOffers, changeCity, loadFavoriteOffers}) => {

  useEffect(() => {
    if (!favoriteOffers.data) {
      loadFavoriteOffers();
    }
  }, [favoriteOffers]);

  if (favoriteOffers.loading) {
    return (
      <LoadingScreen />
    );
  }

  const cityList = [...new Set(favoriteOffers.map((offer) => offer.city.name))];

  const cardClickHandler = (city) => {
    changeCity(city);
  };

  return (
    <React.Fragment>
      {favoriteOffers.length ? (
        <div className="page">
          <Header />
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {cityList.map((city, i) => (
                    <li
                      key={city + i}
                      className="favorites__locations-items"
                      onClick={() => cardClickHandler(city)}
                    >
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <Link
                            to={AppRoute.MAIN}
                            className="locations__item-link"
                          >
                            <span>{city}</span>
                          </Link>
                        </div>
                      </div>
                      <PlacesList
                        pageType="favorites"
                        offers={favoriteOffers.filter((offer) => offer.city.name === city)}
                      />
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </main>
          <Footer />
        </div>
      ) : (
        ``
      )}
    </React.Fragment>
  );
};

FavoritesPage.propTypes = {
  favoriteOffers: PropTypes.arrayOf(PropTypes.object),
  changeCity: PropTypes.func.isRequired,
  loadFavoriteOffers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  favoriteOffers: state.favoriteOffers,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.incrementCity(city));
  },
  loadFavoriteOffers() {
    dispatch(fetchFavoriteOffers());
  },
});

export {FavoritesPage};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
