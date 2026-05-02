const service = require("./service");

function getAll(req, res) {
  const data = service.getAll();
  res.json(data);
}

function markRead(req, res) {
  const id = req.params.id;
  service.markRead(id);
  res.json({ msg: "updated" });
}

function addNotification(req, res) {
  const body = req.body;
  service.add(body);
  res.json({ msg: "added" });
}

module.exports = {
  getAll,
  markRead,
  addNotification
};