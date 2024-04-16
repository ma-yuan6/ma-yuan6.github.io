import{_ as t,o as e,c as a,e as r}from"./app-d188f79b.js";const n={},i=r('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p><strong>事务</strong>是指逻辑上的一组操作，组成这组操作的各个单元，要不全成功要不全失败不可再分。</p><h2 id="事务的特性" tabindex="-1"><a class="header-anchor" href="#事务的特性" aria-hidden="true">#</a> 事务的特性</h2><ul><li><p><strong>原子性（Atomicity）</strong></p><p>事务是一个不可分割的工作单位，事务中的操作要么都发生，要么都不发生。</p></li><li><p><strong>一致性（Consistency）</strong></p><p>事务前后数据的完整性必须保持一致。</p><p>事务开始和结束时，外部数据一致。</p><p>在整个事务过程中，操作是连续的。</p></li><li><p><strong>隔离性（Isolation</strong></p><p>多个用户并发访问数据库时，一个用户的事务不能被其它用户的事物所干扰，多个并发事务之间的数据要相互隔离。</p></li><li><p><strong>持久性（Durability</strong></p></li></ul><p>一个事务一旦被提交，它对数据库中的数据改变就是永久性的。</p><h2 id="事务隔离级别" tabindex="-1"><a class="header-anchor" href="#事务隔离级别" aria-hidden="true">#</a> 事务隔离级别</h2><p>事务隔离性存在隔离级别，理论存在4个级别：读未提交、读已提交、可重复读、序列化（串行化）。</p><h3 id="事务并发引起的三大问题" tabindex="-1"><a class="header-anchor" href="#事务并发引起的三大问题" aria-hidden="true">#</a> 事务并发引起的三大问题</h3><ul><li><strong>脏读</strong>：一个事务读取了另一个事务未提交的数据。</li><li><strong>不可重复读</strong>：一个事务还未提交，读取了另一个事务使用update和delete语句后，提交事务产生了不同的结果集。</li><li><strong>幻读</strong>：同一个查询还未提交，读取了另一个事务使用insert语句后。提交后，产生了不同的结果集。</li></ul><h3 id="数据库的四个隔离级别" tabindex="-1"><a class="header-anchor" href="#数据库的四个隔离级别" aria-hidden="true">#</a> 数据库的四个隔离级别</h3><ul><li><p><strong>读未提交(Read Uncommitted)</strong>：一个事务还没提交时，它做的变更就能被别的事务看到。解决更新丢失问题。</p><p>如果一个事务已经开始写操作，那么其他事务则不允许同时进行写操作，但允许其他事务读此行数据。</p></li><li><p><strong>读已提交(Read Committed)</strong>：一个事务提交之后，它做的变更才会被其他事务看到。解决了脏读。</p><p>读取数据的事务允许其他事务继续访问（访问指读和写）该行数据，但是未提交的写事务将会禁止其他事务访问该行。</p></li><li><p><strong>可重复读取(Repeatable Read)</strong>：可重复读是指，一个事务执行过程中看到的数据，总是跟这个事务在启动时看到的数据是一致的。解决了不可重复读取和脏读取，但是有时可能出现幻读数据。</p><p>读取数据的事务将会禁止写事务(但允许读事务)，写事务则禁止任何其他事务。Mysql默认使用该隔离级别。</p></li><li><p><strong>串行化(Serializable)</strong>：对于同一行记录，“写”会加“写锁”，“读”会加“读锁”。</p><p>当出现读写锁冲突的时候，后访问的事务必须等前一个事务执行完成，才能继续执行。解决了幻读的提供严格的事务隔离。它要求事务序列化执行，事务只能一个接着一个地执行，不能并发执行。</p></li></ul><h3 id="不同隔离级别可以解决的问题" tabindex="-1"><a class="header-anchor" href="#不同隔离级别可以解决的问题" aria-hidden="true">#</a> 不同隔离级别可以解决的问题</h3><table><thead><tr><th>隔离级别</th><th style="text-align:center;">Read Uncommitted</th><th style="text-align:center;">Read Committed</th><th style="text-align:center;">Repeatable Read（默认）</th><th style="text-align:center;">Serializable</th></tr></thead><tbody><tr><td>脏读</td><td style="text-align:center;">✔︎</td><td style="text-align:center;">✗</td><td style="text-align:center;">✗</td><td style="text-align:center;">✗</td></tr><tr><td>不可重复读</td><td style="text-align:center;">✔︎</td><td style="text-align:center;">✔︎</td><td style="text-align:center;">✗</td><td style="text-align:center;">✗</td></tr><tr><td>幻读</td><td style="text-align:center;">✔︎</td><td style="text-align:center;">✔︎</td><td style="text-align:center;">✔︎</td><td style="text-align:center;">✗</td></tr></tbody></table>',13),l=[i];function d(s,o){return e(),a("div",null,l)}const c=t(n,[["render",d],["__file","SQLshiwu.html.vue"]]);export{c as default};
