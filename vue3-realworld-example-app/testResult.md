
> test:e2e:ci
> npm run build && concurrently -rk -s first "npm run serve" "cypress run --e2e -c baseUrl=http://localhost:4137"


> build
> vite build

vite v4.4.11 building for production...
transforming...
✓ 106 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                        0.74 kB │ gzip:  0.44 kB
dist/assets/Article-63b65494.css       0.08 kB │ gzip:  0.08 kB
dist/assets/Profile-769ca201.css       0.09 kB │ gzip:  0.09 kB
dist/assets/useProfile-9ccf278d.js     0.60 kB │ gzip:  0.35 kB
dist/assets/Login-79e64583.js          1.78 kB │ gzip:  0.96 kB
dist/assets/Register-78cce4fc.js       2.02 kB │ gzip:  1.00 kB
dist/assets/Profile-4ad01f89.js        2.12 kB │ gzip:  1.04 kB
dist/assets/EditArticle-2995fd32.js    2.56 kB │ gzip:  1.16 kB
dist/assets/Settings-5b4dcb27.js       2.92 kB │ gzip:  1.22 kB
dist/assets/Article-8f87f06a.js       48.55 kB │ gzip: 15.99 kB
dist/assets/index-20175721.js        104.69 kB │ gzip: 40.12 kB
✓ built in 1.85s

> serve
> vite preview --port 4137

  ➜  Local:   http://localhost:4137/
  ➜  Network: use --host to expose
  ➜  press h to show help

================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        12.17.4                                                                        │
  │ Browser:        Electron 106 (headless)                                                        │
  │ Node Version:   v16.20.2 (/usr/bin/node)                                                       │
  │ Specs:          7 found (UseCase.cy.ts, article.cy.ts, auth.cy.ts, favorite.cy.ts, follow.cy.t │
  │                 s, home.cy.ts, tag.cy.ts)                                                      │
  │ Searched:       cypress/e2e/**/*.cy.{js,jsx,ts,tsx}                                            │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  UseCase.cy.ts                                                                   (1 of 7)


  UseCase
    ✓ Create a New user (1820ms)
    ✓ Check that the User we just created does not have article nor follows articles (1247ms)
    ✓ Post a new article for the User created previously (2001ms)
    ✓ login another and like the post the previous user just created (1568ms)
    1) Check if User "test" has an article with one follower


  4 passing (16s)
  1 failing

  1) UseCase
       Check if User "test" has an article with one follower:
     AssertionError: Timed out retrying after 8000ms: Expected to find content: '1' within the element: <button.btn.btn-sm.pull-xs-right.btn-outline-primary> but never did.
      at Context.eval (webpack://vue3-realworld-example-app/./cypress/e2e/UseCase.cy.ts:55:0)




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        5                                                                                │
  │ Passing:      4                                                                                │
  │ Failing:      1                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  1                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     16 seconds                                                                       │
  │ Spec Ran:     UseCase.cy.ts                                                                    │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /home/quentinsirjean/vue3-realworld-example-app/cypress/screenshots/UseCase.cy.t     (1280x720)
     s/UseCase -- Check if User test has an article with one follower (failed).png                  


  (Video)

  -  Started compressing: Compressing to 32 CRF                                                     
  -  Finished compressing: 1 second                                                  

  -  Video output: /home/quentinsirjean/vue3-realworld-example-app/cypress/videos/UseCase.cy.ts.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  article.cy.ts                                                                   (2 of 7)


  Article
    post article
      ✓ jump to post detail page when submit create article form (2871ms)
      ✓ should render markdown correctly (936ms)
    delete article
      ✓ delete article (1046ms)


  3 passing (5s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        3                                                                                │
  │ Passing:      3                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     4 seconds                                                                        │
  │ Spec Ran:     article.cy.ts                                                                    │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started compressing: Compressing to 32 CRF                                                     
  -  Finished compressing: 0 seconds                                                 

  -  Video output: /home/quentinsirjean/vue3-realworld-example-app/cypress/videos/article.cy.ts.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  auth.cy.ts                                                                      (3 of 7)


  Auth
    Login and logout
      ✓ should login success when submit a valid login form (1396ms)
      ✓ should logout when click logout button (1016ms)
      ✓ should display error when submit an invalid form (password not match) (781ms)
      ✓ should display format error without API call when submit an invalid format (588ms)
      ✓ should not allow visiting login page when the user is logged in (799ms)
      ✓ should has credential header after login success (1235ms)
    Register
      ✓ should call register API and jump to home page when submit a valid form (1036ms)
      ✓ should display error message when submit the form that username already exist (992ms)
      ✓ should not allow visiting register page when the user is logged in (814ms)


  9 passing (9s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        9                                                                                │
  │ Passing:      9                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     8 seconds                                                                        │
  │ Spec Ran:     auth.cy.ts                                                                       │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started compressing: Compressing to 32 CRF                                                     
  -  Finished compressing: 0 seconds                                                 

  -  Video output: /home/quentinsirjean/vue3-realworld-example-app/cypress/videos/auth.cy.ts.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  favorite.cy.ts                                                                  (4 of 7)


  Favorite
    ✓ should jump to login page when click favorite article button given user not logged (915ms)
    ✓ should call favorite api and highlight favorite button when click favorite button (1009ms)


  2 passing (2s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        2                                                                                │
  │ Passing:      2                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     1 second                                                                         │
  │ Spec Ran:     favorite.cy.ts                                                                   │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started compressing: Compressing to 32 CRF                                                     
  -  Finished compressing: 0 seconds                                                 

  -  Video output: /home/quentinsirjean/vue3-realworld-example-app/cypress/videos/favorite.cy.ts.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  follow.cy.ts                                                                    (5 of 7)


  Follow
    ✓ should not display follow button when user not logged (826ms)
    ✓ should call follow user api when click follow user button (1141ms)


  2 passing (2s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        2                                                                                │
  │ Passing:      2                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     2 seconds                                                                        │
  │ Spec Ran:     follow.cy.ts                                                                     │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started compressing: Compressing to 32 CRF                                                     
  -  Finished compressing: 0 seconds                                                 

  -  Video output: /home/quentinsirjean/vue3-realworld-example-app/cypress/videos/follow.cy.ts.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  home.cy.ts                                                                      (6 of 7)


  Homepage
    ✓ should can access home page (719ms)
    ✓ should highlight Global Feed when home page loaded (216ms)
    ✓ should display article when page loaded (219ms)
    ✓ should read more information of the first articles (411ms)
    ✓ should highlight Home nav-item top menu bar when page load (116ms)
    ✓ should jump to next page when click page 2 in pagination (290ms)
    ✓ should display popular tags in home page (213ms)


  7 passing (2s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        7                                                                                │
  │ Passing:      7                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     2 seconds                                                                        │
  │ Spec Ran:     home.cy.ts                                                                       │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started compressing: Compressing to 32 CRF                                                     
  -  Finished compressing: 0 seconds                                                 

  -  Video output: /home/quentinsirjean/vue3-realworld-example-app/cypress/videos/home.cy.ts.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  tag.cy.ts                                                                       (7 of 7)


  Tag
    ✓ should display correct tags when page loaded (816ms)
    ✓ should show right articles of tag (318ms)


  2 passing (1s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        2                                                                                │
  │ Passing:      2                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     1 second                                                                         │
  │ Spec Ran:     tag.cy.ts                                                                        │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started compressing: Compressing to 32 CRF                                                     
  -  Finished compressing: 0 seconds                                                 

  -  Video output: /home/quentinsirjean/vue3-realworld-example-app/cypress/videos/tag.cy.ts.mp4


================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✖  UseCase.cy.ts                            00:16        5        4        1        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  article.cy.ts                            00:04        3        3        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  auth.cy.ts                               00:08        9        9        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  favorite.cy.ts                           00:01        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  follow.cy.ts                             00:02        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  home.cy.ts                               00:02        7        7        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  tag.cy.ts                                00:01        2        2        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✖  1 of 7 failed (14%)                      00:37       30       29        1        -        -  


> test:e2e:ci
> npm run build && concurrently -rk -s first "npm run serve" "cypress run --e2e -c baseUrl=http://localhost:4137"


> build
> vite build

vite v4.4.11 building for production...
transforming...
✓ 106 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                        0.74 kB │ gzip:  0.44 kB
dist/assets/Article-63b65494.css       0.08 kB │ gzip:  0.08 kB
dist/assets/Profile-769ca201.css       0.09 kB │ gzip:  0.09 kB
dist/assets/useProfile-9ccf278d.js     0.60 kB │ gzip:  0.35 kB
dist/assets/Login-79e64583.js          1.78 kB │ gzip:  0.96 kB
dist/assets/Register-78cce4fc.js       2.02 kB │ gzip:  1.00 kB
dist/assets/Profile-4ad01f89.js        2.12 kB │ gzip:  1.04 kB
dist/assets/EditArticle-2995fd32.js    2.56 kB │ gzip:  1.16 kB
dist/assets/Settings-5b4dcb27.js       2.92 kB │ gzip:  1.22 kB
dist/assets/Article-8f87f06a.js       48.55 kB │ gzip: 15.99 kB
dist/assets/index-20175721.js        104.69 kB │ gzip: 40.12 kB
✓ built in 2.07s

> serve
> vite preview --port 4137

  ➜  Local:   http://localhost:4137/
  ➜  Network: use --host to expose
  ➜  press h to show help

================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        12.17.4                                                                        │
  │ Browser:        Electron 106 (headless)                                                        │
  │ Node Version:   v16.20.2 (/usr/bin/node)                                                       │
  │ Specs:          7 found (UseCase.cy.ts, article.cy.ts, auth.cy.ts, favorite.cy.ts, follow.cy.t │
  │                 s, home.cy.ts, tag.cy.ts)                                                      │
  │ Searched:       cypress/e2e/**/*.cy.{js,jsx,ts,tsx}                                            │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  UseCase.cy.ts                                                                   (1 of 7)


  UseCase
    ✓ Create a New user (1808ms)
    ✓ Check that the User we just created does not have article nor follows articles (1248ms)
    ✓ Post a new article for the User created previously (1975ms)
    ✓ login another and like the post the previous user just created (1579ms)
    1) Check if User "test" has an article with one follower


  4 passing (16s)
  1 failing

  1) UseCase
       Check if User "test" has an article with one follower:
     AssertionError: Timed out retrying after 8000ms: Expected to find content: '1' within the element: <button.btn.btn-sm.pull-xs-right.btn-outline-primary> but never did.
      at Context.eval (webpack://vue3-realworld-example-app/./cypress/e2e/UseCase.cy.ts:55:0)




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        5                                                                                │
  │ Passing:      4                                                                                │
  │ Failing:      1                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  1                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     16 seconds                                                                       │
  │ Spec Ran:     UseCase.cy.ts                                                                    │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /home/quentinsirjean/vue3-realworld-example-app/cypress/screenshots/UseCase.cy.t     (1280x720)
     s/UseCase -- Check if User test has an article with one follower (failed).png                  


  (Video)

  -  Started compressing: Compressing to 32 CRF                                                     
  -  Finished compressing: 1 second                                                  

  -  Video output: /home/quentinsirjean/vue3-realworld-example-app/cypress/videos/UseCase.cy.ts.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  article.cy.ts                                                                   (2 of 7)


  Article
    post article
      ✓ jump to post detail page when submit create article form (2712ms)
      ✓ should render markdown correctly (944ms)
    delete article
      ✓ delete article (1056ms)


  3 passing (5s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        3                                                                                │
  │ Passing:      3                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     4 seconds                                                                        │
  │ Spec Ran:     article.cy.ts                                                                    │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started compressing: Compressing to 32 CRF                                                     
  -  Finished compressing: 0 seconds                                                 

  -  Video output: /home/quentinsirjean/vue3-realworld-example-app/cypress/videos/article.cy.ts.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  auth.cy.ts                                                                      (3 of 7)


  Auth
    Login and logout
      ✓ should login success when submit a valid login form (1386ms)
      ✓ should logout when click logout button (999ms)
      ✓ should display error when submit an invalid form (password not match) (775ms)
      ✓ should display format error without API call when submit an invalid format (576ms)
      ✓ should not allow visiting login page when the user is logged in (812ms)
      ✓ should has credential header after login success (1215ms)
    Register
      ✓ should call register API and jump to home page when submit a valid form (1023ms)
      ✓ should display error message when submit the form that username already exist (976ms)
      ✓ should not allow visiting register page when the user is logged in (809ms)


  9 passing (9s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        9                                                                                │
  │ Passing:      9                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     8 seconds                                                                        │
  │ Spec Ran:     auth.cy.ts                                                                       │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started compressing: Compressing to 32 CRF                                                     
  -  Finished compressing: 0 seconds                                                 

  -  Video output: /home/quentinsirjean/vue3-realworld-example-app/cypress/videos/auth.cy.ts.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  favorite.cy.ts                                                                  (4 of 7)


  Favorite
    ✓ should jump to login page when click favorite article button given user not logged (884ms)
    ✓ should call favorite api and highlight favorite button when click favorite button (1008ms)


  2 passing (2s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        2                                                                                │
  │ Passing:      2                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     1 second                                                                         │
  │ Spec Ran:     favorite.cy.ts                                                                   │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started compressing: Compressing to 32 CRF                                                     
  -  Finished compressing: 0 seconds                                                 

  -  Video output: /home/quentinsirjean/vue3-realworld-example-app/cypress/videos/favorite.cy.ts.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  follow.cy.ts                                                                    (5 of 7)


  Follow
    ✓ should not display follow button when user not logged (860ms)
    ✓ should call follow user api when click follow user button (1116ms)


  2 passing (2s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        2                                                                                │
  │ Passing:      2                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     2 seconds                                                                        │
  │ Spec Ran:     follow.cy.ts                                                                     │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started compressing: Compressing to 32 CRF                                                     
  -  Finished compressing: 0 seconds                                                 

  -  Video output: /home/quentinsirjean/vue3-realworld-example-app/cypress/videos/follow.cy.ts.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  home.cy.ts                                                                      (6 of 7)


  Homepage
    ✓ should can access home page (715ms)
    ✓ should highlight Global Feed when home page loaded (218ms)
    ✓ should display article when page loaded (201ms)
    ✓ should read more information of the first articles (408ms)
    ✓ should highlight Home nav-item top menu bar when page load (117ms)
    ✓ should jump to next page when click page 2 in pagination (282ms)
    ✓ should display popular tags in home page (224ms)


  7 passing (2s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        7                                                                                │
  │ Passing:      7                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     2 seconds                                                                        │
  │ Spec Ran:     home.cy.ts                                                                       │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started compressing: Compressing to 32 CRF                                                     
  -  Finished compressing: 0 seconds                                                 

  -  Video output: /home/quentinsirjean/vue3-realworld-example-app/cypress/videos/home.cy.ts.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  tag.cy.ts                                                                       (7 of 7)


  Tag
    ✓ should display correct tags when page loaded (806ms)
    ✓ should show right articles of tag (327ms)


  2 passing (1s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        2                                                                                │
  │ Passing:      2                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     1 second                                                                         │
  │ Spec Ran:     tag.cy.ts                                                                        │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started compressing: Compressing to 32 CRF                                                     
  -  Finished compressing: 0 seconds                                                 

  -  Video output: /home/quentinsirjean/vue3-realworld-example-app/cypress/videos/tag.cy.ts.mp4


================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✖  UseCase.cy.ts                            00:16        5        4        1        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  article.cy.ts                            00:04        3        3        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  auth.cy.ts                               00:08        9        9        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  favorite.cy.ts                           00:01        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  follow.cy.ts                             00:02        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  home.cy.ts                               00:02        7        7        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  tag.cy.ts                                00:01        2        2        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✖  1 of 7 failed (14%)                      00:36       30       29        1        -        -  

