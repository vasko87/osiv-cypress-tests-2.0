import constants from "../../../../helpers/Constants";
import pageBase from "../../../../base/PageBase";

class MetaInfoTab_Ent {
  constructor() {
    this.elements = {
      imPapierkorbCheckbox: () => cy.get("[akid='EntscheidMetaInfoForm-geloescht'] input"),
      loeschtgrundTxt     : () => cy.get("[akid='EntscheidMetaInfoForm-geloeschtgrundbez'] input"),
      geandertAmDate      : () => cy.get("[akid='EntscheidMetaInfoForm-mut_dat'] input"),
      umTime              : () => cy.get("[akid='EntscheidMetaInfoForm-mutzeit'] input")
    };
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    return this;
  }

  checkImPapierkorbCheckboxChecked(isChecked) {
    pageBase.checkElementChecked(this.elements.imPapierkorbCheckbox(), isChecked);
    return this;
  }

  checkLoeschtgrundTxt(value) {
    this.elements.loeschtgrundTxt().should("have.value", value);
    return this;
  }

  checkGeandertAmDate(value) {
    this.elements.geandertAmDate().should("have.value", value);
    return this;
  }

  checkUmTimeContains(value) {
    this.elements.umTime().should("contain.value", value);
    return this;
  }
}

export default MetaInfoTab_Ent;