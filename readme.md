# pino or winston?

let's check who is faster when writing logs into file.

results for me (macbook A2141):

![benchmark.png](benchmark.png)


The test log message contains random object as first argument and static string as second argument.

Example of object:
```
[r()]: {
            [r()]: {
                [r()]: {
                    [r()]: {
                        [r()]: {
                            [r()]: {
                                [r()]: {
                                    bigInt: 1
                                }
                            }
                        }
                    }
                }
            }
        }
```

where `[r()]` is always random string



#### how to run it locally:

`npm i`

`node index.js`
