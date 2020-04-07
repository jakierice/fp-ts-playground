import { Eq, eqNumber } from "fp-ts/lib/Eq";

function elem<A>(E: Eq<A>): (a: A, as: Array<A>) => boolean {
  return (a, as) => as.some(item => E.equals(item, a));
}

elem(eqNumber)(1, [1, 2, 3]);
