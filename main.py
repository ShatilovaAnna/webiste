from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def home():
  return render_template('mainpage.html')

@app.route('/home')
def home_second():
  return render_template('mainpage.html')

@app.route('/aboutme')
def aboutme():
  return render_template('secondpage.html')

@app.route('/sertificate')
def sertificate():
  return render_template('sertificate.html')

@app.route('/matrix')
def matrix():
  return render_template('matrix.html')

@app.route('/otzivi')
def otzivi():
  return render_template('otzivi.html')


if __name__ == '__main__':
  app.run()
  #ssl_context='adhoc'