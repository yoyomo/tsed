---
sidebar: auto
meta:
 - name: keywords
   description: api typescript node.js documentation isArrayOrArrayClass function
---
# isArrayOrArrayClass <Badge text="Function" type="function"/>
<!-- Summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { isArrayOrArrayClass }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/core"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v4.30.1/src//core/utils/ObjectUtils.ts#L0-L0">/core/utils/ObjectUtils.ts</a></td></tr></tbody></table></section>

<!-- Overview -->
## Overview


<pre><code class="typescript-lang ">function <span class="token function">isArrayOrArrayClass</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">boolean</span> <span class="token punctuation">{</span>
  if <span class="token punctuation">(</span>target === Array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    return true<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  return <span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

/**
 * Return true if the target.
 * @param target
 * @returns <span class="token punctuation">{</span><span class="token keyword">boolean</span><span class="token punctuation">}</span>
 */</code></pre>



<!-- Description -->
## Description

::: v-pre

Return true if the clazz is an array.

:::