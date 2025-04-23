---
title: 'Laravel'
date: 2025-04-23
summary: "My experience working with Laravel for a personal project"
banner:
    src: '/assets/images/blog-imgs/tvfw.webp'
    alt: "the vue from laravel banner"
thumbnail:
    src: '/assets/images/blog-imgs/vue-laravel-be.webp' 
    alt: 'erd diagram for laravel app'
---


I've been focused on building out a project using Laravel and Vue js over the past two days. Mostly just because I didn't want to use wordpress for this and also because I wanted to learn Vue js plus more Laravel. 

#### Vue From Laravel DB ERD

![Vue From Laravel DB ERD](/assets/images/blog-imgs/vfl-erd.webp)

The image above is a bit pixelated but it does illustrate the simplicity of the project on the backend. It really only exists to power the Vue frontend so I didn't see the need to do more than just provide post data.

#### Vue From Laravel BE 1

![Vue From Laravel Backend](/assets/images/blog-imgs/vue-laravel-be.webp)

I did develop more than a REST API endpoint on the backend. The image above shows off a very minimalist dashboard with no authentication but it does provide basic CRUD functionality with pagination and makes use of Laravel's form validation features (form request classes).

```php
<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePostsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|unique:posts|string|max:255',
            'body' => 'required|string',
            'status' => 'boolean'
        ];
    }

    public function messages(): array {
        return [
            'title.required' => 'the title is required',
            'title.unique' => 'a post with the same title already exists',
            'title.string' => 'the title should be a word/words',
            'title.max' => 'the title is too long',

            'body.required' => 'the post needs content',
            'body.string' => 'the post needs to have valid content',

            'status.boolean' => 'the post status needs to be valid'
        ];
    }
}
```

These classes allow for easy validation implementation.

```php
public function store(StorePostsRequest $request)
{
    $newPost = Post::create($request->validated());

    return redirect(route('home'))->with('message', "post '{$newPost->title}' created");
}
```

![Vue From Laravel Backend Pagination Example](/assets/images/blog-imgs/vue-laravel-be-3.webp)

Laravel also provides a very easy way to implement pagination. It only takes calls to one method on the query (this takes the number of results on a page as an argument) and another on the result within a template view to render pagination links.

```php
public function index()
{
    $posts = Post::orderByDesc("created_at")->paginate(10);

    return view('dashboard', ['posts' => $posts]);
}
```

```php
$posts->links()
```

#### Vue From Laravel FE 1

![Vue From Laravel Frontend](/assets/images/blog-imgs/vue-frontend-3.webp)

The data seen in the above image is sent over through a call to an endpoint within the Laravel backend.

```js
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import ContentContainer from '@/components/ContentContainer.vue';
import moment from 'moment';

const post = ref(null);
const route = useRoute();

onMounted(async () => {
  try {
    const id = route.params.id;
    const url = `http://127.0.0.1:8000/api/v1/posts/${id}`;
    const request = await fetch(url);

    if (!request.ok) {
      throw new Error(`Request for post: ${id} failed`);
    }

    const response = await request.json();

    post.value = response.post;

  } catch (err) {
    console.error(`${err.message}`);
  }
});
```

```php
public function show(Post $post)
{
    return response()->json([
        'post' => $post
    ], 200);
}
```

```php
Route::prefix('v1')->group(function () {
    Route::apiResource('posts', PostController::class)->only(['index', 'show']);
});
```

This project really only took two days because I had other stuff going on in life and could not dedicate more time in a day to it but if I could, it would have only taken 5 hours and that is mostly due to the time I would need for the frontend (CSS). Laravel really does make developing a website/app quicker than almost every other option available.