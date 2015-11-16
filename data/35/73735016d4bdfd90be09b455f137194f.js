callback({
  "levelNumber": 35,
  "size": 42,
  "steps": 63,
  "successRatio": 0.02,
  "author": "ocoss",
  "hash": "73735016d4bdfd90be09b455f137194f",
  "path": "35-Duplicate-Removal-17.167/42.63-ocoss.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 35-Duplicate-Removal - SIZE 42/17 - SPEED 63/167 --\n\n    INBOX   \n    COPYTO   0\n    OUTBOX  \n    COMMENT  0\na:\n    INBOX   \n    COPYTO   10\n    SUB      0\n    JUMPZ    a\n    COPYTO   1\n    COPYFROM 10\n    OUTBOX  \n    COMMENT  1\nb:\nc:\n    INBOX   \n    COPYTO   10\n    SUB      0\n    JUMPZ    c\n    SUB      1\n    JUMPZ    b\n    COPYTO   2\n    COPYFROM 10\n    OUTBOX  \n    COMMENT  2\nd:\ne:\nf:\n    INBOX   \n    COPYTO   10\n    SUB      0\n    JUMPZ    f\n    SUB      1\n    JUMPZ    e\n    SUB      2\n    JUMPZ    d\n    COPYTO   3\n    COPYFROM 10\n    OUTBOX  \n    COMMENT  3\ng:\nh:\ni:\nj:\n    INBOX   \n    COPYTO   10\n    SUB      0\n    JUMPZ    j\n    SUB      1\n    JUMPZ    i\n    SUB      2\n    JUMPZ    h\n    SUB      3\n    JUMPZ    g\n    COPYFROM 10\n    OUTBOX  \n\n\nDEFINE COMMENT 0\neJxjYWBg2Fui5tJanlr4pmrRfoZRMApGwYgCAL/hBjk;\n\nDEFINE COMMENT 1\neJzjZ2BgCMy9EllcIRu6tVY29FrH0aiA7pr49L6mfLZ++5b0voYJPT0XZqt16i170jx7fWv55AMsdRFH\nTs/zPMowCkbBKBjyAAAfsBuN;\n\nDEFINE COMMENT 2\neJwTZmBgeJ+7wdu256ynwcTJvisnRwSaTuUPa5l6NKplak38j8miaT09WqUWHQ8q0/tOdi/pfztzSf+m\nue+6mVZObb6z+0zD/r1+VYv2fyn8tZNhFIyCUTDkAACqnCdh;\n\nDEFINE COMMENT 3\neJzjYWBgeJVpHXwja1ntjaxNcx8VVSyUbmxb8Ltt01zG7k1zgdIM3u0rYrzbt5972c52i2EUjIJRMKwA\nAChjFjs;\n\nDEFINE LABEL 10\neJzjZWBgiMuYnxuY+7XjUdGSecUV+Zv0GnSOA4UZguvW5fhVKbatKr0w+32u2vbCdP6TdUm5lxlGwSgY\nBcMGAAAk1xZL;\n\n"
});