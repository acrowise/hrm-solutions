callback({
  "levelNumber": 21,
  "size": 9,
  "steps": 88,
  "successRatio": 1,
  "author": "steambap",
  "hash": "6dd322c1df22f27ddad225f61a0daed5",
  "path": "21-Zero-Terminated-Sum-10.72/9.88-steambap.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 21-Zero-Terminated-Sum - SIZE 9/10 - SPEED 88/72 --\n\n    JUMP     b\na:\n    COPYFROM 0\n    OUTBOX  \nb:\n    COPYFROM 5\nc:\n    COPYTO   0\n    INBOX   \n    JUMPZ    a\n    ADD      0\n    JUMP     c\n"
});