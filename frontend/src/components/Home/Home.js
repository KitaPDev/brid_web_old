import React from "react";
import "./Home.css";

import { Container, Button } from "reactstrap";
import { withTranslation } from "react-i18next";
import { withRouter } from "react-router-dom";

class Home extends React.Component {
  render() {
    const { t } = this.props;

    return (
      <div className="page-content">
        <section>
          <Container>
            <div className="hero">
              <div className="hero-content">
                <div>
                  <h1 className="hero-title">
                    {t("Your One Stop Thai ERP Solution")}
                  </h1>
                  <p className="hero-subtitle">
                    {t(
                      "BRID Systems proudly presents our very own PlanetOne ERP"
                    )}
                  </p>
                  <Button className="btn-green">
                    {t("Let's Get Started!")}
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    );
  }
}

export default withTranslation()(withRouter(Home));
