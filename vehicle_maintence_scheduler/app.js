const express = require("express");
const { fetchDepots, fetchVehicles } = require("./api");
const knapsack = require("./scheduler");

const app = express();

app.get("/schedule", async (req, res) => {
  try {
    const depotsData = await fetchDepots();
    const vehiclesData = await fetchVehicles();

    const depots = depotsData.depots;
    const vehicles = vehiclesData.vehicles;

    const results = depots.map((depot) => {
      const maxImpact = knapsack(vehicles, depot.MechanicHours);

      return {
        depotId: depot.ID,
        maxImpact
      };
    });

    res.json(results);

  } catch (err) {
    console.error(err);
    res.status(500).send("Error");
  }
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});