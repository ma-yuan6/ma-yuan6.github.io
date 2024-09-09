import{_ as n,o as s,c as a,e as p}from"./app-9e62998e.js";const e={},t=p(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>这种模式涉及到一个单一的类，该类负责创建自己的对象，同时确保只有单个对象被创建。这个类提供了一种访问其唯一的对象的方式，并且是直接访问，不需要实例化该类的对象。</p><p>单例模式是一种创建型设计模式，它确保一个类只有一个实例，并提供了一个全局访问点来访问该实例。</p><p><strong>注意：</strong></p><ol><li>单例类只能有一个实例。</li><li>单例类必须自己创建自己的唯一实例。</li><li>单例类必须给所有其他对象提供这一实例。</li></ol><h2 id="细节" tabindex="-1"><a class="header-anchor" href="#细节" aria-hidden="true">#</a> 细节</h2><p>保证一个类仅有一个实例，并提供一个访问它的全局访问点。</p><p><strong>何时使用：</strong> 通常一个对象的状态是被其他对象共享的，就可以将其设计为单例。</p><p><strong>实现方式：</strong> 判断是否已经有这个单例，如果有则返回，如果没有则创建。</p><p><strong>优点：</strong></p><ol><li>在内存里只有一个实例，减少了内存的开销，尤其是频繁的创建和销毁实例。</li><li>避免对资源的多重占用（比如写文件操作）。</li></ol><p><strong>使用场景：</strong></p><ol><li>要求生产唯一序列号。</li><li>WEB 中的计数器，不用每次刷新都在数据库里加一次，用单例先缓存起来。</li><li>创建的一个对象需要消耗的资源过多，比如 I/O 与数据库的连接等。</li></ol><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><h3 id="_1、模块导入" tabindex="-1"><a class="header-anchor" href="#_1、模块导入" aria-hidden="true">#</a> 1、模块导入</h3><p>首先在某模块 <code>singleton.py</code> 中定义类，然后创建对象。之后需要用到此类的对象时，就不要再创建对象，只需要从该模块导入创建好的类。</p><p><strong>文件singleton.py：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
    
myclass <span class="token operator">=</span> MyClass<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要用到该对象时，在该模块导入即可</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> a <span class="token keyword">import</span> myclass

<span class="token keyword">print</span><span class="token punctuation">(</span>myclass<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、元类实现" tabindex="-1"><a class="header-anchor" href="#_2、元类实现" aria-hidden="true">#</a> 2、元类实现</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>__instance <span class="token operator">=</span> <span class="token boolean">None</span>  <span class="token comment"># 用来记录是否存在对象（存储在类变量上）</span>

    <span class="token keyword">def</span> <span class="token function">__call__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 调用类生成对象走__call__方法</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>__instance <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>  <span class="token comment"># 不存在，创建</span>
            self<span class="token punctuation">.</span>__instance<span class="token operator">=</span><span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__call__<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span><span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span>__instance
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span>__instance  <span class="token comment"># 存在，返回存在的对象</span>

        
<span class="token keyword">class</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span>metaclass<span class="token operator">=</span>Singleton<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    a <span class="token operator">=</span> MyClass<span class="token punctuation">(</span><span class="token punctuation">)</span>
    b <span class="token operator">=</span> MyClass<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token keyword">is</span> b<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过打印我们可以看见，a和b确实是同一个对象。</p><h3 id="_3、类装饰器" tabindex="-1"><a class="header-anchor" href="#_3、类装饰器" aria-hidden="true">#</a> 3、类装饰器</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">singleton</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
    obj <span class="token operator">=</span> <span class="token boolean">None</span>  <span class="token comment"># 记录对象是已经否存在</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">nonlocal</span> obj
        <span class="token keyword">if</span> <span class="token keyword">not</span> obj<span class="token punctuation">:</span>
            obj <span class="token operator">=</span> cls<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        <span class="token keyword">return</span> obj
    <span class="token keyword">return</span> wrapper
  
<span class="token decorator annotation punctuation">@singleton</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
    
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    a <span class="token operator">=</span> MyClass<span class="token punctuation">(</span><span class="token punctuation">)</span>
    b <span class="token operator">=</span> MyClass<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token keyword">is</span> b<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、类属性" tabindex="-1"><a class="header-anchor" href="#_4、类属性" aria-hidden="true">#</a> 4、类属性</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    obj <span class="token operator">=</span> <span class="token boolean">None</span>
    
    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">get_obj</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> cls<span class="token punctuation">.</span>obj<span class="token punctuation">:</span>
            cls<span class="token punctuation">.</span>obj <span class="token operator">=</span> cls<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        <span class="token keyword">return</span> cls<span class="token punctuation">.</span>obj
        
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    a <span class="token operator">=</span> MyClass<span class="token punctuation">.</span>get_obj<span class="token punctuation">(</span><span class="token punctuation">)</span>
    b <span class="token operator">=</span> MyClass<span class="token punctuation">.</span>get_obj<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token keyword">is</span> b<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、-new" tabindex="-1"><a class="header-anchor" href="#_5、-new" aria-hidden="true">#</a> 5、__new__</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    obj <span class="token operator">=</span> <span class="token boolean">None</span>
    
    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">__new__</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> cls<span class="token punctuation">.</span>obj<span class="token punctuation">:</span>
            cls<span class="token punctuation">.</span>obj <span class="token operator">=</span> <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__new__<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        <span class="token keyword">return</span> cls<span class="token punctuation">.</span>obj
        
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    a <span class="token operator">=</span> MyClass<span class="token punctuation">(</span><span class="token punctuation">)</span>
    b <span class="token operator">=</span> MyClass<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token keyword">is</span> b<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","danlimoshi.html.vue"]]);export{r as default};