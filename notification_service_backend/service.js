let data = [];

function getAll() {
  return { notifications: data };
}

function markRead(id) {
  data = data.map(item => {
    if (item.id === id) {
      item.isRead = true;
    }
    return item;
  });
}

function add(body) {
  const newItem = {
    id: Date.now().toString(),
    type: body.type,
    message: body.message,
    timestamp: new Date(),
    isRead: false
  };

  data.push(newItem);
}

module.exports = {
  getAll,
  markRead,
  add
};