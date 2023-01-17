class User:
    def __init__(self, sql_data):
        self.email_address = sql_data['email_address']
        self.user_type = sql_data['user_type']
        self.uid  = sql_data['uid']
        if self.user_type  == 'Customer':
            self.privilege_title = 'Customer'
        elif self.user_type  == 'Service Provider':
            self.privilege_title = 'Service Provider'
        elif self.user_type  == 'Admin':
            self.privilege_title = 'Admin'
        else:
            self.privilege_title = 'Unknown'
