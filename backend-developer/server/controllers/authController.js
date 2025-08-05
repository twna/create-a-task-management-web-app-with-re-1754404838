from flask import Flask, request, jsonify
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required
from flask_bcrypt import Bcrypt
from itsdangerous import URLSafeTimedSerializer, SignatureExpired

app = Flask(__name__)
app.secret_key = 'your_secret_key'

login_manager = LoginManager()
login_manager.init_app(app)

bcrypt = Bcrypt(app)

# Serializer for generating tokens
serializer = URLSafeTimedSerializer(app.secret_key)

# Dummy database
users_db = {}

# User class
class User(UserMixin):
    def __init__(self, id, username, password_hash):
        self.id = id
        self.username = username
        self.password_hash = password_hash

    def verify_password(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)

@login_manager.user_loader
def load_user(user_id):
    user = users_db.get(user_id)
    return User(user_id, user['username'], user['password_hash']) if user else None

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data['username']
    password = data['password']

    if username in users_db:
        return jsonify({'message': 'User already exists'}), 409

    password_hash = bcrypt.generate_password_hash(password).decode('utf-8')
    user_id = str(len(users_db) + 1)
    users_db[user_id] = {'username': username, 'password_hash': password_hash}

    return jsonify({'message': 'User registered', 'user_id': user_id}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']

    for user_id, user in users_db.items():
        if user['username'] == username:
            user_obj = User(user_id, username, user['password_hash'])
            if user_obj.verify_password(password):
                login_user(user_obj)
                return jsonify({'message': 'Logged in successfully'}), 200
            else:
                return jsonify({'message': 'Invalid password'}), 401

    return jsonify({'message': 'User not found'}), 404

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return jsonify({'message': 'Logged out successfully'}), 200

# Assuming a token-based password reset mechanism
@app.route('/reset-password', methods=['POST'])
def reset_password():
    data = request.get_json()
    username = data['username']
    user = next((u for u_id, u in users_db.items() if u['username'] == username), None)
    if user:
        token = serializer.dumps(username, salt='password-reset-salt')
        # Send token to user's email (omitted here)
        return jsonify({'message': 'Password reset token generated', 'token': token}), 200
    else:
        return jsonify({'message': 'User not found'}), 404

@app.route('/reset-password/confirm', methods=['POST'])
def reset_password_confirm():
    data = request.get_json()
    token = data['token']
    new_password = data['password']
    try:
        username = serializer.loads(token, salt='password-reset-salt', max_age=3600)
        user = next((u_id for u_id, u in users_db.items() if u['username'] == username), None)
        if user:
            password_hash = bcrypt.generate_password_hash(new_password).decode('utf-8')
            users_db[user]['password_hash'] = password_hash
            return jsonify({'message': 'Password has been reset'}), 200
        else:
            return jsonify({'message': 'User not found'}), 404
    except SignatureExpired:
        return jsonify({'message': 'The token has expired'}), 400

if __name__ == '__main__':
    app.run(debug=True)
{
  "checklist": [
    {"task": "User registration logic", "status": "implemented"},
    {"task": "Password hashing", "status": "implemented"},
    {"task": "User login logic", "status": "implemented"},
    {"task": "User logout logic", "status": "implemented"},
    {"task": "Password reset token generation", "status": "implemented"},
    {"task": "Password reset confirmation", "status": "implemented"}
  ]
}