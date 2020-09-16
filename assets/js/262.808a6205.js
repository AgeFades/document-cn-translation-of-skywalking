(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{475:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"ttl-time-to-live"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ttl-time-to-live"}},[t._v("#")]),t._v(" TTL Time To Live")]),t._v(" "),s("p",[t._v("在 SkyWalkin 中, 除了元数据外, 有两种类型的观测数据")]),t._v(" "),s("ol",[s("li",[t._v("记录, 包括 trace 和告警. 未来可能还包括日志.")]),t._v(" "),s("li",[t._v("指标, 包括如 p99/p95/p90/p75/p50, 热点图, 成功率, cpm(rpm) 等.\n指标又根据 分钟/小时/天/月 维度, 在存储中划分为不同索引或表.")])]),t._v(" "),s("p",[t._v("针对不同的类型, 你有以下设置:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置指标数据的超时. 超时到期后，指标数据将自动删除.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableDataKeeperExecutor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_CORE_ENABLE_DATA_KEEPER_EXECUTOR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关闭后，指标数据自动删除也将随之关闭.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("recordDataTTL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_CORE_RECORD_DATA_TTL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单位为分钟")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("minuteMetricsDataTTL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_CORE_MINUTE_METRIC_DATA_TTL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单位为分钟")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hourMetricsDataTTL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_CORE_HOUR_METRIC_DATA_TTL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("36")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单位为小时")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dayMetricsDataTTL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_CORE_DAY_METRIC_DATA_TTL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("45")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单位为天")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("monthMetricsDataTTL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_CORE_MONTH_METRIC_DATA_TTL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单位为月")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("recordDataTTL")]),t._v(" 影响 "),s("strong",[t._v("记录")]),t._v(" 数据.")]),t._v(" "),s("li",[s("code",[t._v("minuteMetricsDataTTL")]),t._v(", "),s("code",[t._v("hourMetricsDataTTL")]),t._v(", "),s("code",[t._v("dayMetricsDataTTL")]),t._v(" 和 "),s("code",[t._v("monthMetricsDataTTL")]),t._v(" 影响\n分钟/小时/天/月维度的指标数据.")])]),t._v(" "),s("h2",{attrs:{id:"elasticsearch-6-存储-ttl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-6-存储-ttl"}},[t._v("#")]),t._v(" ElasticSearch 6 存储 TTL")]),t._v(" "),s("p",[s("strong",[t._v("特别注意:")]),s("br"),t._v("\n由于 ElasticSearch 的特性, 它会在每次通过查询条件进行删除之后重建索引.\n这是一个非常重的操作, 会导致 ElasticSearch 服务挂起数秒钟.\n现在 ElasticSearch 中有上百个索引, 在上述情况下, 会导致 ElasticSearch 意外地停止响应.\n因此我们按天创建索引来避免执行按查询条件删除数据,\n然后直接删除整个过期的索引, 这是个高性能的操作, 向挂起说再见.")]),t._v(" "),s("p",[t._v("在 ElasticSearch 存储中, 有以下的配置.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这些TTL配置将覆盖核心模块中的相同配置。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("recordDataTTL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_STORAGE_ES_RECORD_DATA_TTL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单位为天")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("otherMetricsDataTTL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_STORAGE_ES_OTHER_METRIC_DATA_TTL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("45")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单位为天")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("monthMetricsDataTTL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_STORAGE_ES_MONTH_METRIC_DATA_TTL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单位为月")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("recordDataTTL")]),t._v(" 影响 "),s("strong",[t._v("记录")]),t._v(" 数据.")]),t._v(" "),s("li",[s("code",[t._v("otherMetricsDataTTL")]),t._v(" 影响 分钟/小时/天 维度的指标. "),s("code",[t._v("minuteMetricsDataTTL")]),t._v(", "),s("code",[t._v("hourMetricsDataTTL")]),t._v(" 和 "),s("code",[t._v("dayMetricsDataTTL")]),t._v(" 还保留, 但他们的单位改为了 "),s("strong",[t._v("天")]),t._v(". 如果你想手动设置他们, 请删除掉 "),s("code",[t._v("otherMetricsDataTTL")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("monthMetricsDataTTL")]),t._v(" 影响 月 维度的指标.")])])])}],!1,null,null,null);a.default=e.exports}}]);