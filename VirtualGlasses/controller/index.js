let glassService = new GlassService();

const domId = (id) => document.getElementById(id);

let getGlassList = glassService.getList().then((response) => {
  renderGlassList(response.data);
});
