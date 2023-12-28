export class UserNotFoundError extends Error {
  constructor() {
    super("Could not find this user");
    this.name = "UserNotFoundError";
  }
}

export class PlantNotFoundError extends Error {
  constructor() {
    super("Could not find this plant");
    this.name = "PlantNotFoundError";
  }
}

export class UserPlantNotFoundError extends Error {
  constructor() {
    super("Could not find this user plant");
    this.name = "UserPlantNotFoundError";
  }
}
