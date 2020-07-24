import { MonoTypeOperatorFunction, Observable, Subscriber, Subscription } from "rxjs";

export type ActionCallback = () => void;

export function executeBefore<T>(action: ActionCallback): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>) =>
    new Observable<T>(
      (observer: Subscriber<T>): Subscription => {
        action();
        return source.subscribe(observer);
      }
    );
}
