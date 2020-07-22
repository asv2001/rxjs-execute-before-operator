import { MonoTypeOperatorFunction, Observable, Subscriber, Subscription } from "rxjs";

export type ActionCallback = () => void;

export function executeBefore<T>(action: ActionCallback): MonoTypeOperatorFunction<T> {
  return <T>(source: Observable<T>) => {
    return new Observable<T>((observer: Subscriber<T>): Subscription => {
      action();
      return source.subscribe(observer);
    });
  };
}
