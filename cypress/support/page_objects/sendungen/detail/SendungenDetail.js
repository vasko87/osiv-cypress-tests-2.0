import SendungenRibbon from "./SendungenRibbon";
import SendungenAbschliessenPopup from "../popup/SendungenAbschliessenPopup";
import SendungenSideMenu from "./SendungenSideMenu";
import constants from "../../../helpers/Constants";
import SendungenPageBase from "../SendungenPageBase";

class SendungenDetail extends SendungenPageBase {
  constructor() {
    const detailFormCSS = `${constants.CSS_ACTIVE_FORM} [akid='SendungHauptdatenForm']`;
    super(detailFormCSS);
    this.ribbonMenu = new SendungenRibbon();
    this.sideMenu = new SendungenSideMenu();
    this.sendungenAbschliessenPopup = new SendungenAbschliessenPopup();
    this.elements = {
      ...this.elements,
      detailForm: () => cy.get(detailFormCSS)
    };
  }

  waitForLoaded() {
    this.elements.detailForm().should("be.visible", constants.DEFAULT_TIMEOUT);
  }
}

export default SendungenDetail;
