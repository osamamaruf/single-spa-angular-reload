# single-spa-angular-reload

Checkout the repo
Goto each folder and run

```
npm i 
npm run start

```

For angular's lazily loaded modules the webpage is reloaded(Notice in network tab in dev tools the zonejs singlespa are fetched again) which causes a flicker. Using `singleSpaNavigate(event)` does fix this but the back button gets broken.