# Sales ChatBot

This project is a Simple Question-Answer based chatbot framework. Uses similarity based on different vectorizers, to find the matching question then responds with its corresponding answer.

Application Scope:

- Huge demand to take care of mundane queries
- Scales (leverage, automation, passive)
- Not much work in vernacular chatbot (serve humanity)

Notes:

- This chatbot is based on category classification first and then to similarity within the selected category.
- Different than the popular open source chatbot framework, Rasa, where NLU is based on intent and entities, whereas dialog management is based on sequence/LSTM prediction.

## The way it works:

* You supply FAQs in the form of csv (comma separated file) having Question-Answer-Class in each row (e.g. "What is GST rate for Toothpaste?,12,rate")
* Questions are vectorized and kept ready for matching, along with the classifier model [X=vector(question), y=class]
* Once user query comes, its 'class' is predicted using the classifier model and within the class, vectorized query is matched against existing vectorized questions.
* Whichever is most similar, it's answer is presented to the user.
