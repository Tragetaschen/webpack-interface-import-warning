import { Foo, Bar } from './src';

function metadata() : any {}

export class Main {
    @metadata() public prop: Bar;
}

new Foo();
