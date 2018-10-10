class Config(object):
    DEBUG = False
    TESTING = False


class ProductionConfig(Config):
    MONGO_URI = 'mongodb://admin:admin@mongodb:27017/crime_reports'


class DevelopmentConfig(Config):
    DEBUG = True
    MONGO_URI = 'mongodb://admin:admin@mongodb:27017/crime_reports'


class TestingConfig(Config):
    TESTING = True
