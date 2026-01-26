interface Vechile {
  model: string;
  wheels: number;
  manufactureYear: Date;
  isElectric: boolean;
  brand: string;
  horsepower: number;
}

function createVechile(vechile: Vechile) {
  console.log(`model: ${vechile.model},
     wheels: ${vechile.wheels},
     manufacture year: ${vechile.manufactureYear},
     is electric: ${vechile.isElectric},
     brand: ${vechile.brand},
     horsepower: ${vechile.horsepower}.`);
}

createVechile({
  model: "Model S",
  wheels: 4,
  manufactureYear: new Date("2020-01-01"),
  isElectric: true,
  brand: "Tesla",
  horsepower: 670,
});
