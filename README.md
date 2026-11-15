# NTUT Cap Baseball Club Website

- GitHub Repository: https://github.com/Good9tTo9t/webclass-midterm
- GitHub Pages: https://good9tto9t.github.io/webclass-midterm/

# A. Project Introduction

## (a.) What is the purpose of your website?

The purpose of this website is to introduce cap baseball to potential members. It also explains the basic rules of the game, lets members see when the next practice will take place, and shows interested people how to join.

## (b.) Who are the intended users?

1. **Potential members:** NTUT students who are still looking for a club to join.
2. **Current members:** people who are already in the club. For them, the website is a hub for all the latest information.

## (c.) Why did you choose this topic?

I am the president of this club, and I want to let more people know about our club and what we do. Cap baseball is still relatively unknown, so I would like to introduce it to more people. The website can also answer common questions, such as how to join and how much the membership fee is.

# B. Website Structure

## (a.) The purpose of each HTML page

### Home (`index.html`)

![Home page](screenshots/index.png)

The purpose of this page is to impress visitors with the hero image at the top, followed by a basic introduction to the sport and the club.

### About Us (`about.html`)

![About Us page](screenshots/about.png)

This page introduces the history of our club, then the club officers, and finally provides links to our social media.

### Rules (`rules.html`)

![Rules page](screenshots/rules.png)

This page explains the basic rules of the game and teaches visitors how to throw a basic fastball.

### Schedule (`schedule.html`)

![Schedule page](screenshots/schedule.png)

This page shows club members the weekly practice time and recent game results, and includes a countdown clock to the next practice.

### Join Us (`join.html`)

![Join Us page](screenshots/join.png)

This page explains how to join our club and shows the membership fee. There is also a short quiz about the club and the rules of the game.

## (b.) How users navigate between pages

Users can move between pages by using the navigation bar at the very top of every page. The active tab is in a different color so users know which page they are on.

# C. HTML and CSS Explanation

## (a.) HTML elements

### 1. `<nav>`

![Navigation bar](screenshots/html-nav.png)

```html
<nav class="navbar" aria-label="主選單">
  <ul class="nav-list">
    <li class="nav-item"><a href="index.html" class="nav-link active" aria-current="page">首頁</a></li>
    <li class="nav-item"><a href="about.html" class="nav-link">關於我們</a></li>
    <li class="nav-item"><a href="rules.html" class="nav-link">規則教學</a></li>
    <li class="nav-item"><a href="schedule.html" class="nav-link">活動賽程</a></li>
    <li class="nav-item"><a href="join.html" class="nav-link">加入我們</a></li>
  </ul>
</nav>
```

The nav bar is simply an unordered list styled to display horizontally. It lets visitors jump between all pages of the site.

### 2. `<div>` (2×2 grid)

![2x2 grid](screenshots/html-grid.png)

```html
<div class="grid-2x2">
  <div class="grid-cell">
    <h3>新手友善</h3>
    <p>瓶蓋棒球比起棒球更好上手，只要花5分鐘就能丟出漂亮變化球。</p>
  </div>
  <div class="grid-cell">...</div>
  <div class="grid-cell">...</div>
  <div class="grid-cell">...</div>
</div>
```

This grid shows some brief promotional information. Basically, it is one big div with `display: grid;` and four smaller divs inside it.

### 3. `<table>`

![Table](screenshots/html-table.png)

```html
<table>
  <thead>
    <tr>
      <th>擊球情況</th>
      <th>判定結果</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>球擊出後碰到外野區域但未碰到全壘打牆</td>
      <td>一壘安打</td>
    </tr>
    ...
  </tbody>
</table>
```

This table shows how a hit is judged in cap baseball. A table fits well here since each hit has a situation and a result. `<table>` wraps the entire table, `<thead>` contains the header, and `<tbody>` holds the actual data. `<tr>` is one row, and `<th>` is a header cell (which is centered by default), and `<td>` is a normal data cell.

## (b.) CSS properties

### 1. `display: grid` / `grid-template-columns`

![Grid layout](screenshots/css-grid.png)

```css
.grid-2x2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 1rem;
}
```

`display: grid;` makes the outermost div a grid container, and `grid-template-columns: 1fr 1fr;` splits it into two columns of equal width (fr is short for fraction). The last two lines makes the card move down to the next line if the screen is too small. 

### 2. `display: flex` / `flex-wrap`

![Flex layout](screenshots/css-flex.png)

```css
.officer-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.officer-card {
    flex: 1;
    min-width: 200px;
}
```

For the officer cards, I used flexbox. `display: flex;` puts the three cards side by side in a row. `flex: 1;` lets each card take up an equal amout of space. `flex-wrap: wrap;` and `min-width: 200px;` moves the card down to the next line if the screen is too small. 

### 3. `:hover` / `transition`

![Hover effect](screenshots/css-hover.png)

```css
.grid-cell {
    transition: transform 0.2s, box-shadow 0.2s;
}

.grid-cell:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}
```

When the mouse hovers over the cell, `transform: translateY(-4px);` moves the cell up a little bit, and `box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);` adds some shadow, so the cell looks like a physical object floating. `transition: transform 0.2s, box-shadow 0.2s;` just smooths it so it doesn't jut out suddenly.

# D. JavaScript Explanation

## Feature 1: Cap Baseball Quiz

![Quiz](screenshots/quiz.png)

### What the feature does

This is a short quiz with four questions about the club and rules of the sport. After answering, visitors click submit and can see the results under every question, and a score is presented. The reset button resets the question to an unanswered state. 

### Code

```js
```

### How the code works

TODO

### How JavaScript interacts with the HTML elements

TODO

## Feature 2: Countdown to Next Practice

![Countdown](screenshots/countdown.png)

### What the feature does

TODO

### Code

```js
```

### How the code works

TODO

### How JavaScript interacts with the HTML elements

TODO

## Feature 3: Dynamic Copyright Information

![Copyright](screenshots/copyright.png)

### What the feature does

TODO

### Code

```js
```

### How the code works

TODO

### How JavaScript interacts with the HTML elements

TODO

# E. Reflection

## (a.) What was the most challenging part of this project?

TODO

## (b.) What did you learn?

TODO

## (c.) What would you improve if you had more time?

TODO