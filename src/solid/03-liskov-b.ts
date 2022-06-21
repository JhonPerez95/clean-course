export abstract class Vehicle {
  abstract getNumberOfSeat(): number
}

export class Tesla extends Vehicle {
  getNumberOfSeat(): number {
    throw new Error('Method not implemented.')
  }
  constructor(private numberOfSeats: number) {
    super()
  }

  getNumberOfTeslaSeats() {
    return this.numberOfSeats
  }
}

export class Audi extends Vehicle {
  getNumberOfSeat(): number {
    throw new Error('Method not implemented.')
  }
  constructor(private numberOfSeats: number) {
    super()
  }

  getNumberOfAudiSeats() {
    return this.numberOfSeats
  }
}

export class Toyota extends Vehicle {
  getNumberOfSeat(): number {
    throw new Error('Method not implemented.')
  }
  constructor(private numberOfSeats: number) {
    super()
  }

  getNumberOfToyotaSeats() {
    return this.numberOfSeats
  }
}

export class Honda extends Vehicle {
  getNumberOfSeat(): number {
    throw new Error('Method not implemented.')
  }
  constructor(private numberOfSeats: number) {
    super()
  }

  getNumberOfHondaSeats() {
    return this.numberOfSeats
  }
}

export class Volvo extends Vehicle {
  getNumberOfSeat(): number {
    throw new Error('Method not implemented.')
  }
  constructor(private numberOfSeats: number) {
    super()
  }

  getNumberOfVolvoSeats() {
    return this.numberOfSeats
  }
}
