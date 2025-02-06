class ManualEntry {
  constructor({ id, designerId, date, description, hours, source }) {
    this.id = id;
    this.designerId = designerId;
    this.date = date;
    this.description = description;
    this.hours = hours;
    this.source = source;
  }
}

module.exports = ManualEntry;