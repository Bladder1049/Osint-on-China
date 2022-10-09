---
title: "OSINT on China Series 2: The Chinese COVID-19 Health Code System"
description: A brief China OSINT case study on the Chinese COVID-19 Health Code System
date: 2022-10-09T08:32:43.996Z
thumbnail: /images/vaccine-vaccination-record1.jpg
readingTime: 7
post: >-
  In the next part of our OSINT on China series, we’ll conduct a brief case
  study of the Chinese COVID-19 Health Code System to illustrate fundamental
  knowledge of the Chinese public information database.


  This is particularly relevant as we continue our recovery from the recent pandemic, and not just within the context of the effects it has had on public health measures but also the ramifications of these measures on our privacy and personal information security. As OSINT and HUMINT investigators, taking note of public and private data sources such as the Health Code system is a way to identify investigation opportunities.


  ## What is the Chinese COVID-19 Health Code System?


  Introduced as a case-tracking method to prevent the spread of COVID-19 during the pandemic, the Health Code is a mobile application used in mainland China. However, this measure was standard across countries worldwide to varying degrees of success, depending on factors such as compliance, enforcement, and integration.


  In this case, the Health Code was used as an e-passport containing a user’s real-time health condition and other details such as the residential address, medical records, and travel history. Depending on a user’s level of exposure to a suspected or confirmed COVID-19 case, the application would generate a QR code identifying their risk level in traffic light colors.


  A green Health Code means that the person in question can move around freely as they are healthy, with no abnormalities. Meanwhile, a yellow Health Code indicates that the user has a medium risk of exposure to infection and needs to self-quarantine for 7 to 14 days. Finally, the red Health Code shows that the individual has a high risk of exposure to infection and needs to self-quarantine for 7 to 14 days. Individuals can apply for the Health Code using Alipay, WeChat, and other services that let users declare personal data and receive health codes. Registering for the application is compulsory in over 300 cities if users want to move freely in public spaces.


  With permission from its users, the Health Code integrates with the national government database to obtain personal details such as full legal name, identification number, location information, and mobile phone number. It also accesses smartphone GPS data to assess a user’s infection risk levels. For example, if an individual visited a risky area, they would find that their Health Code QR would change to yellow or red after the daily midnight status update or even immediately in some cases.


  ## What are Data Vulnerabilities there within the Chinese COVID-19 Health Code System?


  Specific vulnerabilities exist within the Health Code, as with most platforms that aggregate sensitive personal data. In addition, a few issues have surfaced following the mandatory implementation of the Health Code across most of China, including system failure and interface issues, compromised data security, personal information leakage, and misuse by authorities.


  The Health Code mobile application functions by extracting an individual’s data - this is usually collected by the government using various means, including publicly declared personal information, user data from the different web and mobile applications, and geolocation data and health data.


  This surveillance information is kept within a server and shared with public security agencies for analysis purposes. Still, it is unclear how long this data is kept and with whom this data is shared.


  Since the Health Code connect with extensive third-party mobile platforms like Alipay and WeChat, there are concerns that private data is shared with the government and law enforcement authorities for purposes other than tracking individual contagion risk.


  Enforcement authorities, such as the police conduct routine checks to ensure that users with a red color code are appropriately quarantined. For example, if someone is outdoors and they have a red Health Code, they are usually stopped from entering public spaces. Unfortunately, this also means that they are prohibited from using public transportation and public services.


  Disputes have risen from implementing the Health Code, mostly centered around the color category assignment process - it is challenging to get a review or appeal if a color code was assigned in error.


  For instance, some individuals reported a sudden change in health code color when they had not been in any high-risk areas. And a standard tip for people traveling close to another province is to turn off their mobile device to prevent a change in their health code color, primarily due to overlapping provincial zones within the Health Code application.


  One incident of note occurred in late 2020 when the Beijing Health Code experienced a personal information leak in which photos, ID card numbers, and COVID-19 test information were sold on the internet. This privacy issue occurred due to a hack, and the security breach exposed sensitive information like travel details and location data to the public.


  Another instance of human involvement and possible abuse by authorities in using Health Code data occurred when local government officials manipulated the Health Code in Henan in mid-2022 when regional banks froze deposits after a significant shareholder of one of the banks fled after committing severe financial crimes.


  The people who traveled to withdraw money from these banks found that their health codes turned red despite not being at risk - this kept them from entering public spaces and accessing essential places such as public transportation and the banks involved. 


  ## Important Takeaways for OSINT/HUMINT Investigators on the Chinese COVID-19 Health Code System


  From these data vulnerability incidents, it is clear that some significant observations can be derived from our case study of the Chinese COVID-19 Health Code System. 


  ### Lack of Unified Security Protocol for Database Protection


  As we’ve mentioned, the Health Code is integrated with third-party mobile applications such as Alipay and WeChat. These systems were also built at the provincial level instead of the federal level. 


  The Health Code’s multiple provincial databases, built with private enterprise assistance, resulted in a system with no unified security protocol to prevent data misuse or leakage. Cases can be seen from incidents where hackers successfully compromised the application’s security and acquired sensitive personal information.


  Due to the Health Code being mandatory in many places across China, users have no choice but to put their data in the hands of entities that are not sufficiently protected against data breaches.


  ![leaked COVID vaccination record. OSINT, China, database](/images/vaccine-vaccination-record1.jpg "Leaked COVID vaccination record sample 1")


  ![leaked COVID vaccination record. OSINT, China, database](/images/vaccine-vaccination-record2.jpg "Leaked COVID vaccination record sample 2")


  ### Human Factor Involvement Increases the Chance of Data Breaches and Intentional Manipulation


  Given multiple news reports since the implementation of the Health Code, it can be seen that the human factor is deeply involved in executing this public health and safety measure. Without the usage of AI to ensure an impartial, universally applied, and enforced set of conditions, the Health Code is at the mercy of the people who use it and their assorted intentions. 


  In the case of Henan and the Beijing Health Code, the local authorities and enterprise employees used the sensitive personal information entrusted to them for their purposes instead of the original intent to prevent COVID-19 contagion risk. 


  As time goes on, the usage of the Health Code to manage the spread of the pandemic also continues. Unfortunately, without a significant overhaul in the Health Code system, users are subject to the whims of those who can access and change database records.


  ### Most Chinese Citizens Are Subject to an Existing De Facto Travel Ban


  Individuals with a red Health Code color are prohibited from traveling across provinces and cities. The original intent of this is to prevent COVID-19 contagion risk, and one significant side effect is that most users are subject to what is essentially a travel ban if their Health Code is anything but green.


  While this is an expected outcome in this usage context, this is also an important point to consider for OSINT and HUMINT investigators while investigating a specific target. 


  ## China OSINT Messages and Leads Can Be Found Everywhere


  This case study mainly involves observing the Chinese COVID-19 Health Code System, its use case, its vulnerabilities, and the ramifications of these vulnerabilities - all of these data points are valuable to OSINT and HUMINT investigations. While we did not apply any OSINT tool to the specific context of the Health Code, we still identified its flaws and opportunities for further action.


  ## Need more information on more China OSINT tips or have investigating targets?


  Contact [OSINTonChina via E2EE secure emails](https://osintonchina.com/#contact) and get a free consultation today.
---
