import pages from "../../support/base/OsivPageObject";
import flows from "../../support/base/OsivFlowsObject";
import Utility from "../../support/Utility";

const testData = {
  vpName      : "Crood Eep",
  auftragAn   : "BatchSH",
  warningPart1: "Der Auftrag wird an BatchSH BatchSH erteilt.",
  warningPart2: "Wollen Sie fortfahren? (OSCEIN:3)",
  arbeitsliste: "Warten"
};

describe(`C45772: Create Eingliederung from vP Eingliederungen; 
  TestRail: https://osiv.testrail.net/index.php?/cases/view/45772`, {failFast: {enabled: true}}, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();
  });

  it(`Step 1: Open VP`, () => {
    flows.versicherte.step_navigateVP_searchByVPName_openVP(testData.vpName);
  });

  it(`Step 2: Open Eingliederungen tab; Click Neu button`, () => {
    pages.versicherte.detail.tabBar.navigateToEingliederungenTab();
    pages.versicherte.detail.ribbonMenu.clickNeuBtn();
    pages.eingliederung.neuPopup.waitForLoaded();
  });

  it(`Step 3: Fill in mandatory fields; Add Meldung`, () => {
    pages.eingliederung.neuPopup.selectGesuchDropdownByIndex(1)
         .selectEreignisDropdownByIndex(1)
         .selectAuftragAnDropdownByIndex(1)
         .selectAuftragAnDropdown(testData.auftragAn)
         .setMeldungTextarea("test");
  });

  it(`Step 4: Click OK button;
  Confirm warning : Der Auftrag wird an Gabriel Bieler erteilt. (OSCEIN:3) - name from (Auftrag an) field is taken`, () => {
    pages.modalWindow.clickOkBtn();
    pages.warningPopup.checkWarningContainsText(testData.warningPart1)
         .checkWarningContainsText(testData.warningPart2);
    pages.notification.checkSuccessMessageVisible();
  });

  it(`Step 5: Expected: Auftrag is created and details window opens, new ENT with LC empty and in Warten state is created`, () => {
    pages.eingliederung.detail.waitForLoaded();
    pages.groupedTaskbar.clickContainsVersichertendatenTab();
    pages.versicherte.detail.tabBar.navigateToEntscheideTab()
      .grid.dblClickRowWithText(testData.auftragAn);
    pages.entscheid.detail.waitForLoaded();
    pages.entscheid.detail.basisdatenTabBar.checkArbeitslisteTxt(testData.arbeitsliste);
    Utility.gatherElements({
      lc      : pages.entscheid.detail.basisdatenTabBar.getLeistungscodeDropdownSelectedValue()
    }).then((elements) => {
      expect(elements.lc.text()).to.be.empty;
    });
  });
});
