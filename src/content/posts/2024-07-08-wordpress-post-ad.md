﻿---
title: 在wordpress所有文章第二段落中插入广告
published: 2024-07-08
description: 
image: 
tags: [wordpress, 广告优化, 建站]
category: 
draft: false
---将下面这段代码添加到网站根目录下functions.php文件中，添加到文件的最后即可。如果你添加了没有生效，先清空缓存试试，再看看你使用的主题模板是否有单独的functions.php自定义文件调用。
<pre>function insert_after_first_paragraph($content) {
if (!is_single()) return $content;
$content_parts = explode('</p>', $content);
if (count($content_parts) > 1) {
$inserted_content = '<div class="inserted-content centered-content">这里改成你的广告代码或超链接</div>';
$content_parts .= '</p>' . $inserted_content;
$content = implode('</p>', $content_parts);
}
return $content;
}
add_filter('the_content', 'insert_after_first_paragraph');
function add_custom_styles() {
echo '<style>
.centered-content {
text-align: center;
margin: 20px 0;
}
.inserted-link {
* 这里不需要定义颜色，让它继承主题样式 */
font-weight: bold; /* 可选：使链接更明显 */
}
</style>';
}
add_action('wp_head', 'add_custom_styles');```
