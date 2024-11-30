---
title: Building Components in Twig
date: "2020-07-15"
excerpt: Building reusable UI components in Twig can be challenging. Sharing how I created a flexible component library for a large PHP application with over 1000 Twig templates, focusing on consistency and ease of use.
---

This year, while working on a project, I was tasked with a UX overhaul of a web application built using Twig, SCSS, and PHP. With approximately 1000 Twig files in the codebase, the goal was to develop a component library that could be used easily and consistently for building user interfaces across the templates.

### First Version

I began constructing the UI library by creating a custom component, `CustomInput`. The natural choice was to utilize [Twig Macros](https://twig.symfony.com/doc/3.x/tags/macro.html). Below is a snapshot of the first version of the `CustomInput` component.

`gist:gjain574/535326186b5509624c6da6aa802c3daa#CustomInput - v1`

This version is essentially a simple Bootstrap input box with a label as the only parameter. Its usage is demonstrated below.

`gist:gjain574/535326186b5509624c6da6aa802c3daa#CustomInput Usage - v1`

### Second Version

While developing a _Date Picker Box_, I realized that I could reuse the `<CustomInput>` component by adding a 'datepicker' class to the input element. However, this was challenging with the existing pattern.

To accommodate the additional class, I introduced a parameter `additional_classes`, which is an array of classes.

`gist:gjain574/535326186b5509624c6da6aa802c3daa#CustomInput - v2`

The usage of additional classes like 'datepicker' and 'd-block' is shown in the snippet below.

`gist:gjain574/535326186b5509624c6da6aa802c3daa#CustomInput Usage - v2`

### Third Version

The final requirement was to handle custom HTML attributes. The previous version made it difficult to add custom attributes such as id, placeholder, and onclick.

To address this, I added an additional parameter, `attrs`.

`gist:gjain574/535326186b5509624c6da6aa802c3daa#CustomInput - v3`

The `attrs` parameter is an object containing _attribute names_ and _attribute values_ as key-value pairs. The usage of the final version is illustrated below.

`gist:gjain574/535326186b5509624c6da6aa802c3daa#CustomInput Usage - v3`