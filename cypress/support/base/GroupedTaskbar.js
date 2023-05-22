import EntscheidDetail from "../page_objects/entscheid/detail/EntscheidDetail";
import VersicherteDetail from "../page_objects/versicherte/detail/VersicherteDetail";

class GroupedTaskbar {
  constructor() {
    this.elements = {
      groupedTaskbar  : () => cy.get("div[class='vue-taskbar-container']"),
      entscheidHEHETab: () => this.elements.groupedTaskbar().find("[title='Entscheid HE HE']"),
      entscheidTab: () => this.elements.groupedTaskbar().find("[title*='Entscheid']"),
      protocollTab: () => this.elements.groupedTaskbar().find("[title*='Protocoll']"),
      eingliederungTab: () => this.elements.groupedTaskbar().find("[title*='Eingliederung']"),
      gesuchTab: () => this.elements.groupedTaskbar().find("[title*='Gesuch']"),
      versichertendatenTab: () => this.elements.groupedTaskbar().find("[title*='Versichertendaten']")
    };
  }

  clickEntscheidHEHETab() {
    this.elements.entscheidHEHETab().click();
    return this;
  }

  clickContainsEntscheidTab() {
    this.elements.entscheidTab().click();
    return new EntscheidDetail();
  }

  closeContainsEntscheidTab() {
    this.elements.entscheidTab().parent("div[class*='vue-taskbar-item']").find(".vue-close-icon").click();
    return new EntscheidDetail();
  }

  closeContainsProtocollTab() {
    this.elements.protocollTab().parent("div[class*='vue-taskbar-item']").find(".vue-close-icon").click();
    return new EntscheidDetail();
  }

  clickContainsGesuchTab() {
    this.elements.gesuchTab().click();
    return this;
  }

  clickContainsVersichertendatenTab() {
    this.elements.versichertendatenTab().click();
    return new VersicherteDetail();
  }

  clickContainsEingliederungTab() {
    this.elements.eingliederungTab().click();
    return this;
  }
}

export default GroupedTaskbar;
