#Write a node.js pgm
*(express can be used)*

Run on port 8547, When POST to

**http://localhost:8547/test/{number}?user={userName}**,

it should respond with all post params as **valid JSON** along with number and userName from the URL itself.


* for example:

   ###request:
   
   http://localhost:8547/test/77?user=Toobler
   POST:	check="1"
         checkAnother="Random"
   
   ###response:
   
   {
   	number:77,
   	user:Toobler,
   	check:1,
   	checkAnother:Random
   }
