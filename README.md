# mini-react-tutorial

## Introduction

When you find yourself struggling to quickly grasp React development skills through documentation, what better way to deeply understand React's core concepts than by building your own version of React? 

In this series, I'll guide you step-by-step on how to build React from scratch. You'll personally implement the core concepts of React from 2013 (`React 0.3`) to 2019 (`React 16.8`), gaining a profound understanding of their design principles and the trade-offs made during the evolution of the technology.

## Article
Read the full article here: [Unveiling React: A Deep Dive into the Principles through Building Mini-React (I)](https://midori-portfolio.vercel.app/blog/mini-react-1)

## How to Set Up

```bash
pnpm i
pnpm run dev
```

## Overview

This series will be divided into three parts. The features we'll implement include:

### I: Basic Feature Implementation

- **Render:** Introduced in `React 0.13 (2015)`, the render function is used to render the virtual DOM to the real DOM.
- **JSX:** Also introduced in `React 0.13 (2015)`, JSX syntax provides a convenient way to write component structures and converts it into calls to the createElement function.

### II: Enhanced Core Features (To be updated)

- **Task Scheduler & Fiber:** Introduced in `React 16 (2017)`, the Fiber architecture is a redesigned scheduler used to implement priority scheduling of component updates, preventing render blocking.
- **VDOM:** In `React 0.3 (2013)`, the concept of virtual DOM was introduced to compare and update the real DOM, improving performance.
- **Event Binding:** Also introduced in `React 0.3 (2013)`, event binding functionality allows components to respond to user interactions.

### III: Advanced Features and State Management (To be updated)

- **Diff Algorithm:** In `React 0.3 (2013)`, the diff algorithm based on virtual DOM was introduced to compare differences in the virtual DOM, minimizing DOM operations and improving performance.
- **Function Component:** In `React 16.8 (2019)`, Hooks were introduced, including useState and useEffect, as well as the implementation of function components.
- **useState:** Also introduced in `React 16.8 (2019)`, the useState hook allows function components to have their own state.
- **useEffect:** Also introduced in `React 16.8 (2019)`, the useEffect hook is used to handle component side effects such as data fetching and subscriptions.