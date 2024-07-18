from flask import Flask, jsonify
import os

app = Flask(__name__)

@app.route('/start', methods=['GET'])
def start_server():
    os.system('java -Xms512M -Xmx1024M -jar /path/to/paper.jar &')
    return jsonify({"status": "Server starting..."})

@app.route('/stop', methods=['GET'])
def stop_server():
    os.system('pkill -f paper.jar')
    return jsonify({"status": "Server stopping..."})

@app.route('/restart', methods=['GET'])
def restart_server():
    os.system('pkill -f paper.jar')
    os.system('java -Xms512M -Xmx1024M -jar /path/to/paper.jar &')
    return jsonify({"status": "Server restarting..."})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
