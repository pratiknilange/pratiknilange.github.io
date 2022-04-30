---
layout: post
title: Starting a daily log
excerpt: here we goooo 🏃🏼‍♂️
tags: dailylog
addres: <link href="/assets/css/syntax.css" rel="stylesheet" >
---

Took me some time to understand liquid and classify the posts based on front-matter. So as per the present config,
+ Posts with front-matter tag ``dailylog`` set to <code>true</code> will populate under the <a href="#">/dailylog</a> section. These posts would be hidden from the homepage and related posts list.
+ Posts without the above FM tag would get listed normally on the homepage and other places.
+ Since the jekyll-paginator <a href="https://github.com/jekyll/jekyll-paginate/issues/6" target="_blank">doesn't support</a> this kind of setup yet (it gets all messed up), I have removed that patch of code from index.html.

here we goooo 🏃🏼‍♂️

**⚡ Update - It's a lot easier to maintain dailylog as a tag, hence [tags/dailylog](/tags/#dailylog).**