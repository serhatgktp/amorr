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

data = mu.load(config, 'amorr.users')

for row in data:
    print(row['email'])