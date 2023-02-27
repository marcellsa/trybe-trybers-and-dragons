import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  static numberOfInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.numberOfInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.numberOfInstances;
  }

  get energyType() {
    return this._energyType;
  }
}

export default Warrior;