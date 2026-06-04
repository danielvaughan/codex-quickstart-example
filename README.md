# Codex Quickstart Example

This repository is a tiny JavaScript project designed to demonstrate the Codex agent loop on a real filesystem change.

## Try It

Type this task into Codex:

```text
Find the bug in main.js and fix it. Run the tests before and after to confirm the fix.
```

Codex should:

1. Read the files.
2. Run `npm test` and observe the failing test.
3. Trace the bug in `main.js`.
4. Apply a small fix.
5. Run `npm test` again and observe the passing tests.
6. Summarize the diff and test result.

## Project Shape

- `main.js` contains the intentionally broken cart-total function.
- `test/main.test.js` describes the expected behavior.
- `npm test` runs the test suite with Node's built-in test runner.

The initial test failure is intentional. It gives Codex something concrete to observe, fix, and verify.
