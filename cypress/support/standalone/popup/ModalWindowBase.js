import PageBase from "../../base/PageBase";
import constants from "../../helpers/Constants";

class ModalWindowBase {
  static css = "[class='dhxwin_active'][modalwindow='true']";

  constructor() {
    this.elements = {
      modalWindow : () => cy.get(ModalWindowBase.css, {timeout:constants.DEFAULT_TIMEOUT}),
      okBtn: () => this.elements.modalWindow().find('[class="dhx_toolbar_btn dhxtoolbar_btn_def"][title="Ok"]')
    };
  }

  waitForLoaded() {
    this.elements.modalWindow().should("be.visible");
    return this;
  }

  clickOkBtn() {
    this.waitForLoaded();
    this.elements.okBtn().should("be.visible").click();
    return this;
  }
}

export default ModalWindowBase;