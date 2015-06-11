ServiceWorker Claim
===================

Following the documentation in [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Clients/claim), this is an example to illustrate the `claim` functionallity in ServiceWorkers.

Demo
====
[DEMO LINK](https://arcturus.github.io/serviceworker-claim/)

What you should see:
- Enable ServiceWorkers
- Visit the link
- You will see appearing the following message: Controller change caused by a claim
- When navigating through the two pages you will see in the SW log messaging about the worker handling those request.
- If you reload the page, you won't get the claim message, since this claim happens just on `activate`.
