"""
TODO:
    1. Read in the file
    2. Split the sentences up.
    3. Pick a sentence.
    4. Split the sentence into words
    5. Filter out stopwords
    6. Choose a word
    7. Replace the word with underscores
    8. Print to stdout
    9. Prompt for the answer.
    10. Respond with the correct
"""

import nltk
from nltk.tokenize import sent_tokenize, word_tokenize
import random
from nltk.corpus import stopwords

ST_IT = set(stopwords.words('italian'))

def main():
    filename = "ita_notes"
    with open(filename) as f:
        text = f.read()
    sents = sent_tokenize(text, language="italian")
    while(True):
        sent = random.choice(sents)
        words = word_tokenize(sent)
        filters_words = list(filter(lambda x: len(x) > 3 and x not in
            ST_IT, words))
        word = random.choice(filters_words)
        sent = sent.replace(word, '_____')
        ch = input("{} \n Guess the word!!! >".format(sent)).strip()
        if(ch.lower() == word.lower()):
            print("Yayyyy! You guessed right.")
        else:
            print("Plew plew plewwwwwwww. You lost. The word was "\
                    "{}".format(word))

if __name__=="__main__":
    main()



