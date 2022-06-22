;(() => {
  interface Bird {
    eat(): void
  }

  interface FlyBird {
    fly(): void
  }
  interface RunningBird {
    run(): void
  }

  interface SwimmerBird {
    swing(): void
  }

  class Tucan implements Bird, FlyBird {
    public fly() {}
    public eat() {}
  }

  class Hummingbird implements Bird, FlyBird {
    public fly() {}
    public eat() {}
  }

  class Ostrich implements Bird, RunningBird {
    public eat() {}
    public run() {}
  }

  class Penguin implements Bird, SwimmerBird {
    public eat() {}
    public swing() {}
  }
})()
