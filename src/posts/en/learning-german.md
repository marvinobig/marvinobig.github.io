---
title: 'Learning German'
date: 2025-05-16
summary: "A tool I made to help speed up vocabulary acquisition in my journey to acquire German"
banner:
    src: '/assets/images/blog-imgs/learning-german.webp'
    alt: "learning german"
thumbnail:
    src: '/assets/images/blog-imgs/learning-german-tn.webp' 
    alt: 'snapshot of CLI tool repo'
---

## How I Use The CLI Tool to Learn German

I've spent the last month learning German. This can be a challenge, especially when it comes to expanding vocabulary. That’s why I built a Python CLI tool to streamline the process of translating and generating CSV files for Anki use. You can check it out on [GitHub](https://github.com/marvinobig/translation-script.git).

## My Workflow

Whenever I come across new German words, whether from articles, podcasts, or even YouTube videos, I note them down in a simple `.txt` file. This list becomes the input for the Translation Script. Running the script with German as the source language and English as the target language, I instantly get a CSV file ready for Anki, my go-to flashcard tool. The `.txt` can contain individual words or full paragraphs of text. The CLI tool will separate the sentences into individual words, each on a new line while removing any punctuation.

## Why I Built It

I created this script to speed up vocabulary acquisition. Manually looking up, translating, and formatting words for Anki was taking me too long (sometimes an hour+). The script automates this, saving me around 30 to 60 minutes per session so far (likely to increase in the future as vocabulary count increases). 

## Translation Accuracy Challenges

The script uses a translation [package](https://pypi.org/project/translate/) that isn't always as accurate as I would like, especially when processing a large number of words. Occasionally, incorrect translations appear, but the time saved makes it worth using. I can quickly spot and fix any mistakes while reviewing in Anki.

## A Typical Use Case

1. I collect German vocabulary from various sources.
2. I save these words in a `.txt` file.
3. I run the Translation Script with German to English.
4. The script generates a CSV file in the **/translations** folder.
5. I import the CSV into Anki for regular review.

This workflow has dramatically improved my ability to acquire new German words. Give it a try if you’re also learning a new language!
