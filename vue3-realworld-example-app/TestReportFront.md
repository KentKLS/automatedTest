# Test Report

### Use Case:
I'm a User, using the website for the first time, im gonna create an account, look at my profile (article created, article followed etc..)
I'm then gonna write an Article and publish it, someone gonna like this article
im then gonna check my profile page again to see the article I published and see who/how many people liked it (1)

### Test:
- I created a User named test, with email test@mail.com password test123: No issue on first run
On second run as you would expect I couldn't create the same user CAVEAT No error messages were displayed

- I logged in on the account of the User previously created (test) went to `/#/profile/Username` and `/#/profile/Username/favorites` (in our case Username is test)
and checked that the message "No articles are here... yet." was displayed on both pages. Everything good so far

- I logged in on the account "test" to try and post an article, so I went to  /#/article/create filled the various fields (Title with "Title", Descript with "Une Description", Body with "Le corp du texte", i didnt put any tag)
I then pressed the "Publish Article" button and checked i landed on the right URL (`/#/article/title`).Everything good so far

- I logged in on another account ("test0" which was created via backend Seeder) to like the article "test" had published, when clicking the like button i noticed there were no visual feedback (the 0 didn't change into a 1 as expected), i then checked if a request was made and successful and asserted that the request was indeed made and successful. i checked further by going to the `/#/profile/test0/favorites` and checked for the presence of the article there. it was indeed there asserting once more than the issue is only on the visual feedback.

- Lasty i logged back on the user 'test' went to `/#/profile/test/` and checked if the number of people having like the article was different than 0 (checked the element button with the arie-label="Favorite article" inner text) this test ended in a failure because as stated previously the visual feedback for following an article does not seem to be working as intended

Here you can find the video of the full test :
[Video](/home/quentinsirjean/vue3-realworld-example-app/cypress/videos/UseCase.cy.ts.mp4)

