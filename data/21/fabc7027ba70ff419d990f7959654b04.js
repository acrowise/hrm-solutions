callback({
  "levelNumber": 21,
  "size": 26,
  "steps": 56,
  "successRatio": 1,
  "type": "specific",
  "author": "AaronKnowles",
  "hash": "fabc7027ba70ff419d990f7959654b04",
  "path": "21-Zero-Terminated-Sum-10.72/26.56.specific-AaronKnowles.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM\n-- 21-Zero-Terminated-Sum - SIZE 26/10 - SPEED 56/72 --\n\n-- This solution is level-specific (quantity-limited input) and assumes a run of\n-- 6 or less digits. Two commands may be added to allow quantity-unlimited\n-- input; uncomment the three commented lines below to do so.\n-- See 29.60-AaronKnowles.asm for non-level-specific solution.\n\n    JUMP     g\na:\nb:\nc:\nd:\ne:\n    COPYFROM 0\nf:\n    OUTBOX  \ng:\n-- h:\n    INBOX   \n    JUMPZ    f\n    COPYTO   0\n    INBOX   \n    JUMPZ    e\n    ADD      0\n    COPYTO   0\n    INBOX   \n    JUMPZ    d\n    ADD      0\n    COPYTO   0\n    INBOX   \n    JUMPZ    c\n    ADD      0\n    COPYTO   0\n    INBOX   \n    JUMPZ    b\n    ADD      0\n    COPYTO   0\n    INBOX   \n    JUMPZ    a\n    ADD      0\n    OUTBOX  \n--    INBOX   \n--    JUMP     h\n\n"
});