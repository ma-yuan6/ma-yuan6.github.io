import{_ as s,r as d,o as r,c as a,a as e,b as t,d as i,e as l}from"./app-9e62998e.js";const o={},c=l(`<h2 id="_01、sql语句执行顺序" tabindex="-1"><a class="header-anchor" href="#_01、sql语句执行顺序" aria-hidden="true">#</a> 01、SQL语句执行顺序</h2><p>SQL语句执行顺序依次为：</p><p>FROM - ON - JOIN - <strong>WHERE</strong> - GROUP BY - WITH - <strong>HAVING</strong> - <strong>SELECT</strong> - DISTINCT - ORDER BY - LIMIT</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(8)  SELECT (9) DISTINCT 
(1)  FROM 
(3)  JOIN 
(2)  ON 
(4)  WHERE 
(5)  GROUP BY 
(6)  WITH {CUBE|ROLLUP} 
(7)  HAVING 
(10) ORDER BY 
(11) LIMIT 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02、timestampdiff-和时间戳字段直接相减的区别" tabindex="-1"><a class="header-anchor" href="#_02、timestampdiff-和时间戳字段直接相减的区别" aria-hidden="true">#</a> 02、TIMESTAMPDIFF()和时间戳字段直接相减的区别</h2><ul><li>使用 <code>end_time−start_time</code>两个时间戳的时间差的进制会是按照 100 的。比如相差1分钟，但查询出来的是100。</li><li>使用 <code>TIMESTAMPDIFF(second, start_time, end_time)</code> 两个时间戳相差超过1分钟的话，会是60。</li></ul><p><strong>比如：</strong></p><ul><li><code>2021-09-01 10:01:06</code> 与 <code>2021-09-01 10:00:00</code> 直接相减为106、使用函数为66。</li><li><code>2021-09-01 10:59:05</code> 与 <code>2021-09-01 11:00:05</code> 直接相减为4100 <code>(100*100 + 5)- (59 * 100 + 5) = 4100</code></li></ul><p><strong>参考：</strong></p>`,9),_={href:"https://blog.csdn.net/qq_41688840/article/details/123450457",target:"_blank",rel:"noopener noreferrer"},u={href:"https://blog.csdn.net/qq_40121580/article/details/106104032",target:"_blank",rel:"noopener noreferrer"};function m(v,h){const n=d("ExternalLinkIcon");return r(),a("div",null,[c,e("p",null,[e("a",_,[t("MYSQL中TIMESTAMPDIFF和时间戳字段直接相减的区别"),i(n)])]),e("p",null,[e("a",u,[t("MYSQL时间相关函数总结"),i(n)])])])}const I=s(o,[["render",m],["__file","SQLzhuyi.html.vue"]]);export{I as default};
