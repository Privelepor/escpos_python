from flask import Flask, render_template, request
import escpos
from escpos import BluetoothConnection

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/print', methods=['POST'])
def print_canvas():
    try:
        # Receive base64 data from script.js
        canvas_data = request.form['canvasData']
        def connect_to_printer(mac_address):
            try:
                # Establish a Bluetooth connection to the ESC/POS printer
                conn = BluetoothConnection(mac_address)
                printer = escpos.printer.File(escpos.printer.ESCPOS, conn)
                return printer
                except Exception as e:
                    print(f"Error connecting to the printer: {e}")
                    return None
                    

def print_to_bluetooth_printer(printer, canvas_data):
    try:
        Epson.image(canvas_data)
        # Add a cut command (change this according to your printer)
        printer.cut()
        # Close the connection
        printer.close()
    except Exception as e:
        print(f"Error printing to the printer: {e}")

# Replace 'your_printer_mac_address' with the actual MAC address of your Bluetooth printer
printer_mac_address = 'DC:0D:30:EB:7C:3C'

# Connect to the Bluetooth ESC/POS printer
my_printer = connect_to_printer(printer_mac_address)

if my_printer:
    
    # Print to the Bluetooth ESC/POS printer
    print_to_bluetooth_printer(my_printer,canvas_data )
else:
    print("Printer connection failed.")
        return render_template('index.html')

    except Exception as e:
        return str(e)

if __name__ == '__main__':
    app.run(debug=True)

