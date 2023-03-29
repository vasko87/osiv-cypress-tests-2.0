import SendungenGrid from "../../sendungen/grid/SendungenGrid";
import constants from "../../../helpers/Constants";
import EntscheidGrid from "../../entscheid/grid/EntscheidGrid";

class VersicherteTabBar {
  constructor() {
    this.elements = {
      detailsTab: () => cy.get("[class$='tab'][akid='SimpleSwatTabbar-Details der Versicherten Person'],[class$='tab_actv'][akid='SimpleSwatTabbar-Details der Versicherten Person']"),
      entscheideTab: () => cy.get("[class$='tab'][akid='SimpleSwatTabbar-Entscheide'],[class$='tab_actv'][akid='SimpleSwatTabbar-Entscheide']"),
      sendungenTab: () => cy.get("[class$='tab'][akid='SimpleSwatTabbar-Sendungen'],[class$='tab_actv'][akid='SimpleSwatTabbar-Sendungen']")
    };
  }

  navigateToDetailsTab() {
    this.elements.detailsTab().should("be.visible").click();
    return this;
  }

  navigateToEntscheideTab() {
    this.elements.entscheideTab().click();
    return new EntscheidGrid(`${constants.CSS_ACTIVE_FORM} [akid='sStammDetailWindow'] [akid='EntscheidQueryStammGrid']`);
  }

  navigateToSendungenTab() {
    this.elements.sendungenTab().click();
    return new SendungenGrid(`${constants.CSS_ACTIVE_FORM} [akid='sStammDetailWindow'] [akid='eSendungQueryVPContextB']`);
  }
}

export default VersicherteTabBar;
