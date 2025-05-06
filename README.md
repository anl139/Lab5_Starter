# Lab 5 - Starter
Andrew Lam
1) Unit testing the "message" feature
I would not use a unit test for the complete "message" feature of a messaging application because it involves multiple components interacting together, in which a unit test only isolates a single function or method. As a result it would require more test to figure out clear inputs and outputs.

2) Unit testing the "max message length" feature
For the "max message length" feature I would since it is typically implemented by a single validation function (e.g., `validateLength(text)`) that returns true or false. There would be clear inputs and outputs, making it ideal for fast, isolated unit tests.
