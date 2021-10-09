# Benchmark result

tsed vs express: New benchmarks generated
tsed-koa vs koa: New benchmarks generated.

> Note: 
> Average of all diffs for Ts.ED-* so: `(0.15 + 0.14 + 0.12 + 0.12) / 4`

Details:

|                | Req/sec | Trans/sec | Req/sec DIFF | Trans/sec DIFF |
| -------------- | ------- | --------- | ------------ | -------------- |
| Ts.ED Express  | 2035    | 570.48KB  | -            | -              |
| Ts.ED Koa      | 2278    | 453.90KB  | -            | -              |
| Nest-Express   | 3315    | 773.76KB  | -            | -              |
| Nest-Fastify   | 7738    | 1.30MB    | -            | -              |
| Express        | 3619    | 844.71KB  | -            | -              |
| Express Router | 3600    | 840.14KB  | -            | -              |
| Koa            | 8187    | 1.37MB    | -            | -              |
| Fastify        | 8793    | 1.48MB    | -            | -              |

> Note:
> `req/sec DIFF` and `Trans/sec DIFF` is in comparison to the baseline on target branch (master).