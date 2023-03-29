import EntscheidPageBase from "../EntscheidPageBase";
import EntscheidSideMenu from "./EntscheidSideMenu";
import HilflosigkeitTab from "./tabs/HilflosigkeitTab";
import EntscheidRibbon from "./EntscheidRibbon";
import EntscheidTabBar from "./EntscheidTabBar";
import SendungenGrid from "../../sendungen/grid/SendungenGrid";
import FreitexteTab from "./tabs/FreitexteTab";
import helpers from "../../../helpers/HelperObject";
import constants from "../../../helpers/Constants";
import VisierenTab from "./tabs/VisierenTab";
import pageBase from "../../../base/PageBase";
import DurchfuhrungsstellenTab from "./tabs/DurchfuhrungsstellenTab";
import VersicherungenTab from "./tabs/VersicherungenTab";
import DetailWindowHeader from "../../../base/DetailWindowHeader";

class EntscheidDetail extends EntscheidPageBase {
  constructor() {
    const detailFormCSS = `${constants.CSS_ACTIVE_FORM} [akid='EntscheidDetailBasisDatenForm']`;
    super(detailFormCSS);
    this.windowHeader = new DetailWindowHeader();
    this.sideMenu = new EntscheidSideMenu();
    this.tabBar = new EntscheidTabBar();
    this.ribbonMenu = new EntscheidRibbon();
    this.hilflosigkeitTab = new HilflosigkeitTab();
    this.durchfuhrungsstellenTab = new DurchfuhrungsstellenTab();
    this.versicherungenTab = new VersicherungenTab();
    this.freitexteTab = new FreitexteTab();
    this.visierenTab = new VisierenTab();
    this.sendungenGrid = new SendungenGrid(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidDetailWindow'],[akid='EntscheidDetailBasisFrame'] [akid='eSendungQueryVPContextB']`);
    super.elements = {
      ...this.elements,
      detailForm: () => cy.get(detailFormCSS)
    };
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    this.elements.detailForm().should("be.visible", 10000);
    return this;
  }

  verifyValuesBulk(data) {
    if (data.arbeitslisteTxt) {
      this.checkArbeitslisteTxt(data.arbeitslisteTxt);
    }
    if (data.bearbeiterDropdown === "username") {
      this.checkBearbeiterDropdownReadonlyValue(Cypress.env("username"));
    } else if (data.bearbeiterDropdown) {
      this.checkBearbeiterDropdownReadonlyValue(data.bearbeiterDropdown);
    }
    if (data.leistungsgruppeDropdown) {
      this.checkLeistungsgruppeDropdown(data.leistungsgruppeDropdown);
    }
    if (data.leistungscodeDropdown) {
      this.checkLeistungscodeDropdown(data.leistungscodeDropdown);
    }
    if (data.entscheidDropdown) {
      this.checkEntscheidDropdown(data.entscheidDropdown);
    }
    if (data.supertextDropdown) {
      this.checkSupertextDropdown(data.supertextDropdown);
    }
    if (data.gesuchDropdown) {
      this.checkGesuchDropdown(data.gesuchDropdown);
    }
    if (data.ereignisDropdown) {
      this.checkEreignisDropdown(data.ereignisDropdown);
    }
    if (data.bereichDropdown) {
      this.checkBereichDropdown(data.bereichDropdown);
    }
    return this;
  }

  fillInFieldsBulk(data) {
    if (data.leistungsgruppeDropdown) {
      this.checkLeistungsgruppeDropdown(data.leistungsgruppeDropdown());
    }
    if (data.leistungscodeDropdown) {
      this.checkLeistungscodeDropdown(data.leistungscodeDropdown);
    }
    if (data.entscheidDropdown) {
      this.selectEntscheidDropdown(data.entscheidDropdown);
    }
    if (data.supertextDropdown) {
      this.selectSupertextDropdown(data.supertextDropdown);
    }
    if (data.entscheidtypDropdown) {
      this.selectEntscheidtypDropdown(data.entscheidtypDropdown);
    }
    if (data.gebrechenDropdown) {
      this.selectGebrechenDropdown(data.gebrechenDropdown);
    }
    if (data.funktausfallDropdown) {
      this.selectFunktausfallDropdown(data.funktausfallDropdown);
    }
    if (data.beginnDate === "today") {
      this.setBeginnDate(helpers.date.getCurrentDate());
    }
    return this;
  }

}

export default EntscheidDetail;
