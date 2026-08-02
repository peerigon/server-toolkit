## `parse-port`

- ✅ Zero dependencies
- 🌐 Works in Node, Deno and Bun

Parse and validate a TCP port from a string or number, throwing a `RangeError` for anything outside the valid `0`-`65535` range.

### Basic usage

```ts
import { parsePort } from "@peerigon/server-toolkit/parse-port";

const { PORT } = env;

const port = parsePort(PORT); // throws RangeError if PORT is not a valid port
```

### API Reference

#### `parsePort(value)`

```ts
parsePort(value: string | number): number
```

| Parameter | Type               | Description                |
| --------- | ------------------ | -------------------------- |
| `value`   | `string \| number` | Port to parse and validate |

**Returns:** `number` — the validated port

**Throws:** `RangeError` if `value` is not an integer between `0` and `65535`
