import React from "react";

import "./Footer.css";

import i18n from "../../i18n";
import { withTranslation } from "react-i18next";

import { withRouter } from "react-router-dom";

class Footer extends React.Component {
  render() {
    const { t } = this.props;

    return (
      <footer>
        <div>{t("BRID Systems Company Limited")}</div>
        <div>{t("Email")}: sales@bridsystems.com</div>
        <div>{t("Tel")}: +66 95 294 5693, +66 02 271 4362-3</div>
        <div>
          {t(
            "Address: 40/30 Soi Intamara 23, Sudhisarn Road., Samsennai, Phayathai, Bangkok Thailand 10400"
          )}
        </div>
      </footer>
    );
  }
}

export default withTranslation()(withRouter(Footer));
