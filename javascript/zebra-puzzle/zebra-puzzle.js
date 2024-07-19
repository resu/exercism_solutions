//
// This is only a SKELETON file for the 'Zebra Puzzle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ZebraPuzzle {
  constructor() {
    this.solvePuzzle();
  }

  solvePuzzle() {
    this.houses = Array(5).fill(null).map(() => ({}));

    this.houses[0] = { color: 'yellow', nationality: 'Norwegian', drink: 'water', smoke: 'Kools', pet: 'fox' };
    this.houses[1] = { color: 'blue', nationality: 'Ukrainian', drink: 'tea', smoke: 'Chesterfields', pet: 'horse' };
    this.houses[2] = { color: 'red', nationality: 'Englishman', drink: 'Milk', smoke: 'Old Gold', pet: 'snails' };
    this.houses[3] = { color: 'green', nationality: 'Japanese', drink: 'coffee', smoke: 'Parliaments', pet: 'zebra' };
    this.houses[4] = { color: 'ivory', nationality: 'Spaniard', drink: 'orange juice', smoke: 'Lucky Strike', pet: 'dog' };
  }

  waterDrinker() {
    return this.houses.find(house => house.drink === 'water').nationality;
  }

  zebraOwner() {
    return this.houses.find(house => house.pet === 'zebra').nationality;
  }
}