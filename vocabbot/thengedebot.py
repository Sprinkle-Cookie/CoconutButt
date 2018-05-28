from telegram.ext import Updater, CommandHandler, MessageHandler, Filters
import nltk
from nltk.tokenize import sent_tokenize, word_tokenize
import random
from nltk.corpus import stopwords
import pprint

ST_IT = set(stopwords.words('italian'))
user_dict = {}
filename = "ita_notes"
with open(filename) as f:
    text = f.read()
sents = sent_tokenize(text, language="italian")
current_word = ''
current_sent = ''

def get_qanda():
    global current_sent, current_word
    sent = random.choice(sents)
    words = word_tokenize(sent)
    filters_words = list(filter(lambda x: len(x) > 3 and x not in
        ST_IT, words))
    word = random.choice(filters_words)
    current_sent = sent.replace(word, '_____')
    current_word = word


def hello(bot, update):
    get_qanda()
    update.message.reply_text(current_sent)

def answer(bot, update):
    print(update)
    ch = update['message']['text'][2:].strip()
    if(ch.lower() == current_word.lower()):
        update.message.reply_text('BravO/A '\
                '{}'.format(update.message.from_user.first_name))
    else:
        update.message.reply_text('Wrong bitch, '\
                '{}. The right word is: '\
                '{}'.format(update.message.from_user.first_name,
                current_word))
    hello(bot, update)




def handler(bot, chatinfo):
    print(chatinfo)

updater = Updater('591056474:AAFdvMk-qn9scodV_RgYrTU7ODok46DiiAw')

updater.dispatcher.add_handler(CommandHandler('hello', hello))
updater.dispatcher.add_handler(MessageHandler(Filters.text, handler))

updater.dispatcher.add_handler(CommandHandler('a', answer))



updater.start_polling()
updater.idle()

