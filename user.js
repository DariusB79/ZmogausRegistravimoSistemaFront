
fetch("https://localhost:7015/api/PostControllers")
  .then((res) => res.json())
  .then((data) => {
    renderFilterProperties([...new Set(data.map((entry) => entry.user))]);
    renderPropertyCards(data);
    state.properties = data;
  });