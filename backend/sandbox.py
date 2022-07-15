import configparser
import mysql_utils as mu

config = configparser.ConfigParser()
config.read('db_config.ini')

host = config['mysql']['host']
user = config['mysql']['user']
password = config['mysql']['password']
db = config['mysql']['db']

config = {
    'host': host,
    'user': user,
    'password': password,
    'db': db
}

user_id = 7

# sql = f'SELECT COUNT(*) FROM amorr.sp_reviews WHERE recipient_uid = \'{user_id}\''
# num_reviews = mu.load(config, 'amorr.sp_reviews', query=sql)[0]['COUNT(*)']
# 
# print(num_reviews)

sql = f'SELECT AVG(rating) FROM amorr.sp_reviews WHERE recipient_uid = \'{user_id}\''
avg_rating = mu.load(config, 'amorr.sp_reviews', query=sql)[0]['AVG(rating)']
avg_rating = round(avg_rating,1)
print(avg_rating, type(avg_rating))