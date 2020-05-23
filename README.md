# first-coding-challenge
this is the first challenge for the group !!

## Challenge Description
So, There are 6 txt files and all the files with prefix 'encryptedPrimaryKeys' are entitites which contain encoded PrimaryKeys respectively ; encryptedIV.txt file contains encoded IV . Now, all the files' texts are first encoded with base64 encoding multiple times(which is a secret !!) and then every character of that encoded string got converted into utf-8 charactercodes. Those '|' act as string splitters.

Now , final **Primary keys and IV** have certain lengths and all are **String* types :
### lengths
     const [ PrimaryKey1_length, PrimaryKey2_length, PrimaryKey3_length, PrimaryKey4_length, PrimaryKey5_length, IV_length ]   = [ 10, 14, 10, 12, 11, 16 ] 

### finally
After getting these PrimaryKeys and IV, you need to use them as input to get the winning word. There is a file called getReward.js
and that file has you winning word as encrypted format. after installing npm packages mentioned in the package.json dependency (or just simple **npm i** will be suffice ) make sure to run **npm run reward** or **node getReward.js** and you will be asked to give key inputs.
whoever will be winning, will be given a secret winner code as output. please submit to me or any admins to be featured in the page for one week !

## wait......
Please don't cheat as that will be making the fun timid ! The submission time is valid until monday midnight GMT !! 

**Happy Coding**
