---
layout: post
title: Starting a daily log
excerpt: here we goooo 🏃🏼‍♂️
dailylog: true
category: Daily Log
---

Took me some time to understand liquid and classify the posts based on front-matter. So as per the present config,
<ul class="list">
    <li>
        Posts with front-matter tag <code>dailylog</code> set to <code>true</code> will populate under the <a href="/dailylog">/dailylog</a> section. These posts would be hidden from the homepage and related posts list.
    </li>
    <li>
        Posts without the above FM tag would get listed normally on the homepage and other places.
    </li>
    <li>
        Since the jekyll-paginator <a href="https://github.com/jekyll/jekyll-paginate/issues/6" target="_blank">doesn't support</a> this kind of setup yet (it gets all messed up), I have removed that patch of code from index.html.
    </li>
</ul>
here we goooo 🏃🏼‍♂️