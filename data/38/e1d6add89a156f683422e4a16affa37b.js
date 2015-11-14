callback({
  "levelNumber": 38,
  "size": 178,
  "steps": 132,
  "successRatio": 1,
  "author": "viamodulo",
  "hash": "e1d6add89a156f683422e4a16affa37b",
  "path": "38-Digit-Exploder-30.165/178.100-viamodulo.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 38-Digit-Exploder - SIZE 178/30 - SPEED 100/165 --\n\n    COPYFROM 11\n    ADD      11\n    COPYTO   8\n    COPYFROM 10\n    ADD      10\n    COPYTO   7\n    BUMPUP   9\n    COPYTO   6\n    BUMPUP   6\n    ADD      6\n    COPYTO   3\n    ADD      3\n    COPYTO   1\n    INBOX\n    SUB      11\n    JUMPN    h0tu\n    SUB      8\n    JUMPN    h12tu\n    SUB      8\n    JUMPN    h34tu\n    SUB      8\n    JUMPN    h56tu\n    SUB      8\n    JUMPN    h78tu\n    COPYTO   0\n    COPYFROM 1\n    ADD      9\n    JUMP    hxtu  \n    \nstart:\n    OUTBOX\n    COPYFROM 0\n    OUTBOX\n\n    INBOX\n    SUB      11\n    JUMPN    h0tu\n    SUB      8\n    JUMPN    h12tu\n    SUB      8\n    JUMPN    h34tu\n    SUB      8\n    JUMPN    h56tu\n    SUB      8\n    JUMPN    h78tu\n    COPYTO   0\n    COPYFROM 1\n    ADD      9\n    JUMP    hxtu\nh1tu:\n    ADD      11\n    COPYTO   0\n    COPYFROM 9\n    JUMP    hxtu\nh12tu:\n    ADD      11\n    JUMPN    h1tu\n    COPYTO   0\n    COPYFROM 6\n    JUMP    hxtu\nh3tu:\n    ADD      11\n    COPYTO   0\n    COPYFROM 6\n    ADD      9\n    JUMP    hxtu\nh34tu:\n    ADD     11\n    JUMPN   h3tu\n    COPYTO   0\n    COPYFROM 3\n    JUMP    hxtu\nh5tu:\n    ADD      11\n    COPYTO   0\n    COPYFROM 3\n    ADD      9\n    JUMP    hxtu\nh56tu:\n    ADD     11\n    JUMPN   h5tu\n    COPYTO   0\n    COPYFROM 3\n    ADD      6\n    JUMP    hxtu\nh7tu:\n    ADD      11\n    COPYTO   0\n    COPYFROM 1\n    SUB      9\n    JUMP    hxtu\nh78tu:\n    ADD     11\n    JUMPN   h7tu\n    COPYTO   0\n    COPYFROM 1\nhxtu:\n    OUTBOX\n    COPYFROM 0\n    SUB      10\n    JUMPN    hxt0u\n    SUB      7\n    JUMPN    hxt12u\n    SUB      7\n    JUMPN    hxt34u\n    SUB      7\n    JUMPN    hxt56u\n    SUB      7\n    JUMPN    hxt78u\n    COPYTO   0\n    COPYFROM 1\n    ADD      9\n    JUMP    start  \nhxt0u:\n    ADD      10\n    COPYTO   0\n    COPYFROM 9\n    SUB      9\n    JUMP    start\nhxt1u:\n    ADD      10\n    COPYTO   0\n    COPYFROM 9\n    JUMP    start\nhxt12u:\n    ADD      10\n    JUMPN    hxt1u\n    COPYTO   0\n    COPYFROM 6\n    JUMP    start\nhxt3u:\n    ADD      10\n    COPYTO   0\n    COPYFROM 6\n    ADD      9\n    JUMP    start\nhxt34u:\n    ADD     10\n    JUMPN   hxt3u\n    COPYTO   0\n    COPYFROM 3\n    JUMP    start\nhxt5u:\n    ADD      10\n    COPYTO   0\n    COPYFROM 3\n    ADD      9\n    JUMP    start\nhxt56u:\n    ADD     10\n    JUMPN   hxt5u\n    COPYTO   0\n    COPYFROM 3\n    ADD      6\n    JUMP    start\nhxt7u:\n    ADD      10\n    COPYTO   0\n    COPYFROM 1\n    SUB      9\n    JUMP    start\nhxt78u:\n    ADD     10\n    JUMPN   hxt7u\n    COPYTO   0\n    COPYFROM 1\n    JUMP    start  \nh0tu:\n    ADD      11\n    SUB      10\n    JUMPN    h0t0u\n    SUB      7\n    JUMPN    hxt12u\n    SUB      7\n    JUMPN    hxt34u\n    SUB      7\n    JUMPN    hxt56u\n    SUB      7\n    JUMPN    hxt78u\n    COPYTO   0\n    COPYFROM 1\n    ADD      9\n    JUMP    start\nh0t0u:\n    ADD     10\n    OUTBOX\n    INBOX\n    SUB      11\n    JUMPN    h0tu\n    SUB      8\n    JUMPN    h12tu\n    SUB      8\n    JUMPN    h34tu\n    SUB      8\n    JUMPN    h56tu\n    SUB      8\n    JUMPN    h78tu\n    COPYTO   0\n    COPYFROM 1\n    ADD      9\n    JUMP    hxtu\n"
});