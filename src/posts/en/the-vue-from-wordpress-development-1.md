---
title: 'The Vue From WordPress Development: 1'
date: 2025-04-16
summary: "Going over the work I've done so far, the reasoning behind some decisions and what I've learned"
banner:
    src: '/assets/images/blog-imgs/tvfw.webp'
    alt: "the vue from wordPress banner"
thumbnail:
    src: '/assets/images/blog-imgs/old-ui.webp' 
    alt: 'the vue from wordPress UI thumbnail'
---

I’ll going over the “Vue From WordPress” project development I started on the 14th of April. This project is about me learning Vue, WordPress and Docker. Docker for the containerization of the WordPress back-end and Vue to explore and display blog posts from WordPress.

## Where I Started

#### Original UI

![Original UI](/assets/images/blog-imgs/old-ui.webp)

The chose to start the development of the UI first as I believed at the time that this was the best place to start due to the UI wireframes being done. As I progressed, I began to feel that maybe I would have been better off developing the back-ends first before working on the UI.  This was due to the fact that I was making decisions for the UI on how parts of the code was to interact with the back end...if it existed. This feeling also alerted me to how this project could maybe...out of scope when the main aim of the project was to learn the basics of Vue, WordPress and Docker.

## What I did Next

I decided to scale back the project and do away with the authentication, skills logging and data visualization parts of the project. This solved the feeling of dread I had placed on myself in trying to complete this project in a short amount of time as now all I had to do was develop a UI for exploring and viewing posts delivered via REST API from WordPress. 

#### Low Fidelity Wireframe of Vue Frontend

![Low Fidelity Wireframe of Vue Frontend](/assets/images/blog-imgs/vue-from-wordpress-ui-wireframe(low-fi).webp)

This is now reflected in the UI wireframe above. It illustrates the UI for the exploration of posts and the viewing of individual posts. I usually don’t put too much emphasis on planning as in my experience nothing really goes according to plan. This doesn’t mean I don’t plan but it does mean that I make an effort to keep my plans flexible to allow or accommodate for future changes by not trying to plan for **everything**. 

## The UI Implementation

#### The UI Implementation

![New UI](/assets/images/blog-imgs/new-ui.webp)

If you are wondering why I’m still talking about UI despite my previous revelations about starting with the back-end first, that is because I decided to repurpose some of the code from the previous frontend work and finish some of the UI for the new frontend as shown above.

```html
<script setup>
    const posts = [1, 2, 3, 4, 5, 6];
</script>

<template>
    <article class="flex flex-col gap-[3em]">
        <section class="flex flex-col sm:flex-row gap-3" v-for="(post, index) in posts" :key="index">
            <img src="../assets/post-img.jpg"
            class="aspect-square object-cover shadow-md rounded-lg w-full sm:max-w-[300px] sm:h-[300px]" alt="post">

            <div class="flex flex-col justify-between p-3 rounded-lg bg-gray-800 text-white w-full shadow-md">
            <div>
                <a class="underline hover:text-blue-300" href="post-link">
                <h2 class="font-bold text-2xl mb-4 capitalize">post title</h2>
                </a>
                <p>post summary</p>
            </div>
            
            <p class="text-sm text-blue-300 capitalize">post date</p>
            </div>
        </section>
    </article>
</template>
```

As the code above shows, I’ve also used this opportunity to pick up tailwind CSS as opposed to using bootstrap 5 as I usually do when trying to build something fast. I have to say that I prefer the flexibility of tailwind. 

#### Tailwind CSS Classes

![New UI](/assets/images/blog-imgs/tailwind-css.webp)

I can also appreciate that it does not rely on 
```css 
!important
``` 
as this means that it is easy to add my own CSS in the rare cases that this is needed.

```js
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', () => {
    const search = ref("");

    return { search }
})
```

I also made use of pinia for state management. Although I could’ve made due without pinia, I figured it would be easier than trying to declare the state in the parent and pass it into other components. Using pinia allows me to effortlessly pass the same state to many components.

So far, I'm mostly done with the UI. The only thing left is the view for individual posts. I'll be moving on too learning wordpress and then building out the REST API side of the project then coming back to the UI and utilizing it.