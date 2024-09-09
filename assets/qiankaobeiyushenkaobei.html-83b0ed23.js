import{_ as n,o as s,c as a,e as p}from"./app-9e62998e.js";const e={},t=p(`<h2 id="变量赋值" tabindex="-1"><a class="header-anchor" href="#变量赋值" aria-hidden="true">#</a> 变量赋值</h2><p>在介绍深浅拷贝时我们先回顾一下之前讲过的 <a href="/blogs/python/%E5%88%97%E8%A1%A8%E5%9C%A8%E5%86%85%E5%AD%98%E4%B8%AD%E7%9A%84%E5%AD%98%E5%82%A8%E6%96%B9%E5%BC%8F">变量赋值原理</a> 与 <a href="/blogs/python/%E5%88%97%E8%A1%A8%E5%9C%A8%E5%86%85%E5%AD%98%E4%B8%AD%E7%9A%84%E5%AD%98%E5%82%A8%E6%96%B9%E5%BC%8F">列表在内存中的存储方式</a> 。</p><p>在 Python 中，变量赋值只是简单地将对象的一个 <em>引用</em> 指派给了变量。</p><p>比如下面的代码：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
b <span class="token operator">=</span> a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里 <code>a</code> 和 <code>b</code> 都通过赋值引用同一个列表 <code>[1, 2, 3]</code> 。如果对该列表的任意一个元素进行修改，则另一个变量也会受到影响，因为它们引用的都是同一个对象：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">4</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token comment"># 两均个输出 [4, 2, 3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种行为叫做引用，也就是说变量 <code>a</code> 和 <code>b</code> 引用的是同一个列表对象。在 Python 中，可以使用 <code>id()</code> 函数获取任何对象的唯一标识符来观察此现象：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出两个相同的数字，代表同一个内存地址</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>根据之前所讲我们可以用下面图片来表示一下<code>a</code>和<code>b</code>在内存中的关系：</p><p><img src="https://s2.loli.net/2024/03/16/j5SUW1TvL2PXrow.png" alt="列表赋值的内存表示.png"></p><p>接下来介绍 Python 中的浅拷贝和深拷贝：</p><h2 id="浅拷贝" tabindex="-1"><a class="header-anchor" href="#浅拷贝" aria-hidden="true">#</a> 浅拷贝</h2><p>对于 <em>不可变类型</em> 来说，浅拷贝如果修改值，则会重新开辟内存空间用来存储变量值，对原来的变量不会产生影响。对于 <em>可变类型</em> 来说，浅拷贝仅仅拷贝了可变对象在内存中的地址，没有重新开辟内存空间。</p><p>如以下代码：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> copy

<span class="token comment"># 定义列表 a 和 b</span>
a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
b <span class="token operator">=</span> copy<span class="token punctuation">.</span>copy<span class="token punctuation">(</span>a<span class="token punctuation">)</span>   <span class="token comment"># 执行浅拷贝</span>

<span class="token comment"># 修改列表 b 的第二个元素</span>
b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>

<span class="token comment"># 查看列表 a 和 b 的值</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;列表 a：&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;列表 b：&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行以上代码，输出的结果为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>列表 a： [1, 2, [3, 4], 5]
列表 b： [1, 100, [3, 4], 5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，修改列表 b 中的某个元素并不会影响到列表 a。</p><p>但如果改变的是嵌套列表或字典等 <em><strong>可变类型</strong></em> 中的元素时，就不一样了。</p><p>如以下代码：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 定义列表 a 和 b</span>
a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
b <span class="token operator">=</span> copy<span class="token punctuation">.</span>copy<span class="token punctuation">(</span>a<span class="token punctuation">)</span>   <span class="token comment"># 执行浅拷贝</span>

<span class="token comment"># 修改列表 b 中嵌套列表的第一个元素</span>
b<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>

<span class="token comment"># 查看列表 a 和 b 的值</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;列表 a：&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;列表 b：&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行以上代码，输出的结果为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>列表 a： [1, 2, [100, 4], 5]
列表 b： [1, 2, [100, 4], 5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，修改列表 b 中的嵌套列表的某个元素，也会影响到列表 a，这是因为浅拷贝只复制了嵌套列表（也就是上面的<code>[3,4]</code>）在内存中的地址，并没有开辟新的内存空间。</p><p>上面两个代码块执行过程内存图示如下：</p><p><img src="https://s2.loli.net/2024/03/16/bEV2osH4PJGLQcj.png" alt="浅拷贝.png"></p><p>在 Python 中，可以使用以下方法来执行浅拷贝：</p><ul><li><p><strong>切片操作</strong>：列表或其他可变序列通常支持切片操作。<code>a[:]</code> 创建了一个新列表，它与原始列表 <code>a</code> 包含相同的元素。这个新列表是浅拷贝的，因为它们共享相同的对象。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
b <span class="token operator">=</span> a<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token punctuation">(</span>b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用 <code>copy( )</code> 函数：使用该函数可以创建并返回新的浅拷贝对象。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> copy

a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
b <span class="token operator">=</span> copy<span class="token punctuation">.</span>copy<span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token punctuation">(</span>b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>当执行浅拷贝操作时，只有 <em><strong>最外层</strong></em> 对象是新的，被浅拷贝的子对象仍然是原来的引用。</p><h2 id="深拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝" aria-hidden="true">#</a> 深拷贝</h2><p>深拷贝会重新分配内存，对拷贝后的对象进行修改，不会影响原始对象。</p><p>如以下代码：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> copy

<span class="token comment"># 定义列表 a 和 b</span>
a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
b <span class="token operator">=</span> copy<span class="token punctuation">.</span>deepcopy<span class="token punctuation">(</span>a<span class="token punctuation">)</span>   <span class="token comment"># 执行深拷贝</span>

<span class="token comment"># 修改列表 b 中的第一个元素以及嵌套列表的第一个元素</span>
b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
b<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1000</span>

<span class="token comment"># 查看列表 a 和 b 的值</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;列表 a：&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;列表 b：&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行以上代码，输出的结果为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>列表 a： [1, 2, [3, 4], 5]
列表 b： [100, 2, [1000, 4], 5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，修改列表 b 中的某个元素并不会影响到列表 a，这是因为深拷贝不仅复制了最外层的嵌套元素，还 <em>递归</em> 进行复制嵌套列表中的元素，开辟新的内存空间。总的来说 <em><strong>深拷贝就是完完全全的拷贝</strong></em>。</p><p>综上所述，浅拷贝和深拷贝的主要区别在于：</p><ul><li>浅拷贝仅仅是复制 <em><strong>可变对象</strong></em> 在内存中的地址，不会重新分配内存；深拷贝会递归复制嵌套对象中的元素，重新分配内存。</li><li>浅拷贝对于简单对象进行复制时（如整数、字符串），和深拷贝没有什么区别。但浅拷贝无法复制嵌套对象的完整结构，只是复制了对象在内存中的地址。</li></ul>`,39),o=[t];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","qiankaobeiyushenkaobei.html.vue"]]);export{d as default};