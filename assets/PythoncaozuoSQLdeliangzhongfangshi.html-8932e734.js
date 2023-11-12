import{_ as n,o as s,c as a,e}from"./app-492d0018.js";const t={},p=e(`<h2 id="pymyql" tabindex="-1"><a class="header-anchor" href="#pymyql" aria-hidden="true">#</a> pymyql</h2><p>PyMySQL 是在 Python3.x 版本中用于连接 MySQL 服务器的一个库，废话不多说，直接开始。</p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip install pymysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="数据库连接" tabindex="-1"><a class="header-anchor" href="#数据库连接" aria-hidden="true">#</a> 数据库连接</h3><p>pymysql 提供 connect() 用于数据库连接。我们需要指定以常用参数，方便确定数据库的位置以及编码方式：</p><ul><li>host： Mysql 地址，远程数据库的话用 IP地址</li><li>user：Mysql 用户名</li><li>password：密码</li><li>database：数据库库名</li><li>port ：Mysql 端口，如果有手动更改过的话， 一般默认是 3306</li><li>charset：编码方式</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># coding: utf-8</span>

<span class="token keyword">import</span> pymysql

host <span class="token operator">=</span> <span class="token string">&#39;localhost&#39;</span>  <span class="token comment"># 地址远程的话用 IP</span>
user <span class="token operator">=</span> <span class="token string">&#39;root&#39;</span>  <span class="token comment"># Mysql 用户名</span>
password <span class="token operator">=</span> <span class="token string">&#39;123&#39;</span>  <span class="token comment"># 密码</span>
database <span class="token operator">=</span> <span class="token string">&#39;Database&#39;</span>  <span class="token comment"># 库名</span>
dbconnect <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>host<span class="token operator">=</span>host<span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">3306</span><span class="token punctuation">,</span> user<span class="token operator">=</span>user<span class="token punctuation">,</span> password<span class="token operator">=</span>password<span class="token punctuation">,</span> database<span class="token operator">=</span>database<span class="token punctuation">,</span>
                            charset<span class="token operator">=</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建库建表" tabindex="-1"><a class="header-anchor" href="#建库建表" aria-hidden="true">#</a> 建库建表</h3><p>pymsql 操作数据库一般有以下三个步骤：</p><ol><li>连接数据库</li><li>创建游标对象</li><li>执行 SQL 语句</li><li>插入、更新、删除操作需要提交</li><li>关闭连接</li></ol><p>我们可以使用 cursor() 创建游标对象，execute() 执行 SQL 语句。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pymysql

dbconnect <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span> user<span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span> password<span class="token operator">=</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">,</span> database<span class="token operator">=</span><span class="token string">&#39;studet&#39;</span><span class="token punctuation">)</span>
dbcursor <span class="token operator">=</span> dbconnect<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 创建游标</span>

<span class="token comment"># 使用预处理语句创建表</span>
sql <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;CREATE TABLE student (
         NAME  CHAR(20) NOT NULL,
         AGE INT,  
         SEX CHAR(1)&quot;&quot;&quot;</span>
dbcursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>   <span class="token comment"># 执行 sql 语句</span>
dbconnect<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 关闭数据库连接</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插入数据" tabindex="-1"><a class="header-anchor" href="#插入数据" aria-hidden="true">#</a> 插入数据</h3><p>和上面一样，先创建游标对象，再执行 SQL 语句，不过 <strong>需要加上 commit</strong>。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pymysql

dbconnect <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span> user<span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span> password<span class="token operator">=</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">,</span> database<span class="token operator">=</span><span class="token string">&#39;studet&#39;</span><span class="token punctuation">)</span>
dbcursor <span class="token operator">=</span> dbconnect<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 创建游标</span>

<span class="token comment"># SQL 插入语句</span>
sql <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;INSERT INTO student (NAME, AGE, SEX)
         VALUES (&#39;Ma&#39;, 20, &#39;M&#39;)&quot;&quot;&quot;</span>

cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>  <span class="token comment"># 执行sql语句</span>
db<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 提交到数据库执行</span>
db<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 关闭数据库连接</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新与删除" tabindex="-1"><a class="header-anchor" href="#更新与删除" aria-hidden="true">#</a> 更新与删除</h3><p><strong>所有操作和上面都一样的，只需要修改 SQL。千万不要忘记 commit 操作就行，否则 SQL 语句不会生效。</strong></p><h3 id="回滚" tabindex="-1"><a class="header-anchor" href="#回滚" aria-hidden="true">#</a> 回滚</h3><p>对于支持事务的数据库， 在 Python 数据库编程中，<strong>当游标建立之时，就自动开始了一个隐形的数据库事务</strong>。commit() 方法提交游标的所有更新操作，rollback() 方法回滚 <strong>当前游标</strong> 的所有操作。每一个方法都开启一个新的事务。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pymysql
 
<span class="token comment"># 打开数据库连接</span>
db <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>
                     user<span class="token operator">=</span><span class="token string">&#39;testuser&#39;</span><span class="token punctuation">,</span>	
                     password<span class="token operator">=</span><span class="token string">&#39;test123&#39;</span><span class="token punctuation">,</span>
                     database<span class="token operator">=</span><span class="token string">&#39;TESTDB&#39;</span><span class="token punctuation">)</span>
 
<span class="token comment"># 使用cursor()方法获取操作游标 </span>
cursor <span class="token operator">=</span> db<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
 
<span class="token comment"># SQL 删除语句</span>
sql <span class="token operator">=</span> <span class="token string">&quot;DELETE FROM EMPLOYEE WHERE AGE &gt; %s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
   <span class="token comment"># 执行SQL语句</span>
   cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
   <span class="token comment"># 提交修改</span>
   db<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">except</span><span class="token punctuation">:</span>
   <span class="token comment"># 发生错误时回滚</span>
   db<span class="token punctuation">.</span>rollback<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
db<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sql-alchemy" tabindex="-1"><a class="header-anchor" href="#sql-alchemy" aria-hidden="true">#</a> SQL Alchemy</h2>`,22),o=[p];function c(l,i){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","PythoncaozuoSQLdeliangzhongfangshi.html.vue"]]);export{u as default};
