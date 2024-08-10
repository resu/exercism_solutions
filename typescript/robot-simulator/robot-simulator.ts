export class InvalidInputError extends Error {
  constructor(message: string) {
    super()
    this.message = message || 'Invalid Input'
  }
}

type Direction = 'north' | 'east' | 'south' | 'west'
type Coordinates = [number, number]

export class Robot {
  private _bearing: Direction = 'north'
  private _coordinates: Coordinates = [0, 0]

  get bearing(): Direction {
    return this._bearing
  }

  get coordinates(): Coordinates {
    return [...this._coordinates]
  }

  place({ x, y, direction }: { x: number; y: number; direction: string }): void {
    if (!this.isValidDirection(direction)) {
      throw new InvalidInputError('Invalid direction')
    }
    this._bearing = direction as Direction
    this._coordinates = [x, y]
  }

  evaluate(instructions: string): void {
    for (const instruction of instructions) {
      switch (instruction) {
        case 'R':
          this.turnRight()
          break
        case 'L':
          this.turnLeft()
          break
        case 'A':
          this.advance()
          break
        default:
          throw new InvalidInputError('Invalid instruction')
      }
    }
  }

  private isValidDirection(direction: string): direction is Direction {
    return ['north', 'east', 'south', 'west'].includes(direction)
  }

  private turnRight(): void {
    const directions: Direction[] = ['north', 'east', 'south', 'west']
    const currentIndex = directions.indexOf(this._bearing)
    this._bearing = directions[(currentIndex + 1) % 4]
  }

  private turnLeft(): void {
    const directions: Direction[] = ['north', 'east', 'south', 'west']
    const currentIndex = directions.indexOf(this._bearing)
    this._bearing = directions[(currentIndex - 1 + 4) % 4]
  }

  private advance(): void {
    switch (this._bearing) {
      case 'north':
        this._coordinates[1]++
        break
      case 'east':
        this._coordinates[0]++
        break
      case 'south':
        this._coordinates[1]--
        break
      case 'west':
        this._coordinates[0]--
        break
    }
  }
}