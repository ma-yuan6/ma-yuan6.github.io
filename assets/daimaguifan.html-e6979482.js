import{_ as n,o as s,c as a,e}from"./app-d188f79b.js";const i={},t=e(`<h2 id="命名规则" tabindex="-1"><a class="header-anchor" href="#命名规则" aria-hidden="true">#</a> 命名规则</h2><ul><li>函数、变量和参数名使用小写字母，并用下划线（_）分隔单词。例如：<code>my_function</code>, <code>my_variable_name</code>, <code>my_parameter</code>。</li><li>类名使用 <em><strong>驼峰命名法</strong></em>：每个单词的首字母都要大写。例如：<code>MyClassName</code>。</li><li>常量名称使用 <em><strong>全大写字字母</strong></em>, 词之间加下划线来分割。例如：<code>MY_CONSTANT</code>。</li><li>避免使用单个字符作为变量名称，除非它们是计数器或迭代器。</li></ul><h2 id="缩进和空格" tabindex="-1"><a class="header-anchor" href="#缩进和空格" aria-hidden="true">#</a> 缩进和空格</h2><ul><li>使用 4 个空格表示一个缩进。</li><li>在二元运算符两边和逗号后面添加一个空格，例如：<code>a = b + c</code>、<code>list = [1, 2, 3]</code>。</li><li>在不同的操作符之间使用空格进行区分，例如：<code>x == 1 and y &lt; 5</code>。</li><li>尽可能避免在括号内添加空格，但在函数调用时必须在括号内侧添加一个空格。</li></ul><h2 id="模块和导入" tabindex="-1"><a class="header-anchor" href="#模块和导入" aria-hidden="true">#</a> 模块和导入</h2><ul><li>每个导入应该独占一行</li><li>导入语句应该放在文件头部</li><li><code>import</code>语句应该按顺序分为三组 <ul><li>Python 标准库</li><li>第三方库</li><li>应用程序自定义和开发的库</li></ul></li></ul><p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token keyword">import</span> my_module  <span class="token comment"># 自定义的库</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><ul><li>在函数定义之间使用两个空行。</li><li>使用 docstrings (三引号)来对每个函数进行适当的文档编写。</li><li>函数名称应该简洁且具有描述性，同时应符合变量命名规则。</li></ul><p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">calculate_average</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    计算数字列表的平均值并返回.
    &quot;&quot;&quot;</span>
    total <span class="token operator">=</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span>
    count <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span>
    <span class="token keyword">return</span> total <span class="token operator">/</span> count
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><ul><li>尽量把注释放在代码上面而非右边。</li><li>使用文档字符串对模块、函数、类、方法、属性等元素进行文档编写。</li><li>使用单行注释（#）为单独一行的注释提供说明，并在句尾使用至少两个空格以使注释与其他内容区分开来。</li><li>在代码注释中解释高明的做法或用途，不要在其中重复表达代码意义。任何时候都应该使用易于理解的措辞，避免难懂的语言或专业术语等。</li></ul><p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 使用strip()方法去除字符串两侧的多余空白</span>
clean_string <span class="token operator">=</span> input_string<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 调用calculate_distance()函数计算两点之间的距离</span>
distance <span class="token operator">=</span> calculate_distance<span class="token punctuation">(</span>x1<span class="token punctuation">,</span> y1<span class="token punctuation">,</span> x2<span class="token punctuation">,</span> y2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异常" tabindex="-1"><a class="header-anchor" href="#异常" aria-hidden="true">#</a> 异常</h2><ul><li>不要捕捉除 <code>Exception</code> 以外的异常。太多的捕获只会导致隐藏错误。</li><li>在捕获异常时，应该尽可能地精确描述可能发生的异常情况。</li><li>在失败的操作上方放置一个单行注释来描述它所抛出的异常情况。</li></ul><p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token comment"># 打开文件并读取其内容</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;my_file.txt&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
        file_contents <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> FileNotFoundError <span class="token keyword">as</span> e<span class="token punctuation">:</span>
    <span class="token comment"># 如果找不到文件，则输出错误消息并退出</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Error: File not found.&quot;</span><span class="token punctuation">)</span>
    sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当编写代码的时候，遵循一些代码规范是非常重要的。虽然在某些情况下，可能会觉得这些规则感觉有点啰嗦或不太必要，但是它们可以帮助你编写出更加清晰、易于理解、易于维护的代码。</p><p>以下是其中一些好处：</p><ul><li>提高代码可读性：遵循统一的代码规范可以使代码结构变得更加清晰和易于理解，减少读者修改初期的时间浪费。</li><li>增加代码一致性：生活中的每一个人都有自己的习惯、规矩，程序员也不例外。当多个程序员在同一项目上工作时，在风格上的不一致性不仅会增加项目的难度，而且还可能导致错误。因此，使用共同认可的规定来保证一致性是很有必要的。</li><li>降低维护成本：良好的代码规范可以使代码更加易于维护和扩展。通过遵守一组统一的规则，代码难度可以被降低，并且可以更快地找到错误并进行修复。</li><li>提升开发效率：规范化的代码风格使您能够更快速、可靠地编写代码。当代码组成模块合理、函数按功能划分完善时，对代码的理解和调试难度都将降低。</li></ul><p>在编写 Python 代码时，遵循代码规范（如PEP8）有助于提高Python语言的可读性和易用性。Python社区中通常有类似的惯例，并且如果你能跟随它们，你就能够更好地参与到这个社区中来。因此，即使你可能会遇到不同的团队和人员，代码规范也可以帮助每个人更清晰、更快速、更有效地工作。<strong>最重要的当然是显得我们比较专业喽😜</strong>。</p>`,24),l=[t];function o(p,c){return s(),a("div",null,l)}const u=n(i,[["render",o],["__file","daimaguifan.html.vue"]]);export{u as default};