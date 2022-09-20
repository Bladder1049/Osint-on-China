---
title: "OSINT on China Series 1: China's Resident Identity Card and Number"
description: OSINT tips on how to exploit China's Resident Identity Card and Number
date: 2022-09-20T16:49:37.600Z
thumbnail: /images/chinese-resident-identity-card-example.png
readingTime: 8
post: >-
  Privacy and open source intelligence (OSINT) are two sides of the same coin.
  To better understand how to conduct a solid OSINT investigation in China, we
  must first have a clear picture of data privacy within the country. This
  involves breaking down the different types of individual and entity
  information that can be scraped or obtained, whether this comes from public or
  private databases. In this series, we introduce some valuable fundamental
  knowledge on this topic.


  ## The Components of the Chinese Resident Identity Card and Number


  Unlike the United States, where American citizens are assigned a Social Security Number and Card, Chinese citizens must apply for a mandatory, universal Resident Identity Card and Number when they turn 16.


  ### Chinese Resident Identity Card


  This card contains the following information:


  * Full legal name

  * Gender

  * Ethnicity

  * Date of birth (in YYYY-MM-DD order)

  * Domicile (this may or may not be the card owner's permanent residential address)

  * Identification number

  * A photo of the card owner


  ### Chinese Resident Identity Number


  The Chinese Resident Identity Number consists of 18 digits. The first six digits represent the locality where the card owner was born. And denote the province, prefecture-level divisions, and county, with two digits assigned to each area. These numbers are then followed by eight digits showing the card owner's date of birth in YYYYMMDD format.


  The last four digits of the Chinese Resident Identity Number include three digits representing the sequence of people born in the same area and on the same date. And the last one of these three digits shows the card holder's gender (even = female, odd = male). Finally, a check digit ranging from one to ten, with "X" used to represent ten.


  ### Example of Chinese Resident Card with Number


  ![Example of Chinese Resident Identity Card with English description for OSINT research.](/images/chinese-resident-identity-card-example.png "Example of Chinese Resident Identity Card")


  ### Example of Xi Jinping's Resident Identity Number


  For example, [Xi Jinping's](https://en.wikipedia.org/wiki/Xi_Jinping) Resident Identity Number is ***[110101195306153019](https://www.dialoguechina.com/%E6%81%B6%E4%BF%97%E7%BB%B4%E5%9F%BA%E6%A1%88-%E8%B4%A3%E4%BB%BB%E4%BA%BA/)***, where 11 represents Beijing, and 0101 represents the Dōngchéng district. 1953-06-15 is his date of birth, 301 is his area and date number sequence, while one(1) means Xi is he. And 9 is the check digit.


  ## Where the Resident Identity Card Is Used


  Using China's Resident Identity Card is mandatory in many places where registration of some form is required, such as public services like government affairs. Even most semi-public or private services like buying a railway ticket, booking a flight, checking in at a hotel, and signing up on major social media platforms require submitting a Resident Identity Card or Resident Identity Number for verification purposes.


  Suppose someone is using a mobile application on their phone. In that case, that person must submit a Resident Identity Number and undergo an AI facial recognition procedure. And the service provider will cross-reference the information with the government database to check if their facial recognition image data matches their Resident Identity Number.


  ## How Do We Use the Chinese Resident Identity Card and Number in Conducting OSINT Investigation in China?


  ### Locate a person's actual address


  Every Chinese citizen has a Resident Identity Card and Number, but not all Resident Identity Cards have the same status.


  One reality in China is that someone who registers their residence in a big city will receive many social benefits, including local healthcare and easy enrolment in the local education system for their children. They can also buy property in the same city without too many bureaucratic hurdles, among other benefits.


  Many times, if someone comes from a less affluent area and successfully gets a job with the government or a government-affiliated organization in a big city like Beijing or Shanghai, that person will get the chance to register as a citizen of that city, thus receiving the benefits that come with residential status. This system mainly works to keep people from migrating from rural areas to big cities.


  By accessing an individual's Resident Identity Card and Number, we can most likely verify their actual address if they locate in a big city. If these individuals had the privilege of changing their registered residence to one located in a big city when they found employment, their organization might also allocate conveniences such as a company apartment or an expedited property purchase at a lower price. From our experience, this person's residential address will not be too far from their workplace if they work for the government or a state-owned enterprise.


  ### What if we only have a person's Chines Resident Identity Number?


  Even if we have someone's Resident Identity Number as the only piece of information available, we can still verify their date of birth and their birthplace - from here, we can extrapolate additional data such as their age and their background based on their location. This provides us with plenty of helpful information for social engineering purposes.


  ### And there are many more.


  If you can access non-public databases like those available to ***[OSINT on China](https://osintonchina.com)***, you'll have almost every detail of that person at your fingertips. Such as any phone numbers they've registered, their travel history, where they checked in, whom they checked in with, what they bought online, what social media profiles they have, and so on and so forth.


  ## Conclusion


  In other words, obtaining a copy of someone's Resident Identity Card or Number is the first step to conducting an OSINT investigation on that person.


  Final note: ***[OSINT on China](https://osintonchina.com)*** could help you to identify your target's Chinese Resident Card or Number if you provide solid leads for us to conduct throughout the investigation. [Contact us today](https://osintonchina.com/#contact) : [OSINTonChina@protonmail.com](mailto:OSINTonChina@protonmail.com)


  ### Useful tools:


  Chinese ID Card checker GitHub repositories:


  * <https://github.com/andrewhoulbrook/cnid-validator> (JavaScript based with detailed English explanation)

  * <https://github.com/weihongyu12/chinese-idcard-checker> (Typescript based with Mandarin document only)

  * <https://github.com/ionepub/idcard> (PHP based with only Mandarin document)


  ***Disclaimer: Since [OSINT on China](https://osintonchina.com) has our database, we did not test the GitHub repositories.***
---
