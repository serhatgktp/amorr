import pandas as pd
import pymysql as pms

def insert(config, table_name, df, debug=False):
    assert(type(config) == dict)
    assert(type(table_name) == str)
    # Connect to SQL
    connection = pms.connect(host = config['host'],
                            user = config['user'],
                            password = config['password'],
                            db = config['db'])
    cursor=connection.cursor()

    # Check if given table exists
    sql = 'SHOW TABLES LIKE \'' + table_name + '\''
    cursor.execute(sql)
    data = cursor.fetchall()

    if len(data) == 0:  # Create table if it doesn't already exist
        attributes = df.columns
        joined_str = ' VARCHAR(500), '.join(attributes) + ' VARCHAR(500)'
        sql = 'CREATE TABLE ' + table_name + '(ID int NOT NULL AUTO_INCREMENT, ' + joined_str + ', PRIMARY KEY (ID) )'
        if 'id' in attributes or 'Id' in attributes or 'iD' in attributes or 'ID' in attributes:
            sql = 'CREATE TABLE ' + table_name + '(RowID int NOT NULL AUTO_INCREMENT, ' + joined_str + ', PRIMARY KEY (RowID) )'
        cursor.execute(sql)
        connection.commit()

    if debug:
        # Creating column list for insertion
        cols = "`,`".join([str(i) for i in df.columns.tolist()])

        # Iterate over each row in df and insert
        len_df = len(df)    # Debug
        ctr = 1     # Debug
        for i,row in df.iterrows():
            print('Inserting into %s: %d/%d' % (table_name, ctr, len_df))   # Debug
            ctr += 1    # Debug
            sql = "INSERT INTO `" + table_name + "` (`" + cols + "`) VALUES (" + "%s,"*(len(row)-1) + "%s)"
            # print(sql)
            cursor.execute(sql, tuple(row))
            connection.commit()
    else:
        # Creating column list for insertion
        cols = "`,`".join([str(i) for i in df.columns.tolist()])
        print('Inserting %d rows into %s' % (len(df), table_name))
        # Iterate over each row in df and insert
        for i,row in df.iterrows():
            sql = "INSERT INTO `" + table_name + "` (`" +cols + "`) VALUES (" + "%s,"*(len(row)-1) + "%s)"
            cursor.execute(sql, tuple(row))
            connection.commit()
    # Close connection
    connection.close()

def delete(config, cond_list, table_name):
    assert(type(config) == dict)
    assert(type(table_name) == str)
    assert(type(cond_list) == list)
    # Connect to SQL
    connection = pms.connect(host = config['host'],
                            user = config['user'],
                            password = config['password'],
                            db = config['db'])
    cursor=connection.cursor()
    cond_list_joined = ' AND '.join(cond_list) + ';'
    sql = 'DELETE FROM ' + table_name + ' WHERE ' + cond_list_joined
    cursor.execute(sql)
    connection.commit() # IMPORTANT
    connection.close()

def load(config, table_name, query=None):
    assert(type(config) == dict)
    assert(type(table_name) == str)
    connection = pms.connect(host = config['host'],
                        user = config['user'],
                        password = config['password'],
                        db = config['db'],
                        cursorclass=pms.cursors.DictCursor)
    cursor=connection.cursor()

    sql = 'SELECT * FROM ' + table_name
    if query != None:
        assert(type(query) == str)
        sql = query
    cursor.execute(sql)
    data = cursor.fetchall()
    connection.close()
    return data

def load_as_df(config, table_name, query=None):
    assert(type(config) == dict)
    assert(type(table_name) == str)
    if(query==None):
        data = load(config, table_name)
    else:
        data = load(config, table_name, query)
    dfs = []            
    for row in data:        # Format data into dataframe
        for item in row:
            row[item] = [row[item]]
        df = pd.DataFrame.from_dict(row)
        dfs += [df]
    if len(dfs) > 0:
        df = pd.concat(dfs, axis=0)
    else:
        raise Exception('No data was found in ' + table_name + '!')
    return df

def truncate_table(config, table_name):
    connection = pms.connect(host = config['host'],
                        user = config['user'],
                        password = config['password'],
                        db = config['db'])
    cursor=connection.cursor()
    sql = 'TRUNCATE TABLE ' + table_name + ';'
    cursor.execute(sql)
    connection.commit() # Commit to save changes
    connection.close()

def delete_duplicates(config, table_name, keys):    # Only works with insert_at
    assert(type(config)==dict)
    assert(type(table_name)==str)
    assert(type(keys)==list or type(keys)==dict)
    connection = pms.connect(host = config['host'],
                        user = config['user'],
                        password = config['password'],
                        db = config['db'])
    cursor=connection.cursor()
    keys_strs = []
    for key in keys:
        keys_strs.append('t1.' + key + ' = t2.' + key)
    keys_joined = ' AND '.join(keys_strs) + ' AND t1.insert_at < t2.insert_at;'
    sql = 'DELETE t1 FROM ' + table_name + ' t1 INNER JOIN ' + table_name + ' t2 ' + \
        'WHERE ' + keys_joined
    cursor.execute(sql)
    connection.commit() # Commit to save changes
    connection.close()

def query(config, sql):
    assert(type(config)==dict)
    assert(type(sql)==str)
    connection = pms.connect(host = config['host'],
                        user = config['user'],
                        password = config['password'],
                        db = config['db'])
    cursor=connection.cursor()
    cursor.execute(sql)
    connection.commit()
    connection.close()