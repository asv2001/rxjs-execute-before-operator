The `rxjs-execute-before-operator` executes a callback before other operators. You can use it like follows:

```typescript
import { of } from "rxjs";
import { executeBefore } from "rxjs-execute-before-operator";
import { timeout } from "rxjs/operators";

of(true).pipe(timeout(5000), executeBefore(() => {
	console.log("I will be executed first");
})).subscribe(() => {
    console.log("I will be executed afterwards");
});
```
