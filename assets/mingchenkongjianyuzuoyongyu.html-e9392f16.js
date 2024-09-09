import{_ as p,r as c,o as l,c as i,a as s,b as n,d as e,w as t,e as o}from"./app-9e62998e.js";const u={},d=o(`<h2 id="名称空间" tabindex="-1"><a class="header-anchor" href="#名称空间" aria-hidden="true">#</a> 名称空间</h2><p>在 <a href="/blogs/python/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E6%9C%BA%E5%88%B6">垃圾回收机制</a> 这篇文章中我们曾讲过，在内存中变量名和变量值分别存储在 <em>栈区</em> 与 <em>堆区</em> 中。现在我们又有了一个概念叫 <em><strong>名称空间（Name space）</strong></em>，其实名称空间就是将栈区内的名字划分了几个区域。</p><p>当我们在Python中定义一个变量、函数或类时，它们都被存储在特定的名称空间中。这些名称可能包括关键字、函数、类、模块、变量等。名称空间是从名称到对象的映射，大部分的名称空间都是通过 Python 字典来实现的。</p><p>名称空间提供了在项目中避免名字冲突的一种方法。各个名称空间是独立的，没有任何关系的，所以一个名称空间中不能有重名，但不同的名称空间是可以重名而没有任何影响。</p><p>我们可以举一个简单的的例子：一个文件夹（目录）中可以包含多个文件夹，每个文件夹中不能有相同的文件名，但 <em>不同文件夹</em> 中的文件可以重名。</p><p>Python中有 3 种名称空间：</p><ul><li><strong>内置名称空间（Built-in）</strong></li><li><strong>全局名称空间（Global）</strong></li><li><strong>局部名称空间（Local）</strong></li></ul><blockquote><p>可以通过locals( )（获取局部name space）、globals( )（获取全局name space） 函数来获取名称空间的值（字典），在程序的不同位置执行结果不一定一致，因为结果是针对当前位置来说的。</p></blockquote><h3 id="名称空间查找顺序" tabindex="-1"><a class="header-anchor" href="#名称空间查找顺序" aria-hidden="true">#</a> 名称空间查找顺序</h3><ul><li>名称空间查找顺序为以 <em><strong>当前位置</strong></em> 为起点以 <strong>局部的名称空间 -&gt; 全局名称空间 -&gt; 内置名称空间</strong> 的顺序查找。</li><li><em><strong>函数名称空间的查找顺序以定义阶段为基准</strong></em></li></ul><p>如果找不到变量 <code>a</code>，它将放弃查找并引发一个 <code>NameError</code> 异常:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>NameError<span class="token punctuation">:</span> name <span class="token string">&#39;a&#39;</span> <span class="token keyword">is</span> <span class="token keyword">not</span> defined。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="名称空间的生命周期" tabindex="-1"><a class="header-anchor" href="#名称空间的生命周期" aria-hidden="true">#</a> 名称空间的生命周期</h3><p>名称空间的生命周期取决于对象的作用域，如果对象执行完成（比如说一个函数执行完、一个 python 文件执行完等等），则该名称空间的生命周期就结束。</p><h3 id="内置名称空间" tabindex="-1"><a class="header-anchor" href="#内置名称空间" aria-hidden="true">#</a> 内置名称空间</h3><p>包含了Python内置的函数、类、对象等。这些可以在任何地方直接使用，无需导入任何模块。</p><p>示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># print 是 Python 内置函数，处于内置名称空间内。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="全局名称空间" tabindex="-1"><a class="header-anchor" href="#全局名称空间" aria-hidden="true">#</a> 全局名称空间</h3><p>在 <em>模块</em>（暂时理解为一个以<code>.py</code>结尾的 python 文件）中定义的所有变量、函数和类都在该名称空间内，它们即是全局变量，也是该模块的属性。</p><p>示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token number">10</span>   <span class="token comment"># x为全局变量，位于全局名称空间内。</span>

<span class="token keyword">def</span> <span class="token function">my_func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
    
my_func<span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment"># &gt;&gt; 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),r=s("code",null,"x",-1),k=s("code",null,"x = 10",-1),m=o(`<h3 id="局部名称空间" tabindex="-1"><a class="header-anchor" href="#局部名称空间" aria-hidden="true">#</a> 局部名称空间</h3><p>主要指 <em>函数内部</em> 的名称空间，它们只能在函数内部可见，访问函数外部的变量需要使用<code>global</code>或者<code>nonlocal</code>关键字。</p><p>示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">my_func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    y <span class="token operator">=</span> <span class="token number">20</span>   <span class="token comment"># y 为局部变量，处于局部名称空间</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>

my_func<span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment"># &gt;&gt; 20</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>    <span class="token comment"># NameError: name &#39;y&#39; is not defined，因为 y 是在函数中</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v=s("code",null,"print(y)",-1),b=s("em",null,[s("strong",null,"当前位置")],-1),g=s("strong",null,"局部的名称空间 -> 全局名称空间 -> 内置名称空间",-1),h=o(`<h2 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h2><p>作用域就是一个 Python 程序可以直接访问 <em><strong>名称空间</strong></em> 的区域。</p><p>在一个 python 程序中，直接访问一个变量，会 <em>从内到外</em> 依次访问所有的作用域直到找到，否则会报未定义的错误。变量的作用域决定了在哪一部分程序可以访问哪个特定的变量名称。</p><p>Python的作用域一共有 4 种，分别是：</p><ul><li><strong>L（Local）</strong>：最内层，包含局部变量，比如一个函数、方法内部。</li><li><strong>E（Enclosing）</strong>：包含了非局部（non-local）也非全局（non-global）的变量。</li><li><strong>G（Global）</strong>：当前脚本的最外层，比如当前模块的全局变量。</li><li><strong>B（Built-in）</strong>： 包含了内建的变量、关键字等。</li></ul><blockquote><p>Enclosing：两个嵌套函数，一个函数（或类） A 里面又包含了一个函数 B ，那么对于 B 中的名称来说 A 中的作用域就为 nonlocal。</p></blockquote><p>访问顺序为： <strong>L –&gt; E –&gt; G –&gt; B</strong>。</p><p>先在局部找，在局部找不到，便会去局部外的局部找（例如闭包），再找不到就会去全局找，最后去内置中找。</p><p>示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>g_count <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># 全局作用域 -&gt; G</span>
<span class="token keyword">def</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    o_count <span class="token operator">=</span> <span class="token number">1</span>  <span class="token comment"># 闭包函数外的函数中 -&gt; E</span>
    <span class="token keyword">def</span> <span class="token function">inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        i_count <span class="token operator">=</span> <span class="token number">2</span>  <span class="token comment"># 局部作用域 -&gt; L</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在Python中，只有模块，类以及函数才会引入新的作用域，其它的代码块（if 语句等等）是不会引入新的作用域的。不要和其他编程语言混淆。</p></blockquote><p>由于作用域的限制内部作用域难以访问外部作用域，当内部作用域想修改外部作用域的变量时，Python为我们提供了<code>global</code>和<code>nonlocal</code>关键字。</p><h2 id="global关键字" tabindex="-1"><a class="header-anchor" href="#global关键字" aria-hidden="true">#</a> global关键字</h2><p><code>global</code> 关键字可以声明全局变量，使得一个函数内部的变量赋值操作改为对全局变量的修改操作。</p><p>示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># global 实现全局变量</span>

count <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># 全局变量</span>

<span class="token keyword">def</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> count   <span class="token comment"># 使用 global 声明 count 为全局变量</span>
    count <span class="token operator">+=</span> <span class="token number">1</span>     <span class="token comment"># 对全局变量 count 进行加 1 操作</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>

increment<span class="token punctuation">(</span><span class="token punctuation">)</span>             <span class="token comment"># &gt;&gt; 1</span>
increment<span class="token punctuation">(</span><span class="token punctuation">)</span>             <span class="token comment"># &gt;&gt; 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nonlocal关键字" tabindex="-1"><a class="header-anchor" href="#nonlocal关键字" aria-hidden="true">#</a> nonlocal关键字</h2><p><code>nonlocal</code> 关键字用于嵌套函数中，允许将变量绑定到 <em><strong>最近的非全局作用域</strong></em>。它通常与 <em><strong>闭包</strong></em> 一起使用，可用来在内层函数中对外层函数的变量进行修改。</p><p>示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># nonlocal 改变外层函数变量</span>

<span class="token keyword">def</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    x <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span>

    <span class="token keyword">def</span> <span class="token function">inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">nonlocal</span> x   <span class="token comment"># 将变量 x 绑定到最近的非全局作用域，也就是 outer 函数的作用域</span>
        x <span class="token operator">=</span> <span class="token string">&quot;world&quot;</span>  <span class="token comment"># 修改了 outer 函数中的变量 x</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;inner:&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>

    inner<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;outer:&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>

outer<span class="token punctuation">(</span><span class="token punctuation">)</span>               <span class="token comment"># &gt;&gt;  inner: world outer: world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一些例子" tabindex="-1"><a class="header-anchor" href="#一些例子" aria-hidden="true">#</a> 一些例子</h2><p>为了帮助更好的理解名称空间与作用域，下面列举了一些例子。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x<span class="token operator">=</span><span class="token number">3</span>
<span class="token keyword">def</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>  <span class="token comment"># 局部没有去全局找</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：3</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x<span class="token operator">=</span><span class="token number">3</span>
<span class="token keyword">def</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    x<span class="token operator">=</span><span class="token number">2</span>   <span class="token comment"># 定义并赋值本地变量 x</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>  <span class="token comment"># 局部有就打印局部的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：2</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x<span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">def</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
    x<span class="token operator">=</span><span class="token number">2</span>
fun<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：报错。</p><blockquote><p><em><strong>函数名称空间的查找顺序以定义阶段为基准</strong></em>，所以在上面的代码中，在定义 fun 时就确认了 fun 函数内有 x ，所以执行<code>print(x)</code>时就会引用到 fun 函数中的变量 x ，但是 x 在使用（执行<code>print(x)</code>）前没有先声明（使用前必须先声明），所以出错。</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x<span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">def</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    x<span class="token operator">=</span><span class="token number">2</span>
    fun2<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 虽然在 fun2 定义前使用，但不会报错</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>   <span class="token comment"># &gt;&gt; 2</span>
 
 
<span class="token keyword">def</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>   <span class="token comment"># &gt;&gt; 1</span>
 
 
fun1<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><em><strong>函数在定义阶段不会执行</strong></em>，因此可以使用未定义的名字，但是在运行之前，这些名字必须定义好，否则会出错。</p></blockquote><p>因此，上面代码不会报错。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x<span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">def</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    x<span class="token operator">=</span><span class="token number">3</span>
    g<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
 
 
fun1<span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment"># 报错</span>
 
 
<span class="token keyword">def</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里出错，这是因为 fun1( ) 已经运行了，但是 fun2( ) 还没有定义好，所以就出错了。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">def</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
    
    
<span class="token keyword">def</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    x <span class="token operator">=</span> <span class="token number">2</span>
    fun1<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：1</p>`,36),y=s("em",null,[s("strong",null,"函数名称空间的查找顺序以定义阶段为基准")],-1),f=s("code",null,"x = 1",-1);function E(x,B){const a=c("RouterLink");return l(),i("div",null,[d,s("p",null,[n("根据 "),e(a,{to:"/blogs/python/%E5%90%8D%E7%A7%B0%E7%A9%BA%E9%97%B4%E4%B8%8E%E4%BD%9C%E7%94%A8%E5%9F%9F.html#%E5%90%8D%E7%A7%B0%E7%A9%BA%E9%97%B4%E6%9F%A5%E6%89%BE%E9%A1%BA%E5%BA%8F"},{default:t(()=>[n("名称空间查找顺序")]),_:1}),n(" 在函数内部找"),r,n("，函数内部没有则去全局内找，找到"),k,n("就打印出了 10。")]),m,s("p",null,[n("后面的"),v,n("会报错是因为，在上面 "),e(a,{to:"/python/%E5%90%8D%E7%A7%B0%E7%A9%BA%E9%97%B4%E4%B8%8E%E4%BD%9C%E7%94%A8%E5%9F%9F.html#%E5%90%8D%E7%A7%B0%E7%A9%BA%E9%97%B4%E6%9F%A5%E6%89%BE%E9%A1%BA%E5%BA%8F"},{default:t(()=>[n("名称空间查找顺序")]),_:1}),n(" 中我们说过，Python 名称的查找顺序为以 "),b,n(" 为起点以 "),g,n(" 的顺序查找。当前处于全局，则在全局寻找 y ，显然没有。然后去内置的名称空间去找，显然也没有。因此就会报错。")]),h,s("blockquote",null,[s("p",null,[n("在上面 "),e(a,{to:"/blogs/python/%E5%90%8D%E7%A7%B0%E7%A9%BA%E9%97%B4%E4%B8%8E%E4%BD%9C%E7%94%A8%E5%9F%9F.html#%E5%90%8D%E7%A7%B0%E7%A9%BA%E9%97%B4%E6%9F%A5%E6%89%BE%E9%A1%BA%E5%BA%8F"},{default:t(()=>[n("名称空间查找顺序")]),_:1}),n(" 中说过 "),y,n("，所以在定义时只有全局的"),f,n("所以最后输出 1 。")])])])}const w=p(u,[["render",E],["__file","mingchenkongjianyuzuoyongyu.html.vue"]]);export{w as default};