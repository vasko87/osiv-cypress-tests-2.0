import GridBase from "../../../base/GridBase";
import constants from "../../../helpers/Constants"
import GesucheGridFilter from "./GesucheGridFilter";

class GesucheGrid extends GridBase {
  constructor() {
    super(constants.CSS_OPACITY1);
    this.filter = new GesucheGridFilter();
    super.elements = {
      ...this.elements
    };
  }

  /**
   * Search @value 'Gesuch ID' field of Grid filter
   * open found Gesuch with dblclick()
   * @param value
   * @returns {VersicherteGrid}
   */
  searchAndOpenGesuchID(value) {
    this.filter.searchByGesuchID(value);
    super.dblClickRowNumber(1);
    return this;
  }
}

export default GesucheGrid;
