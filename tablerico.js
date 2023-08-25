function library () {
class Table {
  constructor(init) {
    this.init = init;
  }

  createHeader(data) {
    let buka = "<thead>";
    let tutup = "</thead>";
    data.forEach((dt) => {
      buka += `<th>${dt}</th>`;
      console.log(dt);
    });

    return buka + tutup;
  }

  createBody(data) {
    let buka = "<tbody>";
    let tutup = "</tbody>";

    data.forEach((dt) => {
      buka += `
          <tr>
            <td>${dt[0]}</td>
            <td>${dt[1]}</td>
          </tr>
        `;
    });

    return buka + tutup;
  }

  render(element) {
    let table =
      "<table class='table table-hover'>" +
      this.createHeader(this.init.kolom) +
      this.createBody(this.init.data) +
      "</table>";
    element.innerHTML = table;
  }
}
const table = new Table({
  kolom: ["Name", "Email"],
  data: [
    ["Rico", "rico.202@gmail.com"],
    ["Yan", "Yan@yahoo.co.id"],
    ["Amboro", "Amboro@yahoo.co.id"]
  ]
});
const app = document.getElementById("app");
table.render(app);
}
export {library};