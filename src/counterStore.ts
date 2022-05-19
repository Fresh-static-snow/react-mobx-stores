import {makeObservable, makeAutoObservable} from 'mobx'
import { action, observable } from "mobx";


export class CounterStore {
  constructor(){
    makeAutoObservable(this)
  }
  
  @observable
  value: number = 0;

  @action
  increment() {
    this.value += 1;
    console.log(this.value)
  }

  @action
  decrement() {
    this.value = this.value - 1;
    console.log(this.value)
  }
}