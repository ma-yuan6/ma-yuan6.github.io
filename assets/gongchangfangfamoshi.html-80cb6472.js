import{_ as n,o as s,c as a,e as t}from"./app-d188f79b.js";const e={},o=t(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>工厂模式提供了一种创建对象的方式，而无需指定要创建的具体类。</p><p>工厂模式属于创建型模式，它在创建对象时提供了一种封装机制，将实际创建对象的代码与使用代码分离。</p><p><strong>注意：</strong></p><ol><li>产品子类和工厂子类都需要有一个的接口或基类来进行限制。</li></ol><h2 id="细节" tabindex="-1"><a class="header-anchor" href="#细节" aria-hidden="true">#</a> 细节</h2><p>定义一个创建对象的接口，让其子类自己决定实例化哪一个工厂类，工厂模式使其创建过程延迟到子类进行。</p><p><strong>何时使用：</strong> 计划在不同条件下创建不同实例时。</p><p><strong>实现方式：</strong> 定义抽象工厂和抽象抽象产品来限定。</p><p><strong>优点：</strong></p><ol><li>可以避免创建者和具体产品之间的紧密耦合。</li><li><em>单一职责原则</em>。 可以将产品创建代码放在程序的单一位置， 从而使得代码更容易维护。</li><li><em>开闭原则</em>。 无需更改现有客户端代码， 就可以在程序中引入新的产品类型。</li></ol><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> abc <span class="token keyword">import</span> ABCMeta<span class="token punctuation">,</span> abstractmethod


<span class="token keyword">class</span> <span class="token class-name">Product</span><span class="token punctuation">(</span>metaclass<span class="token operator">=</span>ABCMeta<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    定义工厂方法所创建的产品的接口
    &quot;&quot;&quot;</span>

    <span class="token decorator annotation punctuation">@abstractmethod</span>
    <span class="token keyword">def</span> <span class="token function">echo</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 子类必须实现该方法，用来限定子类</span>
        <span class="token keyword">pass</span>


<span class="token keyword">class</span> <span class="token class-name">ConcreteProductA</span><span class="token punctuation">(</span>Product<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    具体的产品, 实现了product的接口
    &quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">echo</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>__class__<span class="token punctuation">.</span>__name__<span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">ConcreteProductB</span><span class="token punctuation">(</span>Product<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    具体的产品, 实现了product的接口
    &quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">echo</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>__class__<span class="token punctuation">.</span>__name__<span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Creator</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    声明了工厂方法, 该方法返回一个Product类型的对象
    &quot;&quot;&quot;</span>

    <span class="token decorator annotation punctuation">@abstractmethod</span>
    <span class="token keyword">def</span> <span class="token function">create</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>


<span class="token keyword">class</span> <span class="token class-name">ConcreteCreatorA</span><span class="token punctuation">(</span>Creator<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    重定义, 返回一个ConcreteProduct实例
    &quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">create</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 这里可以加判断</span>
        <span class="token keyword">return</span> ConcreteProductA<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">ConcreteCreatorB</span><span class="token punctuation">(</span>Creator<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">create</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> ConcreteProductB<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    factory_a <span class="token operator">=</span> ConcreteCreatorA<span class="token punctuation">(</span><span class="token punctuation">)</span>
    product <span class="token operator">=</span> factory_a<span class="token punctuation">.</span>create<span class="token punctuation">(</span><span class="token punctuation">)</span>
    product<span class="token punctuation">.</span>echo<span class="token punctuation">(</span><span class="token punctuation">)</span>

    factory_b <span class="token operator">=</span> ConcreteCreatorB<span class="token punctuation">(</span><span class="token punctuation">)</span>
    product <span class="token operator">=</span> factory_b<span class="token punctuation">.</span>create<span class="token punctuation">(</span><span class="token punctuation">)</span>
    product<span class="token punctuation">.</span>echo<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),c=[o];function p(i,l){return s(),a("div",null,c)}const r=n(e,[["render",p],["__file","gongchangfangfamoshi.html.vue"]]);export{r as default};
