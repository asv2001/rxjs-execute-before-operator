import { Observable, Subscriber, Subscription } from "rxjs";

export type ActionCallback = () => void;

export function executeBefore(action: ActionCallback) {
  return <T>(source: Observable<T>) => {
    return new Observable<T>((observer: Subscriber<T>): Subscription => {
      action();
      return source.subscribe(observer);
    });
  };
}
