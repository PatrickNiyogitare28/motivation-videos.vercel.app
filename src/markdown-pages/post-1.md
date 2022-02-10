---
slug: "/blog/ubuntu-installation"
date: "2022-02-10"
description: "When you create a Markdown file, you can include a set of key/value pairs that can be used to provide additional data relevant to specific pages in the GraphQL data layer. This data is called “frontmatter” and is denoted by the triple dashes at the start and end of the block."
title: "Shortcut Installation in Ubunt"
---


![image description](https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500)

When you create a Markdown file, you can include a set of key/value pairs that can be used to provide additional data relevant to specific pages in the GraphQL data layer. This data is called “frontmatter” and is denoted by the triple dashes at the start and end of the block. This block will be parsed by gatsby-transformer-remark as YAML. You can then query the data through the GraphQL API from your React components.

```js
import React from 'react'
const App =  () => {
    return <div>Hello</div>
}
```