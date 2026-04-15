## What is one thing you learned about how JavaScript interacts with the DOM?

One thing I learned is that JavaScript can connect directly to HTML elements by selecting them from the page and then changing how they behave. In this lab, I used querySelector() to find the menu button, the navigation menu, and the alert button. After that, I used event listeners so the page could respond when a user clicked something. This helped me understand that JavaScript works with the DOM by finding elements, listening for actions, and updating the page based on those actions.

## What debugging help did AI provide that you wouldn’t have found as quickly on your own?

AI helped me figure out why my menu was not working even though my alert button was working. The issue was that my JavaScript used #nav-Menu, but my HTML used id="nav-menu", so the selector did not match exactly. AI helped me narrow the problem down faster by checking the script and HTML together and explaining that JavaScript selectors need to match element IDs exactly, including capitalization. That saved me time because I might not have noticed that small difference right away.

## How might these techniques scale to more complex web applications?

These techniques could scale to more complex web applications because larger websites still rely on the same core ideas. Developers still need to select elements, respond to events, and update content on the page. A simple menu toggle in this lab uses the same type of logic that could later be used for dropdown menus, modal windows, form validation, search filters, or dynamic dashboards. This lab showed me that even small interactive features are built from the same basic JavaScript concepts used in larger applications.